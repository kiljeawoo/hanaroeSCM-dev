﻿/**
 * @fileoverview Namespace 관리 객체.
 */

if ( !JsNamespace )
{
	/**
	 *	JavaScript Namespace(서로 간의 충돌없이 명명하는 방법) 처리 방법<br><br>
	 *	1. name prefix 방법으로 myApp_name = "Hello";<br>
	 *	2. Single Object로 NameSpace처리<br>
	 *		var myApp = {};<br>
	 *		myApp.name = "Hello";<br><br>
	 *	2번 방식을 사용하여 Namespace 처리하는 함수들
	 * @namespace
	 * @name JsNamespace
	 * @memberof! <global>
	 */
	var JsNamespace = {
		/**
		 * 선언된 namespace cache
		 * @memberOf JsNamespace
		 * @private
		*/
		namespaceCache: {},
		
		/**
		 * 임시로 선언된 namespace cache
		 * @memberOf JsNamespace
		 * @private
		*/
		dummyNamespace: {},
		
		/**
		 * 주어진 name으로 namespace가 정의되어 있는지 확인한다.
		 * @param {string} name namespace 명칭
		 * @return {boolean} namespace 정의여부(true/false)
		 * @example
		 * trace(JsNamespace.exist('Eco.array')); // exist => true
		 * @memberOf JsNamespace		 
		*/
		exist: function(name)
		{
			var pThis = this;
			if (typeof name != 'string')
			{
				throw new Error("100", "[JsNamespace.exist] Invalid name, must be a string");
			}
			var cache = pThis.namespaceCache;
			if (cache.hasOwnProperty(name))
			{
				return true;
			}
			return false;
		},
		
		/**
		 * 생성된 Object를 value로 전달하여 주어진 namespace로 선언한다.
		 * @param {string} name namespace 명칭
		 * @param {object} value namespace 정의
		 * @example
		 * JsNamespace.declare("Hello", {
		 *     'mesage':'Hello nexacro !!', 
		 *     'say': function() {alert(this.message);}
		 * });
		 * Hello.say();
		 * @memberOf JsNamespace		 	 
		*/
		declare: function(name, value)
		{
			if ( !value ) return;

			var pThis = JsNamespace;
			var obj = pThis.getGlobalContext(),
				cache = pThis.namespaceCache,
				dummyCache = pThis.dummyNamespace,
				names = name.split('.'),
				len = names.length - 1,
				leaf = names[len],
				i, nm, fullnm = "";

			for (i = 0; i < len; i++)
			{
				nm = names[i];
				if ( i == 0 ) fullnm += nm;
				else  fullnm += "." + nm;

				if (cache[fullnm])
				{
					obj = cache[fullnm];
				}
				else
				{
					if (!dummyCache[fullnm])
					{
						obj[nm] = {};
						pThis.dummyNamespace[fullnm] = obj[nm];
					}
					obj = obj[nm];
				}
			}
			if ( dummyCache[name] )
			{
				var prop, dummy = dummyCache[name];
				for ( prop in dummy )
				{
					if ( dummy.hasOwnProperty(prop) )
					{
						if ( !value.hasOwnProperty(prop) )
						{
							value[prop] = dummy[prop];
						}
					}
				}
				
				delete dummyCache[name];
				
			}
			
			obj[leaf] = value;
			pThis.namespaceCache[name] = value;

			value._className = name;

			if ( value.prototype !== undefined )
			{
				pThis.setDebugInfo(name, value);
				pThis.setDebugInfo(name, value.prototype, value);
			}
			else
			{
				pThis.setDebugInfo(name, value);
			}
			return obj[leaf];
		},
		/**
		 * 생성된 Object를 value로 전달하여 주어진 namespace 정보로<br>
		 * Object에 종속된 function들의 debug정보를 구성한다.<br><br>
		 * error, log, callstack 처리시에 실행된 function이<br>
		 * 이곳에 정의된 debug정보를 이용하여 출력하게 된다.
		 * @param {string} name
		 * @param {object} value
		 * @example
		 * JsNamespace.setDebugInfo('Eco.array', arrayUtil);
		 * @memberOf JsNamespace	 
		 * @private
		*/
		setDebugInfo: function(name, value, owner)
		{
			if ( !value ) return;
			if ( !owner ) owner = value;
			var nm, type, prop;
			for (nm in value)
			{
				if (value.hasOwnProperty(nm))
				{
					prop = value[nm];
					type = typeof prop;
					if (type == "function")
					{
						if ( !prop._thisName ) prop._thisName = nm;
						if ( !prop._thisOwner ) prop._thisOwner = owner;
					}
				}
			}
		},
		/**
		 * prototype를 상속하는 처리하는 함수
		 * @param {prototype} proto 상속하고자 하는 prototype 객체
		 * @return {prototype} 상속처리된 prototype 객체
		 * @memberOf JsNamespace
		 * @private		 
		*/
		_create: Object.create || (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 8 ? function(proto) {
			function inheritance() {};
			inheritance.prototype = proto;
			return new inheritance();
		} : function(proto) {
			return { __proto__: proto };
		}),
		/**
		 * class 선언시에 property 정의할때 사용하는 함수이다.<br><br>
		 * properties는 key=value들로 구성된 object인데 구성되는 값의 spec을 알아본다.<br>
		 * key : property 명칭<br>
		 * value : value 또한 key=value들로 구성된 object이다.<br>
		 *         value을 구성하는 값에 대한 spec는 아래와 같다.(구성값들 전부 option으로 처리됨)<br>
		 *              value : property 초기 값에 대한 설정값이다.<br>
		 *              checkValue : setter 처리시에 주어진 value 값을 check하여 보정하고자 할 때 설정한다.<br>
		 *                           함수에서는 보정되거나 보정되지 않아도 return 처리를 해야 한다.(function)<br>
		 *              updateValue : setter 처리시에 주어진 value 값을 임의 함수로 update처리할 때 설정한다.(function)<br>
		 *              set : default로 처리하지 않고 임의의 setter 함수롤 정의하고자 할 때 설정한다.(function)<br>
		 *              get : default로 처리하지 않고 임의의 getter 함수롤 정의하고자 할 때 설정한다.(function)<br><br>
		 * 주어진 properties로 주어진 proto(prototype)에 getter, setter 함수를 정의한다.<br>
		 * getter 함수 명칭는 get + property명칭을 capitalize하여 구성됨.<br>
		 * setter 함수 명칭는 set + property명칭을 capitalize하여 구성됨.<br>
		 * 실질 값을 가지는 속성은 property명칭 그대로 구성되어 값을 구성하거나 참조할 수 있지만,<br>
		 * getter, setter 통해서 처리하지 않으면 비정상 처리될 수 있다.
		 * @param {prototype} proto properties 구성하는 대상이 되는 prototype 객체
		 * @param {object} properties properties 정의한 object collection
		 * @param {properties.key} properties.key property 명칭
		 * @param {properties.value} properties.value property spec 정의한 object collection
		 * @example
		 * // 정의 부분
		 *  properties: {
		 *     name: {
		 *       value: 'Unknown',
		 *       checkValue: function(value)
		 *       {
		 *          return value || 'Unknown';
		 *       }
		 *    }
		 *  }
		 * //prototype에 정의된 결과는 다음과 같다.
		 * //prototype.setName = function (value) ==? setter
		 * //prototype.getName = function () ==? getter
		 * //prototype.name = 'Unknown'  ==? 실질 속성
		 * @memberOf JsNamespace
		 * @private
		*/
		_defineProperties: function(proto, properties, owner)
		{
			var map = Eco.object.merge({}, proto._propertiesMap||{}, properties);
			var capitalize = Eco.string.capitalize;
			proto._propertiesMap = map;
			for ( var nm in properties )
			{
				if (properties.hasOwnProperty(nm))
				{
					var mName = capitalize(nm),
						getName = "get" + mName,
						setName = "set" + mName,
						mapVal = properties[nm],
						memberName = nm;

					if ( mapVal.memberName !== undefined )
					{
						memberName = mapVal.memberName;
					}
					if ( mapVal.value !== undefined )
					{
						proto._initVals[memberName] = mapVal.value;
					}

					if ( mapVal.get )
					{
						proto[getName] = mapVal.get;
					}
					else
					{
						proto[getName] = new Function("return this." + memberName + ";");
					}
                    mapVal["getter"] = getName;
					if ( mapVal.set )
					{
						proto[setName] = mapVal.set;
					}
					else
					{
						var script = "";
						if ( mapVal.checkValue )
						{
							mapVal.checkValue._thisName = setName;
							mapVal.checkValue._thisOwner = owner;
							script += "\tvar newVal = this._propertiesMap[\"" + nm + "\"].checkValue.call(this, value);\r\n";
						}
						else
						{
							script += "var newVal = value;\r\n";
						}
						script += "var oldVal = this." + memberName + ";\r\n";
						script += "if ( !Eco.equals(newVal, oldVal) )\r\n";
						script += "{\r\n";
						if ( mapVal.updateValue )
						{
							mapVal.updateValue._thisName = setName;
							mapVal.updateValue._thisOwner = owner;
							script += "\tthis._propertiesMap[\"" + nm + "\"].updateValue.call(this, newVal);\r\n";
						}
						else
						{
							script += "\tthis." + memberName + " = newVal;\r\n";
						}
						script += "\tthis._propertyChange(\"" + nm + "\", newVal, oldVal);\r\n";
						script += "}";
						proto[setName] = new Function("value", script);
					}
					mapVal["setter"] = setName;
				}
			}
		},
		/**
		 * class 선언시에 events 정의할때 사용하는 함수이다.<br><br>
		 * events는 key=value들로 구성된 object인데 구성되는 값의 spec을 알아본다.<br>
		 * key : event 명칭<br>
		 * value : value 또한 key=value들로 구성된 object이다.<br>
		 *         value을 구성하는 값에 대한 spec는 아래와 같다.(구성값들 전부 option으로 처리됨)<br>
		 *              install : 최초로 eventHandler가 추가되는 시점에 호출하는 함수이고,<br>
		 *                        이 함수의 this는 class로 생성된 객체이다.(function)<br>
		 *              uninstall : 마지막 eventHandler가 제거되는 시점에 호출하는 함수이고,<br>
		 *                          이 함수의 this는 class로 생성된 객체이다.(function)
		 * @param {prototype} proto events 구성하는 대상이 되는 prototype 객체
		 * @param {object} events events 정의한 object collection
		 * @param {events.key} events.key event 명칭
		 * @param {events.value} events.value event spec 정의한 object collection
		 * @example
		 * // 정의 부분
		 *  events: {
		 *    onFrame : {
		 *      install: function()
		 *      {
		 *        this.prepareAni(this, true);
		 *      },
		 *      uninstall: function()
		 *      {
		 *        this.clearAni(this, false);
		 *      }
		 *    },
		 *    onLoad: {}
		 *  }
		 * //prototype에 정의된 결과는 다음과 같다.
		 * //JsNamespace._eventHelper에 선언된 함수들이 prototype에 정의된다.
		 * //등록된 이벤트는 차후에 JsNamespace._eventHelper에 함수들을 통해 처리된다.
		 * @memberOf JsNamespace
		 * @private		 
		*/
		_defineEvents: function(proto, events)
		{
			var map = Eco.object.merge({}, proto._eventsMap||{});

			var entry;
			for ( var nm in events )
			{
				if (events.hasOwnProperty(nm))
				{
					entry = events[nm];
					var isString = (typeof entry === 'string'),
						eventName = isString ? entry : nm;
					map[eventName] = isString ? {} : entry;
				}
			}

			proto._eventsMap = map;
			if ( !proto["fireEvent"] )
			{
				var eventHelper = this._eventHelper,
					func;
				for ( var key in eventHelper )
				{
					if (key != "_className" && eventHelper.hasOwnProperty(key))
					{
						func = eventHelper[key];
						proto[key] = func;
						if ( !func._thisName ) func._thisName = key;
						if ( !func._thisOwner ) func._thisOwner = eventHelper;
					}
				}
			}
		},
		/**
		 * Event 관련 처리 함수들을 가지는 object<br>
		 * Class 정의 시에 event 가 정의 되면 이 함수들이 prototype에 정의된다.
		 * @memberOf JsNamespace
		 * @private
		*/
		_eventHelper: {
			"_className": "JsNamespace._eventHelper",
			/**
			 * 주어진 eventName의 event에 주어진 func를 가지고 eventHandler로 추가하는 함수
			 * @example
			 * // 여러 eventName에 eventHandler function 설정하는 방법
			 * // function 으로 정의된 것
			 * // dataChangedHandler, moveHandler, itemAddHandler, itemRemoveHandler
			 * // 
			 * var cls0 = new Class0();
			 * cls0.addEventHandler(
			 * {
			 *      onMove: moveHandler,
			 *      onItemAdd: itemAddHandler,
			 *      onItemRemove: itemRemoveHandler
			 * }, form); 
			 * //form argument는 scope값인데
			 * // 이것은 event 발생시 eventHandler function 내부에 this는 form이 됨
			 * //form에 대한 argument를 생략하면 this는 cls0자신이 됨
			 *
			 * // 하나의 eventName에 eventHandler function 설정하는 방법
			 * cls0.addEventHandler("onDataChanged", dataChangedHandler, form); 
			 *
			 * @param {string|object} eventName string으로 이벤트 명칭 또는 eventName=function 된 object collection
			 * @param {function|object=} func eventName이 string이면 eventHandler function 아니면 scope 
			 * @param {object=} scope 주어진 func에 scope 설정되는 값
			 * @memberOf JsNamespace._eventHelper
			*/
			addEventHandler: function(eventName, func, scope)
			{
				if (typeof eventName !== 'string')
				{
					scope = func;
					for ( var key in eventName )
					{
						if ( eventName.hasOwnProperty(key) )
						{
							this.addEventHandler(key, eventName[key], scope);
						}
					}
					return;
				}
				if ( !Eco.isFunction(func) ) return;
				var entry = this._eventsMap[eventName];
				if (entry)
				{
					var handlers = this._handlers = this._handlers || {};
					handlers = handlers[eventName] = handlers[eventName] || [];
					if (Eco.array.indexOf(handlers, func, null, true) == -1)
					{
						scope = scope || this;
						handlers.push({"handler":func, "scope": scope});
						if (entry.install && handlers.length == 1)
						{
							entry.install.call(this, eventName);
						}
					}
				}
			},
			/**
			 * 주어진 eventName의 event에 주어진 func를 가지고 주어진 idx 순번에 eventHandler로 insert하는 함수
			 * @example
			 * // eventName에 설정하는 방법
			 * // function 으로 정의된 것
			 * // dataChangedHandler
			 * // 
			 * var cls0 = new Class0();
			 *
			 * cls0.insertEventHandler("onDataChanged", 1, dataChangedHandler, form); 
			 * //form argument는 scope값인데
			 * // 이것은 event 발생시 eventHandler function 내부에 this는 form이 됨
			 * //form에 대한 argument를 생략하면 this는 cls0자신이 됨
			 *
			 * @param {string} eventName string으로 이벤트 명칭
			 * @param {number} idx insert할 순번 
			 * @param {function} func eventHandler function 
			 * @param {object=} scope 주어진 func에 scope 설정되는 값
			 * @memberOf JsNamespace._eventHelper
			*/
			"insertEventHandler": function(eventName, idx, func, scope)
			{
				if ( !Eco.isFunction(func) ) return;
				var entry = this._eventsMap[eventName];
				if (entry)
				{
					var handlers = this._handlers = this._handlers || {};
					handlers = handlers[eventName] = handlers[eventName] || [];
					if (Eco.array.indexOf(handlers, func, null, true) == -1)
					{
						scope = scope || this;
						if ( idx > handlers.length ) idx = handlers.length;
						handlers.splice(idx, 0, {"handler":func, "scope": scope});
						if (entry.install && handlers.length == 1)
						{
							entry.install.call(this, eventName);
						}
					}
				}
			},
			/**
			 * 주어진 eventName의 event에 주어진 func를 가지고 eventHandler로 설정된 순번을 얻는 함수
			 * @param {string} eventName string으로 이벤트 명칭
			 * @param {function} func eventHandler function 
			 * @return {number} 주어진 func이 eventHandler로 설정된 순번 
			 * @memberOf JsNamespace._eventHelper
			*/
			"findEventHandler": function(eventName, func)
			{
				var handlers = this._handlers && this._handlers[eventName];
				if (!handlers)
				{
					return -1;
				}
				var handler;
				for ( var i = 0, len = handlers.length ; i < len ; i++ )
				{
					handler = handlers[i];
					if ( func === handler.handler )
					{
						return i;
					}
				}
				return -1;
			},
			/**
			 * 주어진 eventName의 event에 주어진 idx(순번)를 가지고 eventHandler로 설정된 순번에 해당하는 function을 얻는 함수
			 * @param {string} eventName string으로 이벤트 명칭
			 * @param {number} idx 순번 
			 * @return {function} eventHandler function 
			 * @memberOf JsNamespace._eventHelper
			*/
			"getEventHandler": function(eventName, idx)
			{
				var handlers = this._handlers && this._handlers[eventName];
				if (!handlers)
				{
					return null;
				}
				if ( idx == null )
				{
					return handlers;
				}
				else
				{
					var handler = handlers[idx];
					if ( handler )
					{
						return handler.handler;
					}
				}
				return null;
			},
			/**
			 * 주어진 eventName의 event에 설정된 eventHandler의 모든 function을 clear하는 함수
			 * @param {string} eventName string으로 이벤트 명칭
			 * @memberOf JsNamespace._eventHelper
			*/
			"clearEventHandler": function(eventName)
			{
				var handlers = this._handlers;
				if (handlers)
				{
					if ( handlers[eventName] )
					{
						var entry = this._eventsMap[eventName];
						if (entry.uninstall)
						{
							entry.uninstall.call(this, eventName);
						}
						delete handlers[eventName];
					}
				}
			},
			/**
			 * 주어진 eventName의 event에 주어진 func를 가지고 eventHandler를 제거하는 함수
			 * @example
			 * // 여러 eventName에 eventHandler function 제거하는 방법
			 * // function 으로 정의되고 제거할 eventHandler들
			 * // dataChangedHandler, moveHandler, itemAddHandler, itemRemoveHandler
			 * // 
			 * var cls0 = new Class0();
			 * cls0.removeEventHandler(
			 * {
			 *      onMove: moveHandler,
			 *      onItemAdd: itemAddHandler,
			 *      onItemRemove: itemRemoveHandler
			 * }); 
			 *
			 * // 하나 eventName에 eventHandler function 제거하는 방법
			 * cls0.removeEventHandler("onDataChanged", dataChangedHandler); 
			 *
			 * @param {string|object} eventName string으로 이벤트 명칭 또는 eventName=function 된 object collection
			 * @param {function|object=} func eventName이 string이면 eventHandler function 아니면 무시 
			 * @memberOf JsNamespace._eventHelper
			*/
			"removeEventHandler": function(eventName, func)
			{
				if (typeof eventName !== 'string')
				{
					Eco.object.Each(eventName, function(key, value) {
						this.removeEventHandler(key, value);
					}, this);
					return;
				}
				var entry = this._eventsMap[eventName],
					handlers = this._handlers && this._handlers[eventName],
					index = -1;
				if (entry && handlers)
				{
					if ( func )
					{
						for ( var i = 0, len = handlers.length ; i < len ; i++ )
						{
							handler = handlers[i];
							func = handler.handler;
							if ( func === handler.handler )
							{
								index = i;
								break;
							}
						}
					}
					if ( index != -1 && handlers.length == 1)
					{
						if (entry.uninstall)
						{
							entry.uninstall.call(this, eventName);
						}
						delete this._handlers[eventName];
					}
					else if (index != -1)
					{
						handlers.splice(index, 1);
					}
				}
			},
			/**
			 * 주어진 eventName의 event에 설정된 eventHandler의 모든 function를 call하는 함수<br>
			 * eventName 외의 arguments는 eventHandler function arguments가 된다.
			 * @param {string} eventName string으로 이벤트 명칭
			 * @param {...*} e eventHandler function 호출시에 사용되는 arguments임.
			 * @memberOf JsNamespace._eventHelper
			*/
			"fireEvent": function(eventName, e)
			{
				var handlers = this._handlers && this._handlers[eventName];
				if (!handlers || !handlers.length )
				{
					return null;
				}
				var handler, func, scope, ret;
				for ( var i = 0, len = handlers.length ; i < len ; i++ )
				{
					handler = handlers[i];
					func = handler.handler;
					scope = handler.scope;
					ret = func.call(scope, this, e);
					if (e._prevented || ret === false)
					{
						ret = false;
						break;
					}
				}
				return ret;
			},
			/**
			 * 주어진 eventName의 event에 설정된 eventHandler이 존재하는지 판단하는 함수
			 * @param {string} eventName string으로 이벤트 명칭
			 * @return {boolean} eventHandler 존재여부
			 * @memberOf JsNamespace._eventHelper
			*/
			"hasEventHandler": function(eventName)
			{
				return !!(this._handlers && this._handlers[eventName] && this._handlers[eventName].length);
			},
			/**
			 * 주어진 eventName의 event에 설정된 eventHandler 개수를 얻는 함수
			 * @param {string} eventName string으로 이벤트 명칭
			 * @return {boolean} 설정된 eventHandler 개수
			 * @memberOf JsNamespace._eventHelper
			*/
			"getEventHandlerLength": function(eventName)
			{
				if ( this._handlers && this._handlers[eventName] )
				{
					return this._handlers[eventName].length;
				}
				return 0;
			},
			/**
			 * class에 정의된 event 명칭들을 array로 얻는 함수
			 * @return {array} events 명칭 목록
			 * @memberOf JsNamespace._eventHelper
			*/
			getEventsNames: function()
			{
				var curCls = this.constructor;
				var eventsNames = curCls._eventsNames;
				if ( !eventsNames )
				{
					eventsNames = Eco.object.getPropertyNames(this._eventsMap);
					curCls._eventsNames = eventsNames;
				}
				return eventsNames;
			}
		},
		/**
		 * 기본적인 Class에 추가하는 함수들을 가지는 object<br>
		 * Class 정의 시에 반드시 이 함수들이 prototype에 정의된다.
		 * @memberOf JsNamespace
		 * @private
		*/
		_classHelper: {
			_className: "JsNamespace._classHelper",
			/**
			 * setter에 의해 property 값이 변경이 발생하면 이 함수를 호출하게 된다.
			 * @param {String} nm  property 명칭
			 * @param {Object} newVal 변경하는 값
			 * @param {Object} oldVal  변경되기 전의 값
			 * @memberOf JsNamespace._classHelper
			 * @private
			*/
			_propertyChange: function(nm, newVal, oldVal)
			{
				//TODO
			},
			/**
			 * 자신의 ClassName를 얻는 함수이다.
			 * @return {string} 자신의 className
			 * @memberOf JsNamespace._classHelper
			*/
			getClassName: function()
			{
				var cls = this.constructor;
				return cls._className;
				//return this._className;
			},
			/**
			 * class에 정의된 property 명칭들을 array로 얻는 함수
			 * @return {array} properties 명칭 목록
			 * @memberOf JsNamespace._classHelper
			*/
			getPropertiesNames: function()
			{
				var curCls = this.constructor;
				var propertiesNames = curCls._propertiesNames;
				if ( !propertiesNames )
				{
					propertiesNames = Eco.object.getPropertyNames(this._propertiesMap);
					curCls._propertiesNames = propertiesNames;
				}
				return propertiesNames;
			},
			getGetter: function(propertyNm, isFunc)
			{
				var props = this._propertiesMap,
					val = props[propertyNm];
				if ( val )
				{
					if ( isFunc )
					{
						return this[val.getter];
					}
					else
					{
						return val.getter;
					}
				}
			},
			getSetter: function(propertyNm, isFunc)
			{
				var props = this._propertiesMap,
					val = props[propertyNm];
				if ( val )
				{
					if ( isFunc )
					{
						return this[val.setter];
					}
					else
					{
						return val.setter;
					}
				}
			},
			/**
			 * class에 정의된 property 명칭과 설정된 값을 propertyName=value 값으로 구성된 object collection으로 얻는 함수
			 * @return {array} propertyName=value 값으로 구성된 object collection
			 * @memberOf JsNamespace._classHelper
			*/
			getPropertiesValues: function()
			{
				var property;
				var props = this._propertiesMap,
					res = {};
				Eco.object.Each(props, function(propNm, val)
				{
					res[propNm] = this[val.getter]();
				}, this);
				return res;
			},
			/**
			 * class에 정의된 public 함수들(메소드) 명칭들을 array로 얻는 함수<br>
			 * '_'로 시작되는 함수 명칭과 getter, setter 함수 제외한 나머지 함수 명칭으로 처리된다.
			 * @return {array} 메소드들의 명칭 목록
			 * @memberOf JsNamespace._classHelper
			*/
			getMethodsNames: function()
			{
				var curCls = this.constructor;
				var methodsNames = curCls._methodsNames;
				if ( !methodsNames )
				{
					var startsWith = Eco.string.startsWith,
						isFunction = Eco.isFunction,
						propMap = this._propertiesMap,
						proto = curCls.prototype;

					methodsNames = [];
					for ( var nm in proto )
					{
						if ( (nm != "constructor" && nm != "initialize" && nm != "toString" && nm != "valueOf") && isFunction(proto[nm]) )
						{
							if ( startsWith(nm, "get") || 
										startsWith(nm, "set") )
							{
								var propNm = nm.charAt(3).toLowerCase() + nm.substr(4);
								if ( !propMap || !propMap[propNm] )
								{
									methodsNames.push(nm);
								}
							}
							else if ( !/^_/.test(nm) )
							{
								methodsNames.push(nm);
							}
						}
					}
					curCls._methodsNames = methodsNames;
				}
				return methodsNames;
			},
			/**
			 * 주어진 args 값으로 여러 property의 setter을 호출하여 class property 값을 설정한다.<br>
			 * args.length == 1 이면 아래로 처리된다.<br>
			 *  args[0] 가 key=value 값으로 된 object collection이면 해당 key을 property 명칭, value를 값으로 처리함.<br>
			 *  args[0] 가 array이면 선언된 properties 순서대로 array의 값을 순차적으로 얻어 처리함.<br>
			 * 그외에 args가 array 또는 arguments이기 때문에 선언된 properties 순서대로 순차적으로 값을 얻어 처리한다.
			 * @example
			 * //class0 properties 정의
			 * properties: {
			 *    name: {},
			 *    gender: {},
			 *    isCool: {},
			 *    height: {}
			 * }
			 *
			 * //class0 적용
			 * var classobj = new class0();
			 * function aaa()
			 * {
			 *   classobj.setProperties(arguments);
			 * }
			 * aaa("nm", "male", true, 100); //classobj => (name:"nm", gender:"male", isCool: true, height: 100) 설정됨
			 * 
			 * @param {array|arguments} args 리스트 성격을 가진 객체
			 * @memberOf JsNamespace._classHelper
			*/
			setProperties: function()
			{
				var props = this._propertiesMap,
					val;
				if ( arguments.length == 1 )
				{
					var arg0 = arguments[0];
					if ( arg0 )
					{
						if ( !arg0.length && Eco.isObject(arg0) )
						{
							for ( var prop in arg0 )
							{
								if (arg0.hasOwnProperty(prop))
								{
									val = props[prop];
									if ( val )
									{
										this[val.setter](arg0[prop]);
									}
								}
							}
						}
						else if ( arg0.length || Eco.isArray(arg0) )
						{
							var propNames = this.getPropertiesNames();
							for ( var i = 0, len = arg0.length ; i < len ; i++ )
							{
								val = props[propNames[i]];
								this[val.setter](arg0[i]);
							}
						}
					}
				}
				else
				{
					var propNames = this.getPropertiesNames();
					for ( var i = 0, len = arguments.length ; i < len ; i++ )
					{
						val = props[propNames[i]];
						this[val.setter](arguments[i]);
					}
				}
			},
			/**
			 * 상속된 Class 인 경우 상위 처리 함수를 override 하여 신규 처리 루틴으로 작성하려고<br>
			 * 상위 처리 함수를 호출 한 뒤 추가 루틴을 처리하고 할 때 사용한다.
			 * @example
			 * //superclass0 properties 정의
			 *  {
			 *    aaa: function ()
			 *    {
			 *      alert("super class!!!");
			 *    },
			 *     ....
			 * 
			 *  }
			 *
			 * //class0 properties 정의
			 *  {
			 *    extend: 'superclass0',
			 *    aaa: function ()
			 *    {
			 *      this.callParent(arguments);
			 *      alert("child class!!!");
			 *    },
			 *     ....
			 * 
			 *  }
			 *
			 * //class0 적용
			 * var classobj = new class0();
			 * classobj.aaa(); // alerts "super class!!!" alerts "child class!!!"
			 * 
			 * @param {array|arguments} args 리스트 성격을 가진 객체
			 * @memberOf JsNamespace._classHelper
			*/
			callParent: function(args)
			{
				var method = this.callParent.caller,
					curCls = method._thisOwner || this.constructor;

				if ( !curCls )
				{
					Eco.Logger.error("class 선언이 JsNamespaces.declareClass 함수를 이용하여 처리되지 않았습니다.");
				}
				var superCls = curCls._superClass;
				if ( !superCls )
				{
					Eco.Logger.error(curCls._className + "는 상속 되지 않은 Class입니다.");
				}

				var superMethod;
				while ( superCls )
				{
					superMethod = superCls[method._thisName];
					if ( !superMethod )
					{
						superMethod = superCls.prototype[method._thisName];
					}
					if ( superMethod ) break;
					superCls = superCls._superClass;
				}
				if ( !superMethod )
				{
					Eco.Logger.error("this.callParent() was called but there's no such method (" + method._thisName +
								") found in the parent class (" + (superCls._className || 'Object') + ")");
				}
				return superMethod.apply(this, args);
			}
		},
		/**
		 * defineData은 Class의 선언 내역을 가진 object collection 이다.<br>
		 * 이 defineData을 가지고 주어진 className 명칭으로 Class를 정의한다.
		 * @param {string} className class 명칭
		 * @param {object} defineData class의 선언 내역을 가진 object collection
		 * @example
		 * JsNamespace.declareClass("Sample.Person", {
		 *    statics: { //statics 정의 부분
		 * 	    averageIQ: 100
		 *    },
		 *    properties: { //property들 정의 부분
		 *      name: {
		 *        value: 'Unknown',
		 *        checkValue: function(value)
		 *        {
		 *           return value || 'Unknown';
		 *        }
		 *      },
		 *      gender: {
		 *        value: 'unknown',
		 *        checkValue: function(value)
		 *        {
		 *          if (!/^(male|female|gay|lesbian)$/.test(value))
		 *          {
		 *            return 'unknown';
		 *          }
		 *          return value;
		 *        }
		 *      }
		 *    },
		 *    initialize: function() //class 생성자 정의 부분
		 *    {
		 *       this.setProperties(arguments);
		 *       return this; //initialize는 반드시 이 코드 라인을 작성한다.
		 *    },
		 *    eat: function(foodType)
		 *    {
		 *       alert("I'm eating: " + foodType);
		 *    },
		 *    getAverageIQ: function()
		 *    {
		 *       return Sample.Person.averageIQ;
		 *    }
		 * });
		 * @memberOf JsNamespace
		*/
		declareClass: function(className, defineData)
		{
			if ( !className || !className.length ) return;

			var pThis = this;
			var obj = pThis.getGlobalContext(),
				cache = pThis.namespaceCache,
				dummyCache = pThis.dummyNamespace,
				names = className.split('.'),
				len = names.length - 1,
				leaf = names[len],
				i, nm, fullnm = "";

			for (i = 0; i < len; i++)
			{
				nm = names[i];
				if ( i == 0 ) fullnm += nm;
				else  fullnm += "." + nm;
				
				if (cache[fullnm])
				{
					obj = cache[fullnm];
				}
				else
				{
					if (!dummyCache[fullnm])
					{
						obj[nm] = {};
						pThis.dummyNamespace[fullnm] = obj[nm];
					}
					obj = obj[nm];
				}
			}

			eval(className + " = function  ()\n" +
			"{\n" +
			"\tfor ( var nm in this._initVals )\n" +
			"\t{\n" +
			"\t\tif (this._initVals.hasOwnProperty(nm))\n" +
			"\t\t{\n" +
			"\t\t\tvar val = this._initVals[nm];\n" +
			"\t\t\tif ( val != null ) this[nm] = val;\n" +
			"\t\t}\n" +
			"\t}\n" +
			"\tvar ret = this.initialize.apply(this, arguments);\n" +
			"\treturn ret||this;\n" +
			"};"
			);

			var cls = obj[leaf];
			pThis.namespaceCache[className] = cls;

			if ( dummyCache[className] )
			{
				var prop, dummy = dummyCache[className];
				for ( prop in dummy )
				{
					if ( dummy.hasOwnProperty(prop) )
					{
						if ( !cls.hasOwnProperty(prop) )
						{
							cls[prop] = dummy[prop];
						}
					}
				}
				
				delete dummyCache[className];
			}


			var proto = cls.prototype,
				isSuperCls = false,
				isDefineInitialize = false,
				pThis = this;

			if ( defineData )
			{
			    //IE8 이하 버전 예약어(extends)로 되어있어 수정함.
			    var exStr = defineData["extends"];
				if ( exStr )
				{
					if ( /^nexacro\./.test(exStr) )
					{
						var paths = exStr.split("."),
							pCls = nexacro,
							i = 1;
						while ( pCls )
						{
							pCls = pCls[paths[i]];
							i++;
						}
						if ( i == paths.length - 1 )
						{
							cls.prototype = pThis._create(pCls.prototype);
							cls.prototype.constructor = cls;
							proto = cls.prototype;
							isSuperCls = true;
						}
					}
					else
					{
						var pCls = pThis.namespaceCache[defineData["extends"]];
						if ( pCls )
						{
							cls.prototype = pThis._create(pCls.prototype);
							cls.prototype.constructor = cls;
							proto = cls.prototype;
							isSuperCls = true;
						}
					}
				}

				if ( defineData.initialize ) isDefineInitialize = true;

				if ( isSuperCls )
				{
					cls.__inheritStatics = Eco.object.merge({}, pCls.__inheritStatics||{});
					defineData.statics = Eco.object.merge({}, defineData.statics||{}, cls.__inheritStatics); 
				}

				if ( defineData.statics )
				{
					Eco.object.copyProperties(cls, defineData.statics);
				}

				if ( defineData.inheritStatics )
				{
					Eco.object.copyProperties(cls, defineData.inheritStatics);
					cls.__inheritStatics = Eco.object.merge({}, cls.__inheritStatics||{}, defineData.inheritStatics);
				}

				if ( isSuperCls )
				{
					proto._initVals = Eco.object.merge({}, proto._initVals);
					cls._superClass = pCls;
				}
				else
				{
					proto._initVals = {};
				}
				
				if ( defineData.properties )
				{
					pThis._defineProperties(proto, defineData.properties, cls);
				}

				if ( defineData.events )
				{
					pThis._defineEvents(proto, defineData.events);
				}
			}

			if ( !proto._initVals )
			{
				proto._initVals = {};
			}

			if ( !proto["callParent"] ) //_classHelper 추가한다.
			{
				var classHelper = this._classHelper,
					func;
				for ( var key in classHelper )
				{
					if ( key != "_className" && classHelper.hasOwnProperty(key) )
					{
						func = classHelper[key];
						proto[key] = func;
						if ( !func._thisName ) func._thisName = key;
						if ( !func._thisOwner ) func._thisOwner = classHelper;
					}
				}
			}

			Eco.object.Each(defineData, function(nm, val) {
				if ( nm == "properties" || 
					 nm == "statics" ||
					 nm == "inheritStatics" ||
					 nm == "events" ||
					 nm == "extends" )
				{
					return;
				}
				if ( Eco.isFunction(val) )
				{
					this[nm] = val;
				}
				else
				{
					this._initVals[nm] = val;
				}
			}, proto);

			//상속되면 자신이 별도 initialize override하여 정의하지 않으면 상위 constructor인 initialize 상속되게 한다.
			//if ( !isDefineInitialize && !isSuperCls ) 
			//initialize(constructor) 정의되지 않으면  default initialize(constructor) 처리되게 한다.
			if ( !isDefineInitialize ) 
			{
				proto.initialize = function()
				{
					return this;
				};
			}
			cls._className = className;
			pThis.setDebugInfo(className, cls);
			pThis.setDebugInfo(className, cls.prototype, cls);
			return cls;			
			//return this.declare(className, cls);
		},
		/**
		 * addMethod 함수에서 내부적으로 사용하기 위해 debug정보를 구성하기 위해 사용<br>
		 * 주어지는 target는 prototype이거나, Class가 된다.
		 * @param {Class|prototype} target nms 명칭으로 멤버 값을 찾는 대상이 되는 객체
		 * @param {string|array} nms debug정보를 구성할 멤버 명칭들
		 * @param {Class} owner debug정보 중에 _thisOwner에 해당하는 값
		 * @memberOf JsNamespace
		 * @private
		*/
		_setDebugInfoForAddMethods: function(target, nms, owner)
		{
			var targetVal;
			if ( Eco.isString(nms) )
			{
				targetVal = target[nms];
				if ( Eco.isFunction(targetVal) )
				{
					targetVal._thisName = nms;
					targetVal._thisOwner = owner;
				}
			}
			else if ( Eco.isArray(nms) )
			{
				for ( var i = 0, len = nms.length ; i < len ; i++ )
				{
					targetVal = target[nms[i]];
					if ( Eco.isFunction(targetVal) )
					{
						targetVal._thisName = nms[i];
						targetVal._thisOwner = owner;
					}
				}
			}
		},
		/**
		 * 주어진 list 정보로 주어진 func를 호출하여 주어진 Class에 멤버 함수을 추가하는 함수
		 * @example
		 * var membernames = ['round', 'ceil', 'floor', 'abs'];
		 * JsNamespace.addMethods(membernames, Eco.Point, false, 
		 *      function(name) {
		 *          var script = "return createObject('point', Math." + name + "(this.x), Math." + name + "(this.y));";
		 *          this[name] = new Function(script); //this는 Eco.Point.prototype
		 *          return name; //이 코드가 있어야 추가한 Method에 debug정보를 구성한다.
		 *      }
		 * );
		 * @param {array|object} list loop이 되는 collection 및 array
		 * @param {Class} Class 추가할 대상이 되는 Class
		 * @param {boolean} isStatic static이면 true, 아니면 false
		 * @param {function} func debug정보 중에 _thisOwner에 해당하는 값
		 * @memberOf JsNamespace
		*/
		/* [2014.07.23] - addMethods 와 차이점이 무엇인가 ?? (차후확인)
		addFuncs: function(Cls, defineFuncs, isStatic)
		{
			var memberName,
				setDebugFunc = this._setDebugInfoForAddMethods,
				fn;

			if ( Eco.isObject(defineFuncs) )
			{
				if ( isStatic )
				{
					for ( var prop in defineFuncs )
					{
						if ( defineFuncs.hasOwnProperty(prop) )
						{
							fn = defineFuncs[prop];
							Cls[prop] = fn;
							setDebugFunc(fn, prop, Cls);
						}
					}
				}
				else
				{
					var proto = Cls.prototype;
					for ( var prop in defineFuncs )
					{
						if ( defineFuncs.hasOwnProperty(prop) )
						{
							fn = defineFuncs[prop];
							proto[prop] = fn;
							setDebugFunc(fn, prop, Cls);
						}
					}
				}
			}
		},		
		*/
		/**
		 * 주어진 list 정보로 주어진 func를 호출하여 주어진 Class에 멤버 함수을 추가하는 함수
		 * @param {array|object} list loop이 되는 collection 및 array
		 * @param {Class} Class 추가할 대상이 되는 Class
		 * @param {boolean} isStatic static이면 true, 아니면 false
		 * @param {function} func debug정보 중에 _thisOwner에 해당하는 값
		 * @example
		 * var membernames = ['round', 'ceil', 'floor', 'abs'];
		 * JsNamespace.addMethods(membernames, Eco.Point, false, 
		 *      function(name) {
		 *          var script = "return createObject('point', Math." + name + "(this.x), Math." + name + "(this.y));";
		 *          this[name] = new Function(script); //this는 Eco.Point.prototype
		 *          return name; //이 코드가 있어야 추가한 Method에 debug정보를 구성한다.
		 *      }
		 * );		 
		 * @memberOf JsNamespace
		*/
		addMethods: function(list, Class, isStatic, func)
		{
			var memberName,
				setDebugFunc = this._setDebugInfoForAddMethods;

			if ( Eco.isArray(list) )
			{
				if ( isStatic )
				{
					for ( var i = 0, len = list.length ; i < len ; i++ )
					{
						memberName = func.call(Class, list[i], i);
						setDebugFunc(Class, memberName, Class);
					}
				}
				else
				{
					var proto = Class.prototype;
					for ( var i = 0, len = list.length ; i < len ; i++ )
					{
						memberName = func.call(proto, list[i], i);
						setDebugFunc(proto, memberName, Class);
					}
				}
			}
			else if ( Eco.isObject(list) )
			{
				if ( isStatic )
				{
					for ( var prop in list )
					{
						if ( list.hasOwnProperty(prop) )
						{
							memberName = func.call(Class, prop, list[prop]);
							setDebugFunc(Class, memberName, Class);
						}
					}
				}
				else
				{
					var proto = Class.prototype;
					for ( var prop in list )
					{
						if ( list.hasOwnProperty(prop) )
						{
							memberName = func.call(proto, prop, list[prop]);
							setDebugFunc(proto, memberName, Class);
						}
					}
				}
			}
		},
		/**
		 * 주어진 list 정보로 주어진 func를 호출하여 주어진 Class에 property을 추가하는 함수
		 * @example
		 * var membernames = {'x' : {}, 'y': {}};
		 * JsNamespace.addProperties(membernames, Eco.Point, 
		 *      function(prop, val) {
		 *          return val; 
		 *      }
		 * );
		 * @param {object} list loop이 되는 collection
		 * @param {Class} Class 추가할 대상이 되는 Class
		 * @param {function} 처리함수
		 * @param {scope} scope scope
		 * @memberOf JsNamespace
		*/
		addProperties: function(list, Class, func, scope)
		{
			var proto = Class.prototype,
				props = {};

			if ( Eco.isObject(list) )
			{
				var flag = false;
				for ( var prop in list )
				{
					if ( list.hasOwnProperty(prop) )
					{
						flag = true;
						props[prop] = func.call(scope||this, prop, list[prop]);
					}
				}
				if ( flag )
				{
					this._defineProperties(proto, props, Class);
				}
			}
		},		
		/**
		 * global context를 반환하는 함수
		 * @return {Object} global context
		 * @memberOf JsNamespace
		*/
		getGlobalContext: function()
		{
			var context;
			
			if (nexacro.Browser == "Runtime")
			{
				context = _global_context;
			}
			else
			{
				if (window && (window._popup === true))
				{
					context = window;
				}
				else
				{
					context = _global_context;
				}
			}
			
			return context;
		}
	};
}

/**
 * @fileoverview Library 기본함수.
 */

if ( !JsNamespace.exist("Eco") )
{
	/**
	 * @namespace
	 * @name Eco
	 * @memberof! <global>
	 */	
	JsNamespace.declare("Eco", {

		/**
		 * value의 string 여부 반환
		 * @param {*} value 확인할 value.
		 * @return {boolean} string 여부.
		 * @example
		 * trace(Eco.isString("test string!!!"));	// output : true
		 * trace(Eco.isString(1234));	// output : false
		 * @memberOf Eco
		 */
		isString: function(value) 
		{
			return typeof value === 'string';
		},
				
		/**
		 * value의 number 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} number 여부.
		 * @example
		 * trace(Eco.isNumber(1234));	// output : true
		 * trace(Eco.isNumber("1234"));	// output : false		 
		 * @memberOf Eco
		 */		
		isNumber: function(value) {
            return typeof value === 'number' && isFinite(value);
        },		
        
		/**
		 * value의 boolean 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} boolean 여부.
		 * @example
		 * trace(Eco.isBoolean(true));	// output : true
		 * trace(Eco.isBoolean("true"));	// output : false		 
		 * @memberOf Eco
		 */
		isBoolean: function(value) 
		{
			return typeof value == 'boolean';
		},  
		      
		/**
		 * value의 null 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} null 여부.
		 * @example
		 * trace(Eco.isNull(null));	// output : true
		 * var a; // undefined
		 * trace(Eco.isNull(a));	// output : false		
		 * trace(Eco.isNull(""));	// output : false
		 * @memberOf Eco
		 */
		isNull: function(value)
		{
			return value === null;
		},
		
		/**
		 * value의 undefined 여부 반환.
		 * @param {*} value 확인할 value.		 
		 * @return {boolean} undefined 여부.
		 * @example
		 * var a;
		 * trace(Eco.isUndefined(a));	// output : true
		 *
		 * var a = "";
		 * trace(Eco.isUndefined(a));	// output : false
		 * @memberOf Eco
		 */
		isUndefined: function(value)
		{
			return value === undefined;
		},
		
		/**
		 * value의 Object 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} Object 여부.
		 * @example
		 * var o = new Object();
	     * trace(Eco.isObject(o));	// output : true
	     * 
	     * var o = {};
	     * trace(Eco.isObject(o));	// output : true
	     *
	     * var o = [1,2,3];
	     * trace(Eco.isObject(o));	// output : false
	     *
	     * var o = new Button();
	     * trace(Eco.isObject(o));	// output : false
	     *
	     * var o = new Rect();
	     * trace(Eco.isObject(o));	// output : false
	     *
		 * @memberOf Eco
		 */
		isObject: function(value)
		{
			if ( value === null || value === undefined ) return false;
			
			// nexacro Component
			if ( Eco.isXComponent(value) ) return false;
			
			// nexacro Object (e.g. Dataset)
			if( value instanceof nexacro.Object ) return false;
			
			return typeof value == "object" && 
				   'constructor' in value &&
				   value.constructor === Object;
		},			
		
		/**
		 * value의 Array 여부 반환.
		 * @function isArray
		 * @param {*} value 확인할 value.
		 * @return {boolean} Array 여부.
		 * @example
		 * var a = new Array();
		 * trace(Eco.isArray(a));	// output : true
		 *
		 * var a = [1,2,3];
		 * trace(Eco.isArray(a));	// output : true
		 * @memberOf Eco
		 */
		isArray: Array.isArray ? function(value) {
			return Array.isArray(value);
		} :
		function(value) 
		{
			return Eco._toString.call( value ) === '[object Array]';
		},
		/**
		 * value의 Error 객체 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} Error 객체 여부.
		 * @memberOf Eco
		 */
		isError: function(e)
		{
			return typeof e === 'object' &&
				(Eco._toString.call(e) === '[object Error]' || e instanceof Error);
		},
		_toString: (Object.prototype.toString),
		_hasOwnProperty: (Object.prototype.hasOwnProperty),
		_isIE8Below: (nexacro.Browser == "IE" && nexacro.BrowserVersion < 9),
		/**
		 * value의 Date 여부 반환.
		 * @param {date} value 확인할 value.
		 * @return {boolean} Date 여부.
		 * @example
		 * var a = new Date();
		 * trace(Eco.isDate(a));	// output : true
		 *
		 * var a = "20130501";
		 * trace(Eco.isDate(a));	// output : false 	 
		 * @memberOf Eco
		 */
		isDate: function(value) 
		{
			return Eco._toString.call( value ) === '[object Date]';
		},

		/**
		 * yyyyMMdd형태의 날짜 문자열 여부.( 예 : "20111231" ).
		 * @param {string} value 확인할 value.
		 * @return {boolean} Date 여부.
		 * @example
		 * var a = "20130501";
		 * trace(Eco.isStringDate(a));	// output : true 	 
		 * @memberOf Eco
		 */
		isStringDate: function(value) 
		{
			var stringWrapper = new String(value);
			
			if( stringWrapper.toString().length !== 8 ) return false;
			
			var iMonth  = Math.floor(stringWrapper.slice(4,6), 10);
			var iDate   = Math.floor(stringWrapper.slice(6,8), 10);
			
			if( iMonth < 1 || iMonth > 12 ) return false;
				
			if( iDate < 1 || iDate > Eco.date.getLastDayOfMonth(stringWrapper) ) return false;
			
			
			return true;
		},

		/**
		 * value의 Function 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} Function 여부.
		 * @example
		 * trace(Eco.isFunction(Eco.isFunction));	// output : true
		 *
		 * this.testFunction = function()
		 * {
		 * }
		 * trace(Eco.isFunction(this.testFunction));	// output : true
		 * @memberOf Eco
		 */
		isFunction: function(value)
		{
			return Eco._toString.call( value ) === '[object Function]';
		},

		/**
		 * value의 RegExp 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} 정규식 패턴 여부.
		 * @example
		 * var a = new RegExp();
		 * trace(Eco.isRegExp(a));	// output : true
		 * 
		 * var a = /[a-z]/g;
		 * trace(Eco.isRegExp(a));	// output : true		 
		 * @memberOf Eco
		 */
		isRegExp: function(value) 
		{
			return Eco._toString.call( value ) === '[object RegExp]';
		},		
		
		/**
		 * primitive type (undefined, null, boolean, string, number) 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} primitive type 여부.
		 * @memberOf Eco
		 */
		isPrimitive: function(value)
		{
			return value === null || /^[usbn]/.test(typeof value);
		},	
		
		/**
		 * value의 빈값 여부 반환.<br>
		 * 1. null, undefined type : true 반환<br>
		 * 2. string, array type : length 가 0인 경우 true 반환<br>
		 * 3. object type : 하위 속성이 존재할 경우 true 반환<br>
		 * 4. boolean, number, date type : false 반환
		 *
		 * @param {*} value 확인할 value.
		 * @return {boolean} empty 여부.
		 * @example
		 * var a;	// undefined
		 * trace(Eco.isEmpty(a));	// output : true
		 *
		 * var a = null;	// null
		 * trace(Eco.isEmpty(a));	// output : true
		 *
		 * var a = "";	// string
		 * trace(Eco.isEmpty(a));	// output : true
		 *
		 * var a = "abc";	// string
		 * trace(Eco.isEmpty(a));	// output : false
		 *
		 * var a = [];	// array
		 * trace(Eco.isEmpty(a));	// output : true
		 *
		 * var a = [1,2,3];	// array
		 * trace(Eco.isEmpty(a));	// output : false
		 *
		 * var a = new Array();	// array
		 * trace(Eco.isEmpty(a));	// output : true
		 *
		 * var a = new Array(3);	// array
		 * trace(Eco.isEmpty(a));	// output : false
		 *
		 * var a = {};	// object
		 * trace(Eco.isEmpty(a));	// output : true
		 *
		 * var a = {a:'1', b:'2'};	// object
		 * trace(Eco.isEmpty(a));	// output : false
		 *
		 * var a = new Object();	// object
		 * trace(Eco.isEmpty(a));	// output : true
		 *
		 * var a = new Object();	// object
		 * a.test = "abc";
		 * trace(Eco.isEmpty(a));	// output : false
		 *
		 * var a = true;	// boolean
		 * trace(Eco.isEmpty(a));	// output : false
		 *
		 * var a = 0;	// number
		 * trace(Eco.isEmpty(a));	// output : false
		 *
		 * var a = new Date();	// date
		 * trace(Eco.isEmpty(a));	// output : false
		 *
		 * @memberOf Eco
		 */
		isEmpty: function(value)
		{
			// null, undefined ==> true
			if ( value == null ) return true;
			
			// String, Array ==> length == 0
			if ( Eco.isString(value) || Eco.isArray(value) )
			{
				return value.length == 0 ? true : false;
			}
			else if ( Eco.isObject(value) )
			{
				for (var p in value) 
				{
					if ( value.hasOwnProperty(p) )
					{
						return false;
					}
				}
				return true;
			}
			
			return false;
		},
		
		/**
		 * value의 nexacro component 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} nexacro component 여부.
		 * @example
		 * var a = new Button();
		 * trace(Eco.isXComponent(a));	// output : true
		 *
		 * var a = new Dataset();
		 * trace(Eco.isXComponent(a));	// output : false
		 *
		 * var a = new String();
		 * trace(Eco.isXComponent(a));	// output : false
		 *
		 * @memberOf Eco
		 */
		isXComponent: function(value) 
		{
			if ( value === null || value === undefined  ) return false;
			
			return value instanceof nexacro.Component;
		},
		
		/**
		 * value의 Space 여부 반환.
		 * @param {*} value 확인할 value.
		 * @return {boolean} Space 여부.
		 * @example
		 * var a = " ";
		 * trace(Eco.isSpace(a));	// true
		 *
		 * var a = "\t";
		 * trace(Eco.isSpace(a));	// false		 
		 * @memberOf Eco
		 */
		isSpace: function(value) 
		{
			return value == ' ';
		},

		/**
		 * value의 복사본을 반환.
		 * @param {*} value 복사할 value.
		 * @param {boolean} deep Object type의 경우 하위 속성이 Object 일 경우 복사여부.
		 * @param {array=} clone 에서 제외 할 속성들 exclude property name을 array.
		 * @return {*} value의 복사본.
		 * @example
		 * Javascript에서 변수의 타입은 크게 기본형(primitive Type)과 참조형(reference type) 으로 나눌수 있다. 
		 * 기본형 변수는 실제 값을 저장하는 반면 참조형 변수는 값이 저장되어있는 주소를 갖는다.
		 * 
		 * ※ javascript에서 primitive type은 null, undefined, string, number, boolean 이며
		 *     나머지(Object를 상속받은 모든 객체)는 참조형이다.
		 *
		 * var a = "abc";
		 * var b = a;
		 * a = "";
		 *
		 * trace("[" + a + "]");	// output :  []
		 * trace("[" + b + "]");	// output :  [abc]
		 * 
		 * 위와 같이 기본형은 값을 가지므로 a, b 는 다른 값을 가지는 변수이다.
		 * 그러나 참조형은 주소를 가리키므로 아래 처럼 b 는 a 의 주소를 가르키므로 
		 * 같은 값을 가지게 된다.
		 *
		 * var a = {a:'aaa', b:123};
		 * var b = a;
		 *
		 * trace("[" + a.a + "," + a.b + "]");	// output :  [aaa,123]
		 * trace("[" + b.a + "," + b.b + "]");	// output :  [aaa,123]
		 *
		 * a.a = 'bbb';
		 * a.b = 456;
		 *
		 * trace("[" + a.a + "," + a.b + "]");	// output :  [bbb,456]
		 * trace("[" + b.a + "," + b.b + "]");	// output :  [bbb,456]
		 * 
		 * clone 함수는 참조형 변수도 값 자체를 복사하여 새로운 개체를 반환해준다.
		 *
		 * // Object
		 * var a = "abc";
		 * var b = Eco.clone(a);
		 *
		 * a = "";
		 *
		 * trace("[" + a + "]");	// output :  []
		 * trace("[" + b + "]");	// output :  [abc]
		 * 
		 * var a = {a:'aaa', b:123};
		 * var b = Eco.clone(a);
		 *
		 * trace("[" + a.a + "," + a.b + "]");	// output :  [aaa,123]
		 * trace("[" + b.a + "," + b.b + "]");	// output :  [aaa,123]		 
		 * 
		 * a.a = 'bbb';
		 * a.b = 456;
		 * 
		 * trace("[" + a.a + "," + a.b + "]");	// output :  [bbb,456]
		 * trace("[" + b.a + "," + b.b + "]");	// output :  [aaa,123]
		 *
		 * // Array
		 * var a = [1,2,3];
		 * var b = Eco.clone(a);
		 * 
		 * trace(a);	// output : [1,2,3]
		 * trace(b);	// output : [1,2,3]
		 * 
		 * a.push(4);
		 * 
		 * trace(a);	// output : [1,2,3,4]
		 * trace(b);	// output : [1,2,3]
		 *
		 * // Date
		 * var a = new Date();
		 * var b = Eco.clone(a);
		 * 
		 * trace(a);	// output : Tue May 07 2013 11:49:15 GMT+0900
		 * trace(b);	// output : Tue May 07 2013 11:49:15 GMT+0900
		 * 
		 * a.setYear(a.getYear() + 10);
		 * 	
		 * trace(a);	// output : Sun May 07 2023 11:49:15 GMT+0900
		 * trace(b);	// output : Tue May 07 2013 11:49:15 GMT+0900		 
		 *		 
		 * @memberOf Eco
		 */		
		clone: function(value, deep, exclude)
		{
			if ( Eco.isObject(value) || Eco.isArray(value) )
			{
				var objectClone,
					chkFunc = Eco.array.indexOf;
				if ( value.constructor == Array ) 
				{
					objectClone = [];
				}			
				else
				{
					objectClone = {};
				}
				
				for (var property in value) 
				{
					if ( value.hasOwnProperty(property) && (!exclude || chkFunc(exclude, property) == -1) )
					{
						if (!deep)
						{
							objectClone[property] = value[property]; 
						}
						else if (typeof value[property] == 'object') 
						{
							objectClone[property] = Eco.clone(value[property], deep, exclude); 
						}
						else 
						{
							objectClone[property] = value[property]; 
						}
					}
				}
				
				return objectClone;
			}
			else if ( Eco.isDate(value) )
			{
				var dateClone = new Date();
				dateClone.setTime(value.getTime());
				return dateClone;
			}
			else if ( Eco.isXComponent(value) )
			{
				trace("[Eco.clone] TO-DO==> clone if nexacro Component");
				return null;
			}
			else if ( Eco.isPrimitive(value) )
			{
				return value;
			}
			else if ( value && ( typeof value.clone == "function" ) )
			{
				return value.clone();
			}
			else if ( value && value._className && value._className.length )
			{
				var clone = new value.constructor();
				var values = value.getPropertiesValues(),
					val,
					resetValues = {};
				for (var i in values)
				{
					if ( (exclude == null ||
						Eco.array.indexOf(exclude, i) < 0))
					{
						val = values[i];
						if (deep)
						{
							resetValues[i] = Eco.clone(val, deep, exclude);
						}
						else
						{
							resetValues[i] = val;
						}
					}
				}
				clone.setProperties(resetValues);
				return clone;
			}
			else
			{
				return null;
			}
		},
	
		/**
		 * 첫 값의 True/False를 검사해 그 결과에 따라 두번째 또는 세번째 값을 반환.
		 * @param {*} expr 비교할 값. expr의 값으로 True/False 여부를 확인합니다.
		 *                 expr이 Integer인경우 0이면 False아니면 True인식합니다.
		 * @param {*} trueValue expr이 True에 해당하는 값일 경우 Return 되는 값.
		 * @param {*} falseValue expr이 False에 해당하는 값일 경우 Return 되는 값.
		 * @return {*} expr에 따라 Return 된 값.
		 * @example
		 *
		 * trace(Eco.iif(2-1=1, "True", "False")); // output : True
		 *
		 * var a = 98;
		 * var b = Eco.iif(a > 100, 100, a);
		 * trace(b);	// output : 98
		 *
		 * @memberOf Eco
		 */	
		iif: function(expr, trueValue, falseValue) 
		{
			return expr ? trueValue : falseValue;
		},
		
		/**
		 * 입력된 값 또는 수식을 검사해 적당한 값을 반환.<br>
		 * decoce(비교값, CASE1, 결과값1 [, CASE2, 결과값2, ... ], 디폴트 값);<br>
		 * 표현식의 값이 기준값1이면 값1을 출력하고, 기준값2이면 값2를 출력한다.<br>
		 * 그리고 기준값이 없으면 디폴트 값을 출력한다.<br>
		 * @param {*} * 1. 비교값
		 * @param {*} * 2. CASE
		 * @param {*} * 3. 결과값 (2,3 반복)
		 * @param {*=} * (2,3 반복)
		 * @param {*=} * 4.디폴트값
		 * @return {*} decode에 의해서 선택된 값.
		 * @example
		 * trace(Eco.decode("1", "1", "One", "2", "Two", "Default")); // output : One;
		 * 
		 * trace(Eco.decode(100, 1, "일", 10, "십", 100, "백"));	// output : 백
		 *
		 * @memberOf Eco
		 */		 
		decode: function() 
		{
			var i;
			var count = arguments.length;
			for( i = 1 ; i < count ; i+=2 )
			{
				if( arguments[0] === arguments[i] )
				{
					return arguments[i+1];
				}
			}
			
			return arguments[i-2];
		},
		
		/**
		 * alphabet character code.
		 * charvalue값 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
		 * @private
		 * @constant
		 * @memberOf Eco
		 */
		_ALPHA_CHAR_CODES: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102],

		/**
		 * 유일한 ID 를 반환
		 * @public
		 * @param {string=} prefix id 앞에 붙일 문자열
		 * @return {string} id
		 * @example
		 *
		 * trace(Eco.getUniqueId()); 
		 * // output : 3e52d1f6-f0d2-4970-a590-ba7656b07859 (달라지는 값)
		 * 
		 * trace(Eco.getUniqueId("Button_")); 
		 * // output : Button_4e601da1-63f4-4cfa-849b-01b8a7f14d40 (달라지는 값)
		 * 
		 * @memberOf Eco
		 */
		getUniqueId: function(prefix)
		{
			if ( Eco.isEmpty(prefix) ) prefix = "";
			
			var pThis = Eco,
				charcode = pThis._ALPHA_CHAR_CODES,
				math = Math;
			var seq = 0;
			var seq0;
			var tmpArray = new Array(36);
			var idx = -1;
			
			while (seq < 8) 
			{
				tmpArray[++idx] = charcode[math.random() * 16 | 0];
				seq++;
			}
			seq = 0;
			while (seq < 3) 
			{
				tmpArray[++idx] = 45;//45 => "-", 95=> "_"
				seq0 = 0;
				while (seq0 < 4) 
				{
					tmpArray[++idx] = charcode[math.random() * 16  | 0];
					seq0++;
				}
				seq++;
			}
			tmpArray[++idx] = 45; //45 => "-", 95=> "_"
			// 끝에서 12자리을 random으로 처리하면 속도가 좀더 개선됨(10만건 생성 약 0.8초 ==> chrome)
			/*
			seq = 0;
			while (seq < 12) 
			{
				tmpArray[++idx] = charcode[math.random() * 16 | 0];
				seq++;
			}
			return prefix + String.fromCharCode.apply(null, tmpArray);
			*/
			// 원래 로직은 끝에서 12자리을 현재 time 구한 8자리 와 random 4자리를 조합한 처리임.(10만건 생성 약 1.3초 ==> chrome)
			/**/
			var tmpStr = (new Date()).getTime();
			tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
			seq = 0;
			while (seq < 8) 
			{
				tmpArray[++idx] = tmpStr.charCodeAt(seq);
				seq++;
			}
			seq = 0;
			while (seq < 4) 
			{
				tmpArray[++idx] = charcode[math.random() * 16 | 0];
				seq++;
			}
			return prefix + String.fromCharCode.apply(null, tmpArray);
			
		},
		
		/**
		 * Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
		 * @public
		 * @param {form} prefix 순번 앞에 붙일 문자열
		 * @param {string} prefix 순번 앞에 붙일 문자열
		 * @return {string} id
		 * @example
		 *
		 * // this = Form
		 * trace(Eco.getSequenceId(this, "Button")); // output : Button0
		 * trace(Eco.getSequenceId(this, "Button")); // output : Button1
		 * 
		 * // this = Form
		 * trace(Eco.getSequenceId(this, "chk_")); // output : chk_0
		 * trace(Eco.getSequenceId(this, "chk_")); // output : chk_1
		 * 
		 * @memberOf Eco
		 */		
		getSequenceId: function(form, prefix)
		{
			if ( Eco.isEmpty(form) ) 
			{
				Eco.Logger.error({message:"1st argument doesn't exist !!", stack:true});
				return null;
			}
			
			if ( Eco.isEmpty(prefix) ) 
			{
				Eco.Logger.error({message:"2nd argument doesn't exist !!", stack:true});
				return null;
			}
			
			if ( !(form instanceof Form) ) 
			{				
				Eco.Logger.error({message:"1st argument must be a Form !!", stack:true});
				return null;
			}
			
			var cache = form._sequenceIdCache;
			if ( Eco.isEmpty(cache) )
			{
				cache = form._sequenceIdCache = {};
			}
			
			var sequence = cache[prefix];
			if ( Eco.isEmpty(sequence) )
			{
				sequence = -1;
			}
			sequence++;
			
			cache[prefix] = sequence;
			
			return prefix + sequence;
		},
		/**
		 * 주어진 두개의 object들의 properties 가 동일 하지 check한다.
		 * Eco.equals 함수에 사용된다.
		 * @private
		 * @param {object} o1 비교할 object
		 * @param {object} o2 비교할 object
		 * @return {boolean} 동일하면 true, 아니면 false
		 * @memberOf Eco
		 */	
		"_checkKeys": function(o1, o2)
		{
			for (var i in o1)
			{
				if (o1.hasOwnProperty(i) && typeof o2[i] === 'undefined')
				{
					return false;
				}
			}
			return true;
		},
		/**
		 * 주어진 두개의 인자에 대하여 동일한 값인지 확인한다.
		 * @public
		 * @param {*} obj1 비교하고자 하는 인자
		 * @param {*} obj2 비교하고자 하는 인자
		 * @return {boolean} 동일하면 true, 아니면 false
		 * @example
		 * // this = Form
		 * var a = {"id1": "apple","id": "kiwi",  "test": [1, 2], "a": Button00};
		 * var b = {"id": "kiwi", "id1": "apple", "test": [1, 2], "a": this};
		 * trace(Eco.equals(a, b)); // output : false
		 * 
		 * var a = {"id1": "apple","id": "kiwi",  "test": [1, 2], "a": Button00};
		 * var b = {"id": "kiwi", "id1": "apple", "test": [1, 2], "a": Button00};
		 * trace(Eco.equals(a, b)); // output : true
		 * 
		 * @memberOf Eco
		 */	
		"equals": function(obj1, obj2)
		{
			if (obj1 === obj2)
			{
				return true;
			}
			if ( Eco.isBoolean(obj1) && obj2 == null )
			{
				obj2 = !!obj2;
				return obj1 == obj12;
			}
			if ( Eco.isBoolean(obj2) && obj1 == null )
			{
				obj1 = !!obj1;
				return obj1 == obj12;
			}
			if ( obj1 && obj2 )
			{
				if ( obj1.equals )
				{
					return obj1.equals(obj2);
				}
				if ( obj2.equals )
				{
					return obj2.equals(obj1);
				}
			}
			if (Eco.isDate(obj1) && Eco.isDate(obj2))
			{
				if ( obj1.getTime() == obj2.getTime() )
				{
					return true;
				}
				return false;
			}
			if (Eco.isArray(obj1) && Eco.isArray(obj2))
			{
				if (obj1.length !== obj2.length)
				{
					return false;
				}
				for (var i = 0, l = obj1.length; i < l; i++)
				{
					if (!Eco.equals(obj1[i], obj2[i]))
						return false;
				}
				return true;
			}
			if (obj1 && (typeof obj1 === 'object') && obj1.hasOwnProperty
					&& obj2 && (typeof obj2 === 'object') && obj2.hasOwnProperty )
			{
				if (!Eco._checkKeys(obj1, obj2) || !Eco._checkKeys(obj2, obj1))
				{
					return false;
				}
				for (var i in obj1)
				{
					if (obj1.hasOwnProperty(i) && !Eco.equals(obj1[i], obj2[i]))
					{
						return false;
					}
				}
				return true;
			}
			return obj1 == obj2;
		}
		// End of JsNamespace.declare
	});
	
}

/**
 * @fileoverview Array와 관련된 함수.
 */

if ( !JsNamespace.exist("Eco.array") )
{
	/**
	 * @namespace
	 * @name Eco.array
	 * @memberof! <global>
	 */
	 
	var array = JsNamespace.declare("Eco.array", {
	
		/**
		* 배열의 각 항목에 대해 주어진 콜백 함수를 호출한다.<br>
		* 주어진 함수에서 return false 처리 되면 임의 배열 항목에서 반복이 멈춘다.
		* @param {array} array 처리 대상 Array
		* @param {function} func callback 함수 
		* @param {object=} scope callback 함수에 대한 수행 scope
		* @param {boolean=} reverse 반복순서 (default: false)
		* @return {boolean | number} 배열 항목 모두가 처리되면 true를 리턴, 함수 처리중에 return false를 하게 되면 false 처리된 배열 index를 리턴
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* var result = Eco.array.Each(mon, function(name, index) {
		* 	trace(index + "==>" + name);
		*	// output : 0==>Jan
		*	// output : 1==>Feb
		*	// output : 2==>Mar
		*	// output : 3==>Apr
		* });
		* trace(result);	// output : true
		*
		* var result = Eco.array.Each(mon, function(name, index) {
		*	trace(index + "==>" + name);
		*	// output : 0==>Jan
		*	// output : 1==>Feb
		*	if (name === 'Mar') 
		*	{
		*		trace("break here!");
		*		// output : break here!
		*		return false;
		*	}
		* });
		* trace(result);	// output : 2
		* @memberOf Eco.array
		*/
		Each: function(array, func, scope, reverse) 
		{
            var i, len = array.length;

            if (reverse !== true) 
            {
                for (i = 0; i < len; i++) 
                {
                    if (func.call(scope || array[i], array[i], i, array) === false) 
                    {
                        return i;
                    }
                }
            }
            else 
            {
                for (i = len - 1; i > -1; i--) 
                {
                    if (func.call(scope || array[i], array[i], i, array) === false) 
                    {
                        return i;
                    }
                }
            }

            return true;
        },
		
		/**
		* 배열의 각 항목에 대해 주어진 콜백 함수를 호출한다.<br>
		* 주어진 함수의 return값과 상관없이 각 항목에 대해서 모두 처리한다.
		* @param {array} array 처리 대상 Array
		* @param {function} func callback 함수 
		* @param {object=} scope callback 함수에 대한 수행 scope
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* Eco.array.forEach(mon, function(name, index) {
		* 	if (name === 'Mar') 
		*	{
		* 		trace("don't break here!");
		*		// output : don't break here!
		* 		return false;
		* 	}
		* 	trace(index + "==>" + name);
		*	// output : 0==>Jan
		*	// output : 1==>Feb
		*	// output : 3==>Apr
		* });
		* @memberOf Eco.array
		*/
		forEach: function(array, func, scope) 
        {
            var i, len = array.length;

            for (i = 0; i < len; i++) 
            {
                func.call(scope, array[i], i, array);
            }
        },
        
        /**
		* 지정된 항목이 처음 나오는 배열 위치를 반환한다. 
		* @param {array} array 검색 대상 Array
		* @param {object} item 찾고자 하는 Item
		* @param {number=} from 검색의 시작 위치 (default: 0)
		* @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false)
		* @return {number} 검색된 배열 위치. 없다면 -1 리턴
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* var index = Eco.array.indexOf(mon, "Mar");
		* trace("index==>" + index);	// output : index==>2
		* var index = Eco.array.indexOf(mon, "May");
		* trace("index==>" + index);	// output : index==>-1
		* @memberOf Eco.array
		*/
		indexOf: function(array, item, from, strict) 
		{
			var len = array.length;
			if ( from == null ) from = 0;;
			strict == !!strict;
			from = (from < 0) ? Math.ceil(from) : Math.floor(from);
			if (from < 0)
			{
				from += len;
			}
			
			if (strict)
			{
				for (; from < len; from++) 
				{
					if ( array[from] === item)
					{
						return from;
					}
				}
			}
			else
			{
				for (; from < len; from++) 
				{
					if ( array[from] == item)
					{
						return from;
					}
				}
			}
			
			return -1;
		},
		
		/**
		* 지정된 항목이 처음 나오는 배열 위치를 뒤에서부터 찾아 반환한다.
		* @param {array} array 검색 대상 Array
		* @param {object} item 찾고자 하는 Item
		* @param {number=} from 검색의 시작 위치 (default: Last Index)
		* @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false)
		* @return {number} 검색된 배열 위치. 없다면 -1 리턴
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* var index = Eco.array.indexOf(mon, "Mar");
		* trace("index==>" + index);	// output : index==>2
		* var index = Eco.array.indexOf(mon, "May");
		* trace("index==>" + index);	// output : index==>-1
		* @memberOf Eco.array
		*/
		lastIndexOf: function(array, item, from, strict) 
		{
			var i;
			
			if (from == null)
			{
				from = array.length - 1;
			}
			else if (from < 0)
			{
				from = Math.max(0, array.length + from);
			}
			
			var strict = strict || false;
			
			if (strict)
			{
				for (i=from; i>=0; i--)
				{
					if (array[i] === item)
					{
						return i;
					}
				}
			}
			else
			{
				for (i=from; i>=0; i--)
				{
					if (array[i] == item)
					{
						return i;
					}
				}
			}
			
			return -1;
		},
		 
		/**
		* 지정된 항목이 배열에 포함되어 있는지 확인한다.
		* @param {array} array 검색 대상 Array
		* @param {object} item 찾고자 하는 Item
		* @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false)
		* @return {boolean} 포함되어 있다면 true, 없다면 false를 리턴
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* var contain = Eco.array.contains(mon, "Mar");
		* trace("contain==>" + contain);	// output : contain==>true
		* var contain = Eco.array.contains(mon, "May");
		* trace("contain==>" + contain);	// output : contain==>false
		* @memberOf Eco.array
		*/
		contains: function(array, item, strict) 
        {
			if (Eco.array.indexOf(array, item, null, strict) === -1) 
			{
				return false;
			}
			else
			{
				return true;
			}
        },
        
        /**
		* 배열 형태로 변환 처리한다.
		* @param {object} iterant 변환 대상 Obejct
		* @param {number=} start 시작 위치 (default: start Index)
		* @param {number=} end 끝 위치 (default: end Index)
		* @return {array} 변환된 Array
		* @example
		* this.fn_mon("Jan","Feb","Mar","Apr");
		* this.fn_mon = function() 
		* {
		* 	var result = Eco.array.toArray(arguments);
		*	trace("result==>" + result);	// output : result==>[Jan,Feb,Mar,Apr]
		* }
		*
		* var result = Eco.array.toArray("ABCDEFG",1,3);
		* trace("result==>" + result);	// output : result==>[B,C]
		* @memberOf Eco.array
		*/
        toArray: function(iterant, start, end)
        {
            if (!iterant || !iterant.length) 
            {
                return [];
            }
			
			if ( Eco.isArray(iterant) )
			{
				if ( arguments.length == 1 ) return iterant;
				else if ( arguments.length == 2 ) return iterant.slice(start);
				else return iterant.slice(start, end);
			}

            if (typeof iterant === "string") 
            {
                iterant = iterant.split("");
            }

            var i, array = [],
            start = start || 0;
            
            end = end ? ((end < 0) ? iterant.length + end : end) : iterant.length;

            for (i = start; i < end; i++) 
            {
                array.push(iterant[i]);
            }

            return array;
        },
        
        /**
		* 배열의 모든 항목을 인자로 사용해서 제공하는 함수의 호출 결과로 새로운 배열을 작성한다.
		* @param {array} array 처리 대상 Array
		* @param {function} func callback 함수 
		* @param {object=} scope callback 함수에 대한 수행 scope
		* @return {array} callback 함수 결과를 담은 Array
		* @example
		* var counts = [2, 10, 5, 1];
		* var map = Eco.array.map(counts, function(ele){return ele * 1000;});
		* trace("result==>" + result);	// output : result==>[2000,10000,5000,1000]
		* @memberOf Eco.array
		*/
		map: function(array, func, scope) 
        {
            if (!func || !(typeof func === "function"))
            {
				return;
            }
            
            var results = [],
                i = 0, len = array.length;

            for (; i < len; i++) 
            {
                results[i] = func.call(scope, array[i], i, array);
            }

            return results;
        },
		
        /**
		* 함수가 false값을 리턴 할 때까지 각 배열 항목을 이용한 callback함수를 실행한다.
		* @param {array} array 처리 대상 Array
		* @param {function} func callback 함수 
		* @param {object=} scope callback 함수에 대한 수행 scope
		* @return {boolean} callback 함수 처리 결과값. false로 리턴되는 항목이 발견되면 바로 false를 리턴, 그렇지 않으면 true를 리턴
		* @example
		* var counts = [2, 10, 5, 1];
		* var every = Eco.array.every(counts, function(ele){return (ele > 0);});
		* trace("every==>" + every);	// output : every==>true
		* var every = Eco.array.every(counts, function(ele){return (ele < 5);});
		* trace("every==>" + every);	// output : every==>false
		* @memberOf Eco.array
		*/
		every: function(array, func, scope) 
        {
            if (!func || !(typeof func === "function"))
            {
				return;
            }
            
            var i = 0, len = array.length;

            for (; i < len; ++i) 
            {
                if (!func.call(scope, array[i], i, array)) 
                {
                    return false;
                }
            }

            return true;
        },
        
        /**
		* 함수가 true값을 리턴 할 때까지 각 배열 항목을 이용한 callback함수를 실행한다.
		* @param {array} array 처리 대상 Array
		* @param {function} func callback 함수 
		* @param {object=} scope callback 함수에 대한 수행 scope
		* @return {boolean} callback 함수 처리 결과값. true로 리턴되는 항목이 발견되면 바로 true를 리턴, 그렇지 않으면 false를 리턴
		* @example
		* var counts = [2, 10, 5, 1];
		* var some = Eco.array.some(counts, function(ele){return (ele > 5);});
		* trace("some==>" + some);	// output : some==>true
		* var some = Eco.array.some(counts, function(ele){return (ele > 10);});
		* trace("some==>" + some);	// output : some==>false
		* @memberOf Eco.array
		*/
		some: function(array, func, scope) 
        {
            if (!func || !(typeof func === "function"))
            {
                return;
            }
            
            var i = 0, len = array.length;

            for (; i < len; ++i) 
            {
                if (func.call(scope, array[i], i, array)) 
                {
                    return true;
                }
            }

            return false;
        },
        
        /**
		* 두 1차원 배열의 항목값이 일치하는지 비교한다.
		* @param {array} array1 대상 Array
		* @param {array} array2 비교 대상 Array
		* @return {boolean} 모든 항목값이 같은면 true, 그렇지 않으면 false
		* @example
		* var counts = [2, 10, 5, 1];
		* var equals = Eco.array.equals(counts, [2, 10, 5, 1]);
		* trace("equals==>" + equals);	// output : equals==>true
		* var equals = Eco.array.equals(counts, [2, 10, 5]);
		* trace("equals==>" + equals);	// output : equals==>false
		* @memberOf Eco.array
		*/
        equals: function(array1, array2) 
        {
            var i, len1 = array1.length,
                len2 = array2.length;
            
            if (array1 === array2) 
            {
                return true;
            }
                
            if (len1 !== len2) 
            {
                return false;
            }
            
            for (i = 0; i < len1; ++i) 
            {
                if (array1[i] !== array2[i]) 
                {
                    return false;
                }
            }
            
            return true;
        },
        
        /**
		* 배열의 빈 항목을 제거한다.
		* @param {array} array 처리 대상 Array
		* @return {array} clean 처리 된 Array
		* @example
		* var clean = Eco.array.clean(["A", undefined, "B", null, "C", , "D"]);
		* trace("clean==>" + clean);	// output : clean==>["A","B","C","D"]
		* @memberOf Eco.array
		*/
        clean: function(array) 
        {
            var results = [], i = 0,
                len = array.length, item;

            for (; i < len; i++) 
            {
                item = array[i];

                if (!Eco.isEmpty(item)) 
                {
                    results.push(item);
                }
            }

            return results;
        },
        
        /**
		* 유일한 항목을 찾아 새로운 배열로 구성해서 리턴한다.
		* @param {array} array 처리 대상 Array
		* @return {array} unique한 항목으로 새로 구성된 Array
		* @example
		* var unique = Eco.array.unique(["A","B","C","A","A","B"]);
		* trace("unique==>" + unique);	// output : unique==>["A","B","C"]
		* @memberOf Eco.array
		*/
        unique: function(array) 
        {
            var i = 0, uniqueArray = [],
                len = array.length, 
                item,
                findKey = {},
                pThis = Eco.array;

			for (; i < len; i++) 
			{
				item = array[i];
				findKey[item] = item;
			}
			for ( i in findKey ) uniqueArray.push(findKey[i]);
			
            return uniqueArray;
        },
        
        /**
		* 대상 배열에서 Callback함수 조건을 만족하는 항목으로 새로운 배열을 구성한다.
		* @param {array} array 처리 대상 Array
		* @param {function} func callback 함수 
		* @param {object=} scope callback 함수에 대한 수행 scope
		* @return {array} filter처리된 항목으로 새로 구성된 Array
		* @example
		* var counts = [2, 10, 5, 1];
		* var filter = Eco.array.filter(counts, function(ele){return (ele > 3);});
		* trace("filter==>" + filter);	// output : filter==>[10,5]
		* @memberOf Eco.array
		*/
		filter: function(array, func, scope) 
        {
            if (!func || !(typeof func === "function"))
            {
                return;
            }
            
            var results = [],
                i = 0,
                len = array.length;

            for (; i < len; i++) 
            {
                if (func.call(scope, array[i], i, array)) 
                {
                    results.push(array[i]);
                }
            }

            return results;
        },
        
        /**
		* 원하는 위치에 새로운 항목을 insert처리한다.
		* @param {array} array insert 대상 Array
		* @param {number} index insert 위치
		* @param {object} items insert하고자 하는 items
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* Eco.array.insertAt(mon, 1, [50,100]);
		* trace("mon==>" + mon);	// output : mon==>["Jan", 50, 100, "Feb", "Mar", "Apr"]
		* @memberOf Eco.array
		*/
        insertAt: function(array, index, items) 
        {
			array.splice(index, 0, items);
        },
        
        /**
		* 원하는 항목의 앞 위치에 새로운 항목을 insert처리한다.
		* @param {array} array insert 대상 Array
		* @param {object} items insert하고자 하는 items
		* @param {object} items2 insert 위치(이 item 앞에 위치시킴)
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* Eco.array.insertBefore(mon, [50,100], "Feb");
		* trace("mon==>" + mon);	// output : mon==>["Jan", 50, 100, "Feb", "Mar", "Apr"]
		* @memberOf Eco.array
		*/
        insertBefore: function(array, items, items2) 
        {
			var index = Eco.array.indexOf(array, items2);
			if (index == -1)
			{
				array.push(items);
			}
			else 
			{
				array.splice(index, 0, items);
			}
        },
        
        /**
		* 원하는 위치의 항목을 배열에서 삭제 처리한다.
		* @param {array} array remove 대상 Array
		* @param {number} index remove하고자 하는 item index
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* Eco.array.removeAt(mon, 1);
		* trace("mon==>" + mon);	// output : mon==>["Jan","Mar","Apr"]
		* @memberOf Eco.array
		*/
        removeAt: function(array, index) 
        {
			array.splice(index, 1);
        },
        
		/**
		* 원하는 항목을 배열에서 삭제 처리한다.
		* @param {array} array remove 대상 Array
		* @param {object} item remove하고자 하는 item
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* Eco.array.remove(mon, "Feb");
		* trace("mon==>" + mon);	// output : mon==>["Jan","Mar","Apr"]
		* @memberOf Eco.array
		*/
        remove: function(array, item) 
        {
            var index = Eco.array.indexOf(array, item);

            if (index !== -1) 
            {
                array.splice(index, 1);
            }
        },
        
        /**
		* 배열을 복사한다.
		* @param {array} array 복사 대상 Array
		* @return {array} 복사된 Array
		* @example
		* var counts = [2, 10, 5, 1];
		* var clone = Eco.array.clone(counts);
		* trace("clone==>" + clone);	// output : clone==>[2,10,5,1]
		* @memberOf Eco.array
		*/
        clone: function(array) 
        {
            return array.slice(0);
            //return array.concat([]);
        },
        /**
		* 배열의 순서대로 각 요소들을 주어진 fn 함수로 처리하여 하나의 값으로 감소한다.
		* fn 함수는 배열의 각 요소별로 호출되는 함수이고, 4개의 argument을 가진다.
		* previousValue : 현재 처리 전의 값
		* currentValue: 현재 값
		* index: 현재 처리하는 array index
		* arr : 처리하는 대상 array
		* @param {array} arr 대상 Array
		* @param {function} fn 배열의 각 요소별로 호출되는 함수
		* @param {*=} initValue 초기 지정하는 값
		* @return {*} 감소 처리된 결과
		* @example
		* var arr = [0, 1, 2, 3];
		* var total = Eco.array.reduce(arr, function(a, b) {
		*     return a + b;
		* });
		* trace("total==>" + total);	// output : total==>6
		* var arr = [[0, 1], [2, 3], [4, 5]];
		* var flattened = Eco.array.reduce(arr, function(a, b) {
		*     return a.concat(b);
		* });
		* trace("flattened==>" + flattened);	// output : flattened==>[0, 1, 2, 3, 4, 5]
		* @memberOf Eco.array
		* @function reduce
		*/
		reduce: Array.prototype.reduce ? function(arr, fn, initValue)
		{
			return arr.reduce(fn, initValue);
		} :
		function(arr, fn, initValue)
		{
			if ( arr == null )
			{
				Eco.Logger.info("arr is null or undefined !!");
				return;
			}
			if (typeof fn !== 'function')
			{
				Eco.Logger.info("Type of fn is not function!!");
				return;
			}
			var len = arr.length >>> 0,
				k = 0,
				value;
			if (arguments.length == 3)
			{
				value = arguments[2];
			}
			else
			{
				while (k < len && (arr[k] == null))
				{
					k++; 
				}
				if (k >= len)
				{
					Eco.Logger.info("Reduce of empty array with no initial value.");
					return;
				}
				value = arr[k++];
			}
			for (; k < len; k++)
			{
				if (arr[k] != null)
				{
					value = fn(value, arr[k], k, arr);
				}
			}
			return value;
		},
		/**
		* flatten method에서 사용하는 1차원 배열 저장소
		* @private
		* @memberOf Eco.array
		*/
		_rtnFlatten: [],
		
		/**
		* 1차원 배열로 재정의한다.
		* @param {array} array 처리 대상 배열
		* @return {array} 1차원 Array
		* @example
		* var flatten = Eco.array.flatten(['Jan', [10, 20], ['Feb', [1, 10]]]);
		* trace("flatten==>" + flatten);	// output : flatten==>[Jan,10,20,Feb,1,10]
		* @memberOf Eco.array
		*/
		flatten: function(array)
        {
			_rtnFlatten = [];
			return Eco.array._flatten(array);
        },
        
		/**
		* 1차원 배열로 재정의한다.
		* @private
		* @param {array} array 처리 대상 배열
		* @return {array} 1차원 Array
		* @memberOf Eco.array
		*/
        _flatten: function(array)
        {
			var i, len, 
				v, pThis = Eco.array;

			for (i = 0, len = array.length; i < len; i++) 
			{
				v = array[i];

				if (Eco.isArray(v))
				{
					pThis._flatten(v);
				} 
				else 
				{
					_rtnFlatten.push(v);
				}
			}

			return _rtnFlatten;
        },
        
        /**
		* 배열중에 가장 큰 값을 리턴한다.
		* @param {array} array 검색 대상 배열
		* @return {number} maximum Value
		* @example
		* var counts = [2, 10, 5, 1];
		* var max = Eco.array.max(counts);
		* trace("max==>" + max);	// output : max==>10
		* @memberOf Eco.array
		*/
        max: function(array) 
        {
			return Math.max.apply(Math, array);
        },
        
        /**
		* 배열중에 가장 작은 값을 리턴한다.
		* @param {array} array 검색 대상 배열
		* @return {number} minimum Value
		* @example
		* var counts = [2, 10, 5, 1];
		* var min = Eco.array.min(counts);
		* trace("min==>" + min);	// output : min==>1
		* @memberOf Eco.array
		*/
        min: function(array) 
        {
			return Math.min.apply(Math, array);
        },
        
        /**
		* 배열의 모든 항목에 대한 합계를 구한다.
		* @param {array} array 처리 대상 배열
		* @param {number} start 배열 시작 index
		* @param {number} len 계산할 배열 length
		* @return {number} sum value
		* @example
		* var counts = [2, 10, 5, 1];
		* var sum = Eco.array.sum(counts);
		* trace("sum==>" + sum);	// output : min==>18
		* @memberOf Eco.array 
		*/
        sum: function(array, start, len) 
        {
			if ( start == null ) start = 0;
			if ( len == null ) len = array.length;
			var sum = 0;
			for (var i=start ; i<len; sum+=array[i++]);
			return sum;
        },
 
		/**
		* 지정된 두 항목의 위치을 바꾼다.
		* @param {array} array exchange 대상 Array
		* @param {number} from 바꾸고자 하는 item index
		* @param {number} to 바꾸고자 하는 item index
		* @return {boolean} 위치가 정상적으로 변경되었으면 true, 그렇지않다면 false를 리턴
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* var exchange = Eco.array.exchange(mon, 1,3);
		* trace("exchange==>" + exchange + ", mon==>" + mon);
		* // output : exchange==>true, mon==>["Jan","Apr","Mar","Feb"]
		* @memberOf Eco.array
		*/
		exchange: function(array, from, to) 
        {
			if ( array[from] && array[to] ) 
			{
				var remove1 = array.splice(from, 1, "");
				var remove2 = array.splice(to, 1, "");
				array.splice(from, 1, remove2.pop());
				array.splice(to, 1, remove1.pop());
				return true;
			} 
			else 
			{
				return false;
			}
        },
        
        /**
		* 지정된 항목을 원하는 위치로 이동시킨다.
		* @param {array} array move 대상 Array
		* @param {number} from 이동시킬 item index
		* @param {number} to 새로 위치하고자 하는 item index
		* @return {boolean} 위치가 정상적으로 이동되었으면 true, 그렇지않다면 false를 리턴
		* @example
		* var mon = ["Jan","Feb","Mar","Apr"];
		* var move = Eco.array.move(mon, 1,3);
		* trace("move==>" + move + ", mon==>" + mon);
		* // output : move==>true, mon==>["Jan","Mar","Apr","Feb"]
		* @memberOf Eco.array
		*/
        move: function(array, from, to) 
        {
			//array.splice(to, 0, array.splice(from, 1)[0]);
			
			var i, tmp;
			from = parseInt(from, 10);
			to = parseInt(to, 10);
			
			if (from !== to && 
				0 <= from && from <= array.length && 
				0 <= to && to <= array.length) 
			{
				
				tmp = array[from];
				if (from < to) 
				{
					for (i = from; i < to; i++) 
					{
						array[i] = array[i + 1];
					}
				} 
				else 
				{
					for (i = from; i > to; i--) 
					{
						array[i] = array[i - 1];
					}
				}
				
				array[to] = tmp;
				return true;
			}
			
			return false;
        },
        
        /**
        * 배열 항목의 필드를 기준으로 배열 항목을 정렬 처리한다.<br>
		* 배열의 각 항목은 하나 이상의 속성을 가진 객체이고,<br>
		* 모든 객체에는 최소한 하나 이상의 공통 속성을 가지며,<br>
		* 이 값은 배열 항목을 정렬하는데 사용된다.<br>
		* 매개변수가 여러개인 경우에는 첫번째 필드는 1차, 두번째 필드는 다음 정렬 필드로 사용된다.
		* @param {array} array Sort 대상 Array
		* @param {object...} 정렬 기준 필드
		* @return {array} Sort 처리된 Array
		* @example
		* var users = [];
		* users[0] = {id:"milk", name:"park", age:33};
		* users[1] = {id:"apple", name:"kim"};
		* users[2] = {id:"oops", name:"joo", age:44};
		* users[3] = {id:"beans", name:"lee", age:50};
		* users[4] = {id:"zoo", age:65};
		* users[5] = {id:"milk", name:"", age:33};
		* users[6] = {id:"milk", name:"lee", age:33};	
		* var sorted = Eco.array.sortOn(users, "name","id");
		* for(var i=0; i < sorted.length; i++)
		* {
		* 	var tmp = sorted[i];
		* 	trace("name:" + tmp.name + " || id:" + tmp.id + " || age:" + tmp.age);
		* 	// output : name: || id:milk || age:33
		* 	// output : name:joo || id:oops || age:44
		* 	// output : name:kim || id:apple || age:undefined
		* 	// output : name:lee || id:beans || age:50
		* 	// output : name:lee || id:milk || age:33
		* 	// output : name:park || id:milk || age:33
		* 	// output : name:undefined || id:zoo || age:65
		* }
		* @memberOf Eco.array
		*/
        sortOn: function(array) 
        {
			var arr, i,
				args = [];
				
			arr = array.slice(0);
			if (!arguments.length) 
			{
				return arr.sort();
			}
			
			for (i = 0; i < arguments.length; i++) 
			{
				args.push(arguments[i]);
			}

			return arr.sort(function (a, b) 
			{
				var compareProp, prop,
					i0, i1;
				
				compareProp = args.slice(0);
				prop = compareProp.shift();
				
				while (a[prop] == b[prop] && compareProp.length)
				{
					prop = compareProp.shift();
				}
				
				i0 = a[prop];
				i1 = b[prop];
			
				if (i0 === undefined && i1 !== undefined)
				{
					return 1;
				}
				else if (i0 !== undefined && i1 === undefined)
				{
					return -1;
				}
				
				return i0 == i1 ? 0 : i0 > i1 ? 1 : -1;
			});
        },
        
        /**
        * 이차원 배열의 이차 요소별로 정렬하여 새로운 배열을 반환하다.
		* @param {array} arr 정렬 대상 2차원 배열
		* @param {array} sortOrders 2차요소 정렬 기준 ("ASC":오름차순, "DESC":내림차순)
		* @return {array} 정렬 처리된 Array
		* @example
		*	var arr = [['A', 'a', '가'],
		*			   ['A', 'a', '나'],
		*			   ['A', 'b', '나'],
		*			   ['A', 'b', '가'],
		*			   ['B', 'b', '가'],
		*			   ['B', 'b', '나'],
		*			   ['B', 'a', '가'],
		*			   ['B', 'b', '다'],
		*			   ['B', 'c', '가'],
		*			   ['A', 'd', '가'],
		*			   ['A', 'c', '가'],
		*			   ['C', 'c', '가'],
		*			   ['C', 'a', '가'],
		*			   ['C', 'b', '가']];		
		*
		*   var sorted = Eco.array.sortTwoDimensional(arr, ["ASC", "DESC", "ASC"]);
		*	for (var i=0; i<sorted.length; i++)
		*	{
		*		trace(arr[i][0] + " : " + arr[i][1] + " : " + arr[i][2]);
		*	}
		*
		*	----------
		*	output
		*	----------
		*	A : d : 가
		*	A : c : 가
		*	A : b : 나
		*	A : b : 가
		*	A : a : 나
		*	A : a : 가
		*	B : c : 가
		*	B : b : 다
		*	B : b : 나
		*	B : b : 가
		*	B : a : 가
		*	C : c : 가
		*	C : b : 가
		*	C : a : 가
		*
		* @memberOf Eco.array
		*/
        sortTwoDimensional: function(arr, sortOrders) 
        {
			return arr.sort(function (a, b) 
			{
				var len = sortOrders.length;
				for (var s=0; s<len; s++)
				{
					if ( sortOrders[s] == "ASC" )
					{
						if ( a[s] < b[s] ) return -1;
						if ( a[s] > b[s] ) return 1;
					}
					else if ( sortOrders[s] == "DESC" )
					{
						if ( a[s] < b[s] ) return 1;
						if ( a[s] > b[s] ) return -1;
					}
				}
				return 0;
			});
        },
        
        /**
        * 지정된 속성의 값이 처음으로 일치하는 객체의 배열 위치를 반환한다.<br>
        * 배열의 각 항목은 하나 이상의 속성을 가진 객체이다.<br> 
		* @param {array} array 검색 대상 Array
		* @param {string} prop 기준 속성
		* @param {string} item 기준 값
		* @param {number=} from 검색의 시작 위치 (default: 0)
		* @param {boolean=} reverse 반복순서 (default: false)
		* @return {number} 검색된 배열 위치. 없다면 -1 리턴
		* @example
		* var users = [];
		* users[0] = {id:"milk", name:"park", age:33};
		* users[1] = {id:"apple", name:"kim"};
		* users[2] = {id:"oops", name:"joo", age:44};
		* users[3] = {id:"beans", name:"lee", age:50};
		* users[4] = {id:"zoo", age:65};
		* users[5] = {id:"milk", name:"", age:33};
		* users[6] = {id:"milk", name:"lee", age:33};
		* var index = Eco.array.indexOfProp(users, "name", "lee");
		* trace("index==>" + index);	// output : index==>3
		* var index = Eco.array.indexOfProp(users, "age", 20);
		* trace("index==>" + index);	// output : index==>-1
		* @memberOf Eco.array
		*/
	    indexOfProp: function(array, prop, item, from, strict) 
		{
			var len = array.length,
				from = Number(from) || 0,
				strict = strict || false,
				 obj, propValue;
			
			from = (from < 0) ? Math.ceil(from) : Math.floor(from);
			if (from < 0)
			{
				from += len;
			}
			
			if (strict)
			{
				for (; from < len; from++) 
				{
					if (from in array && array[from])
					{
						obj = array[from],
						propValue = obj[prop];
						
						if (propValue === item)
						{
							return from;
						}
					}
				}
			}
			else
			{
				for (; from < len; from++) 
				{
					if (from in array && array[from])
					{
						obj = array[from],
						propValue = obj[prop];
						
						if (propValue == item)
						{
							return from;
						}
					}
				}
			}
			
			return -1;
		},
		
		/**
		* 지정된 속성의 값이 처음으로 일치하는 객체의 배열 위치를 뒤에서부터 찾아 반환한다.<br>
        * 배열의 각 항목은 하나 이상의 속성을 가진 객체이다.<br> 
		* @param {array} array 검색 대상 Array
		* @param {string} prop 기준 속성
		* @param {string} item 기준 값
		* @param {number=} from 검색의 시작 위치 (default: 0)
		* @param {boolean=} reverse 반복순서 (default: false)
		* @return {number} 검색된 배열 위치. 없다면 -1 리턴
		* @example
		* var users = [];
		* users[0] = {id:"milk", name:"park", age:33};
		* users[1] = {id:"apple", name:"kim"};
		* users[2] = {id:"oops", name:"joo", age:44};
		* users[3] = {id:"beans", name:"lee", age:50};
		* users[4] = {id:"zoo", age:65};
		* users[5] = {id:"milk", name:"", age:33};
		* users[6] = {id:"milk", name:"lee", age:33};
		* var index = Eco.array.lastIndexOfProp(users, "name", "lee");
		* trace("index==>" + index);	// output : index==>6
		* var index = Eco.array.lastIndexOfProp(users, "name", "lee", 5);
		* trace("index==>" + index);	// output : index==>3
		* @memberOf Eco.array
		*/
		lastIndexOfProp: function(array, prop, item, from, strict)
		{
			var i, obj, 
				propValue;
			
			if (from == null)
			{
				from = array.length - 1;
			}
			else if (from < 0)
			{
				from = Math.max(0, array.length + from);
			}
			
			var strict = strict || false;
			
			if (strict)
			{
				for (i=from; i>=0; i--)
				{
					if (i in array && array[i])
					{
						obj = array[i],
						propValue = obj[prop];
						
						if (propValue === item)
						{
							return i;
						}
					}
				}
			}
			else
			{
				for (i=from; i>=0; i--)
				{
					if (i in array && array[i])
					{
						obj = array[i],
						propValue = obj[prop];
						
						if (propValue == item)
						{
							return i;
						}
					}
				}
			}
			
			return -1;
		},

        /**
        * 배열 arr에서 배열 arr1의 모든 항목을 뺀 차 집합 배열을 리턴한다.<br>
		* @param {array} arr 기준 Array
		* @param {array} arr1 대상 Array
		* @return {array} 차집합 Array
		* @example
		* var arr = [2, 10, 5, 1, 7];
		* var arr1 = [9, 15, 5, 2];
		* var result = Eco.array.difference(arr , arr1);
		* trace(result);	// output : index==>10,1,7
		* @memberOf Eco.array
		*/
        difference: function(arr, arr1) 
        {
            var clone = Eco.array.clone(arr),
                cln = clone.length,
                i, j, arrLen;

            for (i = 0,arrLen = arr1.length; i < arrLen; i++) 
            {
                for (j = 0; j < cln; j++) 
                {
                    if (clone[j] === arr1[i]) 
                    {
                        Eco.array.removeAt(clone, j);
                        j--;
                        cln--;
                    }
                }
            }

            return clone;
        },

		/**
        * source Array의 시작 index로 주어진 length길이만큼 요소들을 destination Array의 시작 index에서 부터 복사한다.<br>
        * Java에서 System.arraycopy 함수와 동일하다고 보면 된다.
		* @param {array} arr 정렬 대상 2차원 배열
		* @param {array} sortOrders 2차요소 정렬 기준 ("ASC":오름차순, "DESC":내림차순)
		* @return {array} 정렬 처리된 Array
		* @example
		*	var copyFrom = [ 'd', 'e', 'c', 'a', 'f', 'f', 'e', 'i', 'n', 'a', 't', 'e', 'd' ];
		*	var copyTo = new Array(7);
		*
		*   // copies an array from the specified source array
		*	Eco.array.arrayCopy(copyFrom, 2, copyTo, 0, 7);
		*	trace(copyTop.join("")); // output : caffein
		* @memberOf Eco.array
		*/
		arrayCopy: function(src, srcPos, dest, destPos, length)
		{
			if ( !length ) return;
			// copy src to dest from index srcPos to index destPos of length recursivly on objects
			var cnt = length + srcPos;
			if ( src == dest )
			{
				src = src.slice(srcPos, cnt);
				cnt = src.length;
				for (var i = 0, j = destPos; i < cnt; i++, j++)
				{
					dest[j] = src[i];
				}
			}
			else
			{
				for (var i = srcPos, j = destPos; i < cnt; i++, j++)
				{
					dest[j] = src[i];
				}
			}
		},
		_defaultCompare: function(a, b)
		{
			if ( a != null )
			{
				if ( b != null )
				{
					if ( a == b ) return 0;
					if ( a > b ) return 1;
				}
				return -1;
			}
			if ( b != null ) return 1;
			return 0;
		},
		/**
        * 값에 sorted된 array에 대한 index을 찾아서 반환한다. sort함수인 compareFn 함수를 사용한다.
		* @param {array} arr 정렬 대상 1차원 배열
		* @param {number} start 시작할 검색 index
		* @param {number} len 검색 range 크기
		* @param {number} item 검색할 값
		* @param {function} compareFn 각 요소마다 비교할 함수
		* @return {number} 검색한 index
		* @example
		* var compare = Eco.array._defaultCompare,
		* arrayUtil = Eco.array;
		* Eco.Logger.startElapsed();
		* var datas = [], pos, max = 10000;
		* for ( var i = 0; i < max ; i++ )
		* {
		*   var idx = Math.floor(Math.random() * max);
		*   pos = arrayUtil.binarySearch(datas, 0, datas.length, idx, compare);
		*   if( pos < 0 )
		*   {
		*     pos = ~pos;
		*     datas.splice(pos, 0, idx);
		*   }
		* }
		* Eco.Logger.info({message: "경과시간=> ", elapsed: true});
		* console.log(datas);
		*	Eco.DatasetMap 객체에서 이 함수 사용함.
		* @memberOf Eco.array
		*/
		binarySearch: function(arr, start, len, item, compareFn)
		{
			if ( !compareFn )
			{
				compareFn = Eco.array._defaultCompare;
			}
			var high = start + len -1,
				low = start;

			while (low <= high)
			{
				var i = low + ((high - low) >> 1);
				var order = compareFn(arr[i], item);
				if ( order == 0 ) return i;
				if ( order < 0 )
				{
					low = i + 1;
				}
				else
				{
					high = i - 1;
				}
			}
			return ~low;
		}
        
	});
}

/**
 * @fileoverview Date 처리를 위한 함수.
 */

if ( !JsNamespace.exist("Eco.date") )
{
	/**
	 * @namespace
	 * @name Eco.date
     * @memberof! <global>
	 */
	JsNamespace.declare("Eco.date", {
		
		/**
		 * 요일명칭 정의<br>
		 * getMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
		 * @example : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
		 * @public
		 * @type array
		 * @memberOf Eco.date
		 */			
		weekName: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
		//weekName: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],				
		
		/**
		 * 축약 요일명칭 정의<br>
		 * getMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
		 * @example
		 * ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
		 * @public
		 * @type array
		 * @memberOf Eco.date
		 */	
		weekShortName: ["일", "월", "화", "수", "목", "금", "토"],
		//weekShortName: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],		
		
		/**
		 * 월명칭 정의<br>
		 * getMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
		 * @example
		 * ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		 * @public
		 * @type array
		 * @memberOf Eco.date
		 */	
		monthName: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		//monthName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		
		/**
		 * 축약 월명칭 정의<br>
		 * getMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
		 * @example
		 * ["Jan ", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		 * @public
		 * @type array
		 * @memberOf Eco.date
		 */	
		monthShortName: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		//monthShortName: ["Jan ", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		
		/**
		 * 오전/오후<br>
		 * getMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
		 * @example
		 * ["AM", "PM"]
		 * @public
		 * @type array
		 * @memberOf Eco.date
		 */	
		ttName: ["오전", "오후"],
		//ttName: ["AM", "PM"],
		
		/**
		 * 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 증감한다.
		 * @param {string|date} value 'yyyyMMdd' 형태로 표현된 String 또는 Date.
		 * @param {number} offset 날짜로부터 증가 감소값.
		 * @return {string|date} 'yyyyMMdd' 형태로 표현된 String 또는 Date Value.
		 * @example
		 * // 2013/04/29 16:39:04 test함. 
		 * trace(Eco.date.addDate(new Date(), 3)); // output : Thu May 02 2013 16:39:04 GMT+0900
		 * var val = Eco.date.getMaskFormatString(new Date(), "yyyyMMdd");
		 * trace(Eco.date.addDate(val, 3)); // output : 20130502 
		 * @memberOf Eco.date
		 */
		addDate: function(value, offset) 
		{
			var dt;
			if ( Eco.isDate(value) )
			{
				//var nTmpHour = value.getHours();
				dt = new Date();
				dt.setFullYear(value.getFullYear(), value.getMonth(), value.getDate() + offset);
				dt.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
				dt.setMilliseconds(value.getMilliseconds());
				//if ( dt.getHours() != nTmpHour )
				//{
				//	dt.setHours(dt.getHours() + 2);
				//}
				return dt;
			}
			else
			{
				dt = new Date();
				dt.setFullYear(parseInt(value.substr(0, 4)), parseInt(value.substr(4, 2)-1), parseInt(value.substr(6, 2)) + offset);
				dt.setHours(0, 0, 0);
				dt.setMilliseconds(0);
				return Eco.date.getMaskFormatString(dt, "yyyyMMdd");
			}
		},

		/**
		 * 입력된 날짜에 OffSet 으로 지정된만큼의 월을 증감한다.
		 * @param {string | date} value 'yyyyMMdd' 형태로 표현된 String 또는 Date.
		 * @param {number} offset 월 증감값 ( 예 : 1 또는 -1 ) 
		 * @return {string | date} 'yyyyMMdd' 형태로 표현된 String 또는 Date Value.
		 * @example
		 * var dt = Eco.date.strToDate("20130331");
		 * var dt0 = Eco.date.addMonth(dt, 1);
		 * trace(dt0); // output : Tue Apr 30 2013 00:00:00 GMT+0900
		 * var str1 = "20130331";
		 * var str = Eco.date.addMonth(str1, 1);
		 * trace(str); // output : 20130430 
		 * @memberOf Eco.date
		 */
		addMonth: function(value, offset) 
		{
			var pThis = Eco.date;
			var dt;
			if ( Eco.isDate(value) )
			{
				var nTmpday = value.getDate();
				dt = new Date();
				dt.setFullYear(value.getFullYear(), value.getMonth() + offset, value.getDate());
				dt.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
				dt.setMilliseconds(value.getMilliseconds());
				if ( dt.getDate() != nTmpday )
				{
					dt.setMonth(dt.getMonth() - 1);
					dt.setDate(pThis.getLastDayOfMonth(dt));
				}
				return dt;
			}
			else
			{
				var nTmpday = parseInt(value.substr(6, 2));
				dt = new Date();
				dt.setFullYear(parseInt(value.substr(0, 4)), parseInt(value.substr(4, 2)-1) + offset, nTmpday);
				dt.setHours(0, 0, 0);
				dt.setMilliseconds(0);
				if ( dt.getDate() != nTmpday )
				{
					dt.setMonth(dt.getMonth() - 1);
					dt.setDate(pThis.getLastDayOfMonth(dt));
				}
				return pThis.getMaskFormatString(dt, "yyyyMMdd");
			}
		},

		/**
		 * 두 일자간의 차이 일수 계산.
		 * @param {date | string} fromDate Date Object 또는 yyyyMMdd형태의 From 일자 ( 예 : "20121122" ).
		 * @param {date | string} toDate Date Object 또는 yyyyMMdd형태의 To 일자 ( 예 : "20121202" ).
		 * @return {number} 숫자 형태의 차이일수  ( 예 : 10 ). 단, fromDate < toDate 음수가 return된다.
		 * @example
		 * var fromdt = Eco.date.strToDate("20120331");
		 * var todt = Eco.date.strToDate("20130420");
		 * var day = Eco.date.getDiffDay(fromdt, todt);
		 * trace(day); // output : 385
		 * var fromstr = "20120331";
		 * var tostr = "20130420";
		 * var day = Eco.date.getDiffDay(fromstr, tostr);
		 * trace(day); // output : 385
		 * @memberOf Eco.date
		 */
		getDiffDay: function(fromDate, toDate)
		{
			var pThis = Eco.date;
			
			if(Eco.isString(fromDate) && Eco.isString(toDate))
			{
				fromDate = new Date(parseInt(fromDate.substring(0,4),  10), parseInt(fromDate.substring(4,6)-1,  10), parseInt(fromDate.substring(6,8), 10));
				toDate   = new Date(parseInt(toDate.substring(0,4),  10), parseInt(toDate.substring(4,6)-1,  10), parseInt(toDate.substring(6,8), 10));
			}

			var flag = 1, nDay;
			if ( fromDate >  toDate )
			{
				flag = -1;
				var tmpDt = toDate;
				toDate = fromDate;
				fromDate = tmpDt;
			}

			if (fromDate.getFullYear() != toDate.getFullYear() )
			{
				nDay = (pThis.isLeapYear(fromDate.getFullYear()) ? 366 : 365) - pThis.getDayOfYear(fromDate) + pThis.getDayOfYear(toDate);
				var nYear = fromDate.getFullYear();
				while (nYear++ < toDate.getFullYear() - 1)
				{
					nDay = nDay + (pThis.isLeapYear(nYear) ? 366 : 365);
				}
			}
			else
			{
				nDay = pThis.getDayOfYear(toDate) - pThis.getDayOfYear(fromDate);
			}
			return nDay*flag;
		},

		/**
		 * 두 월간의 차이 월수 계산. (정확한 달수를 처리하려면 fromDate Day값을 1로 하고 toDate를 마지막일자로 처리하여야 한다.)<br>
		 * 시작일자의 Day값이 1로 아니면 소수점((마지막일자 - 해당월의 일수)/마지막일자)으로 계산한다.<br>
		 * 끝일자의 Day값이 마지막일자가 아니면 소수점(해당월의 일수/마지막일자)를 계산한다.
		 * @param {date | string} fromDate Date Object 또는 yyyyMMdd형태의 From 일자 ( 예 : "20121122" ).
		 * @param {date | string} toDate Date Object 또는 yyyyMMdd형태의 To 일자 ( 예 : "20121202" ).
		 * @return {number} 숫자 형태의 차이월수  ( 예 : 10 ). 단, fromDate < toDate 음수가 return된다.
		 * @example
		 * var fromdt = Eco.date.strToDate("20130301");
		 * var todt = Eco.date.strToDate("20130501");
		 * var month = Math.ceil(Eco.date.getDiffMonth(fromdt, todt));
		 * trace(month); // output : 3
		 * var fromstr = "20120331";
		 * var tostr = "20130420";
		 * var month = Eco.date.getDiffMonth(fromstr, tostr);
		 * trace(month); // output : 12.69
		 * @memberOf Eco.date
		 */
		getDiffMonth: function(fromDate, toDate)
		{
			var pThis = Eco.date;
			
			if(Eco.isString(fromDate) && Eco.isString(toDate))
			{
				fromDate = new Date(parseInt(fromDate.substring(0,4),  10), parseInt(fromDate.substring(4,6)-1,  10), parseInt(fromDate.substring(6,8), 10));
				toDate   = new Date(parseInt(toDate.substring(0,4),  10), parseInt(toDate.substring(4,6)-1,  10), parseInt(toDate.substring(6,8), 10));
			}

			var flag = 1, nMonth, nDay;
			if ( fromDate >  toDate )
			{
				flag = -1;
				var tmpDt = toDate;
				toDate = fromDate;
				fromDate = tmpDt;
			}

			if ( fromDate.getDate() == 1 )
			{
				nMonth = 1;
				nDay = 0;
			}
			else
			{
				nMonth = 0;
				var lastday = pThis.getLastDayOfMonth(fromDate);
				nDay = Math.floor(( lastday - fromDate.getDate() + 1)/lastday, 2);
			}

			if ( toDate.getDate() == pThis.getLastDayOfMonth(toDate) )
			{
				nMonth += 1;
			}
			else
			{
				nDay += Math.floor(toDate.getDate()/pThis.getLastDayOfMonth(toDate), 2);
			}

			if (fromDate.getFullYear() != toDate.getFullYear() )
			{
				nMonth += 12 - (fromDate.getMonth() + 1) + toDate.getMonth();
				var nYear = fromDate.getFullYear();
				while (nYear++ < toDate.getFullYear() - 1)
				{
					nMonth = nMonth + 12;
				}
			}
			else
			{
				nMonth += toDate.getMonth() - (fromDate.getMonth() + 1);
			}
			return (nMonth + nDay)*flag;
		},

		/**
		 * 해당월의 마지막 날짜를 숫자로 구하기.
		 * @param {number | string} value yyyyMMdd형태의 날짜 ( 예 : "20121122" ).
		 * @return {number} 마지막 날짜 숫자값 ( 예 : 30 ).
		 * @example
		 * var dt = Eco.date.strToDate("20120302"); // convert Date type from "20120302".
		 * var day = Eco.date.getLastDayOfMonth(dt);
		 * trace(day); // output : 31
		 * var dtstr = "20120302";
		 * var day = Eco.date.getLastDayOfMonth(dtstr);
		 * trace(day); // output : 31
		 * @memberOf Eco.date
		 */
		getLastDayOfMonth: function(value) 
		{
			var nMonth, nLastDate;

			if ( Eco.isDate(value) )
			{
				nMonth = value.getMonth() + 1;
			}
			else
			{
				nMonth = parseInt(value.substr(4,2), 10);
			}
			if( nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7  || nMonth == 8 || nMonth == 10 || nMonth == 12 ) 
			{
				nLastDate = 31;
			} 
			else if( nMonth == 2 ) 
			{
				if( Eco.date.isLeapYear(value) == true ) 
				{
					nLastDate = 29;
				} 
				else 
				{
					nLastDate = 28;
				}
			} 
			else 
			{
				nLastDate = 30;
			}
				
			return nLastDate;
		},

		/**
		 * yyyyMMdd형태의 날짜를 입력하면 해당연도의 날짜에 해당하는 주차반환.
		 * @param {date|string} date Date Object 또는 날짜형 스트링.
		 * @return {number} 주차에 해당하는 숫자  ( 예 : 10 ).
		 * @example
		 * var dt = Eco.date.strToDate("20130331"); // convert Date type from "20130331".
		 * var week = Eco.date.getWeekOfYear(dt);
		 * trace(week); // output : 14
		 * var dtstr = "20130331";
		 * var week = Eco.date.getWeekOfYear(dt);
		 * trace(week); // output : 14
		 * @memberOf Eco.date
		 */
		getWeekOfYear: function(date)
		{
			if ( Eco.isString(date) )
			{
				date = this.strToDate(date);
			}
			if ( !Eco.isDate(date) )
			{
				return -1;
			}
			
			var onejan = new Date();
			
			onejan.setYear(date.getFullYear());
			onejan.setMonth(0);
			onejan.setDate(1);	
									
			return Math.ceil((((date - onejan) / 86400000) + onejan.getDay()+1)/7);
		},

		/**
		 * 달별 일자 Offset
		 * @private
		 * @memberOf Eco.date
		 */
		_dayOfYearOffset: [0, 
							31, 
							31 + 28, 
							31 + 28 + 31, 
							31 + 28 + 31 + 30, 
							31 + 28 + 31 + 30 + 31, 
							31 + 28 + 31 + 30 + 31 + 30, 
							31 + 28 + 31 + 30 + 31 + 30 + 31, 
							31 + 28 + 31 + 30 + 31 + 30 + 31 + 31, 
							31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30, 
							31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31, 
							31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30],

		/**
		 * 해당연도의 1월 1일부터 날짜까지의 일 수 반환.
		 * @param {date|string} date Date Object 또는 날짜형 스트링.
		 * @return {number} 일수
		 * @example
		 * var dt = Eco.date.strToDate("20130420"); // convert Date type from "20130420".
		 * var days = Eco.date.getDayOfYear(dt);
		 * trace(days); // output : 110
		 * var dtstr = "20130420";
		 * var days = Eco.date.getDayOfYear(dtstr);
		 * trace(days); // output : 110
		 * @memberOf Eco.date
		 */
		getDayOfYear: function(date)
		{
			var pThis = Eco.date;
			
			if ( Eco.isString(date) )
			{
				date = pThis.strToDate(date);
			}
			
			if ( !Eco.isDate(date) )
			{
				Eco.Logger.error({"message":"invalid date", "stack":true});
			}
			
			var nDay = pThis._dayOfYearOffset[date.getMonth()] + date.getDate();
			if (pThis.isLeapYear(date.getFullYear()))
			{
				nDay = nDay + 1;
			}
			return nDay;
		},	

		
		/**
		 * yyyy, yyyyMM, yyyyMMdd, yyyyMMddhh, yyyyMMddhhmm, yyyyMMddhhmmss 형태의 String을 Date객체로 만들기.
		 * @param {string} value yyyy ~ yyyyMMddhhmmss형태의 날짜String ( 예 : "20121122" ).
		 * @return {date} Date Object.
		 * @example
		 * var dt = Eco.date.strToDate("20120331"); // convert Date type from "20120331".
		 * trace(dt); // output : Sat Mar 31 2012 00:00:00 GMT+0900
		 * var dt = Eco.date.strToDate("20130320123022"); // convert Date type from "20130320123022".
		 * trace(dt); // output : Wed Mar 20 2013 12:30:22 GMT+0900
		 * @memberOf Eco.date
		 */
		strToDate: function(value) 
		{
			var dt = new Date();
			if ( value.length == 4 ) //yyyy
			{
				dt.setFullYear(parseInt(value), 0, 0);
				dt.setHours(0, 0, 0);
				dt.setMilliseconds(0);
			}
			else if ( value.length == 6 ) //yyyyMM
			{
				dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, 0);
				dt.setHours(0, 0, 0);
				dt.setMilliseconds(0);
			}
			else if ( value.length == 8 ) //yyyyMMdd
			{
				dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
				dt.setHours(0, 0, 0);
				dt.setMilliseconds(0);
			}
			else if ( value.length == 10 ) //yyyyMMddhh
			{
				dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
				dt.setHours(parseInt(value.substr(8,2)), 0, 0);
				dt.setMilliseconds(0);
			}
			else if ( value.length == 12 )//yyyyMMddhhmm
			{
				dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
				dt.setHours(parseInt(value.substr(8,2)), parseInt(value.substr(10,2)), 0);
				dt.setMilliseconds(0);
			}
			else if ( value.length == 14 ) //yyyyMMddhhmmss
			{
				dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
				dt.setHours(parseInt(value.substr(8,2)), parseInt(value.substr(10,2)), parseInt(value.substr(12,2)));
				dt.setMilliseconds(0);
			}
			return dt;
		},	
		
		/**
		 * 윤년 여부.
		 * @param {string} value yyyyMMdd형태의 날짜 ( 예 : "20121122" ).
		 * @return {boolean} 윤년 여부.입력되지 않은 경우도 false
		 * @example
		 * var yyyy = 2013;
		 * var flag = Eco.date.isLeapYear(yyyy);
		 * trace(flag); // output : false
		 * var ymd = "20120301";
		 * var flag = Eco.date.isLeapYear(ymd);
		 * trace(flag); // output : true
		 * @memberOf Eco.date
		 */
		isLeapYear: function(value)
		{
			var result;
			var year;
			if ( Eco.isString(value) )
			{
				year = parseInt(value.substring(0,4), 10);
			}

			if ((year % 4) == 0) 
			{
				if ((year % 100) != 0 || (year % 400) == 0){
					result = true;
				} 
				else 
				{
					result = false;
				}
			} 
			else 
			{
				result = false;
			}
			
			return result;
		},	
		
		
		/**
		 * 각 월별 음력 기준 정보 (처리가능 기간  1841 - 2043년)
		 * @memberOf Eco.date
		 * @private
		 */	 
		solarBase: (function(){
			var sBase;
			
			//1841
			sBase = "1,2,4,1,1,2,1,2,1,2,2,1,";
			sBase += "2,2,1,2,1,1,2,1,2,1,2,1,";
			sBase += "2,2,2,1,2,1,4,1,2,1,2,1,";
			sBase += "2,2,1,2,1,2,1,2,1,2,1,2,";
			sBase += "1,2,1,2,2,1,2,1,2,1,2,1,";
			sBase += "2,1,2,1,5,2,1,2,2,1,2,1,";
			sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
			sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
			sBase += "2,1,2,3,2,1,2,1,2,1,2,2,";
			sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
			//1851
			sBase += "2,2,1,2,1,1,2,1,2,1,5,2,";
			sBase += "2,1,2,2,1,1,2,1,2,1,1,2,";
			sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
			sBase += "1,2,1,2,1,2,5,2,1,2,1,2,";
			sBase += "1,1,2,1,2,2,1,2,2,1,2,1,";
			sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
			sBase += "1,2,1,1,5,2,1,2,1,2,2,2,";
			sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
			sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
			sBase += "2,1,6,1,1,2,1,1,2,1,2,2,";
			//1861
			sBase += "1,2,2,1,2,1,2,1,2,1,1,2,";
			sBase += "2,1,2,1,2,2,1,2,2,3,1,2,";
			sBase += "1,2,2,1,2,1,2,2,1,2,1,2,";
			sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
			sBase += "2,1,1,2,4,1,2,2,1,2,2,1,";
			sBase += "2,1,1,2,1,1,2,2,1,2,2,2,";
			sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
			sBase += "1,2,2,3,2,1,1,2,1,2,2,1,";
			sBase += "2,2,2,1,1,2,1,1,2,1,2,1,";
			sBase += "2,2,2,1,2,1,2,1,1,5,2,1,";
			//1871
			sBase += "2,2,1,2,2,1,2,1,2,1,1,2,";
			sBase += "1,2,1,2,2,1,2,1,2,2,1,2,";
			sBase += "1,1,2,1,2,4,2,1,2,2,1,2,";
			sBase += "1,1,2,1,2,1,2,1,2,2,2,1,";
			sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
			sBase += "2,2,1,1,5,1,2,1,2,2,1,2,";
			sBase += "2,2,1,1,2,1,1,2,1,2,1,2,";
			sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
			sBase += "2,2,4,2,1,2,1,1,2,1,2,1,";
			sBase += "2,1,2,2,1,2,2,1,2,1,1,2,";
			//1881
			sBase += "1,2,1,2,1,2,5,2,2,1,2,1,";
			sBase += "1,2,1,2,1,2,1,2,2,1,2,2,";
			sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
			sBase += "2,1,1,2,3,2,1,2,2,1,2,2,";
			sBase += "2,1,1,2,1,1,2,1,2,1,2,2,";
			sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
			sBase += "2,2,1,5,2,1,1,2,1,2,1,2,";
			sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
			sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
			sBase += "1,5,2,1,2,2,1,2,1,2,1,2,";
			//1891
			sBase += "1,2,1,2,1,2,1,2,2,1,2,2,";
			sBase += "1,1,2,1,1,5,2,2,1,2,2,2,";
			sBase += "1,1,2,1,1,2,1,2,1,2,2,2,";
			sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
			sBase += "2,1,2,1,5,1,2,1,2,1,2,1,";
			sBase += "2,2,2,1,2,1,1,2,1,2,1,2,";
			sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
			sBase += "2,1,5,2,2,1,2,1,2,1,2,1,";
			sBase += "2,1,2,1,2,1,2,2,1,2,1,2,";
			sBase += "1,2,1,1,2,1,2,5,2,2,1,2,";
			//1901
			sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
			sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
			sBase += "1,2,1,2,3,2,1,1,2,2,1,2,";
			sBase += "2,2,1,2,1,1,2,1,1,2,2,1,";
			sBase += "2,2,1,2,2,1,1,2,1,2,1,2,";
			sBase += "1,2,2,4,1,2,1,2,1,2,1,2,";
			sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
			sBase += "2,1,1,2,2,1,2,1,2,2,1,2,";
			sBase += "1,5,1,2,1,2,1,2,2,2,1,2,";
			sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
			//1911
			sBase += "2,1,2,1,1,5,1,2,2,1,2,2,";
			sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
			sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
			sBase += "2,2,1,2,5,1,2,1,2,1,1,2,";
			sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
			sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
			sBase += "2,3,2,1,2,2,1,2,2,1,2,1,";
			sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
			sBase += "1,2,1,1,2,1,5,2,2,1,2,2,";
			sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
			//1921
			sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
			sBase += "2,1,2,2,3,2,1,1,2,1,2,2,";
			sBase += "1,2,2,1,2,1,2,1,2,1,1,2,";
			sBase += "2,1,2,1,2,2,1,2,1,2,1,1,";
			sBase += "2,1,2,5,2,1,2,2,1,2,1,2,";
			sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
			sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
			sBase += "1,5,1,2,1,1,2,2,1,2,2,2,";
			sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
			sBase += "1,2,2,1,1,5,1,2,1,2,2,1,";
			//1931
			sBase += "2,2,2,1,1,2,1,1,2,1,2,1,";
			sBase += "2,2,2,1,2,1,2,1,1,2,1,2,";
			sBase += "1,2,2,1,6,1,2,1,2,1,1,2,";
			sBase += "1,2,1,2,2,1,2,2,1,2,1,2,";
			sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
			sBase += "2,1,4,1,2,1,2,1,2,2,2,1,";
			sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
			sBase += "2,2,1,1,2,1,4,1,2,2,1,2,";
			sBase += "2,2,1,1,2,1,1,2,1,2,1,2,";
			sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
			//1941
			sBase += "2,2,1,2,2,4,1,1,2,1,2,1,";
			sBase += "2,1,2,2,1,2,2,1,2,1,1,2,";
			sBase += "1,2,1,2,1,2,2,1,2,2,1,2,";
			sBase += "1,1,2,4,1,2,1,2,2,1,2,2,";
			sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
			sBase += "2,1,1,2,1,1,2,1,2,2,1,2,";
			sBase += "2,5,1,2,1,1,2,1,2,1,2,2,";
			sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
			sBase += "2,2,1,2,1,2,3,2,1,2,1,2,";
			sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
			//1951
			sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
			sBase += "1,2,1,2,4,2,1,2,1,2,1,2,";
			sBase += "1,2,1,1,2,2,1,2,2,1,2,2,";
			sBase += "1,1,2,1,1,2,1,2,2,1,2,2,";
			sBase += "2,1,4,1,1,2,1,2,1,2,2,2,";
			sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
			sBase += "2,1,2,1,2,1,1,5,2,1,2,2,";
			sBase += "1,2,2,1,2,1,1,2,1,2,1,2,";
			sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
			sBase += "2,1,2,1,2,5,2,1,2,1,2,1,";
			//1961
			sBase += "2,1,2,1,2,1,2,2,1,2,1,2,";
			sBase += "1,2,1,1,2,1,2,2,1,2,2,1,";
			sBase += "2,1,2,3,2,1,2,1,2,2,2,1,";
			sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
			sBase += "1,2,1,2,1,1,2,1,1,2,2,1,";
			sBase += "2,2,5,2,1,1,2,1,1,2,2,1,";
			sBase += "2,2,1,2,2,1,1,2,1,2,1,2,";
			sBase += "1,2,2,1,2,1,5,2,1,2,1,2,";
			sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
			sBase += "2,1,1,2,2,1,2,1,2,2,1,2,";
			//1971
			sBase += "1,2,1,1,5,2,1,2,2,2,1,2,";
			sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
			sBase += "2,1,2,1,1,2,1,1,2,2,2,1,";
			sBase += "2,2,1,5,1,2,1,1,2,2,1,2,";
			sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
			sBase += "2,2,1,2,1,2,1,5,2,1,1,2,";
			sBase += "2,1,2,2,1,2,1,2,1,2,1,1,";
			sBase += "2,2,1,2,1,2,2,1,2,1,2,1,";
			sBase += "2,1,1,2,1,6,1,2,2,1,2,1,";
			sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
			//1981
			sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
			sBase += "2,1,2,3,2,1,1,2,2,1,2,2,";
			sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
			sBase += "2,1,2,2,1,1,2,1,1,5,2,2,";
			sBase += "1,2,2,1,2,1,2,1,1,2,1,2,";
			sBase += "1,2,2,1,2,2,1,2,1,2,1,1,";
			sBase += "2,1,2,2,1,5,2,2,1,2,1,2,";
			sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
			sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
			sBase += "1,2,1,1,5,1,2,1,2,2,2,2,";
			//1991
			sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
			sBase += "1,2,2,1,1,2,1,1,2,1,2,2,";
			sBase += "1,2,5,2,1,2,1,1,2,1,2,1,";
			sBase += "2,2,2,1,2,1,2,1,1,2,1,2,";
			sBase += "1,2,2,1,2,2,1,5,2,1,1,2,";
			sBase += "1,2,1,2,2,1,2,1,2,2,1,2,";
			sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
			sBase += "2,1,1,2,3,2,2,1,2,2,2,1,";
			sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
			sBase += "2,2,1,1,2,1,1,2,1,2,2,1,";
			//2001
			sBase += "2,2,2,3,2,1,1,2,1,2,1,2,";
			sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
			sBase += "2,2,1,2,2,1,2,1,1,2,1,2,";
			sBase += "1,5,2,2,1,2,1,2,2,1,1,2,";
			sBase += "1,2,1,2,1,2,2,1,2,2,1,2,";
			sBase += "1,1,2,1,2,1,5,2,2,1,2,2,";
			sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
			sBase += "2,1,1,2,1,1,2,1,2,2,1,2,";
			sBase += "2,2,1,1,5,1,2,1,2,1,2,2,";
			sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
			//2011
			sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
			sBase += "2,1,6,2,1,2,1,1,2,1,2,1,";
			sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
			sBase += "1,2,1,2,1,2,1,2,5,2,1,2,";
			sBase += "1,2,1,1,2,1,2,2,2,1,2,2,";
			sBase += "1,1,2,1,1,2,1,2,2,1,2,2,";
			sBase += "2,1,1,2,3,2,1,2,1,2,2,2,";
			sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
			sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
			sBase += "2,1,2,5,2,1,1,2,1,2,1,2,";
			//2021
			sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
			sBase += "2,1,2,1,2,2,1,2,1,2,1,2,";
			sBase += "1,5,2,1,2,1,2,2,1,2,1,2,";
			sBase += "1,2,1,1,2,1,2,2,1,2,2,1,";
			sBase += "2,1,2,1,1,5,2,1,2,2,2,1,";
			sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
			sBase += "1,2,1,2,1,1,2,1,1,2,2,2,";
			sBase += "1,2,2,1,5,1,2,1,1,2,2,1,";
			sBase += "2,2,1,2,2,1,1,2,1,1,2,2,";
			sBase += "1,2,1,2,2,1,2,1,2,1,2,1,";
			//2031
			sBase += "2,1,5,2,1,2,2,1,2,1,2,1,";
			sBase += "2,1,1,2,1,2,2,1,2,2,1,2,";
			sBase += "1,2,1,1,2,1,5,2,2,2,1,2,";
			sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
			sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
			sBase += "2,2,1,2,1,4,1,1,2,1,2,2,";
			sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
			sBase += "2,2,1,2,1,2,1,2,1,1,2,1,";
			sBase += "2,2,1,2,5,2,1,2,1,2,1,1,";
			sBase += "2,1,2,2,1,2,2,1,2,1,2,1,";
			//2041
			sBase += "2,1,1,2,1,2,2,1,2,2,1,2,";
			sBase += "1,5,1,2,1,2,1,2,2,2,1,2,";
			sBase += "1,2,1,1,2,1,1,2,2,1,2,2";
			
			var arrBase = [];
			arrBase = sBase.split(",");
			
			return arrBase;
		})(),
		
		/**
		 * 양력을 음력으로 변환해주는 함수.<br><br>
		 * [주의사항]<br>
		 *  1. return값이 8자리가 아니고 9자리임에 주의<br>
		 *  2. 처리가능 기간  1841 - 2043년
		 * @param {string | date} value yyyyMMdd형태의 양력일자 ( 예 : "20121122" ).
		 * @return {string} Flag(평달 = "0", 윤달 = "1") + 'yyyyMMdd'형태의 음력일자
		 * @example
		 * var dt = Eco.date.strToDate("20130331");
		 * var str = Eco.date.solarToLunar(dt);
		 * trace(str); // output : 020130220
		 * var str1 = "20130331";
		 * var str = Eco.date.solarToLunar(str1);
		 * trace(str); // output : 020130220
		 * @memberOf Eco.date
		 */		
		solarToLunar: function(value) 
		{
			var sMd         = "31,0,31,30,31,30,31,31,30,31,30,31";
			var arrMd       = [];
			var arrBaseInfo = [];
			var arrDt       = [];	// 매년의 음력일수를 저장할 배열 변수
			var nTd;		    			// 음력일을 계산하기 위해 양력일과의 차이를 저장할 변수
			var nTd1;			    		// 1840년까지의 날수
			var nTd2;				    	// 현재까지의 날수
			var nTemp;					    // 임시변수
			var nLy, nLm, nLd;			    // 계산된 음력 년, 월, 일을 저장할 변수
			var sLyoon;					    // 현재월이 윤달임을 표시

			var nY, nM, nD;
			if ( Eco.isDate(value) )
			{
				nY = value.getFullYear();
				nM = value.getMonth() + 1;
				nD = value.getDate();
			}
			else
			{
				nY = parseInt(value.substr(0,4), 10);
				nM = parseInt(value.substr(4,2), 10);
				nD = parseInt(value.substr(6,2), 10);
			}
			
			if (nY < 1841 || nY > 2043)	
			{
				return null;
			}

			arrBaseInfo = this.solarBase;
			arrMd       = sMd.split(",");
			arrMd[1]    = 28;
				
			//윤년여부 확인
			if ((nY % 4) == 0) 
			{
				if ((nY % 100) != 0 || (nY % 400) == 0)
				{ 
					arrMd[1] = 29;
				}
			} 

			// 672069 = 1840 * 365 + 1840/4 - 1840/100 + 1840/400 + 23  //1840년까지 날수
			nTd1 = 672069; 	 
				
			// 1841년부터 작년까지의 날수
			nTd2 = (nY - 1) * 365 + parseInt((nY - 1)/4) - parseInt((nY - 1)/100) + parseInt((nY - 1)/400);
				
			// 전월까지의 날수를 더함
			for (var i = 0; i <= nM - 2; i++)
			{
				nTd2 = nTd2 + parseInt(arrMd[i]);
			}

			// 현재일까지의 날수를 더함
			nTd2 = nTd2 + nD;

			// 양력현재일과 음력 1840년까지의 날수의 차이
			nTd = nTd2 - nTd1 + 1;
			
			// 1841년부터 음력날수를 계산
			for (var i = 0; i <= nY - 1841; i++)
			{
				arrDt[i] = 0;
				for (var j = 0; j <= 11; j++)
				{
					switch (parseInt(arrBaseInfo[i * 12 + j]))
					{
						case 1 : nTemp = 29;
								 break;
						case 2 : nTemp = 30;
								 break;				
						case 3 : nTemp = 58;	// 29 + 29
								 break;				
						case 4 : nTemp = 59;	// 29 + 30
								 break;				
						case 5 : nTemp = 59;	// 30 + 29
								 break;				
						case 6 : nTemp = 60;	// 30 + 30
								 break;				
					}
					
					arrDt[i] = arrDt[i] + nTemp;
				}
			}
				
			// 1840년 이후의 년도를 계산 - 현재까지의 일수에서 위에서 계산된 1841년부터의 매년 음력일수를 빼가면수 년도를 계산
			nLy = 0;
			do
			{
				nTd = nTd - arrDt[nLy];
				nLy = nLy + 1;
			}
			while(nTd > arrDt[nLy]);
			
			nLm    = 0;
			sLyoon = "0";	// 현재월이 윤달임을 표시할 변수 - 기본값 평달
			do
			{
				if (parseInt(arrBaseInfo[nLy * 12 + nLm]) <= 2)
				{
					nTemp = parseInt(arrBaseInfo[nLy * 12 + nLm]) + 28;
					if (nTd > nTemp)
					{
						nTd = nTd - nTemp;
						nLm = nLm + 1;
					}
					else
					{
						break;
					}
				}
				else
				{
					switch (parseInt(arrBaseInfo[nLy * 12 + nLm]))
					{
						case 3 :
							m1 = 29;
							m2 = 29;
							break;
						case 4 : 
							m1 = 29;
							m2 = 30;
							break;					
						case 5 : 
							m1 = 30;
							m2 = 29;
							break;					
						case 6 : 
							m1 = 30;
							m2 = 30;
							break;					
					}

					if (nTd > m1)
					{
						nTd = nTd - m1;
						if (nTd > m2)
						{
							nTd = nTd - m2;
							nLm = nLm + 1;
						}
						else
						{
							sLyoon = "1";
						}
					}
					else
					{
						break;
					}
				}
			}
			while(1);
			
			nLy = nLy + 1841;
			nLm = nLm + 1;
			nLd = nTd;

			var sRtn = sLyoon + nLy; 
			sRtn = sRtn + nLm.toString().padLeft(2, "0"); 
			sRtn = sRtn + nLd.toString().padLeft(2, "0");    

			return sRtn;
		},	
		
		/**
		 * 음력을 양력으로 변환.
		 * @param {string | date} value yyyyMMdd형태의 음력일자 ( 예 : "20121122" ).
		 * @param {boolean} leapMonth 윤달 여부.
		 * @return {string} 'yyyyMMdd'형태의 양력일자
		 * @example
		 * var dt = Eco.date.strToDate("20120331");
		 * var str = Eco.date.lunarToSolar(dt, false);
		 * trace(str); // output : 20120421
		 * var str1 = "20120331";
		 * var str = Eco.date.lunarToSolar(str1, false);
		 * trace(str); // output : 20120421
		 * @memberOf Eco.date
		 */		 
		lunarToSolar: function(value, leapMonth) 
		{
			var pThis = Eco.date;
			var sMd         = "31,0,31,30,31,30,31,31,30,31,30,31";
			var arrMd       = [];	
			var arrBaseInfo = [];
			var nTd         = 0;
			var nSy, nSm, nSd;			    // 계산된 양력 년, 월, 일을 저장할 변수
			var nY1, nM1, nY2, nY3, nTemp;	// 임시변수	
			var nLeap;    
				
			var nLy, nLm, nLd;
			if ( Eco.isDate(value) )
			{
				nLy = value.getFullYear();
				nLm = value.getMonth() + 1;
				nLd = value.getDate();
			}
			else
			{
				nLy = parseInt(value.substr(0,4), 10);
				nLm = parseInt(value.substr(4,2), 10);
				nLd = parseInt(value.substr(6,2), 10);
			}

			if (nLy < 1841 || nLy > 2043)	
			{
				return null;
			}	

			arrBaseInfo = pThis.solarBase;
			arrMd       = sMd.split(",");
			arrMd[1]    = 28;
			
			//윤년여부 확인
			if ((nLy % 4) == 0) 
			{
				if ((nLy % 100) != 0 || (nLy % 400) == 0)
				{ 
					arrMd[1] = 29;
				}
			} 
				
			nY1   = nLy - 1841;
			nM1   = nLm - 1;
			nLeap = 0;
			
			if (parseInt(arrBaseInfo[nY1 * 12 + nM1]) > 2)
			{
				//윤년여부 확인
				if ((nLy % 4) == 0) 
				{
					if ((nLy % 100) != 0 || (nLy % 400) == 0)
					{ 
						nLeap = 1;
					}
				} 
			}
			
			if (nLeap == 1)
			{
				switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
				{
					case 3 : nTemp = 29;
							 break;
					case 4 : nTemp = 30;
							 break;			
					case 5 : nTemp = 29;
							 break;			
					case 6 : nTemp = 30;
							 break;
				}
			}
			else
			{
				switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
				{
					case 1 : nTemp = 29;
							 break;			
					case 2 : nTemp = 30;
							 break;			
					case 3 : nTemp = 29;
							 break;			
					case 4 : nTemp = 29;
							 break;			
					case 5 : nTemp = 30;
							 break;			
					case 6 : nTemp = 30;
							 break;			
				}
			}
			
			var tempY1 = nY1 - 1;
			for (var i = 0; i <= tempY1; i++)
			{
				for (var j = 0; j <= 11; j++)
				{
					switch (parseInt(arrBaseInfo[i * 12 + j]))
					{
						case 1 : nTd = nTd + 29;
								 break;
						case 2 : nTd = nTd + 30;
								 break;				
						case 3 : nTd = nTd + 58;
								 break;				
						case 4 : nTd = nTd + 59;
								 break;				
						case 5 : nTd = nTd + 59;
								 break;				
						case 6 : nTd = nTd + 60;
								 break;				
					}
				}
			}

			var tempM1 = nM1 - 1;
			for (var j = 0; j <= tempM1; j++)
			{
				switch (parseInt(arrBaseInfo[nY1 * 12 + j]))
				{
					case 1 : nTd = nTd + 29;
							 break;			
					case 2 : nTd = nTd + 30;
							 break;						
					case 3 : nTd = nTd + 58;
							 break;						
					case 4 : nTd = nTd + 59;
							 break;						
					case 5 : nTd = nTd + 59;
							 break;						
					case 6 : nTd = nTd + 60;
							 break;						
				}
			}

			if (nLeap == 1)
			{
				switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
				{
					case 3 : nTemp = 29;
							 break;						
					case 4 : nTemp = 29;
							 break;						
					case 5 : nTemp = 30;
							 break;						
					case 6 : nTemp = 30;
							 break;						
				}
			}
			
			nTd = nTd + nLd + 22;
			
			if (leapMonth)
			{
				switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
				{
					case 3 : nTd = nTd + 29;
							 break;						
					case 4 : nTd = nTd + 30;
							 break;						
					case 5 : nTd = nTd + 29;
							 break;						
					case 6 : nTd = nTd + 30;
							 break;						
				}
			}
			
			nY1 = 1840;
			do
			{
				nY1 = nY1 + 1;
				
				nLeap = 0;
				
				//윤년여부 확인
				if ((nY1 % 4) == 0) 
				{
					if ((nY1 % 100) != 0 || (nY1 % 400) == 0)
					{ 
						nLeap = 1;
					}
				} 

				if (nLeap == 1)
				{
					nY2 = 366;
				}
				else
				{
					nY2 = 365;
				}

				if( nTd <= nY2 )
				{
					break;
				}
					
				nTd = nTd - nY2;
			}
			while(1);

			nSy      = nY1;
			arrMd[1] = nY2 - 337;
			nM1      = 0;
			
			do
			{
				nM1 = nM1 + 1;
				if (nTd <= parseInt(arrMd[nM1-1]))
				{
					break;
				}
				nTd = nTd - parseInt(arrMd[nM1-1]);
			}
			while(1);
			
			nSm = nM1;
			nSd = nTd;
			nY3 = nSy;
			nTd = nY3 * 365 + parseInt(nY3/4) - parseInt(nY3/100) + parseInt(nY3/400);
			
			var tempSm = nSm - 1;
			for (var i = 0; i <= tempSm; i++)
			{
				nTd = nTd + parseInt(arrMd[i]);
			}

			nTd = nTd + nSd;

			var sRtn = nY3;
			sRtn = sRtn + nSm.toString().padLeft(2, "0"); 
			sRtn = sRtn + nSd.toString().padLeft(2, "0");    

			return sRtn;	
		},
	
		/**
		 * 전달된 月의 1일 만들기.
		 * @param {string | date} value yyyyMMdd형태의 일자.
		 * @return {string} yyyyMM01.
		 * @example
		 * var dt = Eco.date.strToDate("20120331");
		 * var dt1 = Eco.date.getFirstDate(dt);
		 * trace(dt1); // output : Thu Mar 01 2012 00:00:00 GMT+0900
		 * var str1 = "20120331";
		 * var str = Eco.date.getFirstDate(str1);
		 * trace(str); // output : 20120301
		 * @memberOf Eco.date
		 */			 
		getFirstDate: function(value)
		{
			if ( Eco.isDate(value) )
			{
				var dt = new Date();
				dt.setFullYear(value.getFullYear(), value.getMonth(), 1);
				dt.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
				dt.setMilliseconds(value.getMilliseconds());
				return dt;
			}
			else
			{
				var sRtn = "";
				var dDate = new Date(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, 1);
				sRtn =  dDate.getFullYear()
					 + (dDate.getMonth()+1).toString().padLeft(2, "0")
					 +  dDate.getDate().toString().padLeft(2, "0");

				return sRtn;
			}
		},
		
		/**
		 * 날짜 차이 계산하기.
		 * @param {string} date1 yyyyMMddHHMMSS형태의 일자.
		 * @param {string} date2 yyyyMMddHHMMSS형태의 일자.
		 * @return {array} 두 날짜의 기간.[일,시,분,초]
		 * @example
		 * var dt0 = Eco.date.strToDate("20130302113022");
		 * var dt1 = Eco.date.strToDate("20130305145032");
		 * var etime = Eco.date.getDiffTime(dt0, dt1); // return Array Type [일, 시, 분, 초]
		 * trace(etime); // output : 3,3,20,10
		 * var str0 = "20130302113022";
		 * var str1 = "20130305145032";
		 * var etime = Eco.date.getDiffTime(str0, str1); // return Array Type [일, 시, 분, 초]
		 * trace(etime); // output : 3,3,20,10
		 * @memberOf Eco.date
		 */		 
		getDiffTime: function(date1, date2)
		{
			var dFrom, dTo;
			if ( Eco.isDate(date1) && Eco.isDate(date2) )
			{
				dFrom = date2;
				dTo = date1;
			}
			else
			{
				dFrom = new Date(date2.substring(0,4),  date2.substring(4,6)-1, date2.substring(6,8)
								,date2.substring(8,10), date2.substring(10,12), date2.substring(12,14));
				dTo   = new Date(date1.substring(0,4),  date1.substring(4,6)-1, date1.substring(6,8)
								,date1.substring(8,10), date1.substring(10,12), date1.substring(12,14));    
			}
			var nGap  = (dFrom.getTime() - dTo.getTime()) / 1000; 
			var nSec  = nGap % 60; 
			var nMin  = Math.floor(nGap/(60)) % 60; 
			var nHour = Math.floor(nGap/(60 * 60)) % 24; 
			var nDay  = Math.floor(nGap/(60 * 60 * 24)); 
				
			var sRtn = nDay + "" + nHour  + "" + nMin + "" + nSec+ ""; 
			return [nDay, nHour, nMin, nSec];
		},
		
		/**
		 * mask format cache.
		 * @private
		 * @memberOf Eco.date
		 */
		_dateMaskCache: {},		
		
		/**
		 * mask format 변환 정보 반환.
		 * @private
		 * @param {string} strMask mask할 format 문자열.
		 * @return {array} mask format 변환 정보
		 * @memberOf Eco.date
		 */		
		_parseDateMask: function(strMask)
		{
			var pThis = Eco.date;
			
			var res = pThis._dateMaskCache[strMask];
			if ( res ) return res;

			var arrMask = [], tokenStr, seq = 0,
				bEscape = false, bQuote = false,
				maskArr = strMask.split(""),
				tmpStr;

			for ( var i = 0, len = maskArr.length ; i < len ; )
			{
				tokenStr = maskArr[i];
				//trace(i + "===>" + tokenStr);
				if( bEscape == false && tokenStr == "'" ) 
				{ // Mask가 Quotation이 시작될 경우.
					if( bQuote == false )
						bQuote = true;
					else
						bQuote = false;
					i++;
					continue;
				}
				if( bEscape == false && tokenStr == "\\" && !bQuote ) 
				{ // Mask에서 Escape에 진입할 경우.
					bEscape = true;
					i++;
					continue;
				}
				else if ( bEscape ) 
				{ // Mask에서 Escape를 사용할 경우.
					//trace(i + "(EEE)===>" + tokenStr);
					arrMask[seq] = i;
					seq++;
					bEscape = false;
				}
				else if( bQuote == false ) 
				{// Mask에서 Quotation 밖의 글자에 대해.
					tmpStr = strMask.substr(i, 4);
					if ( tmpStr == "yyyy" || tmpStr == "MMMM" || tmpStr == "dddd" ) //yyyy, MMMM, dddd
					{
						arrMask[seq] = tmpStr;
						i += 4;
						seq++;
						continue;
					}
					tmpStr = strMask.substr(i, 3);
					if ( tmpStr == "MMM" || tmpStr == "ddd" || tmpStr == "sss" ) //MMM, ddd, sss
					{
						arrMask[seq] = tmpStr;
						i += 3;
						seq++;
						continue;
					}
					tmpStr = strMask.substr(i, 2);
					if ( tmpStr == "yy" || tmpStr == "MM" || tmpStr == "dd" ||
						 tmpStr == "HH" || tmpStr == "mm" || tmpStr == "ss" ||
						 tmpStr == "hh" || tmpStr == "tt" || tmpStr == "tt" ) // yy, MM, dd, HH, mm , ss, tt, WW
					{
						arrMask[seq] = tmpStr;
						i += 2;
						seq++;
						continue;
					}

					if ( tokenStr == "M" || tokenStr == "d" || tokenStr == "H" ||
						 tokenStr == "h" || tokenStr == "m" || tokenStr == "s" || tokenStr == "W" ) // M, d, H, h, m, s, W
					{
						arrMask[seq] = tokenStr;
						seq++;
					}
					else
					{
						arrMask[seq] = i;
						seq++;
					}
				}
				i++;
			}
			
			pThis._dateMaskCache[strMask] = arrMask;
			
			return arrMask;
		},
		
		/**
		 * 주어진 날짜 개체의 Mask Format 처리된 문자열을 반환.<br>
		 * 요일명칭, 달명칭, 오전오후 명칭 표시 처리는 Eco.date에 정의된 값으로 처리된다.<br><br>
		 * Eco.date.weekName : 요일명칭(Array value), <br>
		 * Eco.date.weekShortName : 요일축약명칭(Array value),<br>
		 * Eco.date.monthName : 월명칭(Array value),<br>
		 * Eco.date.monthShortName : 월축약 명칭(Array value),<br>
		 * Eco.date.ttName : 오전/오후 명칭(Array value)
		 * @param {date} dt Date 개체.
		 * @param {string} strMask mask할 format 문자열.
		 * @return {string} 변환된 문자열.
		 * @example
		 * var dt = Eco.date.strToDate("20130430123412"); // convert Date type from "20130430123412".
		 * trace(Eco.date.getMaskFormatString(dt, "yyyy년 MM월 dd일 tt hh시 mm분 ss초")); // output : 2013년 04월 30일 오후 12시 34분 12초
		 * trace(Eco.date.getMaskFormatString(dt, "yyyy-MM-dd")); // output : 2013-04-30
		 * trace(Eco.date.getMaskFormatString(dt, "yy MM.dd")); // output : 13 04.30
		 * trace(Eco.date.getMaskFormatString(dt, "yyyy-MM-dd W \\Week")); // output : 2013-04-30 18 Week
		 * trace(Eco.date.getMaskFormatString(dt, "MMMM dddd")); // output : 4월 화요일
		 * @memberOf Eco.date
		 */
		getMaskFormatString: function(dt, strMask)
		{
			var pThis = Eco.date;
			
			var arrMask = pThis._parseDateMask(strMask),
				arrDt = [], mask, h;
			for ( var i = 0, len = arrMask.length; i < len ; i++ )
			{
				mask = arrMask[i];
				if ( mask > -1 )
				{
					arrDt[arrDt.length] = strMask.charAt(mask);
				}
				else
				{
					switch (mask)
					{
						case "yyyy": arrDt[arrDt.length] = new String(dt.getFullYear()); break;
						case "MMMM": arrDt[arrDt.length] = pThis.monthName[dt.getMonth()]; break;
						case "dddd": arrDt[arrDt.length] = pThis.weekName[dt.getDay()]; break;
						case "MMM": arrDt[arrDt.length] = pThis.monthShortName[dt.getMonth()]; break;
						case "ddd": arrDt[arrDt.length] = pThis.weekShortName[dt.getDay()]; break;
						case "sss": arrDt[arrDt.length] = new String(dt.getMilliseconds()).padLeft(3,'0'); break;
						case "yy": arrDt[arrDt.length] = new String(dt.getFullYear() % 1000).padLeft(2,'0'); break;
						case "MM": arrDt[arrDt.length] = new String(dt.getMonth() + 1).padLeft(2,'0'); break;
						case "WW": arrDt[arrDt.length] = new String(getWeekNumber(dt)).padLeft(2,'0'); break;
						case "dd": arrDt[arrDt.length] = new String(dt.getDate()).padLeft(2,'0'); break;
						case "HH": arrDt[arrDt.length] = new String(dt.getHours()).padLeft(2,'0'); break;
						case "hh": arrDt[arrDt.length] = new String(((h = dt.getHours() % 12) ? h : 12)).padLeft(2,'0'); break;
						case "mm": arrDt[arrDt.length] = new String(dt.getMinutes()).padLeft(2,'0'); break;
						case "ss": arrDt[arrDt.length] = new String(dt.getSeconds()).padLeft(2,'0'); break;
						case "tt": arrDt[arrDt.length] = dt.getHours() < 12 ? pThis.ttName[0] : pThis.ttName[1]; break;
						case "M": arrDt[arrDt.length] = new String(dt.getMonth() + 1); break;
						case "d": arrDt[arrDt.length] = new String(dt.getDate()); break;
						case "H": arrDt[arrDt.length] = new String(dt.getHours()); break;
						case "h": arrDt[arrDt.length] = new String(((h = dt.getHours() % 12) ? h : 12)); break;
						case "m": arrDt[arrDt.length] = new String(dt.getMinutes()); break;
						case "s": arrDt[arrDt.length] = new String(dt.getSeconds()); break;
						case "W": arrDt[arrDt.length] = new String(pThis.getWeekOfYear(dt)); break;
					}
				}
			}
			return arrDt.join("");
		}
		
	});
}

/**
 * @fileoverview number 처리를 위한 함수.
 */

if ( !JsNamespace.exist("Eco.number") )
{
	/**
	 * @namespace
	 * @name Eco.number
	 * @memberof! <global>
	 */
	JsNamespace.declare("Eco.number", {
	
		/**
		 * 소수점 표시자 (locale에 따라 정의)
		 * @public
		 * @type string
		 * @example "." ==> "0.01"
		 * @memberOf Eco.number
		 */
		point: ".",

		/**
		 * 숫자 단위 구분 표시자 (locale에 따라 정의)
		 * @public
		 * @type string
		 * @example "," ==> "1,234"
		 * @memberOf Eco.number
		 */		
		separator: ",",
		
		/**
		 * 통화 표시에서 separator 규칙 정의 (locale에 따라 정의)
		 * @public
		 * @type string
		 * @example 
		 *  "\\3" ==> 10,000,000 
		 *  "\\1\\2\\3" ==> 1,000,00,0 
		 *  "\\3\\1" ==> 1,0,0,0,000
		 * @memberOf Eco.number
		 */			
		separatorGrouping: "\\3",
		
		/**
		* 주어진 number의 소수점 값을 정정한다.
		* @private
		* @param {number} value number
		* @return {number} 정정된 반올림 숫자
		* @memberOf Eco.number
		*/
		_adjustFloat: function(n)
		{
			return parseFloat(n.toPrecision(14));
		},
		
		/**
		* 주어진 number들의 소수점 값을 정정 처리.
		* @param {array} arguments . 예: [1660, -1559.9, 0.33]
		* @private
		* @return {number} 성공 = 결과값. 실패 = NaN
		* @memberOf Eco.number
		*/
		_getMaxPrecision: function(values) 
		{
			var maxPrecision = 0,
				currentPrecision,
				tempValue;
				total = 0,
				len = values.length;
				
			var adjustFloat = Eco.number._adjustFloat;
			for (var i = 0; i < len; i++) 
			{
				//trace(arg[i]);
				tempValue = adjustFloat(values[i]);
				currentPrecision = (tempValue.toString().match(/\.\d+/) || [''])[0].length;
				if (currentPrecision > maxPrecision) 
				{
					maxPrecision = currentPrecision;
				}
			}

			return maxPrecision;
		},
		

		/**
		* 소수점 이하 더하기 연산 처리가 부적합하게 처리되는 경우 정정처리 하기 위한 함수.<br>
		* arguments 들을 + 연산 처리하여 결과를 반환합니다.<br>
		* "일반용계산기(공학용아님)"와 동일한 더하기 결과를 반환합니다.<br><br>
		* javascript에서 아래 연산 처리하는 경우 발생되는 오류입니다.<br>
		* trace(0.1 + 0.2); // output : 0.30000000000000004<br>
		* Chrome, Safari, Firefox, IE8, Rutime 에서 모두 위와 같은 결과가 나온다.<br>
		* 이 놀라운 결과에 대한 몇가지 질문 :<br>
		* -. 이것이 bug인가?<br>
		* -. bug이면, 왜 해결하지 않는가?<br>
		* -. bug가 아니면, javascript language spec인가?<br>
		* 대답은 :<br>
		* javascript는 부동소수점 방식(floating point)으로 계산을 하며 IEEE Standard 754규격을 사용합니다.<br>
		* javascript는 실수의 변환을 위해 53bit의 연산을 합니다.<br>
		* 정수인 경우에는 해당 기억공간의 범위안에서 정확한 결과를 나타내는데,,<br>
		* 실수인 경우에는 기억공간의 범위를 벗어나는 결과가 나타나면 나머지수를 버립니다.<br>
		* 컴퓨터가 연산을 위해 소수점 이하의 자릿수를 이진수로 변환하는 과정에서,,<br>
		* 예를들어,<br>
		* 0.3 을 이진수로 바꾼다면,,<br>
		* 0.3 * 2 = 0.6<br>
		* 0.6 * 2 = 1.2<br>
		* 0.2 * 2 = 0.4<br>
		* 0.4 * 2 = 0.8<br>
		* 0.8 * 2 = 1.6<br>
		* 0.6.. <== 다시 0.6이 나와,, 0.0100110011001.... 와 같이 무한히 반복됩니다.<br>
		* 0.3의 이진수처럼 기억공간의 한계를 벗어나는 결과치가 나오는 경우에는<br>
		* 부정확한(최대한 가까운?) 연산을 하게 되는 것이지요.<br>
		* 따라서 Eco.number.plus 함수를 사용하여 처리합니다.
		* @param {...number} arguments . 예: (1660, -1559.9, 0.33) 
		* @return {number} 성공 = 결과값. 실패 = NaN ???
		* @example
		* var a = 0.1,
		*     b = 0.2;
		* trace(Eco.number.plus(a, b)); // output : 0.3
		* trace(1660 - 1559.9 + 0.33); // output : 100.42999999999991
		* trace(Eco.number.plus(1660, -1559.9, 0.33)); // output : 100.43
		* @memberOf Eco.number
		*/
		plus: function() 
		{
			var maxPrecision = 0,
				currentPrecision, 
				total = 0,
				len = arguments.length;

			maxPrecision = Eco.number._getMaxPrecision(arguments);
			maxPrecision = Math.pow(10, (maxPrecision - 1)); 

			for (i = 0; i < len; i++) 
			{
				total += (arguments[i] * maxPrecision);
			}
			
			return total / maxPrecision;
		},


		 /**
		 * 소수점 이하 나누기 연산 처리가 부적합하게 처리되는 경우 정정처리 하기 위한 함수.<br>
		 * arguments 들을 / 연산 처리하여 결과를 반환합니다.<br>
		 * "일반용계산기(공학용아님)"와 동일한 나누기 결과를 반환합니다.<br>
		 * 왜 필요하나? -> plus 함수 설명 내용 참조<br><br>
		 * The largest value JavaScript can express using floating point is <br>
		 * 1.7976931348623157E+10308 (10에 308승)<br>
		 * so anything bigger than that will be Infinity.
		 * @param {...number} arguments . 예: (1660, -1559.9, 0.33) 
		 * @return {number} 성공 = 결과값. 실패 = NaN ???
		 * @example
		 * trace(1660 - 1559.9 + 0.33); // output : -3.2247599399339895
		 * trace(Eco.number.divide(1660, -1559.9, 0.33)); // output : -3.22475993993399
		 * @memberOf Eco.number
		 */ 
		divide: function() 
		{
			var maxPrecision = 0;
			var total = 0;	
			var count = arguments.length -1;	
			var tempValues = [arguments[0]];
			var i=1;
			
			var pThis = Eco.number;
			var getMaxPrecision = pThis._getMaxPrecision;
			var adjustFloat = pThis._adjustFloat;
			do{
				tempValues.push(arguments[i]);
				
				i++;
				maxPrecision = Math.pow(10, (getMaxPrecision(tempValues) - 1));
				//정수로 만들고, 나누기 처리.
				for(var j=0; j<2; j++){
					tempValues[j] *= maxPrecision;
				}
				
				total = adjustFloat(tempValues[0]/tempValues[1]);
				total = (tempValues[0]/tempValues[1]);
				tempValues = [total];
				
			}while(--count);
			
			return total;
			
		},


		 /**
		 * 소수점 이하 곱하기 연산 처리가 부적합하게 처리되는 경우 정정처리 하기 위한 함수.<br>
		 * arguments 들을 * 연산 처리하여 결과를 반환합니다.<br>
		 * "일반용계산기(공학용아님)"와 동일한 곱하기 결과를 반환합니다.<br>
		 * 왜 필요하나? -> plus 함수 설명 내용 참조
		 * @param {...number} arguments . 예: (1660, -1559.9, 0.33) 
		 * @return {number} 성공 = 결과값. 실패 = NaN ???
		 * @example
		 * trace(1660*-1559.9*0.33); // output : -854513.2200000001
		 * trace(Eco.number.multiply(1660, -1559.9, 0.33)); // output : -854513.22
		 * @memberOf Eco.number
		 */ 
		multiply: function() 
		{
			var maxPrecision = 0;
			var total = 0;	
			var count = arguments.length -1;	
			var tempValues = [arguments[0]];
			var i=1;
			
			var pThis = Eco.number;
			var getMaxPrecision = pThis._getMaxPrecision;
			var adjustFloat = pThis._adjustFloat;		
			var resultPrecision = 0;
			do{
				tempValues.push(arguments[i]);
				
				//1*3을 할경우 2.9999~ 문제가 발생하여 resultPrecision 로직추가. 2014.12.04
				resultPrecision = getMaxPrecision(tempValues);
				
				if(resultPrecision == 0){
					maxPrecision = 1;
				} else {
					maxPrecision = Math.pow(10, (resultPrecision - 1));
				}
				
				//정수로 만들고, 곱하기 처리.
				for(var j=0; j<2; j++){
					tempValues[j] = adjustFloat(tempValues[j] * maxPrecision);
				}
				
				total = (tempValues[0]*tempValues[1]/Math.pow(maxPrecision, 2));
				
				
				tempValues = [total];
				
				i++;
				
			}while(--count);
			
			return total;
		},

		 /**
		 * 숫자를 한글로 표기.
		 * @param {number} val 숫자 
		 * @return {string} 문자열
		 * @example
		 * var val = 1200340500.01;
		 * var str = Eco.number.intToHanGul(val);
		 * trace(str); // output : 일십이억 삼십사만 오백  소수점 영일
		 * var val = 1200340500;
		 * var str = Eco.number.intToHanGul(val);
		 * trace(str); // output : 일십이억 삼십사만 오백
		 * @memberOf Eco.number
		 */ 	 
		intToHanGul: function(val)
		{
			if ( !Eco.isString(val) )
			{
				val = String(val);
			}

			var arrhn = ["영","일","이","삼","사","오","육","칠","팔","구"];
			var arrhj = ["","만","억","조","경","해"];
			var arrul = ["영천","영백","영십","영"];
			var arrtm = [];
			var sRtn  = "";
			var sTm2  = "";

			if (val.charAt(0) == "-") 
			{
				sRtn   = "마이너스 ";
				val = val.substr(1, val.length-1);
			}
			else if (val.charAt(0) == "+")
			{
				val = val.substr(1, val.length-1);
			}

			var nPoint = val.indexOf( '.' ),
				strNumber = "", bPoint, strDecimal = "";

			if( nPoint < 0 ) 
			{
				strNumber = val;
				bPoint = false;
			}
			else 
			{
				strNumber = val.substr( 0, nPoint);
				strDecimal = val.substr( nPoint + 1);
				bPoint = true;
			}

			var nSize = Math.ceil(strNumber.length/4);
			sTmpPrice = "";

			for (var i = strNumber.length; i >= 0; i--)
			{
				sTmpPrice += strNumber.substring(i, i-1);
			}
			
			strNumber = sTmpPrice;

			for (var i = 0; i < nSize; i++) 
			{
				sSum     = arrhj[i] + " ";
				arrtm[i] = strNumber.substr(i*4, 4);    
				sTm2     = "";

				for (var j = arrtm[i].length; j >= 0; j--)
				{
					sTm2 += arrtm[i].substring(j, j-1);      
				}

				arrtm[i] = sTm2;
				sPart 	 = arrtm[i].length;

				for (var j = 0; j < 10; j++) 
				{
					for (var k = 0; k < 10; k++) 
					{
						arrtm[i] = arrtm[i].replace(k, arrhn[k]);
					}
				}

				if (sPart == 4) 
				{
					arrtm[i] = arrtm[i].charAt(0) + "천" + arrtm[i].charAt(1) + "백" + arrtm[i].charAt(2)+"십"+arrtm[i].charAt(3);
				}
				else if (sPart == 3) 
				{
					arrtm[i] = arrtm[i].charAt(0) + "백" + arrtm[i].charAt(1) + "십" + arrtm[i].charAt(2);
				}
				else if (sPart == 2) 
				{
					arrtm[i] = arrtm[i].charAt(0) + "십"+arrtm[i].charAt(1);
				}
				else 
				{
					arrtm[i] = arrtm[i].charAt(0);
				}

				for (var j = 0; j < 4; j++) 
				{
					if (arrtm[i].match(arrul[j])) 
					{
						sPart--; 
						arrtm[i] = arrtm[i].replace(arrul[j], "");
					}
				}

				if (sPart != 0) 
				{
					arrtm[i] += sSum;
				}
			}

			for (nSize; nSize > -1; nSize--)
			{
				sRtn += arrtm[nSize];
			}

			sRtn = sRtn.replace("undefined","");
			if ( bPoint )
			{
				sRtn += " 소수점 ";
				for ( var i = 0, n = strDecimal.length ; i < n ; i++ )
				{
					sRtn += arrhn[parseInt(strDecimal.charAt(i))];
				}
			}
			return sRtn;
		},			


		 /**
		 * 숫자를 한자로 표기.
		 * @param {number} val 숫자 
		 * @return {string} 문자열
		 * @example
		 * var val = 1200340500.01;
		 * var str = Eco.number.intToHanJa(val);
		 * trace(str); // output : 壹拾貳億 參拾四萬 五百  小數點 零壹
		 * var val = 1200340500;
		 * var str = Eco.number.intToHanJa(val);
		 * trace(str); // output : 壹拾貳億 參拾四萬 五百 
		 * @memberOf Eco.number
		 */ 	 
		intToHanJa: function(val)
		{
			if ( !Eco.isString(val) )
			{
				val = String(val);
			}

			var arrhn = ["零","壹","貳","參","四","五","六","七","八","九"];
			var arrhj = ["","萬","億","兆"];
			var arrul = ["零千","零百","零拾","零"];
			var arrtm = [];
			var sRtn  = "";
			var sTm2  = "";

			if (val.charAt(0)=="-") 
			{
				sRtn   = "陰數"; //"마이너스 ";
				val = val.substr(1, val.length-1);
			}
			else if (val.charAt(0) == "+")
			{
				val = val.substr(1, val.length-1);
			}

			var nPoint = val.indexOf( '.' ),
				strNumber = "", bPoint, strDecimal = "";

			if( nPoint < 0 ) 
			{
				strNumber = val;
				bPoint = false;
			}
			else 
			{
				strNumber = val.substr( 0, nPoint);
				strDecimal = val.substr( nPoint + 1);
				bPoint = true;
			}			

			var nSize = Math.ceil(strNumber.length/4);
			sTmpPrice = "";
			
			for (var i = strNumber.length; i >= 0; i--)
			{
				sTmpPrice += strNumber.substring(i, i-1);
			}	
			strNumber = sTmpPrice;
			
			for (var i = 0; i < nSize; i++) 
			{
				sSum     = arrhj[i] + " ";
				arrtm[i] = strNumber.substr(i*4, 4);		
				sTm2     = "";
				
				for (var j = arrtm[i].length; j >= 0; j--)
				{
					sTm2 += arrtm[i].substring(j, j-1);
				}

				arrtm[i] = sTm2;
				sPart    = arrtm[i].length;
				
				for (var j = 0; j < 10; j++) 
				{
					for (var k = 0; k < 10; k++) 
					{
						arrtm[i] = arrtm[i].replace(k, arrhn[k]);
					}
				}

				if (sPart == 4) 
				{	
					arrtm[i] = arrtm[i].charAt(0) + "千" + arrtm[i].charAt(1) + "百" + arrtm[i].charAt(2) + "拾"+arrtm[i].charAt(3);
				}
				else if (sPart == 3) 
				{
					arrtm[i] = arrtm[i].charAt(0) + "百" + arrtm[i].charAt(1) + "拾" + arrtm[i].charAt(2);
				}
				else if (sPart == 2) 
				{
					arrtm[i] = arrtm[i].charAt(0) + "拾" + arrtm[i].charAt(1);
				}
				else 
				{
					arrtm[i] = arrtm[i].charAt(0);
				}
				
				for (var j = 0; j < 4; j++) 
				{
					if (arrtm[i].match(arrul[j])) 
					{
						sPart--; 
						arrtm[i] = arrtm[i].replace(arrul[j], "");
					}
				}
				
				if (sPart != 0) 
				{
					arrtm[i] += sSum;
				}
			}

			for (nSize; nSize > -1; nSize--) 
			{
				sRtn += arrtm[nSize];
			}
			
			sRtn = sRtn.replace("undefined","");

			if ( bPoint )
			{
				sRtn += " 小數點 ";
				for ( var i = 0, n = strDecimal.length ; i < n ; i++ )
				{
					sRtn += arrhn[parseInt(strDecimal.charAt(i))];
				}
			}
			return sRtn;
		},

		/**
		* 파일 사이즈 환산.
		* @param {number} bytes 파일 사이즈(byte 단위)
		* @param {number=} precision 정밀도(default : 1)
		* @param {boolean=} unit 파일단위(KB,MB,...) 포함여부(default : true).
		* @return {number|string} 파일 사이즈(소수점 1자리 포함).
		* @example
		* var size = 1023405670,
		*     precision = 2,
		*     unit = false;
		* var result = Eco.number.bytesToSize(size, precision, unit);
		* trace(result); // output : 976.00
		* result = Eco.number.bytesToSize(size, 0);
		* trace(result); // output : 976 MB
		* result = Eco.number.bytesToSize(size);
		* trace(result); // output : 976.0 MB
		* @memberOf Eco.number
		*/	
		bytesToSize: function(bytes, precision, unit) 
		{
			if(precision === null || precision === undefined || precision === "") precision = 1;

			if(unit !== false) unit = true;
			
			var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
			var i = 0;
			while(bytes >= 1024) 
			{
				bytes /= 1024;
				++i;
			}
			
			if(!unit)
			{
				return bytes.toFixed(precision);
			} 
			else 
			{
				if ( precision > 0 )
				{
					return bytes.toFixed(precision) + ' ' + units[i];
				}
				else
				{
					return Math.round(bytes) + ' ' + units[i];
				}
			}
			
		},	

		/**
		* 반올림할 자리의 값이 1~4인 경우는 버리고, 6~9인 경우는 올림 처리한다.<br>
		* 5의 경우 그 앞자리 값이 짝수이면 버리고, 홀수이면 올림 처리한다.<br>
		* 편중 오차를 최소화하는 방법 중의 하나로 Banker's Rounding을 사용하는 것입니다.
		* @param {number} value 변환할 값.
		* @param {number} length 소수부.
		* @return {number} 
		* @example
		* alert(Eco.number.evenRound(1.5)); // 2
		* alert(Eco.number.evenRound(2.5)); // 2
		* alert(Eco.number.evenRound(1.535, 2)); // 1.54
		* alert(Eco.number.evenRound(1.525, 2)); // 1.52
		* @memberOf Eco.number
		*/		
		evenRound: function(num, decimalPlaces)
		{
			var d = decimalPlaces || 0;
			var m = Math.pow(10, d);
			var n = +(d ? num * m : num).toFixed(8); // Avoid rounding errors
			var i = Math.floor(n), f = n - i;
			var r = (f == 0.5) ? ((i % 2 == 0) ? i : i + 1) : Math.round(n);
			return d ? r / m : r;
		},
		
		/**
		 * mask format cache.
		 * @private
		 * @memberOf Eco.date
		 */
		_numberMaskCache: {},		
		
		/**
		 * mask format 변환 정보 반환.
		 * @private
		 * @param {string} strMask mask할 format 문자열.
		 * @return {array} mask format 변환 정보
		 * @memberOf Eco.number
		 */	
		_parseNumberMask: function(strMask)
		{
			var pThis = Eco.number;
			
			var res = pThis._numberMaskCache[strMask];
			if ( res ) return res;
		
			var dispComma = false,
				nMin = 0,
				nMax = 0,
				nDecimalMin = -1,
				nDecimalMax = 0;

			strMask = nexacro.trimLeft(strMask);

			if (strMask.length <= 0 ) 
			{
				return [dispComma, nMin, nMax, nDecimalMin, nDecimalMax];
			}

			nDecimalMax = 0;
			nDecimalMin = 0;
			dispComma = (strMask.indexOf(",") >= 0);

			var c,
				bFindPoint = false;

			for( var i = 0, n = strMask.length; i < n; i++ ) 
			{
				c = strMask.charAt(i);
				if ( c == '.' )
				{
					bFindPoint = true;
				}
				else if ( c == '#' || c == '0' || c == '9' || c == ',' ) 
				{
					if ( bFindPoint ) 
					{
						if ( c == '0' ) 
						{
							nDecimalMax++;
							nDecimalMin = nDecimalMax;
						}
						else
						{
							nDecimalMax++;
						}
					}
					else 
					{
						if ( c == '0' )
						{
							nMin++;
						}
						else if ( nMin > 0)
						{
							nMin++;
						}
						nMax++;
					}
				}
			}// end of for.
			
			res = [dispComma, nMin, nMax, nDecimalMin, nDecimalMax];
			pThis._numberMaskCache[strMask] = res;
			return res;
		},

		/**
		 * 숫자형 문자에서 부호, 소수점, 정수부, 소수부 분리.
		 * @private
		 * @param {string} strText 숫자형 문자.
		 * @return {array} 분리 정보
		 * @memberOf Eco.number
		 */	
		_numberSplit: function(strText) 
		{
			var pThis = Eco.number;
		
			// 부호 분리.
			var nBegin = 0, nSign;
			if( (nBegin = strText.indexOf('+')) >= 0 ) 
			{
				nSign = +1;
				nBegin = 1;
			}
			else if( (nBegin = strText.indexOf('-')) >= 0 ) 
			{
				nSign = -1;
				nBegin = 1;
			}
			else 
			{
				nSign = 0;
				nBegin = 0;
			}

			var nPoint = strText.indexOf( pThis.point ,nBegin ),
				strNumber = "", bPoint, strDecimal = "";
			if( nPoint < 0 ) 
			{
				strNumber = strText.substr( nBegin );
				bPoint = false;
			}
			else 
			{
				strNumber = strText.substr( nBegin, nPoint - nBegin);
				strDecimal = strText.substr( nPoint + 1);
				bPoint = true;
			}
			return [nSign, bPoint, strNumber, strDecimal];
		},

		/**
		 * mask 제거.
		 * @private
		 * @param {string} strText 숫자형 문자.
		 * @return {string} 변환된 문자열
		 * @memberOf Eco.number
		 */	
		_removeMask: function(str) 
		{
			var pThis = Eco.number;
			
			str = str.trim();
			var ntxtLen = str.length,
				i,
				pointVal = pThis.point,
				separatorVal = pThis.separator;
				bPoint = false, // 소숫점은 1개만 인정.
				bInside = false, // 부호는 숫자가 나오기 전에만 인정.
				buf = [];
			for(i = 0 ; i < ntxtLen ; i++ ) 
			{
				var c = str.charAt(i);
				if( ( c == '+' || c == '-') && ( bInside === false) ) 
				{
					// 부호는 숫자가 나오기 전에만 인정.
					buf.push(c);
					bInside = true;
				}
				else if( nexacro.isNumeric(c) ) 
				{
					// 숫자인경우 인정.
					buf.push(c);
					bInside = true;
				}
				else if( c == pointVal && bPoint === false ) 
				{
					// 소숫점은 1회만 인정.
					buf.push(c);
					bPoint = true;
					bInside = true;
				}
				else if( c != separatorVal ) 
				{
					return "";
				}
			}
			return buf.join("");
		},

		/**
		 * 숫자 단위 적용.
		 * @private
		 * @param {string} strNumber 숫자형 문자.
		 * @return {string} 변환된 문자열
		 * @memberOf Eco.number
		 */
		_applyComma: function(strNumber) 
		{
			// 차후에 locale 처리 필요.
			
			var pThis = Eco.number;
			
			var grouping = pThis.separatorGrouping;
			var thousands_sep = pThis.separator;
			if( thousands_sep.length > 0 )
			{
				var	dec_buf = strNumber.split(""),
					dec_size = strNumber.length,
					out_size = (thousands_sep.length + 1) * strNumber.length,
					out_buf = [],
					cur_group = 0, d_size = dec_size,
					endpos = out_size,
					groupingIdx = 0,
					g;

				grouping = grouping.split("");

				while (grouping[groupingIdx] && d_size > 0 ) 
				{	
					g = grouping[groupingIdx];
					if ( g == "\\" ) 
					{
						groupingIdx++;
						g = parseInt(grouping[groupingIdx]);
					}
					if (g > 0 ) 
					{
						cur_group = g;
						while (g-- > 0 && d_size > 0)
							out_buf[--endpos] = dec_buf[--d_size];
						if (d_size > 0)
							out_buf[--endpos] = thousands_sep;
					}
					else if (g == 0 && d_size > cur_group) 
					{
						g = cur_group;
						while (g-- > 0)
							out_buf[--endpos] = dec_buf[--d_size];
						if (d_size > 0)
							out_buf[--endpos] = thousands_sep;
					}
					else if (g == 0 && d_size <= cur_group && d_size > 0 ) 
					{
						g = d_size;
						while (g-- > 0)
							out_buf[--endpos] = dec_buf[--d_size];
					}
					else 
					{
						break;
					}
				}
				return out_buf.slice(endpos,out_size + endpos).join("");
			}
			return strNumber;
		},

		/**
		 * 숫자형 변환
		 * @private
		 * @param {string} strValue 숫자형 문자.
		 * @param {boolean} bTrim 공백제거 여부.
		 * @return {string} 변환된 문자열.
		 * @memberOf Eco.number
		 */	
		_normalizeValue: function(strValue, bTrim) 
		{
			var pThis = Eco.number;
			
			if (strValue.length<=0) return strValue;
			if ( bTrim === undefined ) bTrim = true;
				
			// 좌우 공백 제거, 마스크 제거.
			strValue = pThis._removeMask(strValue);
			// 정규형식으로 만듬.
			if( strValue.charAt( strValue.length -1 ) == pThis.point )
				strValue = strValue + "0";

			if(bTrim) 
			{
				// 0 Trim 하기 전에 부호 있는 경우 주의.
				var bSign = ( strValue.charAt(0) == '-' ) ? 1 : 0;
				var pointVal = pThis.point;

				// 0000~~ 에 대해서 첫 자리 0을 삭제
				// -0000~~ 에 대해서 부호 뒷 자리 0을 삭제.
				while( strValue.charAt( 0+bSign ) == '0' 
						&& strValue.charAt( 1+bSign ) != pointVal
						&& strValue.length != (1+bSign) ) 
				{
						strValue = strValue.substring(0, 0+bSign) + strValue.substr(0+bSign+1, strValue.length);
				}
				// .~~0000에 대해서 0을 Trim
				var nPoint = strValue.indexOf(pointVal);
				if( nPoint >= 0 ) 
				{
					var i;
					for( i = strValue.length - 1 ; i > nPoint+1 ; i -- ) 
					{
						if( strValue.charAt( i ) != '0' )
								break;
					}
					strValue = strValue.substring(0, i + 1 );
				}
			}

			// 부호에 대해 정규형으로.
			if( strValue.charAt(0) == '+' ) 
			{
				strValue = strValue.substr(1);
			}
			else if( strValue.length <= 0 || parseFloat(strValue) == 0.0 ) 
			{
				// 값이 0.0인경우 부호 제거.
				if( strValue.charAt(0) == '-' )
					strValue = strValue.substr(1);
			}
			return strValue;
		},
		
		/**
		 * 주어진 숫자 형식값에 Mask Format 처리된 문자열을 반환합니다.
		 * @param {string|number} value 숫자형식 값
		 * @param {string} strMask mask할 format 문자열.
		 * @return {string} 변환된 문자열.
		 * @example
		 * var val = 1234.567;
		 * var result = Eco.number.getMaskFormatString(val, "99.99");
		 * trace(result); // output : 1234.56
		 * result = Eco.number.getMaskFormatString(val, "9900.0099");
		 * trace(result); // output : 1234.567
		 * result = Eco.number.getMaskFormatString(val, "9,999.9");
		 * trace(result); // output : 1,234.5
		 *
		 * val = 1.2;
		 * result = Eco.number.getMaskFormatString(val, "99.99");
		 * trace(result); // output : 1.2
		 * result = Eco.number.getMaskFormatString(val, "9900.0099");
		 * trace(result); // output : 01.20
		 * result = Eco.number.getMaskFormatString(val, "9,999.9");
		 * trace(result); // output : 1.2
		 * @memberOf Eco.number
		 */		
		getMaskFormatString: function(value, strMask)
		{
			var pThis = Eco.number;
			
			var strText = value + "";
			strText = pThis._normalizeValue(strText, true);

			var nDecimalLen = 0;		// 소수부 길이.
			var nIntegerLen = 0;		// 정수부 길이.

			// Split : value를 정수부, 소수부로 나누고 소수점 유무, 양음부호부 까지 판별한다.
			var ret = pThis._numberSplit(strText),
				nSign = ret[0],
				bPoint = ret[1],
				strNumber = ret[2],
				strDecimal = ret[3];

			// 각 부분의 길이구함.
			nIntegerLen = strNumber.length;
			nDecimalLen = strDecimal ? strDecimal.length : 0;

			var maskInfo = pThis._parseNumberMask(strMask),
				dispComma = maskInfo[0],
				nMin = maskInfo[1],
				nMax = maskInfo[2],
				nDecimalMin = maskInfo[3],
				nDecimalMax = maskInfo[4];

			if (nMin > nIntegerLen) 
			{
				var tmpStr = "";
				for(var i=0, n =  nMin - nIntegerLen; i < n ; i++) 
				{
					tmpStr += "0";
				}
				strNumber = tmpStr + strNumber;
			}

			if (nDecimalMin > nDecimalLen) 
			{
				var tmpStr = "";
				for(var i=0, n = nDecimalMin - nDecimalLen; i < n ; i++) 
				{
					tmpStr += "0";
				}
				strDecimal = strDecimal + tmpStr;
			}
			else if ( nDecimalMax != -1 && nDecimalMax < nDecimalLen) 
			{
				strDecimal = strDecimal.substring(0, nDecimalMax) + strDecimal.substr(nDecimalLen, strDecimal.length);
			}
			// 정수부분에 Comma적용.
			if(  dispComma )
				strNumber = pThis._applyComma(strNumber);

			if( nSign < 0 ) strText = "-";
			else if( nSign > 0) strText = "+";
			else	strText = "";

			// 정수부.
			strText += strNumber;

			// 소수부.
			if( strDecimal.length > 0 ) 
			{
				strText += pThis.point;
				strText += strDecimal;
			}
			return strText;
		}		

	
	});
}  
/**
 * @fileoverview string 처리를 위한 함수.
 */

if ( !JsNamespace.exist("Eco.string") )
{
	/**
	 * @namespace
	 * @name Eco.string
	 * @memberof! <global>
	 */
	JsNamespace.declare("Eco.string", {
		/**
		 * 문자열의 위치를 대소문자 구별없이 찾는다.
		 * @param {string} value 원래 문자열( 예 : "aaBBbbcc" )
		 * @param {string} sFind 찾고자 하는 문자열( 예 : "bb" )
		 * @param {number} nStart 검색 시작위치 (옵션 : Default=0) ( 예 : 1 ) 
		 * @return {number} 찾고자 하는 문자열의 시작위치 ( 예 : 2 ). 실패 = -1.
		 * @example
		 * var str = "DCABCABAABAAB",
		 *     findStr = "ab";
		 * var idx = Eco.string.indexOfIgnoreCase(str, findStr);
		 * trace(idx); // output : 2
		 * idx = Eco.string.indexOfIgnoreCase(str, findStr, 3);
		 * trace(idx); // output : 5
		 * @memberOf Eco.string
		 */
		indexOfIgnoreCase: function(value, sFind, nStart)	
		{
			return value.toLowerCase().indexOf(sFind.toLowerCase(), nStart);
		},

		 /**
		 * 문자열을 대소문자 구별없이 주어진 변경문자열(문자) 치환한다.
		 * @param {string} sOrg 원래 문자열( 예 : "aaBBbbcc" )
		 * @param {string} sRepFrom 찾고자 하는 문자열( 예 : "bb" )
		 * @param {string} sRepTo 치환될 문자열 ( 예 : "xx" )
		 * @return {number} 치환된 문자열 ( 예 : "aaxxxxccxx" ).
		 * @example
		 * var str = "DCABCABAABAAB",
		 *     findStr = "ab";
		 * var str = Eco.string.replaceIgnoreCase(str, findStr, "x");
		 * trace(str); // output : DCxCxAxAx
		 * @memberOf Eco.string
		 */ 
		replaceIgnoreCase: function( sOrg, sRepFrom, sRepTo )	
		{
			var pos, nStart=0, sRet="";
			var pThis = Eco.string;
			
			while(1)
			{
				pos = pThis.indexOfIgnoreCase( sOrg, sRepFrom, nStart );
				if( pos < 0 )
				{
					sRet += sOrg.substr( nStart );
					break;
				}
				else
				{
					sRet += sOrg.substr( nStart, pos - nStart);
					sRet += sRepTo;
					nStart = pos+sRepFrom.length;
				}
			}
			
			return sRet;
		},


		 /**
		 * 문자열의 위치를 대소문자 구별없이 오른쪽에서 왼쪽으로 검색이 수행됩니다.
		 * @param {string} source 원래 문자열( 예 : "aaBBbbcc" )
		 * @param {string} target 찾고자 하는 문자열( 예 : "BB" )
		 * @param {string=} opt_start 검색 시작위치 index(Default=문자열의 끝 )
		 * @return {number} 찾고자 하는 문자열의 시작위치
		 * @example
		 * var str = "CABCDABCDABCD",
		 *     findStr = "abc";
		 * var idx = Eco.string.lastIndexOfIgnoreCase(str, findStr);
		 * trace(idx); // output : 9
		 * idx = Eco.string.lastIndexOfIgnoreCase(str, findStr, 8);
		 * trace(idx); // output : 5
		 * @memberOf Eco.string
		 */
		lastIndexOfIgnoreCase: function(source, target, opt_start) 
		{
			if ( opt_start === undefined ||
				 opt_start < 0 ||
				 opt_start > source.length )
			{
				opt_start = source.length - 1;
			}
			return source.toLowerCase().lastIndexOf(target.toLowerCase(), opt_start);
		},
		
		/**
		 * 문자열의 오른쪽에서 length만큼의 문자열을 가져온다.
		 * @param {string} source 원래 문자열( 예 : "aaBBbbcc" )
		 * @param {number} length 가져올문자열 길이 ( 예 : 2 )
		 * @return {boolean} 오른쪽에서 length만큼의 문자열 ( 예 : "cc" )]
		 * @example
		 * var str = "myT1 and myT2 are the strings used for padding";
		 * var res = Eco.string.getRightStr(str, 7);
		 * trace(res); // output : padding
		 * @memberOf Eco.string
		 */	 
		getRightStr: function(source, length) 
		{
			if( source.length < length ) 
			{
				return source;
			} 
			else 
			{
				return source.substr(source.length-length, length);
			}
		},
		
		/**
		 * 문자열을 "좌 or 우" + "대소문자 구분유무"로 첫번째 일치되는 문자열 제거.
		 * @param {string} source 원래 문자열( 예 : "aaBBbbcc" )
		 * @param {string} target 제거할 문자열( 예 : "cc" )
		 * @param {string} direction 삭제방향."left(default)", "right".
		 * @param {boolean=} opt_ignoreCase 대소문자구분유무.true(default), false.
		 * @return {string} 제거된 문자열.
		 * @example
		 * var str = "www.domain.com";
		 * var result = Eco.string.removeStr(str, "www.");
		 * trace(result); // output : domain.com
		 * str = "www.tobesoft.com, www.tobesoft.co.kr";
		 * result = Eco.string.removeStr(str, ".com", "right");
		 * trace(result); // output : www.tobesoft, www.tobesoft.co.kr
		 * str = "www.tobesoft.COM, www.tobesoft.co.kr";
		 * result = Eco.string.removeStr(str, ".com", "right", false);
		 * trace(result); // output : www.tobesoft, www.tobesoft.co.kr
		 * @memberOf Eco.string
		 */	 
		removeStr: function(source, target, direction, opt_ignoreCase) 
		{
			direction = direction || "left";
			if(opt_ignoreCase !== false) opt_ignoreCase = true;

			var tempSource,tempTarget,pos;
			var sourceLen = source.length;
			var targetLen = target.length;
			
			tempSource = source;
			tempTarget = target;
			
			if(!opt_ignoreCase) 
			{
				tempSource = source.toLowerCase();
				tempTarget = target.toLowerCase();
			}
			
			//왼쪽부터 검색
			if(direction=="left") 
			{
				pos = tempSource.indexOf(tempTarget);
			} 
			else if(direction=="right") 
			{
				pos = tempSource.lastIndexOf(tempTarget);
			} 
			else 
			{
				return;
			}	
				
			if(pos < 0) 
			{
				return source;
			} 
			else if(tempSource == tempTarget)
			{
				return "";
			}
			else if(pos == 0)
			{
				return tempSource.substr(targetLen);
			} 
			else if(pos > 0)
			{
				return tempSource.substr(0, pos) + tempSource.substr(pos+targetLen);
			}

		},	
		
		/**
		 * 문자열 {n}… 값을 검색후 결과를 저장하기위한 RegExp 객체.
		 * @private
		 * @memberOf Eco.string
		 */	 	
		_formatRegExp: /\{(\d+)\}/g,
			 
		/**
		 * 문자열 내의 {0},{1}...{n}값을 전달받은 arguments로 치환.
		 * @param {string} str 대상 문자열.
		 * @param {arguments} arguments 식별자 {N}을 대체할 값.
		 * @return {string} 치환된 문자열.
		 * @requires Eco.formatRegExp
		 * @example
		 * var str = "I {0} a {1} {2}.";
		 * Eco.string.format(str, "am", "cool", "guy"); //return "I am a cool guy."
		 *
		 * str = "Currency: [{0}], Date : [{1}], JuminNo: [{2}]";
		 * var result = Eco.string.format(str,
		 *      Eco.number.getMaskFormatString(12301234, "#,###"),
		 *      Eco.date.getMaskFormatString(new Date(), "yyyy-MM-dd tt hh:mm"),
		 *      Eco.string.getMaskFormatString("6601011234567", "@@@@@@-{@@@@@@@}")
		 *    );
		 * trace(result); // output : Currency: [12,301,234], Date : [2013-05-03 오후 07:49], JuminNo: [660101-*******]
		 * @memberOf Eco.string
		 */	 	         
		format: function() 
		{
			var str = arguments[0];
			var args = Eco.array.toArray(arguments, 1);
			return str.replace(Eco.string._formatRegExp, function(m, i) {
				return args[i];
			});
		},

		/**
		 * 문자열 길이계산.
		 * @param {string} str 대상 문자열.
		 * @param {string=} unit 문자열의 길이를 검사하는 단위 . 
						   "utf16" - 한문자당 1의 값으로 합산함(default).
						   "utf8"  - 한 문자당 영문1, 다국어 2~5의 값으로 합산함.
						   "ascii" - 한문자당 영문 1, 한글 2의 값으로 합산함.
		 * @return {number} 문자열 길이.
		 * @example
		 * var str = "unit 문자열";
		 * var len = Eco.string.getLength(str);
		 * trace(len); // output : 8
		 * len = Eco.string.getLength(str, "ascii");
		 * trace(len); // output : 11
		 * len = Eco.string.getLength(str, "utf8");
		 * trace(len); // output : 14
		 * @memberOf Eco.string
		 */	 		 
		getLength: function(str, unit)
		{
			if ( !str ) return 0;
			
			var pThis = Eco.string;
			
			if ( unit == "utf8" )
			{
				return pThis._utf8ByteCount(str);
			}
			else if ( unit == "ascii" )
			{
				return pThis._asciiByteCount(str);
			}
			else
			{
				return str.length;
			}
		},

		/**
		 * utf8을 기준으로 문자열 길이계산.
		 * @private
		 * @param {string} str 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Eco.string
		 */	 		 
		_utf8ByteCount: function(str)
		{
			if (str === undefined) return 0;
			
			var pThis = Eco.string;
			var count = 0,
				ch,
				high,
				low,
				isHighSurrogate = pThis._isHighSurrogate,
				utf8Len = pThis._utf8Len,
				toCodepoint = pThis._toCodepoint;

			for(var i=0, n = str.length; i< n; i++) 
			{
				ch = str.charCodeAt(i);
				
				if(isHighSurrogate(ch)) 
				{
					high = ch;
					low = str.charCodeAt(++i);
					count += utf8Len(toCodepoint(high, low));
				} 
				else 
				{
					count += utf8Len(ch);
				}
			}
			return count;
		}, 	
		
		
		/**
		 * ascii를 기준으로 문자열 길이계산.
		 * @private
		 * @param {string} str 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Eco.string
		 */	 		 
		_asciiByteCount: function(str)
		{
			if (str === undefined) return 0;
			
			var i, j=0, val; 
			for(i=0, n = str.length; i< n; i++) 
			{ 
				val = str.charCodeAt(i);
				if ( val > 255 ) j++;
				j++; 
			}
			return j;
		},
		
		/**
		 * [내부함수]uft8 문자열 길이계산.
		 * @private
		 * @param {string} codePoint 문자셋 수치보정값.
		 * @return {number} 문자열 길이.
		 * @memberOf Eco.string
		 */	 		 
		_utf8Len: function(codePoint)
		{
			if(codePoint >= 0xD800 && codePoint <= 0xDFFF)
			{
				Eco.Logger.error({"message":"Illegal argument: "+codePoint, "stack":true});
			}
			if(codePoint < 0)
			{
				Eco.Logger.error({"message":"Illegal argument: "+codePoint, "stack":true});
			}
			if(codePoint <= 0x7F) return 1;
			if(codePoint <= 0x7FF) return 2;
			if(codePoint <= 0xFFFF) return 3;
			if(codePoint <= 0x1FFFFF) return 4;
			if(codePoint <= 0x3FFFFFF) return 5;
			if(codePoint <= 0x7FFFFFFF) return 6;

			Eco.Logger.error({"message":"Illegal argument: "+codePoint, "stack":true});
		},

		
		/**
		 * 유니코드 보충언어판(Supplementary Plane)의 상위 대행코드(High Surrogate) 여부.
		 * @private
		 * @param {string} codeUnit 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Eco.string
		 */	 		 
		_isHighSurrogate: function(codeUnit)
		{
			return codeUnit >= 0xD800 && codeUnit <= 0xDBFF;
		},
		
		/**
		 * 유니코드 보충언어판(Supplementary Plane)의 하위 대행코드(Low Surrogate) 여부.
		 * @private
		 * @param {string} codeUnit 대상 문자열.
		 * @return {number} 문자열 길이.
		 * @memberOf Eco.string
		 */	 		 
		_isLowSurrogate: function(codeUnit)
		{
			return codeUnit >= 0xDC00 && codeUnit <= 0xDFFF;
		},
		
		/**
		 * 문자셋의 수치보정값 처리
		 * @private
		 * @param {number} highCodeUnit 상위 대행코드.
		 * @param {number} lowCodeUnit 하위 대행코드.
		 * @return {number} 문자열 길이.
		 * @memberOf Eco.string
		 */
		_toCodepoint: function(highCodeUnit, lowCodeUnit)
		{
			var pThis = Eco.string;
			
			if(!pThis._isHighSurrogate(highCodeUnit))
			{
				Eco.Logger.error({"message":"Illegal argument: "+highCodeUnit, "stack":true});
			}
			if(!pThis._isLowSurrogate(lowCodeUnit))
			{
				Eco.Logger.error({"message":"Illegal argument: "+lowCodeUnit, "stack":true});
			}
			highCodeUnit = (0x3FF & highCodeUnit) << 10;
			var u = highCodeUnit | (0x3FF & lowCodeUnit);
			return u + 0x10000;	 	
		},
		
		/**
		 * 문자열의 특수문자(개행문자 Tab문자 ~ ` ! @ # $ % % ^ & * - = + 등) 포함개수.
		 * @param {string} str 대상 문자열.
		 * @return {number} 특수문자 개수.
		 * @example
		 * var str = "2011-12-27\r\n\t~`";
		 * var cnt = Eco.string.countNonword(str);
		 * trace(cnt); // output : 7
		 * @memberOf Eco.string
		 */	 		 
		countNonword: function(str)
		{
			var regExp = /\W/g;
			var rtn = str.match(regExp);
			return (!rtn)?0:rtn.length;
		}, 	
		
		/**
		 * 전각문자를 반각문자로 변환.<br><br>
		 * 참고: <br>
		 * 전각문자는 "정사각형" 안에 들어가는 문자이고, <br>
		 * 반각은 그 정사각형의 반쪽에 들어가는 문자이다.<br>
		 * 전각문자의 폭은, 반각문자의 2배입니다. <br><br>
		 * 예를 들어 숫자 "3" 은, 한글 "가"의 절반의 폭만을 가지고 있습니다. <br>
		 * 그래서 영문과 숫자 등은 반각이고, 한글이나 한자들은 전각문자입니다. <br>
		 * 다만, 영문과 숫자를 전각으로 표현할 수도 있습니다.<br>
		 * 예 : 전각문자 ==> ※★０＋ , 반각문자 ==> 1a 
		 * @param {string} str 전각문자( 예 : "０＋" ).
		 * @return {string} 반각문자 ( 예 : "0+" ).
		 * @example
		 * var var str = "０１＋ｗｏｒｌｄ투비소프트";
		 * var result = Eco.string.strFullToHalf(str);
		 * trace(result); // output : 01+world투비소프트
		 * @memberOf Eco.string
		 */	 			 
		strFullToHalf: function(str)
		{
			var i, c, sHalf = "";
			var count = str.length;
			for( i=0 ; i < count ; i++ )
			{
				var c = str.charCodeAt(i);

				if (c == 12288) 
				{
					sHalf += unescape("%20"); 
				} 
				else if ( (c >= 65281) && (c <= 65374) ) 
				{
					sHalf += unescape("%"+(c-65248).toString(16));
				} 
				else 
				{
					sHalf += str.charAt(i);
				}
			}
			
			return  sHalf;
		}, 	

		/**
		 * 반각문자를 전각문자로 변환.
		 * @param {string} str 반각문자( 예 : "0+" ).
		 * @return {string} 전각문자 ( 예 : "０＋" ).
		 * @example
		 * var var str = "01+world투비소프트";
		 * var result = Eco.string.strHalfToFull(str);
		 * trace(result); // output : ０１＋ｗｏｒｌｄ투비소프트
		 * @memberOf Eco.string
		 */	 	 
		strHalfToFull: function(str)
		{
			var rTmp = "";
			var iTmp = "";
			var i, incount = str.length;
			var tempCode;
		 
			for( i = 0 ; i < incount ; i++ ) 
			{
				//기본 아스키 코드 값을 벗어난 경우(한글)는 전자로 변환할 필요 없음.
				tempCode = str.charCodeAt(i);
				
				if( (tempCode >= 32) && (tempCode <= 126) ) 
				{
					if( tempCode == 32 ) 
					{
						iTmp = unescape("%u"+(12288).toString(16));
					} 
					else 
					{
						iTmp = tempCode + 65248;
					}
					
				} 
				else 
				{
					iTmp = tempCode;
				}

				if( tempCode == 32 )
				{
					rTmp = rTmp + (iTmp);
				} 
				else 
				{
					rTmp = rTmp + String.fromCharCode(iTmp);
				}
			}

			return rTmp;
		},

		/**
		 * 주어진 문자열을 n회 반복해서 반환한다.
		 * @param {string} str 반복할 문자열.
		 * @param {number} count 반복 횟수.
		 * @return {string} 반복된 문자열
		 * @example
		 * var str = "0";
		 * var result = Eco.string.repeatStr(str, 4);
		 * trace(result); // output : 0000
		 * @memberOf Eco.string
		 */
		repeatStr: function(str, count) 
		{
			var rtn = "".padLeft(count, str);
			return rtn;
		},

		/**
		 * 한글 → 유니코드로 변환.
		 * @param {string} str 한글 문자열.
		 * @return {string} 유니코드.
		 * @example
		 * var str = "www.투비소프트.com";
		 * var result = Eco.string.hanGulToUnicode(str);
		 * trace(result); // output : www.\uD22C\uBE44\uC18C\uD504\uD2B8.com
		 * @memberOf Eco.string
		 */	 	 
		hanGulToUnicode: function(str)
		{
			return escape(str).replace(/%/gi, "\\");
		},	
				
		/**
		 * 유니코드 → 한글로 변환.
		 * @param {string} str 유니코드 문자열.
		 * @return {string} 한글.
		 * @example
		 * var str = "www.\uD22C\uBE44\uC18C\uD504\uD2B8.com";
		 * var result = Eco.string.unicodeToHanGul(str);
		 * trace(result); // output : www.투비소프트.com
		 * @memberOf Eco.string
		 */	 	 
		unicodeToHanGul: function(str)
		{
			return unescape(str.replace(/\\/gi, "%"));
		},

		/**
		 * file, folder, or shortcut명에 허용되지 않는 특수문자 치환.<br>
		 * \ / : * ? " < > | 를 치환한다.
		 * @param {string} str 문자열.
		 * @param {string=} opt_newvalue 치환할 문자열(default: underscore( "_" ) ).
		 * @return {string} 허용되지 않는 특수문자를 치환한 문자열.
		 * @example
		 * var str = "test:uploadfile.php";
		 * var result = Eco.string.replaceInvalidFileNameChars(str);
		 * trace(result); // output : test_uploadfile.php
		 * str = "test-uploadfile.php";
		 * result = Eco.string.replaceInvalidFileNameChars(str);
		 * trace(result); // output : test-uploadfile.php
		 * @memberOf Eco.string
		 */
		replaceInvalidFileNameChars: function(str,opt_newvalue) 
		{
			if(opt_newvalue === null || opt_newvalue === undefined) opt_newvalue = "_";
			
			var filename = str.replace(/[\\\/:*?"<>|]/, opt_newvalue);
			return filename;
		},		

		/**
		 * 문자열에서 multibyte character(한글, 한자, 일어)을 제거.
		 * @param {string} str 문자열.
		 * @return {string} multibyte character가 제거된 문자열.
		 * @example
		 * var str = "unit문자열s五ご";
		 * var result = Eco.string.removeMultibyteChar(str);
		 * trace(result); // output : units
		 * @memberOf Eco.string
		 */
		removeMultibyteChar: function(str) 
		{
			var rtn = "";
			var arrStr = str.split(""),
				len = arrStr.length,
				chr;
			for(var i = 0; i < len; i++)
			{
				chr = arrStr[i];
				chr = escape(chr);

				if (chr.charAt(1) != "u") //multichar이 아닌 경우만 처리함.
				{
					rtn += arrStr[i]; //multichar이을 빼고 값을 더해줌??????????????? 
				}
			}
			return rtn;
		},		

		
		/**
		 * 지정된 문자로 시작하는지 여부.
		 * @param {string} str 문자열.
		 * @param {string} target 대상문자열.
		 * @return {boolean} 시작하는지 여부.
		 * @example
		 * var str = "Hello World!";
		 * var result = Eco.string.startsWith(str, "He");
		 * trace(result); // output : true
		 * result = Eco.string.startsWith(str, "hew");
		 * trace(result); // output : false
		 * @memberOf Eco.string
		 */
		startsWith: function(str, target) 
		{
			return str.lastIndexOf(target, 0) == 0;
		},	
		
		/**
		 * 지정된 문자로 끝나는지 여부.
		 * @param {string} str 문자열.
		 * @param {string} target 대상문자열.
		 * @return {boolean} 끝나는지 여부.
		 * @example
		 * var str = "Hello World!";
		 * var result = Eco.string.endsWith(str, "ld!");
		 * trace(result); // output : true
		 * result = Eco.string.endsWith(str, "Wor");
		 * trace(result); // output : false
		 * @memberOf Eco.string
		 */
		endsWith: function(str, target) 
		{
			var l = str.length - target.length;
			return l >= 0 && str.indexOf(target, l) == l;
		},

		/**
		* unicode 문자열 -> decimal표시 문자열로 변경.<br>
		* (ex : left,right delimiter가 default 값으로 주어지면 space문자 -> &#38;#32; 로 변경된다.)  
		* @param {string} val 대상 unicodeString
		* @param {string=} leftDelimiter 문자를 Decimal 표시할 때 좌측에 표시하는 문자열(default:"&#")
		* @param {string=} rightDelimiter 문자를 Decimal 표시할 때 우측에 표시하는 문자열(default:";")
		* @return {string} unicode 문자열을 decimal값으로 표시한 문자열
		* @example
		* var str = "form 로딩";
		* var result = Eco.string.unicodeToDecimal(str);
		* trace(result); // output : &#38;#102;&#38;#111;&#38;#114;&#38;#109;&#38;#32;&#38;#47196;&#38;#46377;
		* @memberOf Eco.string
		*/
		unicodeToDecimal: function(val, leftDelimiter, rightDelimiter)
		{
			if ( Eco.isEmpty(leftDelimiter) ) leftDelimiter = "&#";
			if ( Eco.isEmpty(rightDelimiter) ) rightDelimiter = ";";

			var res = "";
			val = val.replace(/^\s+/, '');
			if (val.length == 0)
			{
				return "";
			}
			var code;
			for ( var i = 0, n = val.length; i < n; i++ )
			{
				code = val.charCodeAt(i);
				res += leftDelimiter + code + rightDelimiter;
			}
			return res;
		},

		/**
		* decimal표시된 문자열 -> unicode 문자열로 변경.<br>
		* (ex : left,right delimiter가 default이면 &#38;#32; -> space문자)  
		* @param {string} val 대상 decimal표시된 문자열
		* @param {string=} leftDelimiter 문자를 Decimal 표시할 때 좌측에 표시하는 문자열(default:"&#")
		* @param {string=} rightDelimiter 문자를 Decimal 표시할 때 우측에 표시하는 문자열(default:";")
		* @return {string} decimal값으로 표시한 문자열을 unicode 문자열
		* @example
		* var str = "&#38;#102;&#38;#111;&#38;#114;&#38;#109;&#38;#32;&#38;#47196;&#38;#46377;";
		* var result = Eco.string.decimalToUnicode(str);
		* trace(result); // output : form 로딩
		* @memberOf Eco.string
		*/
		decimalToUnicode: function(val, leftDelimiter, rightDelimiter)
		{
			if ( Eco.isEmpty(leftDelimiter) ) leftDelimiter = "&#";
			if ( Eco.isEmpty(rightDelimiter) ) rightDelimiter = ";";

			var res = "";
			val = val.replace(/^\s+/, '');
			if (val.length == 0)
			{
				return "";
			}
			var delimiter = rightDelimiter + leftDelimiter;
			var arr = val.split(delimiter),
				chr;
			arr[0] = arr[0].substr(leftDelimiter.length);
			var lastE = arr[arr.length - 1];
			arr[arr.length - 1] = lastE.substr(0, lastE.length - rightDelimiter.length);
			for ( var i = 0, n = arr.length; i < n; i++ )
			{
				chr = String.fromCharCode(arr[i]);
				res += chr;
			}
			return res;
		},

		/**
		* unicode 문자열 -> hex표시 문자열로 변경.<br>
		* (ex : left,right delimiter가 default 값으로 주어지면 space문자 -> &#38;#x20; 로 변경된다.)  
		* @param {string} val 대상 unicodeString
		* @param {string=} leftDelimiter 문자를 hex 표시할 때 좌측에 표시하는 문자열(default:"&#x")
		* @param {string=} rightDelimiter 문자를 hex 표시할 때 우측에 표시하는 문자열(default:";")
		* @return {string} unicode 문자열을 hex값으로 표시한 문자열
		* @example
		* var str = "form 로딩";
		* var result = Eco.string.unicodeToHex(str);
		* trace(result); // output : &#38;#x66;&#38;#x6F;&#38;#x72;&#38;#x6D;&#38;#x20;&#38;#xB85C;&#38;#xB529;
		* @memberOf Eco.string
		*/
		unicodeToHex: function(val, leftDelimiter, rightDelimiter)
		{
			if ( Eco.isEmpty(leftDelimiter) ) leftDelimiter = "&#x";
			if ( Eco.isEmpty(rightDelimiter) ) rightDelimiter = ";";

			var res = "";
			val = val.replace(/^\s+/, '');
			if (val.length == 0)
			{
				return "";
			}
			var code;

			for ( var i = 0, n = val.length; i < n; i++ )
			{
				code = val.charCodeAt(i);
				res += leftDelimiter + code.toString(16).toUpperCase() + rightDelimiter;
			}
			return res;
		},

		/**
		* hex표시 문자열 ->  unicode 문자열로 변경.<br>
		* (ex : left,right delimiter가 default 값으로 주어지면 &#38;#x20; -> space문자 로 변경된다.)  
		* @param {string} val 대상 hex표시 문자열
		* @param {string=} leftDelimiter 문자를 hex 표시할 때 좌측에 표시하는 문자열(default:"&#x")
		* @param {string=} rightDelimiter 문자를 hex 표시할 때 우측에 표시하는 문자열(default:";")
		* @return {string} hex값으로 표시한 문자열을 unicode 문자열
		* @example
		* var str = "&#38;#102;&#38;#111;&#38;#114;&#38;#109;&#38;#32;&#38;#47196;&#38;#46377;";
		* var result = Eco.string.hexToUnicode(str);
		* trace(result); // output : form 로딩
		* @memberOf Eco.string
		*/
		hexToUnicode: function(val, leftDelimiter, rightDelimiter)
		{
			if ( Eco.isEmpty(leftDelimiter) ) leftDelimiter = "&#x";
			if ( Eco.isEmpty(rightDelimiter) ) rightDelimiter = ";";

			var res = "";
			val = val.replace(/^\s+/, '');
			if (val.length == 0)
			{
				return "";
			}
			var delimiter = rightDelimiter + leftDelimiter;
			var arr = val.split(delimiter),
				chr;
			arr[0] = arr[0].substr(leftDelimiter.length);
			var lastE = arr[arr.length - 1];
			arr[arr.length - 1] = lastE.substr(0, lastE.length - rightDelimiter.length);

			for ( var i = 0, n = arr.length; i < n; i++ )
			{
				chr = String.fromCharCode(parseInt(arr[i], 16));
				res += chr;
			}
			return res;
		},

		/**
		 * hex value.
		 * @private
		 * @memberOf Eco.string
		 */
		_hex: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"],

		/**
		 * hex display
		 * @private
		 * @param {number} 한자리 숫자.
		 * @return {string} Hex표시값
		 * @memberOf Eco.string
		 */
		_toHex: function(val)
		{
			var hexs = Eco.string._hex;
			return hexs[(val >> 4) & 0xF] + hexs[val & 0xF];
		},

		/**
		* unicode 문자열 -> utf-8 인코딩 hex표시된 문자열로 변경.<br>
		* (ex : left,right delimiter가 default 값으로 주어지면 space문자 -> 20 로 변경된다.)  
		* @param {string} val 대상 unicodeString
		* @param {string=} leftDelimiter 문자를 utf-8 인코딩 hex 표시할 때 좌측에 표시하는 문자열(default:"")
		* @param {string=} rightDelimiter 문자를 utf-8 인코딩 hex 표시할 때 우측에 표시하는 문자열(default:" ")
		* @return {string} unicode 문자열을 utf-8 인코딩 hex값으로 표시한 문자열
		* @example
		* var str = "form 로딩";
		* var result = Eco.string.unicodeToUtf8(str);
		* trace(result); // output : 66 6F 72 6D 20 EB A1 9C EB 94 A9
		* @memberOf Eco.string
		*/
		unicodeToUtf8: function(val, leftDelimiter, rightDelimiter)
		{
			if ( Eco.isEmpty(leftDelimiter) ) leftDelimiter = "";
			if ( Eco.isEmpty(rightDelimiter) ) rightDelimiter = " ";

			var res = "";
			val = val.replace(/^\s+/, '');
			if (val.length == 0)
			{
				return "";
			}
			var code,
				toHex = Eco.string._toHex;
			for ( var i = 0, n = val.length; i < n; i++ )
			{
				code = val.charCodeAt(i);
				if (i > 0)
				{
					res += rightDelimiter;
				}
				if (code <= 0x7F)
				{
					res += leftDelimiter + toHex(code);
				}
				else if (code <= 0x7FF)
				{
					res += leftDelimiter + toHex(0xC0 | ((code>>6) & 0x1F)) + rightDelimiter + leftDelimiter + toHex(0x80 | (code & 0x3F));
				}
				else if (code <= 0xFFFF)
				{
					res += leftDelimiter + toHex(0xE0 | ((code>>12) & 0x0F)) + rightDelimiter + leftDelimiter + toHex(0x80 | ((code>>6) & 0x3F)) + rightDelimiter + leftDelimiter + toHex(0x80 | (code & 0x3F));
				}
				else if (code <= 0x10FFFF)
				{
					outputString += leftDelimiter + toHex(0xF0 | ((code>>18) & 0x07)) + rightDelimiter + leftDelimiter + toHex(0x80 | ((code>>12) & 0x3F)) + rightDelimiter + leftDelimiter + toHex(0x80 | ((code>>6) & 0x3F)) + rightDelimiter + leftDelimiter + toHex(0x80 | (code & 0x3F));
				}
				else
				{
					res += leftDelimiter + code.toString(16).toUpperCase();
				}
			}
			res += rightDelimiter;
			return res;
		},

		/**
		* utf-8 인코딩 hex표시된 문자열 -> unicode 문자열로 변경.<br>
		* (ex : left,right delimiter가 default 값으로 주어지면 20 -> space문자 로 변경된다.)  
		* @param {string} val 대상 utf-8 인코딩 hex표시된 문자열
		* @param {string=} leftDelimiter 문자를 utf-8 인코딩 hex 표시할 때 좌측에 표시하는 문자열(default:"")
		* @param {string=} rightDelimiter 문자를 utf-8 인코딩 hex 표시할 때 우측에 표시하는 문자열(default:" ")
		* @return {string} utf-8 인코딩 hex값으로 표시한 문자열 -> unicode 문자열
		* @example
		* var str = "66 6F 72 6D 20 EB A1 9C EB 94 A9";
		* var result = Eco.string.utf8ToUnicode(str);
		* trace(result); // output : form 로딩
		* @memberOf Eco.string
		*/
		utf8ToUnicode: function(val, leftDelimiter, rightDelimiter)
		{
			val = val.replace(/^\s+/, '');
			val = val.replace(/ $/, '');
			if (val.length == 0)
			{
				return "";
			}
			if ( Eco.isEmpty(leftDelimiter) ) leftDelimiter = "";
			if ( Eco.isEmpty(rightDelimiter) ) rightDelimiter = " ";
			
			var delimiter = rightDelimiter + leftDelimiter,
				arr;

			arr = val.split(delimiter);
			if ( leftDelimiter.length && rightDelimiter.length )
			{
				arr[0] = arr[0].substr(leftDelimiter.length);
				var lastE = arr[arr.length - 1];
				arr[arr.length - 1] = lastE.substr(0, lastE.length - rightDelimiter.length);
			}

			var valLen = arr.length,
				res = "", code, compte = 0, tmpcode = 0;
			for(var i = 0 ; i < valLen ; i++ )
			{
				code = parseInt(arr[i], 16);
				switch (compte)
				{
					case 0:
						if (0 <= code && code <= 0x7F)
						{ 
							res += String.fromCharCode(code);
						}
						else if (0xC0 <= code && code <= 0xDF)
						{
							compte = 1;
							tmpcode = code & 0x1F;
						}
						else if (0xE0 <= code && code <= 0xEF)
						{  
							compte = 2;
							tmpcode = code & 0xF;
						}
						else if (0xF0 <= code && code <= 0xF7)
						{ 
							compte = 3;
							tmpcode = code & 0x7;
						}
						else
						{
							res += String.fromCharCode(code);
						}
						break;
					case 1:
						if (code < 0x80 || code > 0xBF)
						{
							res += String.fromCharCode(code);
						}
						compte--;
						res += String.fromCharCode((tmpcode << 6) | (code-0x80));
						tmpcode = 0;
						break;
					case 2:
					case 3:
						if (code < 0x80 || code > 0xBF)
						{
							res += String.fromCharCode(code);
						}
						tmpcode = (tmpcode << 6) | (code-0x80);
						compte--;
						break;
				}
			}
			return res;
		},

		/**
		 * mask character RegExp.
		 * @private
		 * @memberOf Eco.string
		 */
		_maskChr: { 
			"@" : /[\x20-\x7D]/, // /[\u0020-\u00ff]/,
			"#" : /[0-9]/,
			"*" : /[a-zA-Z]/,
			"9" : /[a-zA-Z0-9]/,
			"A" : /[A-Z]/,
			"a" : /[a-z]/,
			"Z" : /[A-Z0-9]/,
			"z" : /[a-z0-9]/
		},

		/**
		 * default password character.
		 * @private
		 * @memberOf Eco.string
		 */
		_defaultPassChar: "*",
		
		/**
		 * default mask character.
		 * @private
		 * @memberOf Eco.string
		 */
		_defaultMaskChar: "_",
		
		/**
		 * password start,end character.
		 * @private
		 * @constant
		 * @memberOf Eco.string
		 */
		_PASSWORD_PAIR: ["{", "}"],

		/**
		 * mask format cache.
		 * @private
		 * @memberOf Eco.string
		 */
		_stringMaskCache: {},

		/**
		 * emtpy string.
		 * @private
		 * @memberOf Eco.string
		 */		
		_chkEmpty: String.fromCharCode(0x08),
		
		/**
		 * mask format 변환 정보 반환.
		 * @private
		 * @param {string} strMask mask할 format 문자열.
		 * @param {string} maskChr mask 문자.
		 * @param {string} passChr password 문자.
		 * @return {array} mask format 변환 정보
		 * @memberOf Eco.string
		 */
		_parseStringMask: function(strMask, maskChr, passChr)
		{
			var pThis = Eco.string;
			
			var res = pThis._stringMaskCache[strMask];
			if ( res ) return res;

			var len = strMask.length,
				arrMask = [],
				arrPass = [],
				arrOrgMask = [],
				bQuote = false,
				bEscape = false,
				bPasswd = false,
				Mask = 0,
				i, nIdx,
				cMasks = strMask.split(""),
				rMaskChr,
				ReserveMasks = pThis._maskChr;

			for( i=0, nIdx=0; i < len ; i++ ) 
			{
				if( bEscape == false && cMasks[i] == "'" ) 
				{ // Mask가 Quotation이 시작될 경우.
					if( bQuote == false )
						bQuote = true;
					else
						bQuote = false;
					continue;
				}
				Mask = 0;
				if( bEscape == false && cMasks[i] == "\\" && !bQuote ) 
				{ // Mask에서 Escape에 진입할 경우.
					bEscape = true;
					continue;
				}
				else if ( bEscape ) 
				{ // Mask에서 Escape를 사용할 경우.
					bEscape = false;
				}
				else if( bQuote == false ) 
				{// Mask에서 Quotation 밖의 글자에 대해.
					rMaskChr = ReserveMasks[cMasks[i]];
					if ( rMaskChr ) 
					{
						Mask = rMaskChr;
					}
					if( cMasks[i] == this._PASSWORD_PAIR[0] ) 
					{
						bPasswd = true;
						continue;
					}
					if( cMasks[i] == this._PASSWORD_PAIR[1] ) 
					{
						bPasswd = false;
						continue;
					}
				}
				arrMask[nIdx] = Mask;
				arrPass[nIdx] = bPasswd;
				arrOrgMask[nIdx] = cMasks[i];
				nIdx++;
			}
			res = [arrMask, arrPass, arrOrgMask];
			pThis._stringMaskCache[strMask] = res;
			return res;
		},
				
		/**
		 * mask 값이 적용된 문자 배열 반환
		 * @private
		 * @param {array} arrVal 원본 문자 배열.
		 * @param {array} arrMask 변환된 mask 문자 배열.
		 * @param {array} arrOrgMask 원본 mask 문자 배열.
		 * @return {array} mask 값이 적용된 문자 배열
		 * @memberOf Eco.string
		 */
		_makeMaskedValue: function(arrVal, arrMask, arrOrgMask)
		{
			var bOverlappedValue = false; // 기본은 겹치지 않음.
			var Mask;
			var c;

			var	nXCharLen = 0;
			var nLen = arrVal.length;
			var i, j;
			if( nLen == arrMask.length ) 
			{
				for( i=0 ; i < nLen ; i++) 
				{
					if( arrMask[i] == 0 && arrVal[i] == arrMask[i] )
						continue;
					else if( arrMask[i] == 0 )
						break;
				}
				if( i == arrVal.length )
					bOverlappedValue = true;
			}

			var strMaskedValue = [];
			nLen = arrOrgMask.length;		
			var ReserveMasks = this._maskChr;
			for( i=0, j=0 ; i < nLen ; i++ ) 
			{
				c = arrOrgMask[i];
				Mask = arrMask[i];

				if ( Mask != 0 && ReserveMasks[c] ) 
				{
					do 
					{
						c = arrVal[j];
						j++;
					}
					while( c && !Mask.test(c) )
					
					if( Eco.isEmpty(c) ) 
					{// || (xch & 0x80) )
						c = _chkEmpty;
					}
				}
				else if( bOverlappedValue && arrOrgMask[i] == c ) 
				{
					j++;
				}
				strMaskedValue[i] = c;
			}
			return strMaskedValue;
		},
		
		/**
		 * 주어진 문자열의 Mask Format 처리된 문자열을 반환합니다.
		 * @param {string} val 원본 문자열.
		 * @param {string} strMask mask할 format 문자열.
		 * @param {string=} maskChr mask 문자.
		 * @return {string} 변환된 문자열.
		 * @example
		 * var str = "20060607";
		 * var result = Eco.string.getMaskFormatString(str, "@@@@-@@-@@");
		 * trace(result); // output : 2006-06-07
		 *
		 * str = "6601011234567";
		 * result = Eco.string.getMaskFormatString(str, "######-{#######}");
		 * trace(result); // output : 660101-*******
		 * @memberOf Eco.string
		 */
		getMaskFormatString: function(val, strMask, maskChr)
		{
			var pThis = Eco.string;
			
			if ( !maskChr ) maskChr = pThis._defaultMaskChar;
			var passChr = pThis._defaultPassChar;

			var maskInfo = pThis._parseStringMask(strMask, maskChr, passChr),
				arrMask = maskInfo[0],
				arrPass = maskInfo[1],
				arrOrgMask = maskInfo[2],
				arrVal = val.split("");

			var maskedValue = pThis._makeMaskedValue(arrVal, arrMask, arrOrgMask);

			var i;
			var strText = [];
			var c;
			var Mask, Pass, strMask;

			var nLen = arrOrgMask.length;
			for(i = 0 ; i < nLen ; i++ ) 
			{
				c = maskedValue[i];
				Mask = arrMask[i];
				Pass = arrPass[i];
				strMask = arrOrgMask[i];
				if( Mask != 0 ) 
				{
					if( Eco.isEmpty(c) || c == pThis._chkEmpty ) 
					{
						c = maskChr;
					}
					else if( Pass )
					{
						c = pThis._defaultPassChar;
					}
					else if( strMask == "A" || strMask == "Z" ) 
					{
						c = c.toUpperCase();
					}
					else if( strMask == "a" || strMask == "z" ) 
					{
						c = c.toLowerCase();
					}
				}
				strText[i] = c;
			}
			return strText.join("");
		},
		
		/**
		 * escapeXML cache.
		 * @private
		 * @memberOf Eco.string
		 */		
		_cacheEscapeXML: {},

		/**
		 * XML 의 예약문자,특수문자를 치환하여 반환.<br><br>
		 * 대상문자 : &, <, >, ', ", \t, \r, \n
		 * @param {string} str 문자열.
		 * @return {string} 치환된 문자열.
		 * @example
		 *
		 * trace(Eco.string.escapeXML("1 > 0")); // output : 1 &gt; 0
		 * trace(Eco.string.escapeXML("Q&A")); // output : Q&amp;A
		 *
		 * @memberOf Eco.string
		 */
		escapeXML: function(str) 
		{
			var pThis = Eco.string;
			
			if ( typeof str != "string") {
				str = new String(str);
			}
			
			var ret = pThis._cacheEscapeXML[str];
			if ( Eco.isEmpty(ret) )
			{
				/* 개행전에 한글 존재시 확인 필요 (속도는 이게 너 빠름)
				var ch = {
					'&': '&amp;',
					'<': '&lt;',
					'>': '&gt;',
					"'": '&apos;',
					'"': '&quot;',
					'\t': '&#9;',
					'\r': '&#13;',
					'\n': '&#10;'
				};
				ret = str.replace(/[<>&"'\t\r\n]/g, function(c) {
					return ch[c];
				});
				*/
				
				ret = str.replace(/&/g, "&amp;")
						.replace(/</g, "&lt;")
						.replace(/>/g, "&gt;")
						.replace(/'/g, "&apos;")
						.replace(/\"/g, "&quot;")
						.replace(/\t/g, "&#9;")
						.replace(/\r/g, "&#13;")
						.replace(/\n/g, "&#10;");

				pThis._cacheEscapeXML[str] = ret;
			}
			
			return ret;
		},
		/**
		 * 주어진 문자열을 첫 문자만 대문자 변경
		 * @param {string} str
		 * @return {string} 첫 문자 대문자 처리된 문자
		 * @example
		 *
		 * trace(Eco.string.capitalize("point")); // output : Point
		 *		 
		 * @memberOf Eco.string
		 */
		capitalize: function(str)
		{
			if ( !str ) Eco.Logger.error({message:"str is null!", stack: true});
			return str.replace(/\b[a-z]/g, function(match) {
				return match.toUpperCase();
			});
		},
		/**
		 * 주어진 문장열에서 '-' 제거하고 제거된 위치에서 첫 문자만 대문자 변경
		 * @param {string} str
		 * @return {string} 처리된 문자
		 * @example
		 *
		 * trace(Eco.string.camelize("create-point")); // output : createPoint
		 *		 
		 * @memberOf Eco.string
		 */
		camelize: function(str)
		{
			return str.replace(/-(.)/g, function(all, chr) {
				return chr.toUpperCase();
			});
		},
		/**
		 * 주어진 문장열에서 대문자 기준으로 '-' 삽입하고 대문자는 소문자 변경
		 * @param {string} str
		 * @return {string} 처리된 문자
		 * @example
		 *
		 * trace(Eco.string.hyphenate("createPoint")); // output : create-point
		 *		 
		 * @memberOf Eco.string
		 */
		hyphenate: function(str)
		{
			return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
		}
	});
}

/**
 * @fileoverview object 처리를 위한 함수.
 */

if ( !JsNamespace.exist("Eco.object") )
{
	/**
	 * @namespace
	 * @name Eco.object
	 * @memberof! <global>
	 */
	 
	JsNamespace.declare("Eco.object",{
				
		/**
		* object 속성값들을 transcation 함수에 사용되는 인자인 strArgument를<br>
		* transaction 형식의 값으로 변경한다.<br>
		* 속성 구조가 반복되는 객체의 경우는 (속성명 + "_" + index) 또는<br> 
		* (속성명 + "_" + 속성명) 의 argument string으로 변환한다.<br>
		*   예) {colors: ['red', 'green', 'blue']}) == > colors_0='red' colors_1='green' colors_2='blue'
		* @param {object} object argument string 정보를 담고 있는 객체
		* @return {string} argument 형태로 변환 처리된 string
		* @example
		* edt_arg.value = "edt_arg_value"; // Edit Compoenent value
		* var result = Eco.object.getServiceArgumenets({a: 1, b: "2", code: edt_arg});
		* trace(result);
		* // output : a=1 b="2" code="edt_arg_value"
		*
		* var result = Eco.object.getServiceArgumenets({colors: ['red', 'green', edt_arg]});
		* trace(result);
		* // output : colors_0="red" colors_1="green" colors_2="edt_arg_value"
		*
		* var result = Eco.object.getServiceArgumenets({a: 1, b: {b1: "2", b2: "3"}, code: edt_arg});
		* trace(result);
		* // output : a=1 b_b1="2" b_b2="3" code="edt_arg_value"
		* @memberOf Eco.object
		*/
		getServiceArgumenets: function(object)
		{
			var p, objects = [],
				i, len, value,
				obj, params = [],
				isEmpty = Eco.isEmpty,
				pThis = Eco.object;
			
			for (p in object) 
			{
				if (object.hasOwnProperty(p)) 
				{
					objects = objects.concat(pThis._toArgumentObjects(p, object[p], true));
				}
			}
			
			for (i = 0, len = objects.length; i < len; i++) 
			{
				obj = objects[i];
				if (!obj || isEmpty(obj.name))	continue;
				
				name = obj.name;
				value = obj.value;
				if (typeof value === "string")
				{
					value = nexacro.wrapQuote(value);
				}
				
				params.push(name + '=' + value);
			}

			return params.join(" ");
		},
		
		/**
		* object 속성값들을 transcation 함수에 사용되는 인자인<br>
		* strInDatasets, strOutDatasets를 transaction 형식의 값으로 변경한다.
		* @param {object} object strInDatasets, strOutDatasets string 정보를 담고 있는 객체
		* @return {string} 변환 처리된 string
		* @example
		* var result = Eco.object.getServiceDatasets({input: ds_users, input1: "ds_info"});
		* trace(result);
		* // output : input=ds_users input1=ds_info
		* @memberOf Eco.object
		*/
		getServiceDatasets: function(object)
		{
			var p, objects = [],
				i, len, value,
				obj, params = [],
				isEmpty = Eco.isEmpty,
				pThis = Eco.object;
			
			for (p in object) 
			{
				if (object.hasOwnProperty(p)) 
				{
					objects = objects.concat(pThis._toArgumentObjects(p, object[p]));
				}
			}
			
			for (i = 0, len = objects.length; i < len; i++) 
			{
				obj = objects[i];
				if (!obj || isEmpty(obj.name))	continue;
				
				name = obj.name;
				value = obj.value;
				params.push(name + '=' + value);
			}

			return params.join(" ");
		},
		
		/**
		* 속성,값 객체의 배열 형태로 반환
		* @private
		* @param {string} name 속성명
		* @param {object} value 속성값
		* @param {boolean=} recursive 재귀 처리 여부 (default: false)
		* @return {array} 
		* @memberOf Eco.object
		*/	
		_toArgumentObjects: function(name, value, recursive) 
		{
			var thisFunc = Eco.object._toArgumentObjects,
				objects = [],
				i, len, p;

			if (Eco.isXComponent(value))
			{
				if(value instanceof Static || value instanceof Button) 
				{
					value = value.text;
				} 
				else 
				{
					value = value.value;
				}
				
				objects.push({
					name: name,
					value: value
				});
			}
			else if (Eco.isArray(value)) 
			{
				for (i = 0, len = value.length; i < len; i++) 
				{
					if (recursive) 
					{
						objects = objects.concat(thisFunc(name + '_' + i, value[i], true));
					}
					else
					{
						objects.push({
							name: name,
							value: value[i]
						});
					}
				}
			}
			else if (Eco.isObject(value)) 
			{
				for (p in value) 
				{
					if (value.hasOwnProperty(p)) 
					{
						if (recursive) 
						{
							objects = objects.concat(thisFunc(name + '_' + p, value[p], true));
						}
						else 
						{
							objects.push({
								name: name,
								value: value[p]
							});
						}
					}
				}
			}
			else if (value instanceof Dataset)
			{
				value = value.name;
				objects.push({
					name: name,
					value: value
				});
			}
			else 
			{
				objects.push({
					name: name,
					value: value
				});
			}

			return objects;
		},
		
		/**
		* object에서 각 반복되는 속성값들을 주어진 함수로 처리한다.<br>
		* 주어진 함수에서 임의 속성 처리에서 return false를 하면 임의 속성지점에서 반복이 멈춘다.
		* @param {object} object 
		* @param {function} func callback 함수 
		* @param {string} func.prop object property name 
		* @param {object} func.val object property value
		* @param {object} func.object object 그 자체
		* @param {object=} scope callback 함수에 대한 수행 scope
		* @example
		* var datas = {code: "001", userId: "", name: "pete"};
		* Eco.object.Each(datas, function(prop, val, object) {
		* 	var result = "";
		* 	if ( !val )
		* 	{
		* 		result = prop + " must have not a non-empty value!"
		* 		st_result03.text += result;
		* 		trace(result);	// output : userId must have not a non-empty value!
		* 		return false;
		* 	}
		* 	result = prop + ":" + val;
		* 	st_result03.text += result + "  ";
		* 	trace(result);	// output : code:001
		* }, this);
		* @memberOf Eco.object
		*/
		Each: function(object, func, scope)
		{
			var p,
				scope = scope || object;
			for (p in object)
			{
				if (object.hasOwnProperty(p))
				{
					if (func.call(scope, p, object[p], object) === false)
					{
						return;
					}
				}
			}
		},
		
		/**
		* object 에 주어진 argument들로 속성값들을 합치는 처리<br>
		* 마지막부터 두번째/첫번째 argument는 속성들이 중복되는 경우 처리방법에 대한 함수이다.<br>
		* 마지막부터 두번째/첫번째 argument가 function으로 존재하지 않으면 중복되는 경우는 tarobject의 값으로 처리된다.
		* @param {object} tarobject target object 
		* @param {object...} target object 과 합치는 object들
		* @param {function=} func callback 함수 
		* @param {object=} scope callback 함수에 대한 수행 scope
		* @return {object} merge 처리된 object
		* @example
		* var datas01 = {"id": edt_id, "id_1": edt_id1};
		* var datas02 = {"name": edt_nm, "name_1": edt_nm1};
		* var datas03 = {"code": edt_cd, "value": edt_val};
		* var datas04 = {"code": edt_cd, "value": edt_val};
		* 
		* var result = Eco.object.merge(datas01, datas02, datas03, datas04, function(prop, val, object) {
		* 	switch ( prop )
		* 	{
		* 		case "code" :
		* 			if ( !object["code"] ) object["code"] = [];
		* 			object["code"].push(val);
		* 			return false;
		* 		case "value" :
		* 			if ( !object["value"] ) object["value"] = [];
		* 			object["value"].push(val);
		* 			return false;
		* 	}
		* }, this);
		* 
		* st_result.text = "";
		* for(var p in result)
		* {
		* 	if (Eco.isArray(result[p]))
		* 	{
		* 		for (var i=0; i < result[p].length; i++)
		* 		{
		* 			trace(p + "[" + i + "]:" + result[p][i].name);
		*			// output : code[0]:edt_cd
		*			// output : code[1]:edt_cd
		*			// output : value[0]:edt_val
		*			// output : value[1]:edt_val
		* 		}
		* 	}
		* 	else
		* 	{
		* 		trace(p + ":" + result[p].name);
		*		// output : id:edt_id
		*		// output : id_1:edt_id1
		*		// output : name:edt_nm
		*		// output : name_1:edt_nm1
		* 	}
		* }
		* @memberOf Eco.object
		*/
		merge: function(tarobject)
		{
			var i = 1,
				func, scope,
				ln = arguments.length,
				mergeFunc = Eco.object.merge,
				isObjectFunc = Eco.isObject,
				o, prop, 
				val, tarval;

			if ( !tarobject ) return;

			if ( typeof arguments[ln - 1]  == "function" )
			{
				ln = ln - 1;
				func = arguments[ln];
			}
			else if ( typeof arguments[ln - 2]  == "function" )
			{
				ln = ln - 2;
				func = arguments[ln];
				scope = arguments[ln + 1]||this;
			}

			if ( func )
			{
				for (; i < ln ; i++ ) //1
				{
					o = arguments[i];
					for ( prop in o )
					{
						if (o.hasOwnProperty(prop))
						{
							val = o[prop];
							if ( func.call(scope, prop, val, tarobject) !== false )
							{
								tarobject[prop] = val;
							}
						}
					}
				}
			}
			else
			{
				for (; i < ln ; i++ ) //1
				{
					o = arguments[i];
					for ( prop in o )
					{
						if (o.hasOwnProperty(prop))
						{
							val = o[prop];
							if ( !tarobject[prop] )
							{
								tarobject[prop] = val;
							}
						}
					}
				}
			}
			return tarobject;
		},
		
		/**
		* object에 argument로 주어진 object의 모든 속성값을 복사한다.<br>
		* object, function, date, array Type은 reference가 복사된다.
		* @param {object} tarobject target 객체 
		* @param {object} srcobject source 객체
		* @example
		* var target = {};
		* Eco.object.copyProperties(target, {a: 1, b: "2", c: {"A": "3", "B": 4}});
		* for(var p in target)
 		* {
		* 	trace(p + ":" + target[p]);
		*	// output : a:1
		*	// output : b:2
		*	// output : c:[object Object]
 		* }
		* @memberOf Eco.object
		*/
		copyProperties: function(tarobject, srcobject)
		{
			if (tarobject && srcobject) 
			{
				var p, value;
				
				for (p in srcobject)
				{
					if (srcobject.hasOwnProperty(p))
					{
						value = srcobject[p];
						tarobject[p] = value;
					}
				}
			}
		},
		
		
		/**
		* object에 argument로 주어진 object의 condition 조건에 따라 속성값을 복사한다.<br>
		* condition type이 undefined인 경우에는 tarobject에 정의되어 있지 않는 속성에 대해서만 복사되고,<br>
		* condition type이 function인 경우에는 return value가 true인 경우에만 복사 처리한다.<br>
		* object, function, date, array 속성 값은 reference가 복사된다.
		* @param {object} tarobject target 객체 
		* @param {object} srcobject source 객체
		* @param {function | undefined=} condition 복사 조건
		* @param {object=} scope callback 함수에 대한 수행 scope (default: this)
		* @example
		* var target = {"id1": "banana"};
		* Eco.object.copyPropertiesIf(target, {"id": "kiwi", "id1": "apple", "id2": "lemon"});
		* for(var p in target)
		* {
		* 	trace(p + ":" + target[p] + "  ");
		*	// output : id1:banana  
		*	// output : id:kiwi  
		*	// output : id2:lemon 
		* }
		* 
		* var target = {"id1": "banana"};
		* Eco.object.copyPropertiesIf(target, {"id": "kiwi", "id1": "apple", "id2": "lemon"}, function(prop, val, object) {
		* 	if (prop == "id1")
		* 	{
		* 		return false;
		* 	}
		* 	return true;
		* }
		* , this);
		* for(var p in target)
		* {
		* 	trace(p + ":" + target[p] + "  ");
		*	// output : id1:banana  
		*	// output : id:kiwi  
		*	// output : id2:lemon 
		* }
		* @memberOf Eco.object
		*/
		copyPropertiesIf: function(tarobject, srcobject, condition, scope)
		{
			if (tarobject && srcobject) 
			{
				var p, value, ret;
				
				if (condition && Eco.isFunction(condition))
				{
					for (var p in srcobject)
					{
						if (srcobject.hasOwnProperty(p))
						{
							value = srcobject[p];
							ret = condition.call(scope || this, p, value, srcobject);
							if (ret)
							{
								tarobject[p] = value;
							}
						}
					}
				}
				else // undefined
				{
					for (var p in srcobject)
					{
						if (srcobject.hasOwnProperty(p))
						{
							value = srcobject[p];
							if (tarobject[p] === condition)
							{
								tarobject[p] = value;
							}
						}
					}
				}
			}
		},
		
		/**
		* object에 속성값들을 array로 넘겨준다. 
		* @param {object} object 속성값 추출 대상 객체
		* @return {array} 속성값 Array
		* @example
		* var result = Eco.object.getValues({"id": "kiwi", "id1": "apple", code: edt_arg});
		* trace(result);	// output : kiwi,apple,[object Edit]
		* @memberOf Eco.object
		*/
		getValues: function(object)
		{
			var values = [], p;

			for (p in object) 
			{
				if (object.hasOwnProperty(p)) 
				{
					values.push(object[p]);
				}
			}

			return values;
		},
		_hasDontEnumBug: !({ toString: null }).propertyIsEnumerable('toString'),
		_dontEnums: [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		],
		/**
		* object에 속성명칭들을 array로 넘겨준다. 
		* @function getPropertyNames
		* @param {object} object 속성명 추출 대상 객체
		* @return {array} 속성명칭 Array
		* @example
		* var result = Eco.object.getPropertyNames({"id": "kiwi", "id1": "apple", code: edt_arg});
		* trace(result);	// output : id,id1,code
		* @memberOf Eco.object
		*/
		getPropertyNames: Object.keys ? function(object) {
			return Object.keys(object);
		} :
		function(object)
		{
			var names = [], p;

            for (p in object) 
            {
                if (object.hasOwnProperty(p)) 
                {
                    names.push(p);
                }
            }
            var pThis = Eco.object;
			if ( pThis._hasDontEnumBug)
			{
				var enums = pThis._dontEnums;
				for ( var i = 0, len = enums.length ; i < len ; i++ )
				{
					if (object.hasOwnProperty(enums[i])) 
					{
						names.push(enums[i]);
					}
				}
			}
           return names;	
		},
		
		/**
		* object에 속성들의 갯수을 넘겨준다. 
		* @param {object} object 대상 객체
		* @return {number} 속성 갯수
		* @example
		* var result = Eco.object.getSize({"id": "kiwi", "id1": "apple", code: edt_arg});
		* trace(result);	// output : 3
		* @memberOf Eco.object
		*/
		getSize: function(object)
		{
			var len = 0, p;

			for (p in object) 
			{
				if (object.hasOwnProperty(p)) 
				{
					len++;
				}
			}

			return len;
		},
		
		/**
		* object0 기준으로 object1의 속성 값이 object0 속성과 같은지 비교한다. 
		* @param {object} object0 대상 객체
		* @param {object} object1 비교 대상 객체
		* @return {boolean} 비교 결과
		* @example
		* var result = Eco.object.equal({"id": "kiwi", "id1": "apple"}, {"id": "kiwi", "id1": "apple"});
		* trace(result);	// output : true
		* @memberOf Eco.object
		*/
		equal: function(object0, object1)
		{
            if (object0 === object1) 
            {
                return true;
            } 
            
            if (object0 && object1) 
            {
                return this._equalProperty(object0, object1) && this._equalProperty(object1, object0);  
            } 
            else if (!object0 && !object1) 
            {
                return object0 === object1;
            } 
            else 
            {
                return false;
            }
		},
		
		/**
		* object0 기준으로 object1의 속성 값이 object0 속성과 같은지 비교한다. 
		* @private
		* @param {object} object0 대상 객체
		* @param {object} object1 비교 대상 객체
		* @return {boolean} 비교 결과
		* @memberOf Eco.object
		*/
		_equalProperty: function(object0, object1) 
		{
            var p;
            for (p in object0) 
            {
                if (object0.hasOwnProperty(p)) 
                {
                    if (object0[p] !== object1[p]) 
                    {
                        return false;
                    }
                }
            }    
            return true;
        },
        
		
		/**
		* argument로 주어진 object의 속성 명칭과 속성 값 쌍을 하나의 Object로 구성하여 Array로 넘겨준다. 
		* @param {object} object 대상 객체
		* @return {array} 속성쌍(name:value) 배열
		* @example
		* var result = Eco.object.getArray({"id": "kiwi", "id1": "apple", code: edt_arg});
		* for (var i=0, len=result.length; i < len; i++)
		* {
		* 	for(var p in result[i])
		* 		trace(p + ":" + result[i][p]);
		*		// output :  id:kiwi
		*		// output :  id1:apple
		*		// output :  code:[object Edit]
		* }
		* @memberOf Eco.object
		*/
		getArray: function(object)
		{
			var array = [], 
				p, values;
				
			for (p in object)
			{
				if (object.hasOwnProperty(p))
				{
					values = {};
 					values[p] = object[p];
 					array.push(values);
				}
			}
			return array;
		},
		
		/**
		* object에 속성들(name, value)를 dataset에 구성한다.<br>
		* dir 값이 vert 이면 name Column, value Column를 dataset에 구성한 후 속성 값들을 record로 구성하고,<br>
		* dir 값이 horz 이면 name는 Column 명으로 구성한다 value는 Column에 0번째 Row에 구성된다.<br>
		* @param {object} object Dataset의 구성에 참조되는 객체
		* @param {dataset} ds 객체 속성,값을 참조해서 구성되는 Dataset
		* @param {string=} dir default horz(horz/vert) 
		* @example
		* var info = { "basic": "A",
		* 	"string": "가",
		* 	"int": 10,
		*  	"float": 0.8,
		* 	"bool": true
		* };
		* Eco.object.toDataset(info, ds_vert, "vert");
		* trace(ds_vert.saveXML());
		* // output: 구성된 Dataset 정보
		* //	&lt;Dataset id="ds_vert"&gt;
		* // 		&lt;ColumnInfo&gt;
		* // 			&lt;Column id="name" type="STRING" size="256"/&gt;
		* // 			&lt;Column id="value" type="STRING" size="256"/&gt;
		* // 		&lt;/ColumnInfo&gt;
		* // 		&lt;Rows&gt;
		* // 			&lt;Row&gt;
		* // 				&lt;Col id="name"&gt;basic&lt;/Col&gt;
		* // 				&lt;Col id="value"&gt;A&lt;/Col&gt;
		* // 			&lt;/Row&gt;
		* // 			&lt;Row&gt;
		* // 				&lt;Col id="name"&gt;string&lt;/Col&gt;
		* // 				&lt;Col id="value"&gt;가&lt;/Col&gt;
		* // 			&lt;/Row&gt;
		* // 			&lt;Row&gt;
		* // 				&lt;Col id="name"&gt;int&lt;/Col&gt;
		* // 				&lt;Col id="value"&gt;10&lt;/Col&gt;
		* // 			&lt;/Row&gt;
		* // 			&lt;Row&gt;
		* // 				&lt;Col id="name"&gt;float&lt;/Col&gt;
		* // 				&lt;Col id="value"&gt;0.8&lt;/Col&gt;
		* // 			&lt;/Row&gt;
		* // 			&lt;Row&gt;
		* // 				&lt;Col id="name"&gt;bool&lt;/Col&gt;
		* // 				&lt;Col id="value"&gt;true&lt;/Col&gt;
		* // 			&lt;/Row&gt;
		* // 		&lt;/Rows&gt;
		* // 	&lt;/Dataset&gt;
		* Eco.object.toDataset(info, ds_horz, "horz");
		* // output : 구성된 Dataset 정보
		* // 	&lt;Dataset id="dsHorz"&gt;
		* // 		&lt;ColumnInfo&gt;
		* // 			&lt;Column id="basic" type="STRING" size="256"/&gt;
		* // 			&lt;Column id="string" type="STRING" size="256"/&gt;
		* // 			&lt;Column id="int" type="STRING" size="256"/&gt;
		* // 			&lt;Column id="float" type="STRING" size="256"/&gt;
		* // 			&lt;Column id="bool" type="STRING" size="256"/&gt;
		* // 		&lt;/ColumnInfo&gt;
		* // 		&lt;Rows&gt;
		* // 			&lt;Row&gt;
		* // 				&lt;Col id="basic"&gt;A&lt;/Col&gt;
		* // 				&lt;Col id="string"&gt;가&lt;/Col&gt;
		* // 				&lt;Col id="int"&gt;10&lt;/Col&gt;
		* // 				&lt;Col id="float"&gt;0.8&lt;/Col&gt;
		* // 				&lt;Col id="bool"&gt;true&lt;/Col&gt;
		* // 			&lt;/Row&gt;
		* // 		&lt;/Rows&gt;
		* // 	&lt;/Dataset&gt;	
		* @memberOf Eco.object
		*/
		toDataset: function(object, ds, dir)
		{
			var p, i, len,
				value;
			
			if (dir == "vert")
			{
				if (!Eco.isEmpty(object)) 
				{
					ds.addColumn("name", "string", 256);
					ds.addColumn("value", "string", 256);
				}
				
				for (p in object)
				{
					if ( object.hasOwnProperty(p) )
					{
						value = object[p] || "";
						
						len = ds.addRow();
						ds.setColumn(len, "name", p);
						ds.setColumn(len, "value", value);
					}
				}
			}
			else 
			{
				if (!Eco.isEmpty(object)) 
				{
					for (p in object)
					{
						if ( object.hasOwnProperty(p) )
						{
							ds.addColumn(p, "string", 256);
						}
					}
					
					len = ds.addRow();
					
					for (p in object)
					{
						if ( object.hasOwnProperty(p) )
						{
							value = object[p] || "";
							ds.setColumn(len, p, value);
						}
					}
				}
			}
		},
		
		/**
		* object에 속성들(name, value) 를 dataset로 부터 구성한다.<br>
		* dir 값이 vert 이면 dataset에 name Column, value Column 필드명에서<br>
		* record별로 정보을 얻은 후 object 속성들로 구성하는 방법<br>
		* dir 값이 horz 이면 dataset의 Column들의 id를 속성 명칭,<br>
		* Column에 0번째 row 값을 value로 object 속성으로 구성된다.
		* @param {object} object Dataset값을 참조해서 새로 구성되는 객체
		* @param {dataset} ds 객체구성시 참조되는 Dataset
		* @param {string=} dir default horz(horz/vert)
		* @example
		* var info = {};
		* Eco.object.fromDataset(info, dsVert, "vert");
		* for (var p in info)
		* {
		* 	trace(p + ":" + info[p]);
		* 	// output : "string": "가",
		* 	// output : "int": 10,
		* 	// output : "float": 0.8,
		* 	// output : "bool": true
		* }
		* @memberOf Eco.object
		*/
		fromDataset: function(object, ds, dir)
		{
			var i, len,
				name, value,
				isEmpty = Eco.isEmpty;
			
			if (dir == "vert")
			{
				for(i = 0, len = ds.getRowCount(); i < len; i++)
				{
					name = ds.getColumn(i, "name");
					if (isEmpty(name)) continue;
					
					value = ds.getColumn(i, "value") || "";
					object[name] = value;
				}
			}
			else
			{
				for(i = 0, len = ds.getColCount(); i < len; i++)
				{
					name = ds.getColID(i);
					if (isEmpty(name)) continue;
					
					value = ds.getColumn(0, name) || "";
					object[name] = value;
				}
			}
		}
		
	});
}
/**
 * @fileoverview nexacro Components의 Style과 관련된 함수.
 */

if ( !JsNamespace.exist("Eco.XComp.Style") )
{
	/**
	 * @namespace
	 * @name Eco.XComp.Style
	 * @memberof! <global>
	 */
	JsNamespace.declare("Eco.XComp.Style", {
		 /**
		 * nexacro Component의 boder width를 반환한다.
		 * @param {XComp} xComp nexacro Component
		 * @return {array.<number>} [ leftWdith, topWdith, rightWdith, bottomWdith ]
		 * @example
		 * trace(Eco.XComp.Style.getBorderWidth("border style이 none이거나 width가 0일 경우")); //output: [0,0,0,0] 
		 * trace(Eco.XComp.Style.getBorderWidth("border가 1인 component")); //output: [1,1,1,1]
		 *
		 * @memberOf Eco.XComp.Style
		 */
		getBorderWidth: function(xComp)	
		{
			var currentBorder = xComp.currentstyle.border;
			if (currentBorder)
			{
				var leftWidth = 0,topWidth = 0,rightWidth = 0,bottomWidth = 0;
				leftWidth = currentBorder.left_width;
				topWidth = currentBorder.top_width;
				rightWidth = currentBorder.right_width;
				bottomWidth = currentBorder.bottom_width;
				
				leftWidth = Eco.isEmpty(leftWidth) ? "0" : leftWidth;
				topWidth = Eco.isEmpty(topWidth) ? "0" : topWidth;
				rightWidth = Eco.isEmpty(rightWidth) ? "0" : rightWidth;
				bottomWidth = Eco.isEmpty(bottomWidth) ? "0" : bottomWidth;
				
				leftWidth   = nexacro.toNumber(leftWidth.replace("px",""));
				topWidth    = nexacro.toNumber(topWidth.replace("px",""));
				rightWidth  = nexacro.toNumber(rightWidth.replace("px",""));
				bottomWidth = nexacro.toNumber(bottomWidth.replace("px",""));
				
				return [leftWidth, topWidth, rightWidth, bottomWidth];
			}
			else
			{
				return [0, 0, 0, 0];
			}
		},
		
		 /**
		 * nexacro Component의 Padding Size를 반환한다.
		 * @param {XComp} xComp nexacro Component
		 * @return {array.<number>} [ leftSize, topSize, rightSize, bottomSize ]
		 * @example
		 * trace(Eco.XComp.Style.getPadding("전체 padding = 0")); //output: [0,0,0,0] 
		 * trace(Eco.XComp.Style.getPadding("left padding = 20")); //output: [20,0,0,0] 
		 *
		 * @memberOf Eco.XComp.Style
		 */
		getPadding: function(xComp)	
		{
			var padding = xComp.currentstyle.padding;
			var leftSize = 0, topSize = 0, rightSize = 0, bottomSize = 0;

			if ( padding )
			{
				topSize    = (isNaN(padding.top) ? 0 : padding.top);
				bottomSize = (isNaN(padding.bottom) ? 0 : padding.bottom);
				leftSize   = (isNaN(padding.left) ? 0 : padding.left);
				rightSize  = (isNaN(padding.right) ? 0 : padding.right);
			}
			
			return [leftSize, topSize, rightSize, bottomSize];
		},
		
		 /**
		 * nexacro Component의 Margin Size를 반환한다.
		 * @deprecated nexacro component 는 margin 이 없습니다.
		 * @param {XComp} xComp nexacro Component
		 * @return {array.<number>} [ leftSize, topSize, rightSize, bottomSize ]
		 * @example
		 * trace(Eco.XComp.Style.getMargin("전체 padding = 0")); //output: [0,0,0,0] 
		 * trace(Eco.XComp.Style.getMargin("left padding = 20")); //output: [20,0,0,0] 
		 *
		 * @memberOf Eco.XComp.Style
		 */
		getMargin: function(xComp)	
		{
			// deprecated !!
			/*
			var margin = xComp.currentstyle.margin;
			var leftSize = 0, topSize = 0, rightSize = 0, bottomSize = 0;
			
			if ( margin )
			{
				topSize = (isNaN(margin.top) ? 0 : margin.top);
				bottomSize = (isNaN(margin.bottom) ? 0 : margin.bottom);
				leftSize = (isNaN(margin.left) ? 0 : margin.left);
				rightSize = (isNaN(margin.right) ? 0 : margin.right);
			}
			return [leftSize, topSize, rightSize, bottomSize];
			*/
			return [0, 0, 0, 0];
		},

		 /**
		 * nexacro Component의 Style을 반환한다.
		 * @param {XComp} xComp nexacro Component
		 * @return {object} 
		 * @example
		 * trace(Eco.XComp.Style.getStyle(xComp));
         * // output:
         * //  {background: "left middle"
         * //   ,border: "1 solid #808080ff "
         * //   ,padding: "0 0 0 0"
         * //   ,align: "center middle"}
         *
         * @memberOf Eco.XComp.Style
		 */
		getStyle: function(xComp)	
		{
			var style = xComp.style;
			var json = {};
			var isFunction = Eco.isFunction;
			
			for ( var name in style )
			{
				if ( style.hasOwnProperty(name) )
				{
					if ( name.charAt(0) == "_" ) continue;
					
					var styleProp = style[name];
					if ( styleProp )
					{
						if ( !isFunction(styleProp) )
						{
							if(styleProp === undefined) continue;
							
							value = styleProp.toString();
							
							if(value == "undefined") continue;
							
							if ( value.length )
							{
								json[name] = value;
							}
						}
					}
				}
			}
			
			return json;
		},
		
		 /**
		 * nexacro Component의 Current Style을 반환한다.
		 * @param {XComp} xComp nexacro Component
		 * @return {object} 
		 * @example
		 * trace(Eco.XComp.Style.getCurrentStyle(xComp));
		 * // output:
		 * //  {background: "left middle"
		 * //   ,border: "1 solid #808080ff "
		 * //   ,color: "#333333ff"
		 * //   ,padding: "0 0 0 0"
		 * //   ,bordertype: "normal 0 0 "
		 * //   ,align: "center middle"
		 * //   ,font: "Dotum,11,bold"}
		 *
		 * @memberOf Eco.XComp.Style
     	 */
		getCurrentStyle: function(xComp)	
		{
			var currentStyle = xComp.currentstyle;
			var normalValue = {};
			var isFunction = Eco.isFunction;
			
			for ( var name in currentStyle )
			{				
				if ( currentStyle.hasOwnProperty(name) )
				{
					if ( name.charAt(0) == "_" ) continue;
					
					var styleProp = currentStyle[name];
					if ( styleProp )
					{
						if ( !isFunction(styleProp) )
						{
							value = styleProp.toString();
							if ( value.length )
							{
								normalValue[name] = value;
							}
						}
					}
				}
			}
			
			return normalValue;
		},		
		
		 /**
		 * nexacro Component의 style을 설정한다.
		 * @param {XComp} xComp nexacro Component
		 * @param {json} styleValue style설정 value.
		 * @param {boolean} clearFlag 모든 style값 clear여부(default:true).
		 * @example
		 * //현재 설정된 style을 모두 clear 후 지정된 style값만 설정
		 * var styleValue = {color: "red"};
		 * Eco.XComp.Style.setStyle(st_sample10, styleValue, false);
		 *
		 * //현재 설정된 style은 유지하고 지정된 style값만 설정
		 * var styleValue = {border: "2 solid yellow", color: "red"};
         * Eco.XComp.Style.setStyle(st_sample9, styleValue);
         *
         * @memberOf Eco.XComp.Style
		 */
		setStyle: function(xComp, styleValue, clearFlag)	
		{
			
			var prevStyle = Eco.XComp.Style.getStyle(xComp);
			var newValue = {}, value;
			var isFunction = Eco.isFunction;

			if(Eco.isEmpty(clearFlag)) clearFlag = true;
			
			//적용할 style 구문 추출.
			if(clearFlag)
			{
				//기존 style값 clear
				for(var name in prevStyle)
				{
					if ( prevStyle.hasOwnProperty(name) )
					{
						//xComp[name] = "";
						//trace("기존 style값 clear name=" + name);
						if(name.substr(0,1) == "_") continue;
						xComp["style"]["set_" + name]("");
					}
				}
				
				for ( var name in styleValue )
				{
					if ( styleValue.hasOwnProperty(name) )
					{
						newValue[name] = styleValue[name];
					}
				}
				
			}
			else 
			{
				prevStyle = xComp.style;
				var isEmpty = Eco.isEmpty;
				var prevStyleValue;
				for(var name in prevStyle)
				{
					
					if(styleValue[name] && styleValue.hasOwnProperty(name))
					{
						
						newValue[name] = styleValue[name];
					}
					else 
					{
						prevStyleValue = prevStyle[name];
						
						//설정값이 있는것만 추출.
						if(!prevStyleValue || isEmpty(prevStyleValue.toString())) continue;
					
						newValue[name] = prevStyleValue;
					}
				}
			}
			
			for ( var name in newValue )
			{
				if ( newValue.hasOwnProperty(name) )
				{
					value = newValue[name];

					if (!isFunction(value))
					{
						if(name.substr(0,1) == "_") continue;
						xComp["style"]["set_" + name](value);
					}
				}
			}
		},		


		/**
		* nexacro Component에 argument로 주어진 styleValue를 condition에 따라 적용한다.<br><br>
		* - condition이 string일 때:<br>
		*    styleValue의 속성과 동일한 xComp의 속성값이 condition과 같을 때 적용한다.<br>
		* - condition이 function일 때:<br>
		*    condition의 실행값이 true일 경우에만 적용한다.<br>
		*    ※ 이 때 condition 함수를 호출 시 xComp, 속성명, 속성값이 arguments로 전달된다.<br>
		* - condition이 ""(빈문자열) 또는 null, undefined 일 때:<br>
		*    styleValue의 속성명과 동일한 xComp의 속성값이 없을 경우에만 적용한다.<br><br>
		* ※component의 style에 지정된 속성이 없어서 테마의 기본값이 표시되는 것은<br>
		*   속성값이 없는 것으로 본다.
		* @param {XComp} xComp target 객체 
		* @param {object} styleValue source 객체
		* @param {function|string|undefined} condition 적용조건
		* @param {object} scope callback 함수에 대한 수행 scope(this) 
		* @param {boolean} clearFlag 모든 style값 clear여부(default:true).
		* @example
		* //btn_result_01의 color속성이 'red'일 경우에 이 속성값을 "blue"로 적용
		* var styleValue = {color:"blue"};
		* Eco.XComp.Style.setStyleIf(btn_result_01, styleValue, "red", this, false);
        *
        * //btn_result_02의 enable속성이 true일 경우에만 boder,color 적용
        * var styleValue = {border:"3 double red", color: "red"};
        * Eco.XComp.Style.setStyleIf(btn_result_02, styleValue, function(xComp, name, value) {
        *         if (xComp.enable == true)
        *         {
        *             return true;
        *         }
        *         return false;
        *     }
        * , this);
        *
        * //btn_result_03의 background와 align이 설정되지 않은 경우 
        * //아래의 styleValue 값으로 적용된다.
        * var styleValue = {background:"orange", align:"right middle"};
        * Eco.XComp.Style.setStyleIf(btn_result_03, styleValue, "" , this, false);
        *
		* @memberOf Eco.XComp.Style
		*/
		setStyleIf: function(xComp, styleValue, condition, scope, clearFlag)
		{
			if(condition === null || condition === undefined) condition = "";
			
			var pThis = Eco.XComp.Style;
			
			if (xComp && styleValue) 
			{
			
				if(Eco.isEmpty(clearFlag)) clearFlag = true;
				
				//적용할 style 구문 추출.
				if(clearFlag)
				{
					//기존 style값 clear
					var prevStyle = pThis.getStyle(xComp);
					for(var name in prevStyle)
					{
						if ( prevStyle.hasOwnProperty(name) )
						{
							//xComp[name] = "";
							if(name.substr(0,1) == "_") continue;
							xComp["style"]["set_" + name]("");
						}
					}
				}
			
				var value, ret,
					isFunc = false;
				
				if (condition && Eco.isFunction(condition))
				{
					isFunc = true;
				}
				
				var xCompStyle = xComp.style;
				for (var name in styleValue)
				{
					if(name.substr(0,1) == "_") continue;
					
					if (styleValue.hasOwnProperty(name))
					{
						value = styleValue[name];
						
						if (isFunc)
						{
							if(condition.call(scope, xComp, name, value))
							{
								xComp["style"]["set_" + name](value);
							}
						}
						//else if (xCompStyle[name].toString() == condition.toString())
						else if (condition == "" && Eco.isEmpty(xCompStyle[name]))
						{
							xComp["style"]["set_" + name](value);
						}						
						else if (xCompStyle[name] == condition)
						{
							xComp["style"]["set_" + name](value);
						}						
					}
				}
			}
		}
		
	});

}

/**
 * @fileoverview Logger와 관련된 함수.
 */

if ( !JsNamespace.exist("Eco.Logger") )
{
	/**
	 * @namespace
	 * @name Eco.Logger
	 * @memberof! <global>
	 */
	JsNamespace.declare("Eco.Logger", {
	
		/**
		 * 로그 레벨별 스트링 문자.
		 * @private
		 * @constant
		 * @memberOf Eco.Logger
		 */	
		_LEVEL_STRING: ["fatal", "error", "warn", "info", "debug"],
		
		/**
		 * 로그 레벨 (off:-1, fatal:0, error:1, warn:2, info:3, debug:4)<br>
		 * 값이 설정되면 그 레벨보다 같거나 높은 레벨만 로깅 처리한다(default:4). 
		 * @public
		 * @type number
		 * @memberOf Eco.Logger
		 */					 
		logLevel: 4,
		
		/**
		 * 로깅된 정보가 쌓여진 버퍼.
		 * @private
		 * @memberOf Eco.Logger
		 */			
		_logBuffer: [],
		
		/**
		 * 최대 적재 가능 로그 수로 해당 수에 도달하면<br>
		 * 첫번째 기록이 삭제되고 새로운 로그가 마지막에 적재된다.
		 * @private
		 * @memberOf Eco.Logger
		 */
		_logBufferMax: 1000,
		
		/**
		 * Call Stack 시 들여쓰기 문자 지정.
		 * @private
		 * @memberOf Eco.Logger
		 */
		_indent: '    ',
		
		/**
		 * Logger 시작시간 값을 담고 있다.
		 * @private
		 * @memberOf Eco.Logger
		 */
		_startLoggerTime: (new Date()).getTime(),				
		
		/**
		 * 경과시간 표시를 위한 시작시간 값을 담고 있다.
		 * @private
		 * @memberOf Eco.Logger
		 */
		_startElapsedTime: null,
				
		/**
		 * 로그 출력 필터 지정을 위한 값을 담고 있다.
		 * @private
		 * @memberOf Eco.Logger
		 */		
		_filter: "",
		
		/**
		 * 로그 출력에 표시할 날짜 형태를 얻어온다.
		 * @private
		 * @return {string} 날짜포맷 문자열.
		 * @memberOf Eco.Logger
		 */
		_getDateFormatString: function()
		{			
			var objDate = new Date();
			return Eco.date.getMaskFormatString(objDate, "yyyy-MM-dd HH:mm:ss.sss");
		},
		
		/**
		 * function full name을 얻어온다.
		 * @private
		 * @param {function} func 대상 function.
		 * @return {string} function full name.
		 * @memberOf Eco.Logger
		 */		
		_getFuncFullName: function(func) 
		{
			var name = "";
			if (func._thisOwner)
			{
				name += (func._thisOwner._className || Eco.XComp.getPathName(func._thisOwner)) + ".";
			}
			
			if (func._thisName)
			{
				name += func._thisName;
			}
			else
			{
				var funcName = "";
				if ( 'name' in func )
				{
					funcName = func.name;
				}
				else
				{					
					var reg = /function\s*([\w\-$]+)?\s*\(/i;
					funcName = reg.test(func.toString()) ? RegExp.$1 : "";
				}
				
				if( funcName.length == 0 )
				{
					funcName = "anonymous function";
				}
								
				name += funcName;
			}
			return name;
		},

		/**
		 * 경과시간을 얻어온다.<br>
		 * startElapsed() 이 호출된 이 후 경과 시간을 체크,<br>
		 * startElapsed() 선언이 안될 경우 Logger 가 로딩되는 시간임.
		 * @private
		 * @return {string} 경과시간 millisecond 단위 문자열.
		 * @memberOf Eco.Logger
		 */	
		_getElapsed: function(isTotal)
		{
			var logger = Eco.Logger;
			var stratTime = logger._startElapsedTime;
			if ( !stratTime )
			{
				stratTime = logger._startLoggerTime;				
			}
			logger._startElapsedTime = null;
			
			var currentTime = (new Date()).getTime();
			var elpased = (currentTime - stratTime);
			var sec = parseInt(elpased/1000, 10);
			var msec = parseInt(elpased%1000, 10).toString().padLeft(3, "0");
			if ( logger._totalElapsedTime != null )
			{
				logger._totalElapsedTime += elpased;
			}
			if ( isTotal )
			{
				var elpased0 = logger._totalElapsedTime;
				delete logger._totalElapsedTime;
				var sec1 = parseInt(elpased0/1000, 10);
				var msec1 = parseInt(elpased0%1000, 10).toString().padLeft(3, "0");
				return [(sec + "." + msec), (sec1 + "." + msec1)];
			}
			return sec + "." + msec;
		},
		
		/**
		 * dump 개체가 nexacro Component 의 Object collection 형태를 지정하여 문자열 변환에 사용.
		 * @private
		 * @memberOf Eco.Logger
		 */			
		_xCompPropertyObjRe: /position|position2|positiontype|anchor|tooltiptype|tooltiptext|dropformat|currentstyle|style|scrollbars/,
		
		/**
		 * dump 대상 개체가 가지는 값을 스트링으로 변환하여 얻어온다.
		 * @private
		 * @param {*} object 확인할 value.
		 * @param {boolean=} bArguments function argument 여부
		 * @return {string} dump 대상 개체의 변환된 문자열 값.
		 * @memberOf Eco.Logger
		 */			
		_getDumpString: function(object, bArguments)
		{
			var logger = Eco.Logger;
			var member, type, value, nm, members = [];
			
			if ( bArguments )
			{
				if ( object != null )
				{
					for ( var i = 0, n = object.length; i < n; i++ )
					{
						value = object[i];
						type = typeof value;
						
						if (type == "function")
						{
							members.push("function refer");
							continue;
						}

						if ( Eco.isPrimitive(value) )
						{
							member = value;
						}
						else if ( Eco.isXComponent(value) )
						{
							member = value.name || value;
						}
						else if ( Eco.isArray(value) )
						{
							member = '[ ]';
						}
						else if (Eco.isObject(value))
						{
							member = '{ }';
						}
						else
						{
							member = value;
						}
						if ( type == "undefined" || type == "null" )
						{
							members.push(type);
						}
						else
						{
							members.push(type + ': ' + member);
						}
					}
				}
			}
			else
			{
				if ( object != null )
				{
					if ( object.hasOwnProperty ) 
					{
						for (nm in object)
						{
							if (object.hasOwnProperty(nm))
							{
								value = object[nm];
								type = typeof value;
								
								if (type == "function")
								{
									continue;
								}

								if ( Eco.isPrimitive(value) )
								{
									member = value;
								}
								else if ( Eco.isXComponent(value) )
								{
									member = value.name || value;
								}
								else if (Eco.isArray(value))
								{
									member = '[ ]';
								}
								else if (Eco.isObject(value))
								{
									member = '{ }';
								}
								else
								{
									member = type;
								}
								members.push(nm + ': ' + member);
							}
						}
					}
					else
					{
						// nexacro component 만 처리, dataset, animation 등은 차후에 별도 처리.
						for (nm in object)
						{
							value = object[nm];
							type = typeof value;
							if (type == "function")
							{
								continue;
							}

							if (value instanceof UserEvent || nm == "canvas" )
							{
								continue;
							}
							
							if ( logger._xCompPropertyObjRe.test(nm) )
							{
								// style, currentstyle, all, components, objects, binds ==> string으로 표시하는 함수 필요.
								member = value.toString ? value.toString() : value;
							}
							else if ( Eco.isXComponent(value) )
							{
								member = value.name || value;
							}
							else if (Eco.isPrimitive(type))
							{
								member = value;
							}
							else if (Eco.isArray(value))
							{
								member = '[ ]';
							}
							else if (Eco.isObject(value))
							{
								member = '{ }';
							}
							else
							{
								member = type;
							}
							members.push(nm + ': ' + member);
						}
					}
				}
			}

			if (members.length)
			{
				if ( bArguments )
				{
					return members.join(', ');
				}
				else
				{
					return ' \nData: {\n  ' + members.join(',\n  ') + '\n}';
				}
			}
			return '';
		},
		/**
		 * node.js 파일에 inspect 함수를 참조하여 작성하였음.
		 * 주어진 obj에 대한 값을 json 방식으로 출력하는 string값을 반환한다.
		 * @param {*} obj 출력할 대상
		 * @param {boolean=} showHidden object에 javascript에서 내부적으로 정의 메소드도 나타나게 한다.(default: false)
		 * @param {number=} depth 출력할 depth 정의.(default: 2)
		 * @param {boolean=} colors 출력시에 string, number, Date값등에 대한 색깔 표시 여부(default: false)
		 * @param {boolean=} customInspect 출력시에 만약 obj에 inspect메소드가 존재하면 그것을 사용한다.(default: true)
		 * @memberOf Eco.Logger
		 */
		inspect: function(obj, showHidden, depth, colors, customInspect)
		{
			var ctx = {
				seen: [],
				styles: Eco.Logger._inspectstyles,
				stylize: Eco.Logger._stylizeNoColor
			};
			ctx.depth = depth;
			ctx.colors = colors;
			ctx.showHidden = showHidden;
			ctx.customInspect = customInspect;
			if (typeof ctx.showHidden === 'undefined') ctx.showHidden = false;
			if (typeof ctx.depth === 'undefined') ctx.depth = 2;
			if (typeof ctx.colors === 'undefined') ctx.colors = false;
			if (typeof ctx.customInspect === 'undefined') ctx.customInspect = true;
			if (ctx.colors) ctx.stylize = Eco.Logger._stylizeWithColor;
			return Eco.Logger._formatValue(ctx, obj, ctx.depth);
		},
		_formatValue: function(ctx, value, recurseTimes)
		{
			// value에 직접 정의한 inspect메소드가 존재하면 그것을 사용하여 처리한다.
			if (ctx.customInspect && value && typeof value.inspect === 'function' &&
				value.inspect !== Eco.Logger.inspect &&
				// 무한 루틴 때문에 check한다.
				!(value.constructor && value.constructor.prototype === value))
			{
				return String(value.inspect(recurseTimes));
			}

			var pThis = Eco.Logger;
			// Primitive types 에 대한 처리
			var primitive = pThis._formatPrimitive(ctx, value);
			if (primitive)
			{
				return primitive;
			}

			// object의 Look up the keys of the object.
			var keys = Eco.object.getPropertyNames(value);
			var visibleKeys = pThis._arrayToHash(keys);
			
			if (ctx.showHidden)
			{
				keys = Object.getOwnPropertyNames(value);
			}

			// value 값 중에 속성이 없고, 더이상 진행하지 않은 type이면, 이것을 check하여 처리한다.
			if (keys.length === 0)
			{
				if (typeof value === 'function')
				{
					var name = value.name ? ': ' + value.name : '';
					return ctx.stylize('[Function' + name + ']', 'special');
				}
				if (Eco.isRegExp(value))
				{
					return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
				}
				if (Eco.isDate(value))
				{
					return ctx.stylize(Date.prototype.toString.call(value), 'date');
				}
				if (Eco.isError(value))
				{
					return pThis._formatError(value);
				}
			}

			var base = '', array = false, braces = ['{', '}'];
			
			// array 처리
			if (Eco.isArray(value))
			{
				array = true;
				braces = ['[', ']'];
			}

			//  function 처리
			if (typeof value === 'function')
			{
				var n = value.name ? ': ' + value.name : '';
				base = ' [Function' + n + ']';
			}

			// RegExp 처리
			if (Eco.isRegExp(value))
			{
				base = ' ' + RegExp.prototype.toString.call(value);
			}

			// Date 처리
			if (Eco.isDate(value))
			{
				base = ' ' + Date.prototype.toUTCString.call(value);
			}

			// Error 객체 처리
			if (Eco.isError(value))
			{
				base = ' ' + pThis._formatError(value);
			}

			if (keys.length === 0 && (!array || value.length == 0))
			{
				return braces[0] + base + braces[1];
			}
			
			if (recurseTimes < 0)
			{
				if (Eco.isRegExp(value))
				{
					return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
				}
				else
				{
					return ctx.stylize('[Object]', 'special');
				}
			}
			
			ctx.seen.push(value);
			
			var output;
			if (array)
			{
				output = pThis._formatArray(ctx, value, recurseTimes, visibleKeys, keys);
			}
			else
			{
				output = Eco.array.map(keys, function(key) {
					return pThis._formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
				});
			}

			ctx.seen.pop();
			
			return pThis._reduceToSingleString(output, base, braces);
		},
		_formatPrimitive: function(ctx, value)
		{
			switch (typeof value) {
				case 'undefined':
					return ctx.stylize('undefined', 'undefined');

				case 'string':
					var simple = '\'' + Eco.Json.encode(value).replace(/^"|"$/g, '')
									.replace(/'/g, "\\'")
									.replace(/\\"/g, '"') + '\'';
					return ctx.stylize(simple, 'string');

				case 'number':
					return ctx.stylize('' + value, 'number');

				case 'boolean':
					return ctx.stylize('' + value, 'boolean');
			}
			// null 처리
			if (value === null)
			{
				return ctx.stylize('null', 'null');
			}
		},
		_formatError: function(value)
		{
			return '[' + Error.prototype.toString.call(value) + ']';
		},
		_formatArray: function(ctx, value, recurseTimes, visibleKeys, keys)
		{
			var output = [],
				hasOwnProperty = Eco._hasOwnProperty;

			var pThis = Eco.Logger;
			for (var i = 0, l = value.length; i < l; ++i)
			{
				if (hasOwnProperty.call(value, String(i)))
				{
					output.push(pThis._formatProperty(ctx, value, recurseTimes, visibleKeys,
						String(i), true));
				}
				else
				{
					output.push('');
				}
			}
			Eco.array.forEach(keys, function(key) {
				if (!key.match(/^\d+$/)) {
					output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
						key, true));
				}
			});
			return output;
		},
		_formatProperty: function(ctx, value, recurseTimes, visibleKeys, key, array)
		{
			var name, str, desc;
			if (!Eco._isIE8Below)
			{
				desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
				if (desc.get)
				{
					if (desc.set)
					{
						str = ctx.stylize('[Getter/Setter]', 'special');
					}
					else
					{
						str = ctx.stylize('[Getter]', 'special');
					}
				}
				else
				{
					if (desc.set)
					{
						str = ctx.stylize('[Setter]', 'special');
					}
				}
			}
			else
			{
				desc = { value: value[key] };
			}

			var hasOwnProperty = Eco._hasOwnProperty,
				pThis = Eco.Logger;

			if (!hasOwnProperty.call(visibleKeys, key))
			{
				name = '[' + key + ']';
			}
			if (!str)
			{
				if (Eco.array.indexOf(ctx.seen, desc.value, null, true) < 0)
				{
					if (recurseTimes === null)
					{
						str = pThis._formatValue(ctx, desc.value, null);
					}
					else
					{
						str = pThis._formatValue(ctx, desc.value, recurseTimes - 1);
					}
					if (str.indexOf('\n') > -1)
					{
						if (array)
						{
							str = str.split('\n');
							str = Eco.array.map(str, function(line) {
								return '  ' + line;
							});
							str = str.join('\n').substr(2);
						}
						else
						{
							str = str.split('\n');
							str = Eco.array.map(str, function(line) {
								return '   ' + line;
							});
							str = '\n' + str.join('\n');
						}
					}
				}
				else
				{
					str = ctx.stylize('[...]', 'special');
				}
			}
			if (typeof name === 'undefined')
			{
				if (array && key.match(/^\d+$/))
				{
					return str;
				}
				name = Eco.Json.encode('' + key);
				if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/))
				{
					name = name.substr(1, name.length - 2);
					name = ctx.stylize(name, 'name');
				}
				else
				{
					name = name.replace(/'/g, "\\'")
						.replace(/\\"/g, '"')
						.replace(/(^"|"$)/g, "'");
					name = ctx.stylize(name, 'string');
				}
			}

			return name + ': ' + str;
		},
		_reduceToSingleString: function(output, base, braces)
		{
			var numLinesEst = 0;
			var length = Eco.array.reduce(output, function(prev, cur) {
				numLinesEst++;
				if (cur.indexOf('\n') >= 0) numLinesEst++;
				return prev + cur.length + 1;
			}, 0);

			if (length > 60)
			{
				return braces[0] +
					(base === '' ? '' : base + '\n ') +
					' ' +
					output.join(',\n  ') +
					' ' +
					braces[1];
			}

			return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
		},
		_inspectstyles: {
			'special': 'blue',
			'number': 'red',
			'boolean': 'blue',
			'undefined': 'bold',
			'null': 'bold',
			'string': 'hotpink',
			'date': 'blue',
			// "name": intentionally not styling
			'regexp': 'blue'
		},
		_stylizeWithColor: function(str, styleType)
		{
			var style = this.styles[styleType];
			if (style)
			{
				if ( style == "bold" )
				{
					return '<b>' + str +'</b>';
				}
				else
				{
					return '<font color="' + style + '">' + str +'</font>';
				}
			}
			else
			{
				return str;
			}
		},
		_stylizeNoColor: function(str, styleType)
		{
			return str;
		},
		_arrayToHash: function(arr)
		{
			var hash = {};
		
			Eco.array.forEach(arr, function(val, idx) {
				hash[val] = true;
			});
			return hash;
		},
		/**
		 * 로깅 처리.
		 * @private
		 * @param {string} level 로그레벨.
		 * @param {string|object} msg 로깅할 메시지 혹은 메시지 Object
		 * @memberOf Eco.Logger
		 */	
		_logging: function(level, msg) 
		{
			var logger = Eco.Logger;
			var logLevel = logger.logLevel;
			
			// fatal, error 레벨은 무조건 출력
			if ( level > 1 && logLevel < level ) return;
			
			var message, dump, stack, elapsed, elapsedTotal, filter, showStackAnonymous;
			if (typeof msg != 'string')
			{
				message = msg.message || '';
				dump = msg.dump;
				stack = msg.stack;
				elapsed = msg.elapsed;
				elapsedTotal = msg.elapsedTotal;
				filter = msg.filter;
				showStackAnonymous = msg.showStackAnonymous;
			}
			else
			{
				message = msg;
			}
			
			var logFunc = logger._logging.caller;	// fatal(), error(), wanr(), info(), debug()
			var callFunc = logFunc.caller;				// 실제 로깅이 발생한 함수

			var dateString = logger._getDateFormatString();
			var levelString = logger._LEVEL_STRING[level];
			var funcString = logger._getFuncFullName(callFunc);
			var resultMessage = dateString + " [" + levelString + "] " + funcString + " - " + message;
			var elapsedTime = "";
			if ( elapsed ) 
			{
				elapsedTime = logger._getElapsed(elapsedTotal);
				if ( elapsedTotal )
				{
					resultMessage += " (Elapsed Time : " + elapsedTime[0] + " sec -- Total Time : " + elapsedTime[1] + " sec) ";
				}
				else
				{
					resultMessage += " (Elapsed Time : " + elapsedTime + " sec)";
				}
			}
			
			// dump
			var dumpString = "";
			if ( dump )
			{
				dumpString = logger._getDumpString(dump);
				resultMessage += "\n*****************PRINTING DUMP************************";
				resultMessage += dumpString;
				resultMessage += "\n*****************COMPLETE DUMP************************";
			}	
			// callstack
			var stackString = "";
			if ( stack )
			{				
				stackString = logger._getCallStackString(logFunc, showStackAnonymous);
				resultMessage += "\n*****************PRINTING STACK************************";
				resultMessage += stackString;
				resultMessage += "\n*****************COMPLETE STACK************************";
			}
			
			// write message
			if ( filter )
			{
				if ( logger._filter == filter )
				{
					logger._writeLog(resultMessage);
				}
			}
			else
			{
				logger._writeLog(resultMessage);
			}

			var buffer = logger._logBuffer;
			var max = logger._logBufferMax;
			
			// 지정된 로그 레벨보다 클 경우에만 buffer에 적재
			if ( logLevel > -1 && logLevel >= level )
			{
				if (buffer.length >= max)
				{
					buffer.splice(0, 1);
				}		
				var buff = {
					date: dateString,
					level: levelString,
					message: message,
					from:funcString,
					elapsed: elapsedTime,
					dump: dumpString,
					stack: stackString
				};
				logger._logBuffer.push(buff);
			}
			
			if ( level == 0 || level == 1 )
			{
				var e = new Error(message);
				throw e;				
			}
		},
		
		/**
		 * 로그 출력 처리.
		 * @private
		 * @param {string} message 출력할 메시지
		 * @memberOf Eco.Logger
		 */			
		_writeLog: function(message) 
		{
			application.trace(message);
		},
		
		/**
		 * call stack 문자열 전체를 얻어온다.
		 * @private
		 * @param {function} func log function
		 * @param {boolean} showStackAnonymous stack에 익명함수(시스템 함수 포함) 보이기 여부
		 * @return {string} call stack 문자열 값.
		 * @memberOf Eco.Logger
		 */			
		_getCallStackString: function(func, showStackAnonymous)
		{
			var logger = Eco.Logger;
			var f = func,
				indstr = "",
				indentStr = logger._indent,
				ret = "",
				index,
				stackLine = "";

			/*
				event handler 내에서 다른 event handler가 호출될 수 있는 구조라면
				무한루프가 발생된다. 따라서 stack 배열에 이미 실행한 caller
				정보를 담아두고 실행하기 전에 체크하여 이미 존재하는 caller 라면
				중단한다.
			*/
			var stack = [f];
			var startFunc = f.caller;
			
			while ( f )
			{
				f = f.caller;
				
				index = -1;
				for (var i=0,len=stack.length; i<len; i++)
				{
					if ( f == stack[i] )
					{
						index = i;
						break;
					}
				}
				
				if ( index < 0 )
				{
					stack.push(f);
					stackLine = logger._getCallStackLine(indstr, f);
					
					if ( stackLine.indexOf("anonymous function") > -1 )
					{
						if ( showStackAnonymous )
						{
							ret += "\n" + stackLine;
							indstr += indentStr;
						}
					}
					else if ( stackLine.length > 0 )
					{
						ret += "\n" + stackLine;
						indstr += indentStr;				
					}
				}
				else
				{
					ret += "\n" + indstr + "stack overflow...";
					break;
				}
			}
			
			return ret;
		},
		
		/**
		 * 지정된 function에서 호출자 정보(owner, name, argument value) 문자열을 얻어온다.
		 * @private
		 * @param {string} indstr 들여쓰기 문자
		 * @param {function} func 호출한 function
		 * @return {string} 호출자 정보 문자열 값.
		 * @memberOf Eco.Logger
		 */	
		_getCallStackLine: function(indstr, func)
		{			
			var logger = Eco.Logger;
			var nm = indstr;
			if (func)
			{
				nm += logger._getFuncFullName(func);
				nm += "(" + logger._getDumpString(func.arguments, true) + ")";
				
				return nm;
			}
			else
			{
				return "";
			}
		},
		
		/**
		 * Log Buffer 내용을 얻어온다.<br>
		 * 아래 형태의 Collection을 반환.<br>
		 * {date: "2013-04-22 13:46:14.316", level: "error", message: "error!!!", elpased: "", dump: "", stack: ""} 
		 * @public
		 * @return {Array} log buffer.
		 * @example
		 * var buff = Eco.Logger.getLogBuffer();
		 * trace(buff)	// output : [object Object],[object Object], ....
		 * @memberOf Eco.Logger
		 */
		getLogBuffer: function()
		{
			return Eco.Logger._logBuffer;
		},
		
		/**
		 * 경과시간 체크를 위한 시작시간을 지정한다.<br>
		 * 본 메소드를 호출하지 않으면 Logger 초기 로딩시간 부터 적용.
		 * @public
		 * @example
		 * // 경과시간 시작시간 지정 
		 * // elapsed 옵션을 포함한 로깅이 실행되면 초기화 됨
		 * // 시작시간을 지정하지 않으면 Logger가 최초 include된 시점이 시작시간
		 * Eco.Logger.startElapsed();
		 * 
		 * var a = 0;
		 * for (var i=0; i<10000; i++)
		 * {
		 *     a = a + i;
		 * }
		 * 
		 * Eco.Logger.debug({message: "test !!!", elapsed: true});
		 * // result : 2013-05-07 16:28:34.093 [debug] Button11_onclick - test !!! (Elapsed Time : 0.005 sec)
		 *
		 * @memberOf Eco.Logger
		 */		
		startElapsed: function(isTotal)
		{	
			Eco.Logger._startElapsedTime = (new Date()).getTime();
			if ( isTotal )
			{
				Eco.Logger._totalElapsedTime = 0;
			}			
		},
		
		/**
		 * 현재 필터 구분자를 얻어온다.
		 * @public
		 * @return {string} filter 구분자.
		 * @example
		 * var filter = Eco.Logger.getFilter();
		 * if ( filter == "" )
		 * {
		 *     Eco.Logger.setFilter("Test1");
		 * }
		 * @memberOf Eco.Logger
		 */
		getFilter: function()
		{
			return Eco.Logger._filter;
		},		
		
		/**
		 * 필터 지시자를 지정한다.<br>
		 * 로그 호출시 해당 지시자만 필터링되어 출력한다.<br>
		 * (필터에 해당하지 않더라도 출력하지 않을뿐 buffer에는 저장된다.)
		 * @public
		 * @param {string} filter 구분자.
		 * @example
		 * // filter 지정으로 특정 지시자에 해당하는 로그를 볼 수 있다.
		 * Eco.Logger.setFilter("Test2");
		 * 
		 * Eco.Logger.debug({message: "Filter 1 !!!", filter: "Test1"});
		 * // result : 없음
		 * Eco.Logger.debug({message: "Filter 2 !!!", filter: "Test2"});
		 * // result : 2013-05-07 16:32:43.200 [debug] Button13_onclick - Filter 2 !!!
		 * @memberOf Eco.Logger
		 */		
		setFilter: function(filter)
		{
			Eco.Logger._filter = filter;
		},

		/**
		 * fatal 레벨 로그를 남긴다.<br><br>
		 * - argument로 string 전달시 기본 출력할 수 있다.<br>
		 * - argument로 Object 전달시 메시지 옵션을 추가할 수 있다. 지원하는 옵션은 아래와 같다.<br>
		 *   message : string  (출력할 메시지)<br>
		 *   elapsed : boolean (경과시간 표시여부)<br>
		 *   dump    : object  (개체 속성 나열)<br>
		 *   stack   : true    (call stack 표시여부)<br>
		 *   filter  : string  (로그 필터 지시자)<br><br>
		 * - 본 메소드는 logLevel에 상관없이 출력된다.<br>
		 * - logLevel이 0(fatal) 이상일 경우 buffer에 적재된다.<br>
		 * - 본 메소드는 Error 개체를 throw 한다.
		 * @public
		 * @param {string|object} msg 출력할 메시지 또는 옵션을 포함한 Object.
		 * @example
		 *
		 * Eco.Logger.fatal("심각한 오류 발생 !!!");
		 * // result : 2013-05-07 15:12:51.410 [fatal] Button00_onclick - 심각한 오류 발생 !!!
		 *
		 * // 경과시간 시작시간 지정 
		 * // elapsed 옵션을 포함한 로깅이 실행되면 초기화 됨
		 * // 시작시간을 지정하지 않으면 Logger가 최초 include된 시점이 시작시간
		 * Eco.Logger.startElapsed();
		 *
		 * var a = 0;
		 * for (var i=0; i<10000; i++)
		 * {
		 *     a = a + i;
		 * }
		 *
		 * Eco.Logger.fatal({message: "fatal !!!", elapsed: true});
		 * // result : 2013-05-07 15:20:07.171 [fatal] Button01_onclick - fatal !!! (Elapsed Time : 0.004 sec)
		 *
		 * @memberOf Eco.Logger
		 */
		fatal: function(msg)
		{
			Eco.Logger._logging(0, msg);
		},
		
		/**
		 * error 레벨 로그를 남긴다.<br><br>
		 * - argument로 string 전달시 기본 출력할 수 있다.<br>
		 * - argument로 Object 전달시 메시지 옵션을 추가할 수 있다. 지원하는 옵션은 아래와 같다.<br>
		 *   message : string  (출력할 메시지)<br>
		 *   elapsed : boolean (경과시간 표시여부)<br>
		 *   dump    : Object  (개체 속성 나열)<br>
		 *   stack   : true    (call stack 표시여부)<br>
		 *   filter  : string  (로그 필터 지시자)<br><br>
		 * - 본 메소드는 logLevel에 상관없이 출력된다.<br>
		 * - logLevel이 1(error) 이상일 경우 buffer에 적재된다.<br>
		 * - 본 메소드는 Error 개체를 throw 한다.<br>
		 * @public
		 * @param {string|object} msg 출력할 메시지 또는 옵션을 포함한 Object.
		 * @example
		 *
		 * Eco.Logger.error("에러 발생 !!!");
		 * // result : 2013-05-07 15:24:23.628 [error] Button02_onclick - 에러 발생 !!!
		 *
		 * // 경과시간 시작시간 지정 
		 * // elapsed 옵션을 포함한 로깅이 실행되면 초기화 됨
		 * // 시작시간을 지정하지 않으면 Logger가 최초 include된 시점이 시작시간
		 * // Eco.Logger.startElapsed();
		 *
		 * var a = 0;
		 * for (var i=0; i<10000; i++)
		 * {
		 *     a = a + i;
		 * }
		 *
		 * Eco.Logger.error({message: "error !!!", elapsed: true});
		 * // result : 2013-05-07 15:29:10.399 [error] Button03_onclick - error !!! (Elapsed Time : 13.541 sec)
		 *
		 * @memberOf Eco.Logger
		 */		
		error: function(msg) 
		{
			Eco.Logger._logging(1, msg);
		},
		
		/**
		 * warn 레벨 로그를 남긴다.<br><br>
		 * - argument로 string 전달시 기본 출력할 수 있습니다.<br>
		 * - argument로 Object 전달시 메시지 옵션을 추가할 수 있다. 지원하는 옵션은 아래와 같다.<br>
		 *   message : string  (출력할 메시지)<br>
		 *   elapsed : boolean (경과시간 표시여부)<br>
		 *   dump    : Object  (개체 속성 나열)<br>
		 *   stack   : true    (call stack 표시여부)<br>
		 *   filter  : string  (로그 필터 지시자)<br><br>
		 * - logLevel이 2(warn) 이상일 경우 buffer에 적재된다.<br>
		 * @public
		 * @param {string|object} msg 출력할 메시지 또는 옵션을 포함한 Object.
		 * @example
		 *
		 * Eco.Logger.warn("경고 발생 !!!");
		 * // result : 2013-05-07 15:41:18.965 [warn] Button04_onclick - 경고 발생 !!!
		 * 
		 * // obj (Button) 개체 속성을 나열
		 * Eco.Logger.warn({message: "dump !!!", dump: obj});
		 * 
		 * // result : 2013-05-07 15:42:21.701 [warn] Button05_onclick - dump !!!
		 * *****************PRINTING DUMP************************ 
		 * Data: {
		 *   name: Button05,
		 *   id: Button05,
		 *   parent: Logger,
		 *   _refform: Logger,
		 *   position: absolute,
		 *   left: 519,
		 *   _left: 519,
		 *   top: 283,
		 *   _top: 283,
		 *   right: null,
		 *   _right: null,
		 *   bottom: null,
		 *   _bottom: null,
		 *   width: 56,
		 *   _width: 56,
		 *   height: 22,
		 *   _height: 22,
		 *   _adjust_width: 56,
		 *   _adjust_height: 22,
		 *   _adjust_left: 519,
		 *   _adjust_left_ltr: 519,
		 *   _adjust_top: 283,
		 *   style: object,
		 *   currentstyle: object,
		 *   _styles: { },
		 *   defaultbutton: false,
		 *   escapebutton: false,
		 *   selectStatus: false,
		 *   wordwrap: false,
		 *   _apply_pushed_pseudo: true,
		 *   _text_elem: object,
		 *   _img_elem: null,
		 *   _text_width: -1,
		 *   _text_height: -1,
		 *   _image_width: 0,
		 *   _image_height: 0,
		 *   _accessibility_role: button,
		 *   taborder: 1,
		 *   _taborder: 1,
		 *   text: 실행,
		 *   _display_text: 실행,
		 *   cssclass: WF_btn_Point,
		 *   className: WF_btn_Point,
		 *   _css_finder: { },
		 *   _ref_css_finder: { },
		 *   _control_pseudo: mouseover,
		 *   _contents_pseudo: mouseover,
		 *   _pseudo: mouseover,
		 *   _real_visible: false,
		 *   onclick: object,
		 *   _created_event_list: [ ],
		 *   _control_element: object,
		 *   _refcssobj: Logger,
		 *   _refcssid: #Button05,
		 *   _margin: object,
		 *   _client_width: 56,
		 *   _client_height: 22,
		 *   _has_dirty_rect: false,
		 *   _is_created_contents: true,
		 *   _is_loading: false,
		 *   displaytext: 실행,
		 *   _real_enable: true,
		 *   _unique_id: mainframe_childframe_form_Button05,
		 *   _is_created: true,
		 *   _focus_refer_comp: Button05,
		 *   _pushed: false,
		 *   _is_pushed_area: false,
		 *   _is_push: false,
		 *   _status: focus,
		 *   _last_focused: null,
		 *   _lbuttonup_event_bubbles: undefined,
		 *   _lbuttonup_first_comp: Button05
		 * }
		 * *****************COMPLETE DUMP************************
		 *		 
		 * @memberOf Eco.Logger
		 */			
		warn: function(msg) 
		{
			Eco.Logger._logging(2, msg);
		},
		
		/**
		 * info 레벨 로그를 남긴다.<br><br>
		 * - argument로 string 전달시 기본 출력할 수 있다.<br>
		 * - argument로 Object 전달시 메시지 옵션을 추가할 수 있다. 지원하는 옵션은 아래와 같다.<br>
		 *   message : string  (출력할 메시지)<br>
		 *   elapsed : boolean (경과시간 표시여부)<br>
		 *   dump    : Object  (개체 속성 나열)<br>
		 *   stack   : true    (call stack 표시여부)<br>
		 *   filter  : string  (로그 필터 지시자)<br><br>
		 * - logLevel이 3(info) 이상일 경우 buffer에 적재된다.<br>
		 * @public
		 * @param {string|object} msg 출력할 메시지 또는 옵션을 포함한 Object.
		 * @example
		 *
		 * Eco.Logger.info("정보 출력 !!!");
		 * // result : 2013-05-07 15:57:36.542 [info] Button06_onclick - 정보 출력 !!!
		 * 
		 * // stack = true 로 지정시 callstack 정보를 볼 수 있다
		 * this.Button07_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
		 * {
		 *     this.fn_step1("123");
		 * }		 
		 * this.fn_step1 = function(arg1)
		 * {
		 *     fn_step2(arg1, "456")
		 * }
		 * 
		 * this.fn_step2 = function(arg1, arg2)
		 * {
		 *     fn_step3(arg1, arg2, "789");
		 * }
		 * 
		 * this.fn_step3 = function(arg1, arg2, arg3)
		 * {
		 *     var msg = arg1 + arg2 + arg3;
		 *     Eco.Logger.info({message:msg, stack: true});
		 * }
		 * 
		 * // result : 2013-05-07 16:04:38.523 [info] fn_step3 - 123456789
		 * *****************PRINTING STACK************************
		 * Logger.fn_step3(string: 123, string: 456, string: 789)
		 *     Logger.fn_step2(string: 123, string: 456)
		 *         Logger.fn_step1(string: 123)
		 *             Logger.Button07_onclick(object: Button07, object: [object ClickEventInfo])
		 * *****************COMPLETE STACK************************
		 * @memberOf Eco.Logger
		 */		
		info: function(msg) 
		{
			Eco.Logger._logging(3, msg);
		},
		
		/**
		 * debug 레벨 로그를 남긴다.<br><br>
		 * - argument로 string 전달시 기본 출력할 수 있다.<br>
		 * - argument로 Object 전달시 메시지 옵션을 추가할 수 있다. 지원하는 옵션은 아래와 같다.<br>
		 *   message : string  (출력할 메시지)<br>
		 *   elapsed : boolean (경과시간 표시여부)<br>
		 *   dump    : Object  (개체 속성 나열)<br>
		 *   stack   : true    (call stack 표시여부)<br>
		 *   filter  : string  (로그 필터 지시자)<br><br>
		 * - logLevel이 4(debug) 이상일 경우 buffer에 적재된다.<br>
		 * @public
		 * @param {string|object} msg 출력할 메시지 또는 옵션을 포함한 Object.
		 * @example
		 *
		 * Eco.Logger.debug("디버깅 출력 !!!");
		 * // result : 2013-05-07 16:11:30.504 [debug] Button08_onclick - 디버깅 !!!
		 * 
		 * // filter 지정으로 특정 지시자에 해당하는 로그를 볼 수 있다.
		 * Eco.Logger.setFilter("Test1");
		 * 
		 * Eco.Logger.debug({message: "Filter 1 !!!", filter: "Test1"});
		 * // result : 2013-05-07 16:14:10.055 [debug] Button09_onclick - Filter 1 !!!
		 * Eco.Logger.debug({message: "Filter 2 !!!", filter: "Test2"});
		 * // result : 없음
		 *
		 * @memberOf Eco.Logger
		 */				
		debug: function(msg)
		{
			Eco.Logger._logging(4, msg);
		},
		
		/**
		 * Form에 존재하는 함수들의 debug정보를 구성한다.<br><br>
		 * 폼의 함수를 익명함수 형태로 하므로 본 함수를<br>
		 * 호출하지 않으면 anonymous function 으로 표시된다.<br>
		 * stack 기능을 사용하려면 이 함수가 호출되어야 한다.<br>
		 * @public
		 * @param {Form} form 대상 Form
		 * @example
		 * 
		 * Eco.Logger.setDebugInfoFunctions(this, false);
		 * 
		 * @memberOf Eco.Logger
		 */			
		setDebugInfoFunctions: function(form)
		{
			for ( var nm in form )
			{
				if ( form.hasOwnProperty(nm) && typeof form[nm] == "function" )
				{
					form[nm]._thisName = nm;
					form[nm]._thisOwner = form;
				}
			}
		}
		
	});
}

/**
 * @fileoverview Color와 관련된 함수.
 */
 
if ( !JsNamespace.exist("Eco.Color") )
{
	/**
	 * @namespace
	 * @name Eco.Color
	 * @memberof! <global>
	 */
	JsNamespace.declare("Eco.Color", {
	 /**
	 * 기본색상 배열.
	 * @type array
	 * @memberOf Eco.Color
	 */
	basicColors: [
		['#ff8080','#ffff80','#80ff80','#00ff80','#80ffff','#0080ff','#ff80c0','#ff80ff'],
		['#ff0000','#ffff00','#80ff00','#00ff40','#00ffff','#0080c0','#8080c0','#ff00ff'],
		['#804040','#ff8040','#00ff00','#008080','#004080','#8080ff','#800040','#ff0080'],
		['#800000','#ff8000','#008000','#008040','#0000ff','#0000a0','#800080','#8000ff'],
		['#400000','#804000','#004000','#004040','#000080','#000040','#400040','#400080'],
		['#000000','#808000','#808040','#808080','#408080','#c0c0c0','#400040','#ffffff']
	],	     
                                                                          
    /** Thanks to Veselin Tenev. 
    * http://www.codeproject.com/Articles/12372/Windows-Like-Choose-Color-Dialog
    */

	/**
	 * HSL MAX값.
	 * @constant
	 * @type number
	 * @memberOf Eco.Color
	 */ 
    HSLMAX: 240,
    
	/**
	 * RGB MAX값.
	 * @constant
	 * @type number
	 * @memberOf Eco.Color
	 */     
    RGBMAX: 255,

	/**
	 * 채도가 0이면 색상은 undefined 이다.<br>
	 * 이때 색상값을 처리하기 위한 값이다.
	 * @constant
	 * @private
	 * @type number
	 * @memberOf Eco.Color
	 */    
    //HUE_VALUE_WHEN_SATURATION_IS_ZERO: (parseInt(this.HSLMAX*2)/3),  //<-- 주의. this를 Eco.Color로 바꾸지 말 것.  
    HUE_VALUE_WHEN_SATURATION_IS_ZERO: 160,  //계산식 사용 X

	
    rgbToHsl: function(R,G,B)
   	{ 
		var pThis = Eco.Color;
		var HSLMAX = pThis.HSLMAX;
		var RGBMAX = pThis.RGBMAX;
		var cMax = Math.max( Math.max(R,G), B);
		var cMin = Math.min( Math.min(R,G), B);
		var L = Math.floor(( ((cMax+cMin)*HSLMAX) + RGBMAX )/(2*RGBMAX) );
		var H = 0;
		
		if (cMax == cMin) 
		{                               /* r=g=b --> achromatic case */
			 S = 0;                     /* saturation */
			 H = pThis.HUE_VALUE_WHEN_SATURATION_IS_ZERO;        /* hue */
			 
			 //console.log("pThis.HUE_VALUE_WHEN_SATURATION_IS_ZERO=" +pThis.HUE_VALUE_WHEN_SATURATION_IS_ZERO)
			 //console.log("cMax="+ cMax + ", cMin="+ cMin  + ", S="+ S + ", H="+ H);	
		}
		else 
		{                        /* chromatic case */
			 /* saturation */
			 if (L <= (HSLMAX/2))
			 {
				S = Math.floor( ( ((cMax-cMin)*HSLMAX) + ((cMax+cMin)/2) ) / (cMax+cMin) );
			 }
			 else
			 {
				S = Math.floor( ( ((cMax-cMin)*HSLMAX) + ((2*RGBMAX-cMax-cMin)/2) )/ (2*RGBMAX-cMax-cMin) );
			 }

				 /* hue */
			  var Rdelta = Math.floor( ( ((cMax-R)*(HSLMAX/6)) + ((cMax-cMin)/2) ) / (cMax-cMin) );
			  var Gdelta = Math.floor( ( ((cMax-G)*(HSLMAX/6)) + ((cMax-cMin)/2) ) / (cMax-cMin) );
			  var Bdelta = Math.floor( ( ((cMax-B)*(HSLMAX/6)) + ((cMax-cMin)/2) ) / (cMax-cMin) );

			 if (R == cMax)
			 {
				H = Bdelta - Gdelta;
			 }
			 else if (G == cMax)
			 {
				H = (HSLMAX/3) + Rdelta - Bdelta;
			 }
			 else /* B == cMax */
			 {
				H = ((2*HSLMAX)/3) + Gdelta - Rdelta;
			 }
			 
			 if (H < 0)	H += HSLMAX;
			 
			 if (H > HSLMAX) H -= HSLMAX;
		}

		var res = [];
		res[0] = Math.floor(H);
		res[1] = Math.floor(S);
		res[2] = Math.floor(L);
		return res;
	},    
    
    
	/**
	 * 색상을 RGB로 변환한다.
	 * @private 
	 * @param {number} n1 보정값1.
	 * @param {number} n2 보정값2.
	 * @param {number} hue 색상.
	 * @return {number} 색상.
	 * @memberOf Eco.Color
	 */     
   	hueToRgb: function(n1,n2,hue)
   	{
	   var HSLMAX = Eco.Color.HSLMAX;
	   
		n1 = Math.floor(n1);
		n2 = Math.floor(n2);
		hue = Math.floor(hue);
      /* range check: note values passed add/subtract thirds of range */
      if (hue < 0) hue += HSLMAX;

      if (hue > HSLMAX) hue -= HSLMAX;

      /* return r,g, or b value from this tridrant */
      if (hue < (HSLMAX/6)) 
      {
          return Math.floor( n1 + Math.floor((((n2-n1)*hue+(HSLMAX/12))/(HSLMAX/6))) );
      }
      
      if (hue < (HSLMAX/2))
      {
         return ( n2 );
      }
      
      
      if (hue < ((HSLMAX*2)/3))
      {
         return Math.floor( n1 +    Math.floor( (((n2-n1)*(((HSLMAX*2)/3)-hue)+(HSLMAX/12)) / (HSLMAX/6)) ) );
      }
      else
      {
         return Math.floor( n1 );
      }
      
    },


	/**
	 * HSL을 RGB로 변환한다.
	 * @param {number} hue 색상.
	 * @param {number} sat 채도.
	 * @param {number} lum 명도.
	 * @return {array.<number>} RGB값을 가진 array. [R,G,B].
	 * @example 
	 * trace(Eco.Color.hslToRgb(100,240,120)); //output: [0,255,128]
	 * trace(Eco.Color.hslToRgb(20,240,120));  //output: [255,128,0]
	 *
	 * @memberOf Eco.Color
	 */     
   	hslToRgb: function(hue,sat,lum)
   	{
	  var R,G,B;
	  var pThis = Eco.Color;
	  var HSLMAX = pThis.HSLMAX;
	  var RGBMAX = pThis.RGBMAX;

	 //trace("\t### Eco.hlsToRGB > hue=" + hue + ", sat=" + sat + ", lum=" + lum);
      if (sat == 0) 
      {  /* achromatic case */
         R=G=B=(lum*RGBMAX)/HSLMAX;
        
         if (hue != pThis.HUE_VALUE_WHEN_SATURATION_IS_ZERO) 
         {
            /* ERROR */
         }
      }
      else  
      {  
         //보정처리
         /* chromatic case */
         /* set up magic numbers */
         var Magic1, Magic2;
         
         if (lum <= (HSLMAX/2))
         {
			Magic2 = Math.floor(	(lum*(HSLMAX + sat) + (HSLMAX/2)) / HSLMAX	);
         }
         else
         {
            Magic2 = (lum + sat - Math.floor( ((lum*sat) + (HSLMAX/2))/HSLMAX) );
         }
			
         Magic1 = 2*lum-Magic2;

		 var hueToRgb= pThis.hueToRgb;
         /* get RGB, change units from HSLMAX to RGBMAX */
         R = ( hueToRgb(Magic1,Magic2,hue+(HSLMAX/3)) * RGBMAX + (HSLMAX/2) )  / HSLMAX;
         G = ( hueToRgb(Magic1,Magic2,hue) * RGBMAX + (HSLMAX/2) )  / HSLMAX;
         B = ( hueToRgb(Magic1,Magic2,hue - (HSLMAX/3)) * RGBMAX +  (HSLMAX/2) )  / HSLMAX;
      }
	  
	  res = [];
	  res[0] = Math.floor(R);
	  res[1] = Math.floor(G);
	  res[2] = Math.floor(B);
	  
	  return res;
    },
    
    
	/**
	 * RGB를 Hexadecimal code로 변환한다.
	 * @param {number} red red.
	 * @param {number} green green.
	 * @param {number} blue blue.
	 * @param {number=} alpha alpha.
	 * @return {string} Hexadecimal code.
	 * @example
	 * trace(Eco.Color.rgbToHex(255,140,0)); //output: #FF8C00
	 * trace(Eco.Color.rgbToHex(255,140,0, 100)); //output: #FF8C0064
	 *
	 * @memberOf Eco.Color
	 */        
	rgbToHex: function(red,green,blue,alpha)
	{
		var numberToHex = Eco.Color.numberToHex;
		return "#" + numberToHex(red) + numberToHex(green) + numberToHex(blue) + numberToHex(alpha);	
	},
	
	/**
	 * number를 Hexadecimal code로 변환한다.
	 * @private
	 * @param {number} value 변환대상.
	 * @return {number} Hexadecimal.
	 * @memberOf Eco.Color
	 */	
	numberToHex: function(value)
	{
		if(Eco.isEmpty(value)) return "";
		
		var hex = value.toString(16).padLeft(2,"0");
		//trace("value="+value+" , hex="+hex);
		return hex.toUpperCase();
	},

	/**
	 * Hexadecimal code를 HSL로 변환한다.
	 * @param {string} str "red"같이 named color나, "#000000" 값들이 주어진다.
	 * @return {array} [H,S,L] 형태의 array 값.
	 * @example
	 * trace(Eco.Color.hexToHsl("#FF8080")); //output: [0,240,180]
	 * trace(Eco.Color.hexToHsl("#008000")); //output: [80,240,60]
	 * @memberOf Eco.Color
	 */		
	hexToHsl: function(str)
	{
		if(Eco.isEmpty(str)) {
			alert("Arguments is empty!");
			return;
		}
		
		var pThis = Eco.Color;
		var rgb = pThis.hexToRgb(str);
		return pThis.rgbToHsl(rgb[0],rgb[1],rgb[2]);
	},
	
	/**
	 * Hexadecimal code를 [r, g, b, a]로 변환한다.
	 * @param {string} str "red"같이 named color나, "#000000", "#000000ff" 값들이 주어진다.
	 * @return {array} [r, g, b, a] 형태의 array 값.
	 * @example
	 * trace(Eco.Color.hexToRgb("#FF8C00")); //output: [255,140,0]
	 * @memberOf Eco.Color
	 */	
	hexToRgb: function(str)
	{
		if(Eco.isEmpty(str)) {
			alert("Arguments is empty!");
			return;
		}
		
		if ( !(str.match(/^#[0-9a-f]{3,8}$/i)) )
		{
			str = nexacro._xreNamedColorList[str];
		}
		
		var hex;
		if ( str.length == 9 )
		{
			hex = str.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})(\w{1,2})$/);
		}
		else
		{
			hex = str.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
		}
		if (hex.length >= 4)
		{
			var rgb = [0, 0, 0];
			for (var i = 0; i < 3; i++)
			{
				var value = hex[i + 1];
				rgb[i] = parseInt(value.length == 1
						? value + value : value, 16) ;
			}
			if ( hex[4] && hex[4].length > 0 )
			{
				rgb.push(parseInt(hex[4], 16) );
			}
			else
			{
				rgb.push(255);			
			}
			return rgb;
		}
	}
		 
	});
}  
		 
		 



/**
 * @fileoverview nexacro Components 관련 기본함수.
 */

if ( !JsNamespace.exist("Eco.XComp") )
{
	/**
	 * @namespace
	 * @name Eco.XComp
     * @memberof! <global>
	 */
	JsNamespace.declare("Eco.XComp", {
		
		/**
		 * 연산자 함수 목록
		 * @private
		 * @memberOf Eco.XComp
		 */
		_operators: {
			// ==
			"equal" : function(a, v){
				if (Eco.isEmpty(v))
				{
					return Eco.isEmpty(a);
				}
				
				return a == v;
			},
			// !=
			"notEqual" : function(a, v){
				return a != v;
			},
			// >
			"greaterThan" : function(a, v){
				return a > v;
			},
			// >=
			"greaterThanEqual" : function(a, v){
				return a >= v;
			},	
			// <
			"lessThan" : function(a, v){
				return a < v;
			},
			// <=
			"lessThanEqual" : function(a, v){
				return a <= v;
			},		
			// *=
			"contains" : function(a, v){
				return a && a.indexOf(v) > -1;
			},	
			// ^=
			"startWith" : function(a, v){
				return a && a.substr(0, v.length) == v;
			},
			// $=
			"endWith" : function(a, v){
				return a && a.substr(a.length-v.length) == v;
			}
		},
		
		/**
		 * 주어진 nexacro 개체의 type 을 반환
		 * @public
		 * @param {*} obj Object, Component, Frame, .. 등 nexacro 모든 개체
		 * @return {string} 개체의 type
		 * @example
		 * trace(Eco.XComp.typeOf(Button00));	// output : Button
		 * trace(Eco.XComp.typeOf(Tab00));	// output : Tab
		 * trace(Eco.XComp.typeOf(Tab00.tabpage1));	// output : Tabpage
		 * trace(Eco.XComp.typeOf(Dataset00));	// output : Dataset
		 * trace(Eco.XComp.typeOf(PropertyAnimation00));	// output : PropertyAnimation
		 *
		 * var o;
		 * o = new Buffer;
		 * trace(Eco.XComp.typeOf(o));	// output : Buffer
		 *
		 * o = new DomDocument;
		 * trace(Eco.XComp.typeOf(o));	// output : DomDocument
		 *
		 * o = new Rect;
		 * trace(Eco.XComp.typeOf(o));	// output : Rect
		 *
		 * o = new FileDialog;
		 * trace(Eco.XComp.typeOf(o));	// output : FileDialog
		 *
		 * o = new UserEvent;
		 * trace(Eco.XComp.typeOf(o));	// output : UserEvent
		 *
		 * // non XP Component/Object return undefined.
		 * o = {};
		 * trace(Eco.XComp.typeOf(o));	// output : undefined		 
		 *
		 * o = new Date();
		 * trace(Eco.XComp.typeOf(o));	// output : undefined
		 * @memberOf Eco.XComp
		 */
		typeOf: function(obj)
		{
			var type;
			if ( obj && (typeof obj == "object"))
			{
				var s = obj.toString();
				if(s == "[object Object]") return type;
				
				type = s.substr(8, s.length-9);
			}
			return type;
		},
		
		/**
		 * 주어진 컴포넌트가 실제 화면에 보여지는지 여부를 반환<br><br>
		 * 대상 컴포넌트의 상위컴포넌트(parent)의 visible 속성이 false 가<br> 
		 * 지정되어 화면에 대상 컴포넌트가 보이지 않더라도 대상 컴포넌트의<br> 
		 * visible 속성값은 지정된 값을 유지하고 있으므로 화면에 실제 <br>
		 * 보여지는지 여부를 판단하기 위해서는 본 메소드를 사용한다.
		 * @public
		 * @param {XComp} obj nexacro Component
		 * @return {string} 개체의 type
		 * @example
		 * Div00.Button00.visible = true;
		 * Div00.visible = false;	// 화면에 Button00 이 보이지 않는다.
		 * trace(Div00.Button00.visible);	// output : true
		 * trace(Eco.XComp.isVisible(Div00.Button00));	// output : false
		 * @memberOf Eco.XComp
		 */
		isVisible: function(obj)
		{
			if ( !("visible" in obj) ) return false;
			if ( obj.visible == false ) return false;
			
			var ret = true;
			var p = obj.parent;
			while ( p )
			{
				if ( p instanceof ChildFrame ) break;
				if ( p.visible === false ) 
				{
					ret = false;
					break;
				}
				
				p = p.parent;
			}
			return ret;
		},	
			
		/**
		 * 주어진 오브젝트가 Visual한 컴포넌트인지를 반환
		 * @public
		 * @param {XComp} obj nexacro Component
		 * @return {boolean} visual Component 여부
		 * @example
		 * trace(Eco.XComp.isVisual(Button00));	// output : true
		 * trace(Eco.XComp.isVisual(Dataset00));	// output : false
		 * @memberOf Eco.XComp
		 */
		isVisual: function(obj)
		{
			if ( !("currentstyle" in obj) ) return false;
			return true;
		},				
		
		/**
		 * 주어진 컴포넌트의 실제 활성화 여부를 반환<br><br>
		 * 대상 컴포넌트의 상위컴포넌트(parent)의 enable 속성이 false 가 <br>
		 * 지정되어 화면에 대상 컴포넌트가 비활성화 상태이어도 대상 컴포넌트의 <br>
		 * enable 속성값은 지정된 값을 유지하고 있으므로 실제 활성화 여부를 <br>
		 * 판단하기 위해서는 본 메소드를 사용한다.
		 * @public
		 * @param {XComp} obj nexacro Component
		 * @return {string} 개체의 type
		 * @example
		 * Div00.Button00.enable = true;
		 * Div00.enable = false;	// Button00 이 비활성화 된다.
		 * trace(Div00.Button00.enable);	// output : true
		 * trace(Eco.XComp.isEnable(Div00.Button00));	// output : false
		 * @memberOf Eco.XComp
		 */		
		isEnable: function(obj)
		{
			if ( !("enable" in obj) ) return false;
			if ( obj.enable == false ) return false;
			
			var ret = true;
			var p = obj.parent;
			while ( p )
			{
				if ( p instanceof ChildFrame ) break;
				if ( p.enable === false ) 
				{
					ret = false;
					break;
				}
				
				p = p.parent;
			}
			return ret;	
		},
		
		/**
		 * query 메소드의 where 조건 cache
		 * @private
		 * @memberOf Eco.XComp
		 */		
		_parseQueryCache: [],

		/**
		 * where 조건문의 token을 얻어온다.<br>
		 * thanks to Douglas Crockford. tokens.js (crockford.com)
		 * @private
		 * @param {string} str where 문자열
		 * @return {array} type, value 를 가지는 token collecion
		 * @memberOf Eco.XComp
		 */
		_tokenizeQueryWhere: function(str)
		{
			var c;				// The current character.
			var i = 0;			// The index of the current character.	
			var s;				// The string value.
			var n;				// The number value.
			var q;				// The quote character.
			
			var result = [];	// An array to hold the results.
			
			var prefix = '<>&|=*^$!';
			var suffix = '=>&|';
			
			var length = str.length;
			
			c = str.charAt(i);
			
			while (c) 
			{
				// Ignore whitespace.
				if (c <= ' ') 
				{
					i += 1;
					c = str.charAt(i);
				}
				// named or boolean
				else if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == '_') 
				{
					s = c;
					i += 1;
					for (;;) 
					{
						c = str.charAt(i);
						if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') ||
								(c >= '0' && c <= '9') || c === '_') {
							s += c;
							i += 1;
						} else {
							break;
						}
					}
					
					if ( s == 'true' || s == 'false' )
					{
						result.push({type:'boolean', value:s});
					}
					else
					{
						result.push({type:'named', value:s});
					}
				} 
				// number.
				// A number cannot start with a decimal point. It must start with a digit,
				// possibly '0'.
				else if (c >= '0' && c <= '9') {
					s = c;
					i += 1;
					// Look for more digits.
					for (;;) 
					{
						c = str.charAt(i);
						if (c < '0' || c > '9') {
							break;
						}
						i += 1;
						s += c;
					}
					// Look for a decimal fraction part.
					if (c === '.') {
						i += 1;
						s += c;
						for (;;) 
						{
							c = str.charAt(i);
							if (c < '0' || c > '9') {
								break;
							}
							i += 1;
							s += c;
						}
					}
					// Look for an exponent part.
					if (c === 'e' || c === 'E') {
						i += 1;
						s += c;
						c = str.charAt(i);
						if (c === '-' || c === '+') {
							i += 1;
							s += c;
							c = str.charAt(i);
						}
						if (c < '0' || c > '9') {
							trace("Bad exponent");
						}
						do {
							i += 1;
							s += c;
							c = str.charAt(i);
						} while (c >= '0' && c <= '9');
					}
					// Make sure the next character is not a letter.
					if (c >= 'a' && c <= 'z') 
					{
						s += c;
						i += 1;                
						trace("Bad number");
					}
					// Convert the string value to a number. If it is finite, then it is a good
					// token.
					n = +s;
					if (isFinite(n)) 
					{
						result.push({type:'number', value:n});
					}
					else 
					{
						trace("Bad number");
					}
				}
				// string
				else if (c === '\'' || c === '"') {
					s = '';
					q = c;
					i += 1;
					for (;;) 
					{
						c = str.charAt(i);
						if (c < ' ') {
							if (c === '\n' || c === '\r' || c === '')
							{
								trace("Unterminated string.");
							}
							else
							{
								trace("Control character in string.");
							}
						}

						// Look for the closing quote.
						if (c === q) 
						{
							break;
						}

						// Look for escapement.
						if (c === '\\') {
							i += 1;
							if (i >= length) 
							{
							   trace("Unterminated string");
							}
							c = str.charAt(i);
							switch (c) {
							case 'b':
								c = '\b';
								break;
							case 'f':
								c = '\f';
								break;
							case 'n':
								c = '\n';
								break;
							case 'r':
								c = '\r';
								break;
							case 't':
								c = '\t';
								break;
							case 'u':
								if (i >= length) 
								{
									trace("Unterminated string");
								}
								c = parseInt(str.substr(i + 1, 4), 16);
								if (!isFinite(c) || c < 0) {
									trace("Unterminated string");
								}
								c = String.fromCharCode(c);
								i += 4;
								break;
							}
						}
						s += c;
						i += 1;
					}
					i += 1;
					result.push({type:'string', value:s});
					c = str.charAt(i);
				} 
				// comment. (not use)
				else if (c === '/' && str.charAt(i + 1) === '/') 
				{
					i += 1;
					for (;;) 
					{
						c = str.charAt(i);
						if (c === '\n' || c === '\r' || c === '') {
							break;
						}
						i += 1;
					}
				} 
				// combining
				else if (prefix.indexOf(c) >= 0) 
				{
					s = c;
					i += 1;
					while (true) 
					{
						c = str.charAt(i);
						if (i >= length || suffix.indexOf(c) < 0) 
						{
							break;
						}
						s += c;
						i += 1;
					}
					result.push({type:'operator', value:s});
				} 
				// single-character operator
				else 
				{
					if ( "()[]".indexOf(c) > -1 )
					{
						result.push({type:'bracket', value:c});
					}
					else
					{
						result.push({type:'operator', value:c});
					}
					
					i += 1;            
					c = str.charAt(i);
				}	
			}
			return result;
		},

		/**
		 * where 조건문을 파싱하여 실행 함수를 반환
		 * @private
		 * @param {string} where where 문자열
		 * @return {function} where 조건 실행 함수
		 * @memberOf Eco.XComp
		 */
		_parseQueryWhere: function(where)
		{
			var pThis = Eco.XComp;
			var cache = pThis._parseQueryCache[where];
			
			if ( cache )
			{
				return cache;
			}
			
			var token, type, value, temp;
			var tokens = pThis._tokenizeQueryWhere(where);
			
			var depth = 0, maxDepth=0;
			var syntax = [];
			
			for (var i=0,len=tokens.length; i<len; i++)
			{
				token = tokens[i];
				type = token.type;
				value = token.value;
				//trace(type + " : " + value);
				if ( type == "bracket" )
				{
					if ( value == "(" )
					{
						syntax.push({depth:depth, type:"value", value:"("});
						depth += 1;
						maxDepth = depth;
					}
					else if ( value == ")" )
					{
						depth -= 1;
						syntax.push({depth:depth, type:"value", value:")"});						
					}
				}
				else if ( type == "named" )
				{			
					if ( value == "prop" || value == "curStyle" || value == "style" )
					{
						
						i += 1;
						token = tokens[i];
						
						
						if ( token.type == "bracket" && token.value == "[" )
						{
							i += 1;
							token = tokens[i];
							syntax.push({depth:depth, type:"operand", value:"Eco.XComp._getQueryCompValue(obj, \""+value+"\", \""+token.value+"\")"});
						}
						i += 1;
					}
					else if ( value == "typeOf" || value == "isVisible" || value == "isVisual" || value == "isEnable" )
					{
						syntax.push({depth:depth, type:"operand", value:"Eco.XComp."+value+"(obj)"});
					}
				}
				else if ( type == "operator" )
				{
					if ( value == "&&" || value == "||" )
					{
						syntax.push({depth:depth, type:"operator", value:value});
					}
					else
					{
						temp = "";
						switch (value)
						{
							case '==' :
								temp = "equal";
								break;
							case '!=' :
								temp = "notEqual";
								break;
							case '>' :
								temp = "greaterThan";
								break;
							case '>=' :
								temp = "greaterThanEqual";
								break;
							case '<' :
								temp = "lessThan";
								break;
							case '<=' :
								temp = "lessThanEqual";
								break;
							case '*=' :
								temp = "contains";
								break;	
							case '^=' :
								temp = "startWith";
								break;	
							case '$=' :
								temp = "endWith";
								break;																																				
						}
						syntax.push({depth:depth, type:"replaceOperator", value:"Eco.XComp._operators."+temp+"($1, $2)"});
					}
				} 		
				else if ( type == "string" )
				{
					syntax.push({depth:depth, type:"operand", value:"\""+value+"\""});
				}
				else if ( type == "number" || type == "boolean" )
				{		
					syntax.push({depth:depth, type:"operand", value:value});
				}
			}

			var s, s0, s1;
			for (var i=maxDepth; i>=0; i--)
			{
				pThis._replaceOperator(i, syntax);
			}
			
			var result = [];
			for (var i=0,len=syntax.length; i<len ;i++)
			{
				s = syntax[i];
				result.push(syntax[i].value);
			}
			
			var fn = "var f = function(obj) {\n	return " + result.join(" ") + ";\n}";

			try 
			{
				eval(fn);
			}
			catch(e)
			{
				trace("eval error:"+e.description);
			}
						
			pThis._parseQueryCache[where] = f;
			
			return f;
		},
		
		/**
		 * where 조건문의 연산자에 피연산자를 대입한다.
		 * @private
		 * @param {number} depth 우선순위 깊이
		 * @param {number} syntax 변환 대상 토큰
		 * @memberOf Eco.XComp
		 */		
		_replaceOperator: function(depth, syntax)
		{
			var s;
			for (var i=0,len=syntax.length; i<len; i++)
			{
				s = syntax[i];
				if ( s.depth == depth )
				{
					if ( s.type == "replaceOperator" )
					{
						s0 = syntax[i-1];
						s1 = syntax[i+1];
						
						if ( s0 && s0.depth == depth && s0.type == "operand" && 
						     s1 && s1.depth == depth && s1.type == "operand" )
						{
							temp = s.value;
							temp = temp.replace("$1", s0.value);
							temp = temp.replace("$2", s1.value);

							s.depth = s.depth-1;
							s.type = "operand";
							s.value = temp;
							
							s0.depth = null;
							s1.depth = null;
							
							i += 1;
						}
					}
				}
			}
			
			for (var i=(syntax.length-1); i>=0; i--)
			{
				s = syntax[i];
 				if ( s.depth == null )
 				{
 					syntax.splice(i,1);
 					i--;
 				}
			}
		},
		
		/**
		 * component의 property, currentstyle, style 에서 특정 name에 해당하는 값을 얻어온다.
		 * @private
		 * @param {nexacro Component} obj where 문자열
		 * @param {string} type 검색 대상 (property, currentstyle, style)
		 * @param {string} name property, currentstyle, style 에서 찾을 명칭
		 * @return {string} name에 해당하는 값
		 * @memberOf Eco.XComp
		 */		
		_getQueryCompValue: function(obj, type, name)
		{
			var ret;
			if ( type == "prop" ) 
			{
				ret = obj[name];
			} 
			else if ( type == "curStyle" )
			{
				ret = obj.currentstyle[name];
			}
			else if ( type == "style" )
			{
				ret = obj.style[name];
			}		
			
			if ( ret && typeof ret == "object" ) 
			{
				if ( ret.toString ) 
				{
					ret = ret.toString();
				}
				else
				{
					ret = ret + "";
				}
				ret = ret.trim();
			}
			
			return ret;
		},
		
		/**
		 * 주어진 component에 포함된 모든 하위 component, object 반환
		 * @private
		 * @param {nexacro Component} c 대상 component
		 * @return {array} 하위 component, object
		 * @memberOf Eco.XComp
		 */
		_getAll: function(c)
		{
			var children = [];
			var cs = c.all;
			if ( cs )
			{
				for (var i=0,len=cs.length; i<len; i++)
				{
					children.push(cs[i]);
				}
			}
			else 
			{
				cs = c.objects;
				if ( cs )
				{
					for (var i=0,len=cs.length; i<len; i++)
					{
						children.push(cs[i]);
					}				
				}
				
				cs = c.components;
				if ( cs )
				{
					for (var i=0,len=cs.length; i<len; i++)
					{
						children.push(cs[i]);
					}				
				}
			}	
			return children;
		},
		
		/**
		 * 주어진 component의 depth에 포함된 하위 component, object 반환 (recursive)<br>
		 * from이 container가 아닐 경우 undefind 반환
		 * @private
		 * @param {XComp} from 대상 container component
		 * @param {object} depth max, current depth
		 * @return {array} 하위 component, object
		 * @memberOf Eco.XComp
		 */		
		_getChildren: function(from, depth)
		{
			var pThis = Eco.XComp;
			var children = pThis._getAll(from);
			var results = [], c, cs0, recvCs;
			
			depth.current += 1;
			
			for (var i=0,len=children.length; i<len; i++)
			{
				c = children[i];

				cs0 = pThis._getAll(c);
				
				if ( cs0 && cs0.length > 0 && depth.max >= depth.current )
				{
					//trace(" _getChildren > c="+c);
					results.push(c);
					recvCs = pThis._getChildren(c, depth);
					results = results.concat(recvCs);
					depth.current -= 1;
				}
				else
				{	
					results.push(c);
				}
			}
			
			return results;
		},
		
		/**
		 * 주어진 nexacro Component 에 포함되고 조건에 맞는 component, object 반환<br><br>
		 * 1. where 조건문에 지원하는 예약어 피연산자(operand) 는 다음과 같다.<br>
		 *  - prop[property_name] : property 중 name 에 해당하는 값을 의미<br>
		 *  - curStyle[currentstyle_name] : currentstyle 중 name 에 해당하는 값(문자열)을 의미<br>
		 *  - style[style_name] : style 중 name 에 해당하는 값을 의미<br>
		 *  - typeOf : XP Component type을 의미<br>
		 *  - isVisible : XP Component의 실제 visible 여부<br>
		 *  - isVisual : 주어진 오브젝트가 Visual한 컴포넌트인지 여부<br>
		 *  - isEnable : XP Component의 실제 enable 여부<br><br>
		 * ※ isVisible는 실제 컴포넌트가 화면에 보여지는 여부를 체크하게 된다.<br>
		 *    prop[visible] == true 형식으로 사용하면 대상 컴포넌트의 value property 값이 true 인지를 체크한다.<br>
		 *    대상 컴포넌트의 상위컴포넌트(parent)의 visible 속성이 false 가 지정되어 화면에 대상 컴포넌트가<br>
		 *    보이지 않더라도 대상 컴포넌트의 visible 속성값은 자신이 지정된 값을 유지하고 있으므로 반드시<br>
		 *    false 가 나오지 않는다. (같은 이유로 isEnable 로 실제 활성화 되어있는지를 체크해야 한다.)<br><br>
		 * 2. where 조건문에 지원하는 연산자(operator) 는 다음과 같다.<br>
		 *  - A && B : A 와 B 가 모두 참이면 참<br>
		 *  - A || B : A 와 B 가 모두 거짓이면 거짓<br>
		 *  - A == B : A 와 B 는 같다.<br>
		 *  - A != B : A 와 B 는 같지 않다.<br>
		 *  - A > B : A 는 B 보다 크다.<br>
		 *  - A >= B : A 는 B 보다 크거나 같다.<br>
		 *  - A < B : A 는 B 보다 작다.<br>
		 *  - A <= B : A 는 B 보다 작거나 같다.<br>
		 *  - 'b' *= 'abc' : 'abc' 에 'b' 가 포함되어 있다. (like)<br>
		 *  - 'a' ^= 'abc' : 'abc' 는 'a' 로 시작한다. (startWith)<br>
		 *  - 'c' $= 'abc' : 'abc' 는 'c' 로 끝난다. (endWith)
		 * @public
		 * @param {*} obj Object, Component, Frame, .. 등 nexacro 모든 개체
		 * @param {string=} where 찾을 조건문
		 * @param {number=} depth 하위 레벨 깊이 (default: 제한없음)
		 * @return {array} 검색된 component, object
		 * @example
		 * 
		 * Form(Form00) 에 아래와 같은 구조가 존재 할 경우
		 *
		 * |----------------------------------------------------------------------------|
		 * | Div00 (depth:0)                                                            |
		 * |                                                                            |
		 * |    ------------                                                            |
		 * |    | Button00 |                                                            |
		 * |    ------------                                                            |
		 * |                                                                            |
		 * |    |-------------------------------------------------------------------|   |
		 * |    | Div01 (depth:1)                                                   |   |
		 * |    |                                                                   |   |
		 * |    |   ------------                                                    |   |
		 * |    |   | Button01 |                                                    |   |
		 * |    |   ------------                                                    |   |
		 * |    |                                                                   |   |
		 * |    |   |-----------------------------------------------------------|   |   |
		 * |    |   | Tab00 (depth:2)                                           |   |   |
		 * |    |   |                                                           |   |   |
		 * |    |   |   |-----------------------|   |-----------------------|   |   |   |
		 * |    |   |   | Tabpage1 (depth:3)    |   | Tabpage2 (depth:3)    |   |   |   |
		 * |    |   |   |                       |   |                       |   |   |   |
		 * |    |   |   |   ------------        |   |   ------------        |   |   |   |
		 * |    |   |   |   | Button02 |        |   |   | Button03 |        |   |   |   |
		 * |    |   |   |   ------------        |   |   ------------        |   |   |   |
		 * |    |   |   |                       |   |                       |   |   |   |
		 * |    |   |   |-----------------------|   |-----------------------|   |   |   |
		 * |    |   |                                                           |   |   |
		 * |    |   |-----------------------------------------------------------|   |   |
		 * |    |                                                                   |   |
		 * |    |-------------------------------------------------------------------|   |
		 * |                                                                            |
		 * |----------------------------------------------------------------------------|
		 *
		 * // from이 Form00 이고 depth 를 지정하지 않은 경우 Form00 에 포함된 모든 하위요소 검색
		 * trace(Eco.XComp.query(Form00, ""));
		 * // output : [object Div],[object Button],[object Div],[object Button],[object Tab],
		 *             [object Tabpage],[object Button],[object Tabpage],[object Button]
		 *
		 * // from이 Div00 이고 depth 를 지정하지 않은 경우 Div00 에 포함된 모든 하위요소 검색
		 * trace(Eco.XComp.query(Div00, ""));
         * // output : [object Button],[object Div],[object Button],[object Tab],
         *             [object Tabpage],[object Button],[object Tabpage],[object Button]
		 *
		 * // from이 Div00 이고 depth가 0 인 경우 Div00 에 포함된 요소까지 검색
		 * trace(Eco.XComp.query(Div00, "", 0));
         * // output : [object Button],[object Div]
		 *
		 * // from이 Div00 이고 depth가 1 인 경우 Div01 에 포함된 요소까지 검색
		 * trace(Eco.XComp.query(Div00, "", 1));
         * // output : [object Button],[object Div],[object Button],[object Tab]
		 *
		 * // from이 Div00 이고 depth가 2 인 경우 Tab00 에 포함된 요소까지 검색
		 * trace(Eco.XComp.query(Div00, "", 2));
         * // output : [object Button],[object Div],[object Button],[object Tab],
         *             [object Tabpage],[object Tabpage]
         *
		 * // Div00 에 하위로 포함된 모든 Button 검색
		 * trace(Eco.XComp.query(Div00, "typeOf == 'Button'"));
         * // output : [object Button],[object Button],[object Button],[object Button]
         * 
		 * // Div00 에 하위로 포함된 모든 Button, Div 검색
		 * trace(Eco.XComp.query(Div00, "typeOf == 'Button' || typeOf == 'Div'"));
         * // output : [object Button],[object Div],[object Button],[object Button],[object Button]
         * 
		 * // Div00 에 포함된 모든 하위요소중 property visible 값이 true 인 요소 검색
		 * // Div01에 포함된 Tab 과 Button이 보이지 않지만 visible 속성값은 true 임
		 * // 실제 visible 한 요소만 찾을 경우 isVisible 을 사용
		 * Div00.Div01.visible = false;
		 * trace(Eco.XComp.query(Div00, "prop[visible] == true"));
         * // output : [object Button],[object Button],[object Tab],[object Button],[object Button]
         * 
		 * // Div00 에 포함된 모든 하위요소중 property text 값이 "Button02" 인 요소 검색
		 * trace(Eco.XComp.query(Div00, "prop[text] == 'Button02'"));
         * // output : [object Button]
         *
		 * // Div00 에 포함된 모든 하위요소중 currentstyle align 값이 "center middle" 인 요소 검색
		 * // (currentstyle은 현재 적용되고 있는 style object를 얻어오는 property 임)
		 * Div00.Div01.Button01.style.align = "left bottom";
		 * trace(Eco.XComp.query(Div00, "curStyle[align] == 'center middle'"));
         * // output : [object Button],[object Div],[object Tab],[object Button],[object Button]
         *
		 * // Div00 에 포함된 모든 하위요소중 style align 값이 "left top" 인 요소 검색
		 * // 화면디자인시 적용된 style 의 특정 값을 얻어온다.
		 * trace(Eco.XComp.query(Div00, "style[align] == 'left top'"));
         * // output : [object Button]
         * 
		 * // Div00 에 포함된 모든 하위요소중 화면에 보이는 요소 검색
		 * // prop[value] == true 는 실제 보이는 요소가 아니어도 속성값이 true이면 검색됨.
		 * Div00.Div01.visible = false;	
		 * trace(Eco.XComp.query(Div00, "isVisible == true"));
         * // output : [object Button]
         *
         * // Div00 에 Dataset과 Button이 포함됐을 경우 하위요소중 visual한 컴포넌트만 검색
         * trace(Eco.XComp.query(Div00, "isVisual == true", 0));
         * // output : [object Button]
         *
		 * // Div00 에 포함된 모든 하위요소중 활성화된 요소 검색
		 * // prop[enable] == true 는 실제 활성화된 요소가 아니어도 속성값이 true이면 검색됨.
		 * Div00.Div01.enable = false;	
		 * trace(Eco.XComp.query(Div00, "isEnable == true"));
         * // output : [object Button]
         * 
         * // Div00 에 포함된 모든 하위요소중 property name에 'ab' 이 포함된 요소을 검색
		 * trace(Eco.XComp.query(Div00, "prop[name] *= 'ab'"));
         * // output : [object Tab],[object Tabpage],[object Tabpage]
         *
         * // Div00 에 포함된 모든 하위요소중 property name이 'Bu' 로 시작되는 요소을 검색
		 * trace(Eco.XComp.query(Div00, "prop[name] ^= 'Bu'"));
         * // output : [object Button],[object Button],[object Button],[object Button]
         *
         * // Div00 에 포함된 모든 하위요소중 property name이 '01' 로 끝나는 요소을 검색
		 * trace(Eco.XComp.query(Div00, "prop[name] $= '01'"));
         * // output : [object Div],[object Button]
         *
         * // Div00에 포함된 모든 하위요소중 화면에 보이면서 type이 Button 인 요소를 검색
		 * Div00.Div01.visible = false;
		 * trace(Eco.XComp.query(Div00, "isVisible == true && typeOf == 'Button'"));
         * // output : [object Button]
         *
		 * @memberOf Eco.XComp
		 */	
		query: function(from, where, deep)
		{		
			var pThis = Eco.XComp;

			if ( !from || !Eco.isXComponent(from) ) 
			{
				return [];
			}
			
			var depth = {};
				depth.current = 0;

			if ( Eco.isNumber(deep) ) 
			{
				depth.max = deep;
			}
			else if ( nexacro.isNumeric(deep) ) 
			{
				depth.max = parseInt(deep);
			}		
			else
			{
				depth.max = Number.MAX_VALUE;
			}
			
			var results = [];
			var targets = pThis._getChildren(from, depth);
			//trace("query > targets="+targets);
			if ( Eco.isEmpty(where) )
			{
				results = targets.slice(0);
			}
			else
			{
				var func = pThis._parseQueryWhere(where);
				var target, check;
				for (var i=0, len=targets.length; i<len; i++)
				{
					target = targets[i];
					check = func.call(pThis, target);
					//trace("query > target="+target + ", check=" + check);
					if ( check )
					{
						results.push(target);
					}
				}
			}
			
			return results;
		},

		/**
		 * ChildFrame에 속한 계층 위치의 정보까지 명칭으로 얻는다.
		 * @param {XComp} obj nexacro component.
		 * @param {XComp=} refParent 계층 구조에서 중단할 상위 nexacro component
		 * @return {string} obj 계층 구조의 명칭(xpform.Div00.Button01)
		 * @example
		 *
		 * // obj = Button
		 * trace(Eco.XComp.getPathName(obj, this));
		 * // output : Button00
		 *
		 * trace(Eco.XComp.getPathName(Div00.st_test, this));
		 * // output : Div00.st_test
		 *
		 * @memberOf Eco.XComp
		*/
		getPathName: function(obj, refParent)	
		{
			var c = obj, arr = [];			
			while ( c )
			{
				if ( c instanceof ChildFrame ) break;
				if ( refParent && c === refParent ) break;
				arr.push(c.name);
				c = c.parent;
			}
			arr = arr.reverse();
			return arr.join(".");
		},
		
		/**
		 * 계층 위치의 정보 명칭으로 nexacro component를 얻는다.
		 * @param {string} pathName 계층 구조의 명칭(xpform.Div00.Button01)
		 * @param {XComp} p 검색 기준 상위 nexacro component (p의 범위에서 검색)
		 * @return {XComp} obj nexacro component.
		 * @example
		 *
		 * trace(Eco.XComp.getCompByPathName("Div01.st_test", this));
		 * // output : [object Static]
		 *
		 * trace(Eco.XComp.getCompByPathName("st_test", Div00));
		 * // output : [object Static]
		 *
		 * @memberOf Eco.XComp
		*/
		getCompByPathName: function(pathName, p)
		{
			var comps = [],
				i, len, 
				comp;
				
			comps = pathName.split(".");
			
			for (i = 0, len = comps.length; i < len ; i++ )
			{
				comp = comps[i];
				p = p[comp];
				if (!p) break;
			}
			
			return p;
		},		
		
		
		/**
		 * 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
		 * @public
		 * @param {XComp} p 찾을 대상
		 * @param {string} name 찾을 대상 이름
		 * @return {XComp} 검색된 component, object
		 * @example
		 *
		 * // this = Form 
		 * // Form 에 Button11 존재
		 * trace(Eco.XComp.lookup(this, "Button11"));	// output : [object Button]
		 * 
		 * // Button12 는 Div01 에 존재하지 않으나 Div01 의 상위 컴포넌트인 Form 에 존재
		 * trace(Eco.XComp.lookup(Div01, "Button11"));	// output : [object Button]
		 *
		 * @memberOf Eco.XComp
		 */
		lookup: function(p, name)
		{
			var o;
			while (p)
			{		
				o = p.components;
				if ( o && o[name] ) return o[name];
				
				o = p.objects;
				if ( o && o[name] ) return o[name];
				
				p = p.parent;
			}
			return null;
		},
		
		/**
		 * 주어진 상위 컴포넌트에 하위 컴포넌트가 포함되는지 여부를 반환
		 * @public
		 * @param {XComp} p 상위 컴포넌트
		 * @param {XComp} target 하위 컴포넌트
		 * @return {boolean} 포함 여부
		 * @example
		 *
		 * // this = Form, obj = Button
		 * trace(Eco.XComp.contains(this, obj));	// output : true
		 * 
		 * trace(Eco.XComp.contains(this, ds_test));	// output : true		 
		 * 
		 * @memberOf Eco.XComp
		 */		
		contains: function(p, target)
		{
			while (target)
			{
				if (target == p) return true;
				target = target.parent;
			}
			return false;
		},
		
		/**
		 * 주어진 Form 을 포함하는 최상위 Form을 찾는다.
		 * @public
		 * @param {Form} curForm 찾을 대상 이름
		 * @return {Form} 최상위 Form
		 * @example
		 *
		 * trace(Eco.XComp.getTopLevelForm(this));	// output : [object Form]
		 * 
		 * @memberOf Eco.XComp
		 */		
		getTopLevelForm: function(curForm)
		{
			var p = curForm;
			while (p && !(p instanceof ChildFrame))
			{
				p = p.parent;
			}
			return p.form;
		},		

		/**
		 * showModal 호출 시 추가된 변수 목록값을 반환한다.
		 * @public
		 * @param {Form} scope 현재 form
		 * @param {Array.<string>} variableNames 얻고자 하는 변수명 목록
		 * @return {object} {변수명:값, 변수명:값, ...} 객체.
		 * @example
		 *
		 * var frame = new ChildFrame();
		 * frame.init("testFrame", "absolute", 10, 10, 400, 400, null, null, "Sample::XComp_sub2.xfdl");
		 * frame.showModal(this.getOwnerFrame(), {'name':'James', 'address':"Seoul, Korea" });		 
		 *
		 * alert(Eco.XComp.getPopupArguments( this, ['name', 'address'] );	// output : {'name':'James', 'address':"Seoul, Korea" }
		 * 
		 * @memberOf Eco.XComp
		 */		
		getPopupArguments: function(scope, varNameList)
		{
			var p = scope;
			while (p && !(p instanceof ChildFrame))
			{
				p = p.parent;
			}
			
			var valueList = {};

			for(var i=0, len = varNameList.length; i < len; i++)
			{
				valueList[varNameList[i]] = p[varNameList[i]];
			}
			
			return valueList;
		},				
		
		/**
		 * 주어진 c(XComp) 가 사용하는 script 영역(scope)의 Form을 찾는다.
		 * @public
		 * @param {Form} c - XComp
		 * @return {Form} script 영역이 존재하는 Form
		 * @example
		 *
		 * trace(Eco.XComp.getScriptForm(this.Div00.Button00));	// output : [object Form]
		 * 
		 * @memberOf Eco.XComp
		 */		
		getScriptForm: function(c)
		{
			var p = c;
			while (p)
			{
				if ( (p.url && p.url.length) || (p.parent instanceof ChildFrame) )
				{
					break;
				}
				p = p.parent;
			}
			return p;
		},

		/**
		 * 주어진 component, object에 속성 값을 지정한다.
		 * @public
		 * @param {*} target nexacro Component, object
		 * @param {string} prop property name
		 * @param {*} value property value
		 * @param {*=} * (prop, value 반복)
		 * @example
		 *
		 * // obj = Button
		 * Eco.XComp.setProperties(obj, "text", "1234");
		 * // ==> Button.text = "1234";
		 * 
		 * Eco.XComp.setProperties(obj, "class", "", "enable", false);
		 * // ==> Button.class = "";
		 * // ==> Button.enable = false;		 
		 * 
		 * @memberOf Eco.XComp
		 */			 
		setProperties: function()
		{
			var XComp = Eco.XComp;
			var count = arguments.length;
			if ( count <=0 ) 
			{
				Eco.Logger.error({message:"argument doesn't exist!!", stack:true});
			}
			
			var target = arguments[0];
			if ( Eco.isUndefined(XComp.typeOf(target)) ) 
			{
				Eco.Logger.error({message:"target must be a nexacro Component(Object) !!", stack:true});
			}
			
			var prop;
			
			for(var i = 1 ; i < count ; i+=2 )
			{
				prop = arguments[i];
				value = arguments[i+1];
				if ( prop in target )
				{
					if ( target["set_"+prop] )
					{
						target['set_'+prop](value);
					}
				}
			}
		},
		
		/**
		 * 주어진 component, object 의 지정된 속성 목록을 얻어온다.
		 * @public
		 * @param {*} target nexacro Component, object
		 * @param {string} prop property name
		 * @param {*} value property value
		 * @param {*=} * (prop, value 반복)
		 * @return {array} 속성값 배열
		 * @example
		 *
		 * // obj = Button
		 * trace(Eco.XComp.getProperties(obj, "text", "visible"));
		 * // output : 실행,true
		 *
		 * // obj = Button
		 * trace(Eco.XComp.getProperties(obj, "test", "position", "style"));
		 * // output : ,absolute 519 634 575 656,[object StyleObject]
		 *
		 * @memberOf Eco.XComp
		 */			
		getProperties: function()
		{
			var XComp = Eco.XComp;
			var count = arguments.length;
			if ( count <=0 ) 
			{
				Eco.Logger.error({message:"argument doesn't exist!!", stack:true});
			}
			
			var target = arguments[0];
			if ( Eco.isUndefined(XComp.typeOf(target)) ) 
			{
				Eco.Logger.error({message:"target must be a nexacro Component(Object) !!", stack:true});
			}
			
			var results = [];
			var prop;
			
			for(var i = 1 ; i < count ; i++ )
			{
				results.push(target[arguments[i]]);
			}
			return results;
		},
		
		/**
		 * Carriage Return & Line Feed.
		 * @private
		 * @constant
		 * @memberOf Eco.XComp
		 */	
		_CRLF: String.fromCharCode(13, 10),
		
		/**
		 * indent character.
		 * @private
		 * @constant
		 * @memberOf Eco.XComp
		 */			
		_INDENT: "	",
		
		/**
		 * layout 반환.
		 * @private
		 * @param {Form|Div|Tabpage} container nexacro Form, Div, Tabpage Component
		 * @param {number} depth 들여쓰기 깊이
		 * @return {string} layout string
		 * @memberOf Eco.XComp
		 */			
		_getLayoutString: function(container, depth)
		{
			if ( Eco.isEmpty(depth) ) depth = 0;
			
			var pThis = Eco.XComp;
			var CRLF = pThis._CRLF;
			var INDENT = pThis._INDENT;
			
			var n = depth;
			var indent = "";
			while ( n > 0 )
			{
				indent += INDENT;
				n--;
			}
			
			var layout = "";
			var list = container.components;

			if ( list )
			{
				var comp, type;
				var typeOf = Eco.XComp.typeOf;
				for (var i=0,len=list.length; i<len; i++) 
				{
					comp = list[i];
					type = typeOf(comp);
					
					if ( type == "Div" || type == "Tabpage") 
					{
						layout += indent + "<"+type+" id=\"" + comp.name + "\"" + pThis._getPropString(comp);
						
						if ( Eco.isEmpty(comp.url) && comp.components.length > 0 ) 
						{
							layout += ">" + CRLF;
							layout += indent + INDENT + "<Layouts>" + CRLF;
							layout += indent + INDENT + INDENT + "<Layout>" + CRLF;
							layout += pThis._getLayoutString(comp, depth+3);
							layout += indent + INDENT + INDENT + "</Layout>" + CRLF;
							layout += indent + INDENT + "</Layouts>" + CRLF;
							layout += indent + "</"+type+">" + CRLF;	
						}
						else 
						{
							layout += "/>" + CRLF;
						}
					}
					else if ( type == "Tab" )
					{
						layout += indent + "<Tab id=\"" + comp.name + "\"" + pThis._getPropString(comp);
						
						if ( comp.components.length > 0 ) 
						{
							layout += ">" + CRLF;
							layout += indent + INDENT + "<Tabpages>" + CRLF;
							layout += pThis._getLayoutString(comp, depth+2);
							layout += indent + INDENT + "</Tabpages>" + CRLF;
							layout += indent + "</Tab>" + CRLF;
						} 
						else 
						{
							layout += "/>" + CRLF;
						}			
					}
					else
					{
						layout += indent + pThis._getCompTagString(comp, indent);
					}
				}
			}
			
			return layout;
		},
		
		/**
		 * Compnent Tag string 반환.
		 * @private
		 * @param {XComp} comp nexacro Component
		 * @param {string} indent 들여쓰기 문자
		 * @return {string} tag string
		 * @memberOf Eco.XComp
		 */				
		_getCompTagString: function(comp, indent) 
		{
			if ( !Eco.isXComponent(comp) ) return "";
			
			var pThis = Eco.XComp;
			var CRLF = pThis._CRLF;
			var INDENT = pThis._INDENT;
			var type = pThis.typeOf(comp);

			var layout = "<"+type+" id=\""+comp.name+"\"" + pThis._getPropString(comp);
			
			var needEndTag = false;
			
			// Format 처리
			if ( type == "Grid" || type == "Splitter" ) 
			{
				var formatid = comp.formatid || "default";
				var format = comp.getFormatString();

				var search = "<Format id=\""+formatid+"\">";
				var sIndex = format.indexOf(search);
				var eIndex = format.indexOf("</Format>", sIndex) + 9;

				var curFormat = "";
				curFormat += format.substring(0, sIndex);
				curFormat += comp.getCurFormatString();
				curFormat += format.substr(eIndex);
				
				// Splitter Bug
				curFormat = curFormat.replace(/SplitterItmes/g, "SplitterItems");
				
				//var formatXml = curFormat.split(CRLF);
				var formatXml = curFormat.split(String.fromCharCode(10));

				curFormat = "";
				for (var i=0,len=formatXml.length; i<len; i++)
				{
					curFormat += indent + INDENT + formatXml[i] + CRLF;
				}
				layout += ">" + CRLF;
				layout += curFormat;
				
				needEndTag = true;
			}
			else if ( type == "Panel" )
			{
				var items = comp.items;
				var len = items.length;
				if ( len > 0 )
				{
					layout += ">" + CRLF;
					layout += indent + INDENT + "<PanelItems id=\"items\">" + CRLF;
					var item, str;
					for (var i=0; i<len; i++)
					{
						item = items[i];
						str = "<PanelItem id=\""+item.name+"\"";
						for (var p in item)
						{
							if ( p != "name" && item.hasOwnProperty(p))
							{
								str += " " + p + "=\"" + item[p] + "\"";
							}
						}
						str += "/>";
						layout += indent + INDENT + INDENT + str + CRLF;
					}
					layout += indent + INDENT + "</PanelItems>" + CRLF;
					needEndTag = true;
				}
			}
			
			// innerdataset 처리
			var innerDs = comp.innerdataset;
			if ( pThis.typeOf(innerDs) == "Dataset" )
			{
				var ds = pThis.lookup(comp.parent, innerDs.name);
				if ( Eco.isEmpty(ds) ) 
				{
					var dsXml = innerDs.saveXML().split(CRLF);
					var dsStr = "";
					for (var i=0,len=dsXml.length; i<len; i++)
					{
						dsStr += indent + INDENT + dsXml[i] + CRLF;
					}
					layout += ">" + CRLF;			
					layout += dsStr;
					needEndTag = true;
				}
			}
			
			if ( needEndTag )
			{
				layout += indent + "</"+type+">" + CRLF;
			}
			else
			{
				layout += "/>" + CRLF;
			}
				
			return layout;
		},
		
		/**
		 * tag 처리시 별도로 처리하거나 포함시키지 않을 공통 속성.
		 * @private
		 * @memberOf Eco.XComp
		 */			
		_ignoreDefaultProps: [
			"name", "parent", "opener",
			"all", "components", "objects", "binds", "bindgestureset", 
			"hscrollbar", "vscrollbar", "resizebutton",
			"position", "position2", "positiontype",
			"stepcontrol", "canvas", "currentstyle", "style",
			"popupwindow", "innerdataset"
		],

		/**
		 * tag 처리시 별도로 처리하거나 포함시키지 않을 컴포넌트별 속성.
		 * @private
		 * @memberOf Eco.XComp
		 */	
		_ignoreCompProps: {
			'Form': ["taborder", "tabstop", "layout"],
			'Div': ["layout"],	
			'PopupDiv': ["layout"],
			'Combo': ["dropbutton", "comboedit", "combolist"],
			'Menu': ["popupmenu"],
			'Tab': ["tabpages"],
			'Tabpage': ["layout"],
			'Calendar': ["popupcalendar", "calendaredit", "spinupbutton", "spindownbutton"],
			'Grid': ["formats", "head", "body", "summ", "summary", 
					 "controltextarea", "controlmaskedit", "controlcombo",
					 "controlcalendar", "controlbutton", "controlcheckbox", 
					 "controlprogressbar", "controlexpand"],
			'Spin': ["spinupbutton", "spindownbutton", "spinedit"],
			'Splitter': ["formats", "items"],
			'Panel': ["items"]
		},

		/**
		 * 제외 속성 cache.
		 * @private
		 * @memberOf Eco.XComp
		 */	
		_cacheIgnoreProps: {},

		/**
		 * 컴포넌트 값 비교용 컴포넌트 cache.
		 * @private
		 * @memberOf Eco.XComp
		 */	
		_cacheCompareComp: {},
		
		/**
		 * property name=value 형식 list 반환.<br>
		 * ※ ActiveX 의 경우 연결된 개체 속성 접근시 문제가 발생하는 부분이<br>
		 * 있어서 ActiveX 컴포넌트 자체 속성만 지정함
		 * @private
		 * @param {XComp} targetComp nexacro Component
		 * @return {string} property list string
		 * @memberOf Eco.XComp
		 */
		_getPropString: function(targetComp)
		{
			var pThis = Eco.XComp;
			var type = pThis.typeOf(targetComp);
			var form = pThis._serializeFormTarget;
			var defaultComp = pThis._cacheCompareComp[type];
						
			if ( !defaultComp )
			{
				defaultComp = new form[type]("_serializeForm_"+type, 0, 0, 0, 0);
				pThis._cacheCompareComp[type] = defaultComp;
			}

			var ignoreProps = pThis._cacheIgnoreProps[type];
			if ( !ignoreProps )
			{
				var ignoreComp = pThis._ignoreCompProps[type] || [];
				ignoreProps = pThis._cacheIgnoreProps[type] = pThis._ignoreDefaultProps.concat(ignoreComp);
			}

			var tag = "";
			
			// style
			var style = "";
			var styles = Eco.XComp.Style.getStyle(targetComp);
			
			for (var p in styles)
			{
				if ( styles.hasOwnProperty(p) )
				{
					style += p + ":"+ styles[p] +";";
				}
			}
			
			if ( style.length > 0 )
			{
				tag += " style=\"" + style + "\"";
			}
			
			// positiontype
			var positiontype = "position";
			if ( targetComp.positiontype )
			{
				positiontype = targetComp.positiontype.toString();
				if ( positiontype != defaultComp.positiontype.toString() )
				{
					tag += " positiontype=\"" + positiontype + "\"";
				}
			}

			// position
			if ( targetComp[positiontype] )
			{
				var targetPosition = targetComp[positiontype].toString();
				var defaultPosition = defaultComp[positiontype].toString();
				if ( targetPosition != defaultPosition )
				{
					tag += " "+positiontype+"=\"" + targetPosition + "\"";
				}
			}
			
			// other
			var targetVal, defaultVal;
			var indexOf = Eco.array.indexOf;
			for (var p in targetComp)
			{
				if ( !targetComp.hasOwnProperty(p) ) continue;
				
				if (!(p in defaultComp) ) continue;				
				
				if ( indexOf(ignoreProps, p) > -1 ) continue;
				
				targetVal = targetComp[p];

				defaultVal = defaultComp[p];
						
				// undefined skip
				if ( targetVal === undefined ) continue;			
				
				// event skip
				if ( targetVal instanceof UserEvent ) continue;
				
				// function skip
				if ( Eco.isFunction(targetVal) ) continue;
				
				// components skip
				if ( targetComp.components && targetComp.components[p] ) continue;
				
				// objects skip
				if ( targetComp.objects && targetComp.objects[p] ) continue;

				if ( typeof targetVal == "object" )
				{			
					// 내부에 포함시 getCompTagString 에서 처리
					if ( p == "innerdataset" && targetVal ) 
					{
						var ds = pThis.lookup(targetComp.parent, targetVal.name);
						if ( !Eco.isEmpty(ds) ) 
						{
							tag += " innerdataset=\"@"+ds.name+"\"";
						}
						continue;
					}
					else if ( p == "bindgestureset" )
					{
						tag += " " + p + "=\"@"+targetVal.name+"\"";
						continue;
					}
					
					var v0 = targetVal ? targetVal.toString() : "";
					var v1 = defaultVal ? defaultVal.toString() : "";
					
					if ( v0 != v1 )
					{
						tag += " " + p + "=\""+v0.toString()+"\"";
					}
				}
				else 
				{
					if ( p == "taborder" || p == "class" )
					{
						if ( !Eco.isEmpty(targetVal) )
						{
							tag += " " + p + "=\""+targetVal+"\"";
						}
					}
					else if ( p == "text" || p == "value" )
					{
						if ( !Eco.isEmpty(targetVal) )
						{
							tag += " " + p + "=\""+Eco.string.escapeXML(targetVal)+"\"";
						}
					}
					else
					{
						if ( defaultVal != targetVal )
						{
							tag += " " + p + "=\""+targetVal+"\"";
						}
					}
				}
			}
			
			return tag;
		},
		
		/**
		 * 주어진 Form 을 직렬화하여 문자열로 반환.<br><br>
		 * ※ 현재 상태의 Layout 만 처리함.<br>
		 * ※ ActiveX 의 경우 연결된 개체의 속성은 포함하지 않는다.<br>
		 * @public
		 * @param {Form} form nexacro Form Component
		 * @return {string} layout string
		 * @example
		 *
		 * // this = Form
		 * trace(Eco.XComp.serializeForm(this));
		 * // output : 
		 * <Form id="XComp" position="absolute 0 0 1024 685" titletext="XComp">
		 *     <Layouts>
		 *         <Layout>
		 *             <Static id="Static06" position="absolute 20 79 246 158" .....
		 *              ....
		 *              ....
		 *              ....
		 *         </Layout>		 
		 *     </Layouts>
		 * </Form>
		 *
		 * @memberOf Eco.XComp
		 */				
		/*
		==> 사용성에 대한 고민 후 재작업
		serializeForm: function(form)
		{
			var pThis = Eco.XComp;
			pThis._serializeFormTarget = form;
			
			var CRLF = pThis._CRLF;
			var INDENT = pThis._INDENT;
			
			var layout = "";
			layout += "<Form id=\"" + form.name + "\"" + pThis._getPropString(form) + ">" + CRLF;
			layout += INDENT + "<Layouts>" + CRLF;
			layout += INDENT + INDENT + "<Layout>" + CRLF;
			layout += pThis._getLayoutString(form, 3);
			layout += INDENT + INDENT + "</Layout>" + CRLF;
			layout += INDENT + "</Layouts>" + CRLF;
			layout += "</Form>" + CRLF;	
			
			// flush cache 
			var cache = pThis._cacheCompareComp;
			var comp;
			for (var p in cache) 
			{
				if ( cache.hasOwnProperty(p) )
				{
					comp = form.components[cache[p].name];
					if ( comp ) 
					{
						form.removeChild(comp.name);
					}
					cache[p].destroy();
				}
			}
			
			return layout;
		},
		*/
		
		/**
		 * 사용자 정의 속성에 추가할 prefix 명
		 * @private
		 * @memberOf Eco.XComp
		 */		
		_userPropertyPrefix: Eco.getUniqueId(),
		
		/**
		 * 주어진 nexacro Component, object 에 사용자 속성을 추가한다.<br>
		 * 대상이 원래 가지고 있는 이름을 지정해도 상관없이 동작한다.<br>
		 * ※ 사용자 정의 속성을 대상에 바로 사용하면 내부 속성을<br> 
		 * 덮어쓸 수 있으므로 본 메소드를 통해서 사용하도록 한다.		 
		 * @public
		 * @param {*} target nexacro Component, object
		 * @param {string} name 사용자 정의 속성 명
		 * @param {*=} value 속성 값
		 * @example
		 *
		 * // Button00 (text : Button00)
		 * Eco.XComp.setUserProperty(Button00, "text", "user property");
		 * Eco.XComp.setUserProperty(Button00, "myProp", [0,1,2]);
		 * 
		 * @memberOf Eco.XComp
		 */
		 setUserProperty: function(target, name, value)
		 {
		     var propName = Eco.XComp._userPropertyPrefix;
		     propName += "_" + name;
		     
		     target[propName] = value;
		 },
		 
		/**
		 * 주어진 nexacro Component, object 에서 사용자 정의 속성값을 얻어온다.<br>
		 * ※ setUserProperty 메소드에 의해 지정된 사용자 정의 속성값을 얻어온다.
		 * @public
		 * @param {*} target nexacro Component, object
		 * @param {string} name 사용자 정의 속성 명
		 * @return {*} 주어진 target에 name으로 지정된 사용자 정의 속성값
		 * @example
		 *
		 * // Button00 (text : Button00)
		 * Eco.XComp.setUserProperty(Button00, "text", "user property");
		 * trace(Button00.text + " : " + Eco.XComp.getUserProperty(Button00, "text"));
		 *
		 * // output : 
		 * Button00 : user property
		 *
		 * @memberOf Eco.XComp
		 */
		 getUserProperty: function(target, name)
		 {
		     var propName = Eco.XComp._userPropertyPrefix;
		     propName += "_" + name;
		     
			 return target[propName];
		 },
		 
		/**
		 * 주어진 nexacro Component, object 에서 지정된 사용자 정의 속성을 제거한다.<br>
		 * ※ setUserProperty 메소드에 의해 지정된 사용자 정의 속성을 대상으로 한다.
		 * @public
		 * @param {*} target nexacro Component, object
		 * @param {string} name 제거할 사용자 정의 속성 명
		 * @example
		 *
		 * // Button00 (text : Button00)
		 * Eco.XComp.setUserProperty(Button00, "text", "user property");
		 * trace(Button00.text + " : " + Eco.XComp.getUserProperty(Button00, "text"));
		 * 
		 * Eco.XComp.deleteUserProperty(Button00, "text");
		 * trace(Button00.text + " : " + Eco.XComp.getUserProperty(Button00, "text"));		 
		 *
		 * // output : 
		 * Button00 : user property
		 * Button00 : undefined
		 *
		 * @memberOf Eco.XComp
		 */
		 deleteUserProperty: function(target, name)
		 {
		     var propName = Eco.XComp._userPropertyPrefix;
		     propName += "_" + name;
		     
			 delete target[propName];
		 }

	});
}

/**
 * @fileoverview nexacro Component의 Position과 Size와 관련된 함수.
 */
 
if ( !JsNamespace.exist("Eco.XComp.PositionSize") )
{
	/**
	 * @namespace
	 * @name Eco.XComp.PositionSize
	 * @memberof! <global>
	 */
	JsNamespace.declare("Eco.XComp.PositionSize", {
		 /**
		 * TopLevel Form 상에 현재 보이는 위치 기준으로 component 좌표 및 size를 반환.
		 * @param {XComp} XComp nexacro Component
		 * @return {array.<number>} [ leftPosition, topPosition, wdith, height ]
		 * @example
		 * trace(Eco.XComp.PositionSize.getTopLevelFormBox(Div00.Button00)); //output: [829,135,63,43]
		 * trace(Eco.XComp.PositionSize.getTopLevelFormBox(Div01.Div02.Button01)); //output: [841,346,63,43]
		 * trace(Eco.XComp.PositionSize.getTopLevelFormBox(Tab00.tabpage1.Button02)); //output: [813,521,63,43]	
		 *
		 * @memberOf Eco.XComp.PositionSize
		 */
		getTopLevelFormBox: function(XComp)	
		{
			var topForm = Eco.XComp.getTopLevelForm(XComp);
			var xy = Eco.XComp.PositionSize.convertXY(topForm, [0, 0], XComp);
			
			return [xy[0], xy[1], XComp.getOffsetWidth(), XComp.getOffsetHeight()];
		},


		 /**
		 * XCompB기준의 XY좌표를 XCompA기준의 XY좌표로 변환.
		 * @param {XComp} XCompA nexacro Component
		 * @param {array.<number>} xy XCompB기준의 XY좌표.
		 * @param {XComp} XCompB nexacro Component
		 * @return {array.<number>} XCompA기준의 좌표. [ x좌표, y좌표]
		 * @example
		 * 
		 * Form에 아래와 같이 Button00이 존재 할 경우
		 *
		 * |---------------------------------------------------------|  ^
		 * |  Form                                                   |  |
		 * |                                                         |  |
		 * |                                                         | 300
		 * |                                                         |  |
		 * |                                     //(0,0)             |  v
		 * |                                       *-----------      | 
		 * |                                       | Button00 |      | 
		 * |                                       ------------      | 
		 * |                                                         | 
		 * |---------------------------------------------------------| 
		 * <--------------- 900 ------------------>	
		 *		 
		 * trace(Eco.XComp.PositionSize.convertXY(this,[0,0], Button00)); //output: [900,300]
		 * //Button00을 기준으로 한 0,0 좌표는
		 * //form 기준으로 했을 때 900, 300이 된다.
		 * @memberOf Eco.XComp.PositionSize
		 */
		convertXY: function(XCompA, xy, XCompB)
		{
			var tempX, tempY;
			var x, y;
			if ( XCompB )
			{
				tempX = system.clientToScreenX(XCompB, xy[0]);
				tempY = system.clientToScreenY(XCompB, xy[1]);
				
				var pThis = Eco.XComp.PositionSize;
				
				x = system.screenToClientX(XCompA, tempX) + pThis.getScrollLeft(XCompA);
				y = system.screenToClientY(XCompA, tempY) + pThis.getScrollTop(XCompA);				
			}
			else
			{
				x = xy[0];
				y = xy[1];
			}
			
			return [x, y];
		},


		 /**
		 * 수직스크롤바의 trackbar위치를 반환한다.
		 * @param {XComp} XComp nexacro Component
		 * @return {number} 수직스크롤바의 trackbar위치(수직스크롤바가 없을때는 0).
		 * @example
		 * trace(Eco.XComp.PositionSize.getScrollTop(Div01)); //output: 20
		 * trace(Eco.XComp.PositionSize.getScrollTop(Div01)); //output: 0
		 *
		 * @memberOf Eco.XComp.PositionSize
		 */
		getScrollTop: function(XComp)
		{
			return (XComp.vscrollbar && XComp.vscrollbar.visible ? XComp.vscrollbar.pos : 0);
		},

		 /**
		 * 수평스크롤바의 trackbar위치를 반환한다.
		 * @param {XComp} XComp nexacro Component
		 * @return {number} 수평스크롤바의 trackbar위치(수평스크롤바가 없을때는 0).
		 * @example
		 * trace(Eco.XComp.PositionSize.getScrollLeft(Div01)); //output: 10
		 * trace(Eco.XComp.PositionSize.getScrollLeft(Div01)); //output: 0
		 *
		 * @memberOf Eco.XComp.PositionSize
		 */
		getScrollLeft: function(XComp)
		{
			return (XComp.hscrollbar && XComp.hscrollbar.visible ? XComp.hscrollbar.pos : 0);
		},
		
		 /**
		 * 스크롤바 height(수평스크롤바) 또는 width(수직스크롤바)의 size를 반환한다.
		 * @param {XComp} XComp nexacro Component
		 * @param {string} type 스크롤바 종류(수평스크롤바:"horz", 수직스크롤바:"vert")
		 * @return {number} 스크롤바 height(수평스크롤바) 또는 width(수직스크롤바)의 size를 반환한다.<br>
		 *                  스크롤바를 지원하지 않는 컴포넌트 일때는 0.
		 * @example
		 * trace(Eco.XComp.PositionSize.getScrollBarSize(Div03, "vert")); //output:  11
		 *
		 * @memberOf Eco.XComp.PositionSize
		 */
		getScrollBarSize: function(XComp, type)
		{
			var scrollBar = (type == "horz") ? XComp.hscrollbar : XComp.vscrollbar;
			var size = 0;
			if(scrollBar)
			{
				//theme에 scrollbarsize가 지정되지 않은경우 null을 반환함.
				size = scrollBar.currentstyle.scrollbarsize; 
				
				return (size===null ? (type == "horz" ? scrollBar.getOffsetHeight() : scrollBar.getOffsetWidth()): size);
			}
			else 
			{
				return size;
			}
		},		
		
		 /**
		 * 스크롤바가 표시됐을 때에만 size를 반환한다.
		 * @param {XComp} XComp nexacro Component
		 * @param {string} type 스크롤바 종류(수평스크롤바:"horz", 수직스크롤바:"vert")
		 * @return {number} 스크롤바 size(스크롤바가 없거나 표시되지 않을 때는 0).
		 * @example
		 * trace(Eco.XComp.PositionSize.getCurrentScrollBarSize(Div03, "vert")); //output: 0
		 *
		 * @memberOf Eco.XComp.PositionSize
		 */
		getCurrentScrollBarSize: function(XComp, type)
		{
			var scrollBar = (type == "horz") ? XComp.hscrollbar : XComp.vscrollbar;
			
			return (scrollBar && scrollBar.visible ? (type == "horz" ? scrollBar.getOffsetHeight() : scrollBar.getOffsetWidth()) : 0);
		},
		
		/**
		 * XComp의 boder, scrollbar width 크기를 제외한 client 영역 width 를 반환한다.
		 * @param {XComp} XComp nexacro Component
		 * @param {number=} wholeWidth 컴포넌트의 전체폭(boder,scrollbar width 포함)
		 * @return {number} client 영역 width
		 * @example
		 *
		 * ex) Div01
		 * |----------------------------------------------------|
		 * |                    border                          |
		 * |    |-------------------------------------------|   |
		 * |    |               margin                      |   |
		 * |    |     |---------------------------------|   |   |
		 * |  b |  m  |<-------- client width --------->|   |   |
		 * |  o |  a  |                                 |   |   |
		 * |  r |  r  |                                 |   |   |
		 * |  d |  g  |                                 |   |   |
		 * |  e |  i  |                                 |   |   |
		 * |  r |  n  |                                 |   |   |
		 * |    |     |---------------------------------|   |   |
		 * |    |                                           |   |
		 * |    |-------------------------------------------|   |
		 * |                                                    |
		 * |----------------------------------------------------|
		 * <-10-><-10->
		 * <------------------------ 100 ----------------------->
		 *
		 * var clientwidth = Eco.XComp.PositionSize.getClientWidth(Div01);
		 * trace(clientwidth);	// output : 60
		 * @memberOf Eco.XComp.PositionSize
		 */
		getClientWidth: function(XComp, wholeWidth)
		{
			var clientwidth = 0,
				borderWidths = 0,
				marginWidths = 0,
				scrollbarSize = 0;
			if ( wholeWidth )
			{
				clientwidth = wholeWidth;
			}
			else
			{
				clientwidth =  XComp.getOffsetWidth();
			}
			borderWidths = Eco.XComp.Style.getBorderWidth(XComp);
			marginWidths = Eco.XComp.Style.getMargin(XComp);
			clientwidth -= borderWidths[0] + borderWidths[2];
			clientwidth -= marginWidths[0] + marginWidths[2];
			scrollbarSize = Eco.XComp.PositionSize.getCurrentScrollBarSize(XComp, "horz");
			clientwidth -= scrollbarSize;
			
			return clientwidth;
		},
		
		/**
		 * XComp의 boder,scrollbar height 크기를 제외한 client 영역 height 를 반환한다.
		 * @param {XComp} XComp nexacro Component
		 * @param {number=} wholeHeight 컴포넌트의 전체높이(boder,scrollbar height 포함)
		 * @return {number} client 영역 height
		 * @example
		 *
		 * ex) Div01
		 * |------------------------------------------------|   ^ 	
		 * |                    border                      |   |  border: 10
		 * |   |----------------------------------------|   |   |
		 * |   |                margin                  |   |   |  margin: 10
		 * |   |   |--------------------------------|   |   |   |
		 * | b | m |                              ^ |   |   |   |
		 * | o | a |                              | |   |   |   |
		 * | r | r |                client height | |   |   |  100
		 * | d | g |                              | |   |   |   |
		 * | e | i |                              | |   |   |   |
		 * | r | n |                              v |   |   |   |
		 * |   |   |--------------------------------|   |   |   |
		 * |   |                                        |   |   |
		 * |   |----------------------------------------|   |   |
		 * |                                                |   |
		 * |------------------------------------------------|   v
		 *
		 * var clientheight = Eco.XComp.PositionSize.getClientHeight(Div01);
		 * trace(clientheight);	// output : 60
		 * @memberOf Eco.XComp.PositionSize
		 */
		getClientHeight: function(XComp, wholeHeight)
		{
			var clientheight = 0,
				borderWidths = 0,
				marginWidths = 0,
				scrollbarSize = 0;
			
			if ( wholeHeight )
			{
				clientheight =  wholeHeight;
			}
			else
			{
				clientheight =  XComp.getOffsetHeight();
			}
			
			borderWidths = Eco.XComp.Style.getBorderWidth(XComp);
			marginWidths = Eco.XComp.Style.getMargin(XComp);
			clientheight -= borderWidths[1] + borderWidths[3];
			clientheight -= marginWidths[1] + marginWidths[3];
			scrollbarSize = Eco.XComp.PositionSize.getCurrentScrollBarSize(XComp);
			clientheight -= scrollbarSize;
			
			return clientheight;
		},
		
		/**
		 * XComp의 boder,margin,scrollbar width 크기를 제외한 client 영역 width 를 반환한다.
		 * scroll이 생기는 경우에는 scroll 가능한 전체 영역을 포함한 width 를 반환한다.
		 * @param {XComp} XComp nexacro Component
		 * @return {number} client 영역 width
		 * @example
		 *
		 * ex) Div00 (width:100)
		 * |----------------------------------------------------|
		 * |                            |                       |
		 * |                            |                       |
		 * |                            |                       |
		 * |                            |                       |
		 * |----------------------------|                       |
		 * |<---------- 100 ------------>                       |
		 * |                                                    |
		 * |                                                    |
		 * |                         <---- scroll 가능 영역 ---->|
		 * |                                                    |
		 * |----------------------------------------------------|
		 * 
		 * <------------------------ 200 ----------------------->
		 *
		 * var scrollwidth = Eco.XComp.PositionSize.getScrollWidth(Div00);
		 * trace(scrollwidth);	// output : 200
		 * @memberOf Eco.XComp.PositionSize
		 */
		getScrollWidth: function(XComp)
		{
			var scrollwidth = 0;
			
			scrollwidth = (XComp.hscrollbar && XComp.hscrollbar.visible ? XComp.hscrollbar.max : 0);
			scrollwidth += Eco.XComp.PositionSize.getClientWidth(XComp);
			
			return scrollwidth;
		},
 
		/**
		 * XComp의 boder,scrollbar height 크기를 제외한 client 영역 height 를 반환한다.
		 * scroll이 생기는 경우에는 scroll 가능한 전체 영역을 포함한 height 를 반환한다.
		 * @param {XComp} XComp nexacro Component
		 * @return {number} client 영역 height
		 * @example
		 *
		 * ex) Div00 (height:100)
		 * |----------------------------------------------------| ^
		 * |                            | ^                     | |
		 * |                            | |                     | |
		 * |                            |100                    | |
		 * |                            | |                     | |
		 * |----------------------------| v                     |200
		 * |                                            ^       | |
		 * |                                            |       | |
		 * |                                    scroll 가능 영역 | |
		 * |                                            |       | |
		 * |                                            v       | |
		 * |----------------------------------------------------| v
		 *
		 * var scrollheight = Eco.XComp.PositionSize.getScrollHeight(Div00);
		 * trace(scrollheight);	// output : 200
		 * @memberOf Eco.XComp.PositionSize
		 */
		getScrollHeight: function(XComp)
		{
			var scrollheight = 0;
			
			scrollheight = (XComp.vscrollbar && XComp.vscrollbar.visible ? XComp.vscrollbar.max : 0);
			scrollheight += Eco.XComp.PositionSize.getClientHeight(XComp);
			
			return scrollheight;
		},
		
		/**
		 * font cache
		 * @private
		 * @memberOf Eco.XComp.PositionSize
		 */		
		_fontCache: {},
		
		 /**
		 * 컴포넌트에 지정된 text 의 너비,높이를 반환.<br><br>
		 * 2번째 인자에 문자열 값을 지정하면 컴포넌트의 text 속성에 지정된 문자열을 대체하여<br>
		 * 계산된 결과를 반환한다. (text 속성값이 변경되지는 않는다.)
		 * @param {XComp|Font} XComp nexacro Component 또는 Font 개체
		 * @param {string=} text text 속성을 대체할 text (default : text 속성)
		 * @param {boolean=} multiline 여부.
		 * @param {number=} content_width word wrap이 일어나는 문자열의 경우 길이를 제한하는 정수 값입니다.
		 * @param {boolean=} fitText 컴포넌트에 적용된 크기가 아닌 텍스트 자체의 크기만 반환할지 여부 (default:false, HTML 전용)
		 * @return {array} [너비, 높이]
		 * @example
		 *
		 * // btn_sample1.style.font ==> Dotum,9
		 * trace(Eco.XComp.PositionSize.getTextSize(btn_sample1)); // output : [69,12]
		 *
		 * // btn_sample2.style.font ==> Dotum,9,bold
		 * trace(Eco.XComp.PositionSize.getTextSize(btn_sample2)); // output : [80,12]
		 *
		 * // btn_sample3.style.font ==> Verdana,10
		 * trace(Eco.XComp.PositionSize.getTextSize(btn_sample3)); // output : [83,16]
		 *
		 * @memberOf Eco.XComp.PositionSize
		 */	
		getTextSize: function(XComp, text, multiline, content_width, fitText)
		{
			var font;
			if ( XComp instanceof nexacro.Style_font )
			{
				font = XComp;
				multiline = Eco.isEmpty(multiline) ? false : multiline;
				if ( multiline && content_width == null )
				{
					content_width = 50;
				}
			}
			else
			{
				font = XComp.currentstyle.font;
				
				if ( Eco.isEmpty(font) )
				{
					font = nexacro.Component._default_font;
				}				
				
				text = Eco.isEmpty(text) ? XComp.text : text;
				if ( Eco.isEmpty(multiline) )
				{
					if ( XComp["wordwrap"] != null )
					{
						multiline = XComp["wordwrap"] != "none"? true: false;
					}
				}
				if ( multiline && content_width == null )
				{
					content_width = XComp.getOffsetWidth();
				}
			}
			
			var size = [0, 0];
			if ( Eco.isEmpty(text) ) return size;  

			if ( nexacro.Browser != "Runtime" )
			{
				var _handle = Eco._textSizeDiv;
				if ( !_handle )
				{
					var _doc = nexacro._managerFrameDoc;
					_handle = _doc.createElement("div");
					_doc.body.appendChild(_handle);
					Eco._textSizeDiv = _handle; 
				}
				var _style = _handle.style;
				
				_style.position = "absolute";
				_style.visibility = "hidden";	
				
				if ( multiline )
				{			
					_style.width = content_width + "px";
					_style.height = "auto";
					_style.whiteSpace = "pre-wrap";
					_style.wordBreak = "break-all";
					_style.wordWrap = "break-word";						
				}
				else
				{
					_style.width = "auto";
					_style.height = "auto";
					_style.whiteSpace = "pre";					
					_style.wordWrap = "normal";
				}
				
				_style.font = font._sysvalue;
				
				// 컴포넌트에 적용된 크기가 아닌 텍스트 자체의 크기만 구할 경우 
				if ( fitText == true)
				{
					_style.lineHeight = "100%";
				}
				
				if ( nexacro.Browser == "IE" && nexacro.BrowserVersion < 9 )
				{
					_handle.innerText = text;
					var rect = _handle.getBoundingClientRect();
					size = [rect.right - rect.left, rect.bottom - rect.top];
				}
				else
				{
					_handle.innerHTML = text;
					var rect = _handle.getBoundingClientRect();
					size = [rect.width, rect.height];
				}
				
				//_doc.body.appendChild(_handle);
				//size = [_handle.clientWidth, _handle.clientHeight];
				//delete handle
				//_doc.body.removeChild(_handle);
			}
			else
			{
				size = nexacro._getTextSize2(text, font, multiline, content_width);
			}
			
			size[0] = Math.ceil(size[0]);
			size[1] = Math.ceil(size[1]);
			
			return size;
		},
		
		 /**
		 * 주어진 url 에 해당하는 이미지의 너비,높이 반환.<br>
		 * 해당 이미지지 너비, 높이는 callback 함수를 통해 반환되며<br>
		 * callback 함수의 인자는 url, width, height 임.
		 * @param {string} url 이미지경로(절대경로, 상대경로, url경로, prefix경로)
		 * @param {function} callback 구해진 이미지 사이즈를 반환할 함수로 (url, width, height) 인자를 보냄
		 * @param {*} scope callback 내부에서 this 로 사용할 대상
		 * @example
		 *
		 * this.imageLoadCallback = function(url, width, height)
		 * {
		 * 	trace(url + " : " + width + " : " + height);
		 * }
		 *
		 * var url = "http://www.tobesoft.com/tobesoft_eng/images/product_imgs/visual_xplatform_img001.jpg";
		 * Eco.XComp.PositionSize.getImageSize(url, this.imageLoadCallback, this);
		 * // output : "http://www.tobesoft.com/tobesoft_eng/images/product_imgs/visual_xplatform_img001.jpg" : 310 : 214
		 *
		 * var url = "Image::ColorDialog.JPG";
		 * Eco.XComp.PositionSize.getImageSize(url, this.imageLoadCallback, this);
		 * // output : "Image::ColorDialog.JPG" : 206 : 172
		 *
		 * var url = "./Images/select.GIF";
		 * Eco.XComp.PositionSize.getImageSize(url, this.imageLoadCallback, this);
		 * // output : "./Images/select.GIF" : 19 : 19
		 *
		 * @memberOf Eco.XComp.PositionSize
		 */			
		getImageSize: function(url, callback, scope)
		{
			/*
				아래는 nexacro._getImageSize 함수 내부에서 처리하는 내용이나
				cache 될 경우 callback 반환이 없고 callback에서 반환하는 
				url 은 실제 full 경로이므로 해당 로직을 먼저 처리하여
				반환되는 url을 맞춘다. 반환되는 url 은 실제 full 경로가
				아닌 입력된 url 을 반환한다.
			*/
			if (!url) return null;
			if (url.substring(0, 4).toLowerCase() == "url(")
			{
				url = url.substring(5, url.length - 2);                
			}

			if (!url)
				return null;
			
			var refUrl;
			if ( scope && scope._getRefFormBaseUrl )
			{
				refUrl = scope._getRefFormBaseUrl();
			}
			else
			{
				refUrl = application.getActiveForm();
			}

			var img_url = "";
			
			if( application["_getImageLocation"] )
			{
				img_url = application._getImageLocation(url, refUrl);
			}
			else
			{
				img_url = nexacro._getImageLocation(url, refUrl);
			}
			
			var size = nexacro._ImgInfoCacheList[img_url];
			
			if (size)
			{
				callback.call(scope, url, size.width, size.height);
			}			
			else
			{
				var pThis = Eco.XComp.PositionSize;
				pThis._getImageSizeCallbackInfo[img_url] = [url, callback, scope];

				size = nexacro._getImageSize(img_url, pThis._getImageSizeOnLoad, pThis);
				if (size)
				{
					callback.call(scope, url, size.width, size.height);
				}
			}
		},
		
		/**
		 * temporary callback infomation
		 * @private
		 * @memberOf Eco.XComp.PositionSize
		 */		
		_getImageSizeCallbackInfo: {},
		
		/**
		 * callback
		 * @private
		 * @memberOf Eco.XComp.PositionSize
		 */		
		_getImageSizeOnLoad: function(url, width, height)
		{
			var pThis = Eco.XComp.PositionSize;
			var info = pThis._getImageSizeCallbackInfo[url];
			
			info[1].call(info[2], info[0], width, height);
			
			delete pThis._getImageSizeCallbackInfo[url];
		},
		
		 /**
		 * 컴포넌트가 가지는 모양을 표시하기 위한 최소 크기(너비,높이) 반환.<br><br>
		 * ※ 크기에 영향을 미치는 요소는 다음과 같다.<br>
		 *    - border<br>
		 *    - padding<br>
		 *    - text<br><br>
		 * ※ text 가 없는 경우 기본글자 크기 적용.<br>
		 * ※ scroll 을 가지는 컴포넌트는 현재 자신의 사이즈를 반환.
		 * @param {XComp} XComp nexacro Component
		 * @param {=number} width Maximum width of the string in pixels. if wordwrap property is true(not "none").
		 * @return {array} [너비, 높이]
		 * @example
		 *
		 * // btn_sample4 ==> width : 36, height : 28, text : "btn_sample4"
		 * trace(Eco.XComp.PositionSize.getContentSize(btn_sample4)); // output : [73,16]
		 *
		 * // chk_sample1 ==> width : 38, height : 20, text : "CheckBox", border : 1px solid red
		 * trace(Eco.XComp.PositionSize.getContentSize(chk_sample1)); // output : [80,14]
		 *
		 * // cmb_sample1 ==> width : 150, height : 20, text : ""
		 * trace(Eco.XComp.PositionSize.getContentSize(cmb_sample1)); // output : [38,12]
		 *
		 * // cal_sample1 ==> width : 120, height : 29, value : "20130505"
		 * trace(Eco.XComp.PositionSize.getContentSize(cal_sample1)); // output : [108,16]
		 *
		 * // txt_sample1 ==> width : 114, height : 44
		 * trace(Eco.XComp.PositionSize.getContentSize(txt_sample1)); // output : [114,44]
		 *
		 * @memberOf Eco.XComp.PositionSize
		 */
		getContentSize: function(XComp, width)
		{
			var size = [0,0];
			if ( Eco.isXComponent(XComp) )
			{		
				var w = 0, h = 0;		
				
				// scroll을 가지는 컴포넌트는 현재 자신의 size 를 리턴
				if ( !Eco.isEmpty(XComp.hscrollbar) && !Eco.isEmpty(XComp.vscrollbar) )
				{
					if ( Eco.XComp.typeOf(XComp) == "Tabpage" ) 
					{
						w = XComp.getOffsetWidth();
						h = XComp.getOffsetHeight();
					}
					else 
					{
						w = XComp.getOffsetWidth();
						h = XComp.getOffsetHeight();
					}
					size = [w, h];
				}
				else
				{
					// (margin + border + padding) width, height
					var sz = this._getStyleSpaceSize(XComp), borderHeight = sz[1];
					
					w += sz[0];
					h += sz[1];

					var text = XComp.text;					
					if ( Eco.isEmpty(text) )
					{
						sz = Eco.XComp.PositionSize.getTextSize(XComp, "W", false);
					}
					else
					{
						if ( Eco.isNumber(width) )
						{
							sz = Eco.XComp.PositionSize.getTextSize(XComp, text, true, width);
						}
						else
						{
							sz = Eco.XComp.PositionSize.getTextSize(XComp, text, false);
						}
					}
										
					w += sz[0];
					h += sz[1];

					// component control size 추가 
					var type = Eco.XComp.typeOf(XComp),
						curstyle = XComp.currentstyle;
					
					if ( type == "Calendar" )
					{
						if ( XComp.type == "monthonly" )
						{
							// monthonly 의 경우 현재 사이즈 반환
							return [XComp.getOffsetWidth(), XComp.getOffsetHeight()];
						}
						else
						{
							// calendaredit
							sz = Eco.XComp.PositionSize._getStyleSpaceSize(XComp.calendaredit);
							w += sz[0];
							h += sz[1];
						}
					}
					else if ( type == "Combo" )
					{
						sz = Eco.XComp.PositionSize._getStyleSpaceSize(XComp.comboedit);
						
						w += sz[0];
						h += sz[1];
					}
					else if ( type == "Radio" )
					{
						var itempadding = curstyle.itempadding;
						w += isNaN(itempadding.left) ? 0 : itempadding.left;						
						w += isNaN(itempadding.right) ? 0 : itempadding.right;						
						h += isNaN(itempadding.top) ? 0 : itempadding.top;						
						h += isNaN(itempadding.bottom) ? 0 : itempadding.bottom;
					}
					
					if ( type == "CheckBox" || type == "Radio" )
					{
						//w += 3;
					}

					// button size
					var buttonsize;
					if ( curstyle.buttonsize )
					{
						buttonsize = nexacro.toNumber(curstyle.buttonsize.value);
					}
					if ( !isNaN(buttonsize) )
					{
						// 미지정시 -1
						if ( buttonsize < 0 )
						{
							w += h;
						}
						else
						{
							w += buttonsize;
						}
					}
					
					// textpadding size
					var textpadding = curstyle.textpadding;
					if ( textpadding )
					{
						w += isNaN(textpadding.left) ? 0 : textpadding.left;						
						w += isNaN(textpadding.right) ? 0 : textpadding.right;						
						h += isNaN(textpadding.top) ? 0 : textpadding.top;						
						h += isNaN(textpadding.bottom) ? 0 : textpadding.bottom;		
					}
					if ( !isNaN(buttonsize) )
					{
						
						h = Math.max(h, buttonsize + borderHeight);
					}
					size[0] = w;
					size[1] = h;
				}
			}
			return size;
		},
		
		/**
		 * border, padding 을 더한 size (너비,높이) 반환 
		 * @private
		 * @param {XComp} XComp nexacro Component
		 * @return {array} [너비, 높이]
		 * @memberOf Eco.XComp.PositionSize
		 */	
		 _getStyleSpaceSize: function(XComp)
		 {
			var Style = Eco.XComp.Style;
			var w = 0, h = 0;
			
			// margin
			var margin = Style.getMargin(XComp);
			w += margin[0] + margin[2];
			h += margin[1] + margin[3];
			
			// border
			var border = Style.getBorderWidth(XComp);
			w += border[0] + border[2];
			h += border[1] + border[3];
			
			// padding
			var padding = Style.getPadding(XComp);
			w += padding[0] + padding[2];
			h += padding[1] + padding[3];
			
			return [w, h];
		 },
		 
		 /**
		 * application 영역을 표시가능 대상으로 하면서 "특정 Component" 기준으로,<br>
		 * 지정된 size를 갖는 컴포넌트를 표시하기위한 방향 및 좌표를 반환한다.<br><br>
		 *  ※direction이 vert(vertical) 일때 표시방법: <br>
		 *    1.하단 왼쪽맞춤(default).<br>
		 *    2.왼쪽맞춤으로 공간부족시, 표시를 위해 팝업을 왼쪽으로 이동시킨다.<br>
		 *    3.하단에 공간이 부족하면 상단에 표시.<br>
		 *    4.2번과정 반복<br>
		 *    5.1~4번으로도 공간확보가 안되면 direction을 무시하고 표시가능한 영역을 찾는다.<br>
		 *    6.영역을 초과하는 공간을 요청하면,표시가능한 x,y좌표 및 size를 반환한다.<br><br>
		 *  ※direction이 horz(horizontal) 일때 표시방법: <br>
		 *    1.우측 상단맞춤(default).<br>
		 *    2.상단맞춤으로 공간부족시, 표시를 위해 팝업을 위쪽으로 이동시킨다.<br>
		 *    3.우측에 공간이 부족하면 좌측에 표시.<br>
		 *    4.2번과정 반복<br>
		 *    5.1~4번으로도 공간확보가 안되면 direction을 무시하고 표시가능한 영역을 찾는다.<br>
		 *    6.영역을 초과하는 공간을 요청하면,표시가능한 x,y좌표 및 size를 반환한다.
		 * @param {XComp} XComp 기준이 되는 nexacro Component 
		 * @param {number} width 표시할 팝업 width
		 * @param {number} height 표시할 팝업 height
		 * @param {string=} direction 팝업표시 방향."vert": vertical(default),"horz": horizontal
		 * @param {number=} offset 표시될때 XComp와의 간격(default: 0).
		 * @return {array.<string...number>} [XComp 기준 팝업위치("left", "top", "right", "bottom"), x, y [ ,width, height] ]
		 *   <pre>※주어진 width와 height, offset으로 
		 *    1.표시가능한 공간이 있을 경우: 
		 *       [팝업위치("left", "top", "right", "bottom"), x좌표, y좌표]
		 *    2.영역을 초과하는 공간을 요청했을 때는 표시가능한 정보 반환: 
		 *       [팝업위치("left", "top", "right", "bottom"), x좌표, y좌표, 가능한 width, 가능한 height]
		 *   </pre>
		 
		 * @example
		 *   var position = Eco.XComp.PositionSize.getPopupPosition(Button00, 44, 23, "vert", 2); //return: [bottom, 1394, 317]
		 *   PopupDiv00.trackPopup(position[1], position[2]);
		 *
		 *   //해상도(1920*1080)를 초과한 높이 2000의 위치를 요구했을경우.
		 *   var position = Eco.XComp.PositionSize.getPopupPosition(Button00, 300, 2000, "vert", 2); //return: [right,854,0,300,1080]
		 *   PopupDiv00.trackPopup(position[1], position[2]);
		 * @memberOf Eco.XComp.PositionSize
		 */			
		getPopupPosition: function(XComp, width, height, direction, offset)
		{
			return this.getPositionByForm(XComp, width, height, direction, offset);
		},		
		
		
		 /**
		 * 지정된 객체가 form에서(form, div, tabpage) 차지하는 영역을 대상으로 하면서 "특정 Component" 기준으로,<br>
		 * 지정된 size를 갖는 컴포넌트를 표시하기위한 방향 및 좌표를 반환한다.<br>
		 * ※ 지정된 영역 미설정시 application 영역을 기준으로 계산한다.<br><br>
		 *  ※direction이 vert(vertical) 일때 표시방법: <br>
		 *    1.하단 왼쪽맞춤(default).<br>
		 *    2.왼쪽맞춤으로 공간부족시, 표시를 위해 팝업을 왼쪽으로 이동시킨다.<br>
		 *    3.하단에 공간이 부족하면 상단에 표시.<br>
		 *    4.2번과정 반복<br>
		 *    5.1~4번으로도 공간확보가 안되면 direction을 무시하고 표시가능한 영역을 찾는다.<br>
		 *    6.영역을 초과하는 공간을 요청하면,표시가능한 x,y좌표 및 size를 반환한다.<br><br>
		 *  ※direction이 horz(horizontal) 일때 표시방법: <br>
		 *    1.우측 상단맞춤(default).<br>
		 *    2.상단맞춤으로 공간부족시, 표시를 위해 팝업을 위쪽으로 이동시킨다.<br>
		 *    3.우측에 공간이 부족하면 좌측에 표시.<br>
		 *    4.2번과정 반복<br>
		 *    5.1~4번으로도 공간확보가 안되면 direction을 무시하고 표시가능한 영역을 찾는다.<br>
		 *    6.영역을 초과하는 공간을 요청하면,표시가능한 x,y좌표 및 size를 반환한다.
		 * @param {XComp} XComp 표시 위치를 얻고자 하는 nexacro Component 
		 * @param {number} width 표시할 팝업 width
		 * @param {number} height 표시할 팝업 height
		 * @param {string=} direction 팝업표시 방향."vert": vertical(default),"horz": horizontal
		 * @param {number=} offset 표시될때 XComp와의 간격(default: 0).
		 * @param {XComp=} scopeXComp 표시 위치를 얻고자 하는 nexacro Component가 표시될 영역에 해당하는 Component(default: application.mainframe).
		 * @return {array.<string...number>} [XComp 기준 위치("left", "top", "right", "bottom"), x, y [ ,width, height] ]
		 *   <pre>※주어진 width와 height, offset으로 
		 *    1.표시가능한 공간이 있을 경우: 
		 *       [팝업위치("left", "top", "right", "bottom"), x좌표, y좌표]
		 *    2.영역을 초과하는 공간을 요청했을 때는 표시가능한 정보 반환: 
		 *       [팝업위치("left", "top", "right", "bottom"), x좌표, y좌표, 가능한 width, 가능한 height]
		 *   </pre>
		 
		 * @example
		 *   var position = Eco.XComp.PositionSize.getPositionByForm(Button00, 44, 23, "vert", 2, this); //return: [bottom, 1394, 317]
		 *   Button00.move(position[1], position[2]);
		 *
		 *   //해상도(1920*1080)를 초과한 높이 2000의 위치를 요구했을경우.
		 *   var position = Eco.XComp.PositionSize.getPositionByForm(Button00, 300, 2000, "vert", 2, this); //return: [right,854,0,300,1080]
		 *   Button00.move(position[1], position[2]);
		 * @memberOf Eco.XComp.PositionSize
		 */			
		getPositionByForm: function(XComp, width, height, direction, offset, scopeXComp)
		{
			var w = 0, h = 0;
			var relativeXComp;
			
			if(scopeXComp) {
		    	w = scopeXComp.getOffsetWidth();
		    	h = scopeXComp.getOffsetHeight();			
				relativeXComp = scopeXComp;
			
			} else {
				var _window = XComp._getWindow();
				w = _window.clientWidth;
				h = _window.clientHeight;
				relativeXComp = application.mainframe;
			}
			
			var xy = Eco.XComp.PositionSize.convertXY(relativeXComp, [0, 0], XComp);
			var x = xy[0];
			var y = xy[1];
			
			if ( isNaN(xy[0]) || isNaN(xy[1]) ) return;
			
			var x = [xy[0], xy[0] + XComp.getOffsetWidth()];
			var y = [xy[1], xy[1] + XComp.getOffsetHeight()];

			// Client 크기의 Rect
			var rect = {'left': 0, 'top': 0, 'right': w, 'bottom': h, 'width': w, 'height': h};

			var position = Eco.XComp.PositionSize._getDisplayPosition(width, height, x, y, rect, direction, offset);

			
			return position;
		},			
		
		/**
		 * 컴포넌트 표시를 위한 좌표반환<br><br>
		 *  ※표시될 공간이 없을 경우 우선순위<br>
		 *     direction이 vertical 일때 : 하단(왼쪽맞춤->오른쪽맞춤) -> 상단(왼쪽맞춤->오른쪽맞춤)
		 * @private
		 * @param {number} width 표시할 width
		 * @param {number} height 표시할 height
		 * @param {string} direction 팝업표시 방향."vert": vertical(default),"horz": horizontal
		 * @param {number} offset 표시될때 XComp와의 간격.
		 * @param {boolean=} isChange direction 전환 후 재호출 여부.
		 * @return {number} [x,y] 좌표배열
		 * @memberOf Eco.XComp.PositionSize
		 */	
		 _getDisplayPosition: function(width, height, screenX, screenY, screenRect, direction, offset, isChange)
		 {
			if(isChange != true)
			{
				isChange = false;
			}
			
			var pThis = Eco.XComp.PositionSize;
			var position;
			
			if(direction == "horz")
			{
				position = pThis._getHorizontalPosition(width, height, screenX, screenY, screenRect, direction, offset, isChange);
			}
			else if(direction == "vert")
			{
				position = pThis._getVerticalPosition(width, height, screenX, screenY, screenRect, direction, offset, isChange);
			}
			
			var side = position[0];
			//표시할 수 있는 공간이 없을 때.
			//표시가능한 최대공간에 대한 정보를 반환한다.
			if(position[1] === undefined && position[2] === undefined)
			{
				if(width > screenRect.width)
				{
					width = screenRect.width;
				}
				
				if(height > screenRect.height)
				{
					height = screenRect.height;
				}				
				
				position = [side, screenRect.left, screenRect.top, width, height];
			}
			else if(position[1] === undefined)
			{
				position = [side, screenRect.left, position[2], screenRect.width, height];
			}
			else if(position[2] === undefined)
			{
				position = [side, position[1], screenRect.top, width, screenRect.height];
			}
			
			return position;
		 },
	 	
		/**
		 * 컴포넌트 표시를 위한 수직방향 좌표 반환
		 * @private
		 * @param {number} width 표시할 width
		 * @param {number} height 표시할 height
		 * @param {string} direction 팝업표시 방향."vert": vertical,"horz": horizontal
		 * @param {number} offset 표시될때 XComp와의 간격.
		 * @param {boolean} isChange direction 전환 후 재호출 여부.
		 * @return {array.<number>} screenX, screenY 좌표, 최종 direction
		 * @memberOf Eco.XComp.PositionSize
		 */	
		 _getVerticalPosition: function(width, height, screenX, screenY, screenRect, direction, offset, isChange)
		 {
			var pThis = Eco.XComp.PositionSize;
			var side;
			//bottom 공간확인
			if(screenRect.bottom  >= (screenY[1] + height + offset))
			{
				side = "bottom";
				screenY = screenY[1] + offset;

			} //top 공간확인
			else if(screenRect.top  < (screenY[0] - height - offset)) 
			{
				side = "top";
				screenY = screenY[0] - height - offset;
			}
			else
			{
				if(isChange == true)
				{
				    //재검사시에도 표시공간을 못찾으면 direction의 기본방향 리턴.
					return ["right", undefined, undefined];
				}
				

			    //argument로 전달된 direction으로 공간이 확보되지 않으면
			    //다른 direction으로 가능한 공간을 찾는다.
				direction = (direction=="vert")?"horz":"vert";
				var position = pThis._getDisplayPosition(width, height, screenX, screenY, screenRect, direction, offset, true);
				return position;	
			}
			
			//align 위치 획득
			screenX = pThis._getHorizontalAlign(width, height, screenX, screenY, screenRect, direction, offset);
			
			return [side, screenX, screenY];
				
		 },
		

		/**
		 * 컴포넌트 표시를 위한 수평방향 좌표 반환
		 * @private
		 * @param {number} width 표시할 width
		 * @param {number} height 표시할 height
		 * @param {string=} direction 팝업표시 방향."vert": vertical,"horz": horizontal
		 * @param {number} offset 표시될때 XComp와의 간격.
		 * @param {boolean} isChange direction 전환 후 재호출 여부.
		 * @return {array.<number>} screenX, screenY 좌표, 최종 direction
		 * @memberOf Eco.XComp.PositionSize
		 */	
		 _getHorizontalPosition: function(width, height, screenX, screenY, screenRect, direction, offset, isChange)
		 {
			var pThis = Eco.XComp.PositionSize;
			var side;
			
			if(screenRect.right >= (screenX[1] + width + offset))
			{
				side = "right";
				screenX = screenX[1] + offset;
				
			}
			else if(screenRect.left  < (screenX[0] - width - offset))
			{
				side = "left";
				screenX = screenX[0] - width - offset ;
			}
			else
			{
				if(isChange == true)
				{
					//재검사시에도 표시공간을 못찾으면 direction의 기본방향 리턴.
					return ["bottom", undefined,undefined];
				}			
			
			    //argument로 전달된 direction으로 공간이 확보되지 않으면
			    //다른 direction으로 가능한 공간을 찾는다.			
				direction = (direction=="vert")?"horz":"vert";
				var position = pThis._getDisplayPosition(width, height, screenX, screenY, screenRect, direction, offset, true);
				return position;	
			}			
			
			//align 위치 획득
			screenY = pThis._getVerticalAlign(width, height, screenX, screenY, screenRect, direction, offset);
			
			return [side, screenX, screenY];
		 },
		 
		/**
		 * direction이 vertical일때 컴포넌트 표시를 위한 수평정렬위치 반환.
		 * @private
		 * @param {number} width 표시할 width
		 * @param {number} height 표시할 height
		 * @param {string} direction 팝업표시 방향."vert": vertical,"horz": horizontal
		 * @param {number} offset 표시될때 XComp와의 간격.
		 * @return {number} screenX 좌표
		 * @memberOf Eco.XComp.PositionSize
		 */	
		 _getHorizontalAlign: function(width, height, screenX, screenY, screenRect, direction, offset)
		 {
			var spaceSize = screenRect.right - (screenX[0] + width);
			
			if(spaceSize >= 0)
			{
				screenX = screenX[0];
			}
			else if(spaceSize < 0)
			{
				screenX = screenX[0] + spaceSize;
				
				//표시공간보다 팝업size가 over시
				if(screenX < screenRect.left)
				{
					//trace("_getHorizontalAlign 표시공간보다 팝업size가 over시");
					screenX = undefined;
				}
			}
			else
			{
				screenX = undefined;
				Eco.Logger.error({message:"unexpected situation!!", stack:true});
			}

			return screenX;
		 },	
		 		 
		/**
		 * direction이 horizontal일때 컴포넌트 표시를 위한 수직정렬위치 반환
		 * @private
		 * @param {number} width 표시할 width
		 * @param {number} height 표시할 height
		 * @param {string} direction 팝업표시 방향."vert": vertical,"horz": horizontal
		 * @param {number} offset 표시될때 XComp와의 간격.
		 * @return {number} screenY 좌표
		 * @memberOf Eco.XComp.PositionSize
		 */	
		 _getVerticalAlign: function(width, height, screenX, screenY, screenRect, direction, offset)
		 {
			var spaceSize = screenRect.bottom - (screenY[0] + height);
			
			if(spaceSize >= 0)
			{
				screenY = screenY[0];
			}
			else if(spaceSize < 0)
			{
				screenY = screenY[0] + spaceSize;
				
				//표시공간보다 팝업size가 over시
				if(screenY < screenRect.top)
				{
					screenY = undefined;
				}				
			}
			else
			{
				screenY = undefined;
				Eco.Logger.error({message:"unexpected situation!!", stack:true});
			}

			return screenY;			
		 }

	});

}

/**
 * @fileoverview Json parser 처리를 위한 함수.
 */

if ( !JsNamespace.exist("Eco.Json") )
{
	/**
	 * @namespace
	 * @name Eco.Json
	 * @memberof! <global>
	 */
	JsNamespace.declare("Eco.Json", {

		_Token_Type : {
			UNKNOWN : -1,
			COMMA : 0,
			LEFT_BRACE : 1,
			RIGHT_BRACE : 2,
			LEFT_BRACKET : 3,
			RIGHT_BRACKET : 4,
			COLON : 6,
			TRUE : 7,
			FALSE : 8,
			NULL : 9,
			STRING : 10,
			NUMBER : 11,
			NAN : 12
		},
		
		/**
		 * JSON 문자열을 객체로 변환한 결과값을 반환한다.
		 * @function decode
		 * @param {string} s JSON String
		 * @param {boolean=} strict JSON 문자열을 decoding 할때 엄격히 표준을 따라야 하는지 여부.
		 * @return {object} 결과 object
		 * @memberOf Eco.Json
		 */ 
		decode : ( typeof JSON == "undefined" ) ? function(s, strict)
		{
			if(Eco.isEmpty(s)) return;
			
			var pThis = Eco.Json;
			pThis._jsonString = s;
			pThis._strict = strict;
			pThis._loc = 0;
			pThis._ch = null;
			
			// prime the pump by getting the first character
			pThis._nextChar();
			
			pThis._nextToken();
			pThis._value = pThis._parseValue();

			// Make sure the input stream is empty
			if ( strict && pThis._nextToken() != null )
			{
				pThis._parseError( "Unexpected characters left in input stream" );
			}
			
			return pThis._value;
		} : 
		function(s) {
			if(Eco.isEmpty(s)) return;
			
			return JSON.parse(s);
		},

		/**
		* Returns the next token from the tokenzier reading
		* the JSON string
		* @private
		*/
		_nextToken : function()
		{
			var pThis = Eco.Json;
			return pThis._token = pThis.getNextToken();
		},

		/**
		* Attempt to parse an array.
		* @private
		*/
		_parseArray : function()
		{
			var a = [];
			var token;
			var pThis = Eco.Json;
			var strict = pThis._strict;
			
			token = pThis._nextToken();
			
			var tokenType = pThis._Token_Type;

			if ( token.type == tokenType.RIGHT_BRACKET )
			{
				// we're done reading the array, so return it
				return a;
			}
			// in non-strict mode an empty array is also a comma
			// followed by a right bracket
			else if ( !strict && token.type == tokenType.COMMA )
			{
				// move past the comma
				token = pThis._nextToken();
				// check to see if we're reached the end of the array
				if ( token.type == tokenType.RIGHT_BRACKET )
				{
					return a;       
				}
				else
				{
					pThis._parseError( "Leading commas are not supported.  Expecting ']' but found " + token.value );
				}
			}

			// deal with elements of the array, and use an "infinite"
			// loop because we could have any amount of elements
			while ( true )
			{
				// read in the value and add it to the array
				a.push( pThis._parseValue() );

				// after the value there should be a ] or a ,
				token = pThis._nextToken();
				if ( token.type == tokenType.RIGHT_BRACKET )
				{
					// we're done reading the array, so return it
					return a;
				}
				else if ( token.type == tokenType.COMMA )
				{
					// move past the comma and read another value
					token = pThis._nextToken();

					// Allow arrays to have a comma after the last element
					// if the decoder is not in strict mode
					if ( !strict )
					{
						// Reached ",]" as the end of the array, so return it
						if ( token.type == tokenType.RIGHT_BRACKET )
						{
							return a;
						}
					}
				}
				else
				{
					pThis._parseError( "Expecting ] or , but found " + token.value );
				}
			}
			return null;
		},

		/**
		* Attempt to parse an object.
		* @private
		*/
		_parseObject : function()
		{
			var pThis = Eco.Json;
			
			// create the object internally that we're going to
			// attempt to parse from the tokenizer
			var o = {};
			var strict = pThis._strict;
			// store the string part of an object member so
			// that we can assign it a value in the object
			var key;

			// grab the next token from the tokenizer
			var token = pThis._nextToken();
			
			var tokenType = pThis._Token_Type;

			// check to see if we have an empty object
			if ( token.type == tokenType.RIGHT_BRACE )
			{
				// we're done reading the object, so return it
				return o;
			}
			// in non-strict mode an empty object is also a comma
			// followed by a right bracket
			else if ( !strict && token.type == tokenType.COMMA )
			{
				// move past the comma
				token = pThis._nextToken();
				// check to see if we're reached the end of the object
				if ( token.type == tokenType.RIGHT_BRACE )
				{
					return o;
				}
				else
				{
					pThis._parseError( "Leading commas are not supported.  Expecting '}' but found " + token.value );
				}
			}

			// deal with members of the object, and use an "infinite"
			// loop because we could have any amount of members
			while ( true )
			{
				if ( token.type == tokenType.STRING )
				{
					// the string value we read is the key for the object
					key = String( token.value );
					// move past the string to see what's next
					token = pThis._nextToken();
					// after the string there should be a :
					if ( token.type == tokenType.COLON )
					{
						// move past the : and read/assign a value for the key
						token = pThis._nextToken();
						o[key] = pThis._parseValue();  
						// move past the value to see what's next
						token = pThis._nextToken();
						// after the value there's either a } or a ,
						if ( token.type == tokenType.RIGHT_BRACE )
						{
							// we're done reading the object, so return it
							return o;
						}
						else if ( token.type == tokenType.COMMA )
						{
							// skip past the comma and read another member
							token = pThis._nextToken();
							// Allow objects to have a comma after the last member
							// if the decoder is not in strict mode
							if ( !strict )
							{
								// Reached ",}" as the end of the object, so return it
								if ( token.type == tokenType.RIGHT_BRACE )
								{
									return o;
								}
							}
						}
						else
						{
							pThis._parseError( "Expecting } or , but found " + token.value );
						}
					}
					else
					{
						pThis._parseError( "Expecting : but found " + token.value );
					}
				}
				else
				{
					pThis._parseError( "Expecting string but found " + token.value );
				}
			}
			return null;
		},

		_parseValue : function()
		{
			var pThis = Eco.Json;
			var strict = pThis._strict;
			var token = pThis._token;
			// Catch errors when the input stream ends abruptly
			if ( token == null )
			{
				pThis._parseError( "Unexpected end of input" );
			}
			
			var tokenType = pThis._Token_Type;

			switch ( token.type )
			{
				case tokenType.LEFT_BRACE:
					return pThis._parseObject();

				case tokenType.LEFT_BRACKET:
					return pThis._parseArray();

				case tokenType.STRING:
				case tokenType.NUMBER:
				case tokenType.TRUE:
				case tokenType.FALSE:
				case tokenType.NULL:
					return token.value;

				case tokenType.NAN:
					if ( !strict )
					{
						return token.value;
					}
					else
					{
						pThis._parseError( "Unexpected " + token.value );
					}

				default:
					pThis._parseError( "Unexpected " + token.value );
			}

			return null;
		},

		/**
		 * Object를 문자열로 변환한다.
		 * @function encode
		 * @param {object} value 문자열로 변환할 Object.
		 * @return {object} 변환된 문자열
		 * @memberOf Eco.Json
		 */ 
		encode : ( typeof JSON == "undefined" ) ? function( value )
		{
			return Eco.Json._convertToString( value );
		} : 
		function( value ) {
			return JSON.stringify(value);
		},

		_convertToString : function( value )
		{
			var pThis = Eco.Json;
			
			// determine what value is and convert it based on it's type
			if ( Eco.isString(value) )
			{
				// escape the string so it's formatted correctly
				return pThis._escapeString( value );
			}
			else if ( Eco.isNumber(value) )
			{
				// only encode numbers that finate
				return isFinite( value ) ? value.toString() : "null";
			}
			else if ( Eco.isBoolean(value) )
			{
				// convert boolean to string easily
				return value ? "true" : "false";
			}
			else if ( Eco.isArray(value) )
			{
				// call the helper method to convert an array
				return pThis._arrayToString( value );

			}
			else if ( Eco.isXComponent(value) )
			{
				return value.name;
			}
			//else if ( value && MiscUtil.isObject(value) )
			else if ( value )
			{
				// call the helper method to convert an object
				return pThis._objectToString( value );
			}
			return "null";
		},
		
		_escapeString : function( str )
		{
			// create a string to store the string's jsonstring value
			var s = "";
			// current character in the string we're processing
			var ch;
			// store the length in a local variable to reduce lookups
			var len = str.length;

			// loop over all of the characters in the string
			for ( var i = 0; i < len; i++ )
			{
				// examine the character to determine if we have to escape it
				ch = str.charAt( i );
				switch ( ch )
				{
					case '"':       // quotation mark
						s += "\\\"";
						break;
					//case '/':     // solidus
					//      s += "\\/";
					//      break;
					case '\\':      // reverse solidus
						s += "\\\\";
						break;
					case '\b':      // bell
						s += "\\b";
						break;
					case '\f':      // form feed
						s += "\\f";
						break;
					case '\n':      // newline
						s += "\\n";
						break;
					case '\r':      // carriage return
						s += "\\r";
						break;
					case '\t':      // horizontal tab
						s += "\\t";
						break;
					default:        // everything else
						// check for a control character and escape as unicode
						if ( ch < ' ' )
						{
							// get the hex digit(s) of the character (either 1 or 2 digits)
							var hexCode = ch.charCodeAt( 0 ).toString( 16 );
							// ensure that there are 4 digits by adjusting
							// the # of zeros accordingly.
							var zeroPad = hexCode.length == 2 ? "00" : "000";
							// create the unicode escape sequence with 4 hex digits
							s += "\\u" + zeroPad + hexCode;
						}
						else
						{
							// no need to do any special encoding, just pass-through
							s += ch;
						}
				}// end switch

			}// end for loop
			return "\"" + s + "\"";
		},

		_arrayToString : function( a )
		{
			var pThis = Eco.Json;
			// create a string to store the array's jsonstring value
			var s = "";

			// loop over the elements in the array and add their converted
			// values to the string
			for ( var i = 0; i < a.length; i++ )
			{
				// when the length is 0 we're adding the first element so
				// no comma is necessary
				if ( s.length > 0 )
				{
					// we've already added an element, so add the comma separator
					s += ","
				}
				
				// convert the value to a string
				s += pThis._convertToString( a[i] );   
			}

			// KNOWN ISSUE:  In ActionScript, Arrays can also be associative
			// objects and you can put anything in them, ie:
			//              myArray["foo"] = "bar";
			//
			// These properties aren't picked up in the for loop above because
			// the properties don't correspond to indexes.  However, we're
			// sort of out luck because the JSON specification doesn't allow
			// these types of array properties.
			//
			// So, if the array was also used as an associative object, there
			// may be some values in the array that don't get properly encoded.
			//
			// A possible solution is to instead encode the Array as an Object
			// but then it won't get decoded correctly (and won't be an
			// Array instance)
				
			// close the array and return it's string value
			return "[" + s + "]";
		},

		_objectToString : function( o )
		{
			// create a string to store the object's jsonstring value
			var s = "";
			var pThis = Eco.Json;
			
			//trace("_objectToString o="+o);
			if ( Eco.isObject(o) )
			{
				// the value of o[key] in the loop below - store this 
				// as a variable so we don't have to keep looking up o[key]
				// when testing for valid values to convert
				var value;

				// loop over the keys in the object and add their converted
				// values to the string
				for ( var key in o )
				{
					if ( o.hasOwnProperty(key) )
					{
						// assign value to a variable for quick lookup
						value = o[key];

						// don't add function's to the JSON string
						if ( Eco.isFunction(value) )
						{
							// skip this key and try another
							continue;
						}
						
						// when the length is 0 we're adding the first item so
						// no comma is necessary
						if ( s.length > 0 )
						{
							// we've already added an item, so add the comma separator
							s += ","
						}
						
						s += pThis._escapeString( key ) + ":" + pThis._convertToString( value );
					}
				}
			}
			//else if ( is xpcomp )
			//{
			//}
			else // o is a ufo class instance
			{
			/*
				// Loop over all of the variables and accessors in the class and 
				// serialize them along with their values.
				for each ( var v:XML in classInfo..*.( name() == "variable" || name() == "accessor" ) )
				{
					// When the length is 0 we're adding the first item so
					// no comma is necessary
					if ( s.length > 0 )
					{
						// We've already added an item, so add the comma separator
						s += ","
					}
					s += escapeString( v.@name.toString() ) + ":" 
					+ convertToString( o[ v.@name ] );
				}
			*/			
				var value;
				var propName;
				var props = o._properties;
				var getter;
				
				//trace("props="+props + ", typeof=" + (typeof(props)));
				trace("json.js > _objectToString > ■ start 테스트를 위한 임의설정 ");
				if(props === undefined)
				{
					trace("json.js > _objectToString > s="+s);
					return "{" + s + "}";
				}
				//return "{" + s + "}";
				
				for (var i=0,len=props.length; i<len; i++)
				{
					propName = props[i];
					
					if ( propName == "name" ) continue;
					
					getter = o["get"+propName.charAt(0).toUpperCase() + propName.substr(1)];
					if ( getter )
					{
						value = getter.call(o);
					}
					else
					{
						value = o["_"+propName];
					}
					
					// when the length is 0 we're adding the first item so
					// no comma is necessary
					if ( s.length > 0 )
					{
						// we've already added an item, so add the comma separator
						s += ","
					}				

					s += pThis._escapeString( propName ) + ":" + pThis._convertToString( value );
				}
			}

			return "{" + s + "}";
		},

		setToken : function(type, value)
		{
			Eco.Json._token = {
				type : type,
				value : value
			};	// zoo
// 			var token = this._token;
// 			token.type = type;
// 			token.value = value;
		},
		
		getToken : function()
		{
			return Eco.Json._token;
		},
		
		getNextToken : function()
		{
			var pThis = Eco.Json;
			// skip any whitespace / comments since the last 
			// token was read

			pThis.skipIgnored();

			var tokenType = pThis._Token_Type;

			var ch = pThis._ch;
			// examine the new character and see what we have...
			switch ( ch )
			{       
				case '{':
					pThis.setToken(tokenType.LEFT_BRACE, '{');
					pThis._nextChar();
					break;
				case '}':
					pThis.setToken(tokenType.RIGHT_BRACE, '}');
					pThis._nextChar();
					break;
				case '[':
					pThis.setToken(tokenType.LEFT_BRACKET, '[');
					pThis._nextChar();
					break;
				case ']':
					pThis.setToken(tokenType.RIGHT_BRACKET, ']');
					pThis._nextChar();
					break;
				case ',':
					pThis.setToken(tokenType.COMMA, ',');
					pThis._nextChar();
					break;
				case ':':
					pThis.setToken(tokenType.COLON, ':');
					pThis._nextChar();
					break;
				case 't': // attempt to read true
					var possibleTrue = "t" + pThis._nextChar() + pThis._nextChar() + pThis._nextChar();
					if ( possibleTrue == "true" )
					{
						pThis.setToken(tokenType.TRUE, true);						
						pThis._nextChar();
					}
					else
					{
						pThis._parseError( "Expecting 'true' but found " + possibleTrue );
					}
					break;
				case 'f': // attempt to read false
					var possibleFalse = "f" + pThis._nextChar() + pThis._nextChar() + pThis._nextChar() + pThis._nextChar();
					if ( possibleFalse == "false" )
					{
						pThis.setToken(tokenType.FALSE, false);
						pThis._nextChar();
					}
					else
					{
						pThis._parseError( "Expecting 'false' but found " + possibleFalse );
					}
					break;
				case 'n': // attempt to read null
					var possibleNull = "n" + pThis._nextChar() + pThis._nextChar() + pThis._nextChar();
					if ( possibleNull == "null" )
					{
						pThis.setToken(tokenType.NULL, null);
						pThis._nextChar();
					}
					else
					{
						pThis._parseError( "Expecting 'null' but found " + possibleNull );
					}
					break;
				case 'N': // attempt to read NaN
					var possibleNaN = "N" + pThis._nextChar() + pThis._nextChar();
					if ( possibleNaN == "NaN" )
					{
						pThis.setToken(tokenType.NAN, NaN);
						pThis._nextChar();
					}
					else
					{
						pThis._parseError( "Expecting 'NaN' but found " + possibleNaN );
					}
					break;
				case '"': // the start of a string
					pThis._readString();
					break;
				default: 
					// see if we can read a number
					if ( pThis._isDigit( ch ) || ch == '-' )
					{
						pThis._readNumber();
					}
					else if ( ch == '' )
					{
					// check for reading past the end of the string
						return null;
					}
					else
					{
						// not sure what was in the input string - it's not
						// anything we expected
						pThis._parseError( "Unexpected " + ch + " encountered" );
					}
			}

			return pThis._token;
		},

		_readString : function()
		{
			var pThis = Eco.Json;
			// the string to store the string we'll try to read
			var string = "";

			// advance past the first "
			var ch = pThis._nextChar();

			while ( ch != '"' && ch != '' )
			{
				// unescape the escape sequences in the string
				if ( ch == '\\' )
				{
					// get the next character so we know what
					// to unescape
					ch = pThis._nextChar();

					switch ( ch )
					{
						case '"': // quotation mark
							string += '"';
							break;
						case '/':       // solidus
							string += "/";
							break;
						case '\\':      // reverse solidus
							string += '\\';
							break;
						case 'b':       // bell
							string += '\b';
							break;
						case 'f':       // form feed
							string += '\f';
							break;
						case 'n':       // newline
							string += '\n';
							break;
						case 'r':       // carriage return
							string += '\r';
							break;
						case 't':       // horizontal tab
							string += '\t'
							break;
						case 'u':
							// convert a unicode escape sequence
							// to it's character value - expecting
							// 4 hex digits
			
							// save the characters as a string we'll convert to an int
							var hexValue = "";
							// try to find 4 hex characters
							for ( var i = 0; i < 4; i++ )
							{
								// get the next character and determine
								// if it's a valid hex digit or not
								if ( !pThis._isHexDigit( ch = pThis._nextChar() ) )
								{
										pThis._parseError( " Excepted a hex digit, but found: " + ch );
								}
								// valid, add it to the value
								hexValue += ch;
							}
			
							// convert hexValue to an integer, and use that
							// integrer value to create a character to add
							// to our string.
							string += String.fromCharCode( parseInt( hexValue, 16 ) );
							break;
						default:
							// couldn't unescape the sequence, so just
							// pass it through
							string += '\\' + ch;

					}
				}
				else
				{
					// didn't have to unescape, so add the character to the string
					string += ch;
				}
				// move to the next character
				ch = pThis._nextChar();
			}

			// we read past the end of the string without closing it, which
			// is a parse error
			if ( ch == '' )
			{
				pThis._parseError( "Unterminated string literal" );
			}

			// move past the closing " in the input string
			pThis._nextChar();
			pThis.setToken(pThis._Token_Type.STRING, string);
		},

		_readNumber : function()
		{
			var pThis = Eco.Json;
			// the string to accumulate the number characters
			// into that we'll convert to a number at the end
			var input = "";
			var ch = pThis._ch;
			var strict = pThis._strict;
			// check for a negative number
			if ( ch == '-' )
			{
				input += '-';
				ch = pThis._nextChar();
			}

			// the number must start with a digit
			if ( !pThis._isDigit( ch ) )
			{
				pThis._parseError( "Expecting a digit" );
			}

			// 0 can only be the first digit if it
			// is followed by a decimal point
			if ( ch == '0' )
			{
				input += ch;
				ch = pThis._nextChar();

				// make sure no other digits come after 0
				if ( pThis._isDigit( ch ) )
				{
					pThis._parseError( "A digit cannot immediately follow 0" );
				}
				// unless we have 0x which starts a hex number, but this
				// doesn't match JSON spec so check for not strict mode.
				else if ( !strict && ch == 'x' )
				{
					// include the x in the input
					input += ch;
					ch = pThis._nextChar();

					// need at least one hex digit after 0x to
					// be valid
					if ( pThis._isHexDigit( ch ) )
					{
						input += ch;
						ch = pThis._nextChar();
					}
					else
					{
						pThis._parseError( "Number in hex format require at least one hex digit after \"0x\"" );       
					}

					// consume all of the hex values
					while ( pThis._isHexDigit( ch ) )
					{
						input += ch;
						ch = pThis._nextChar();
					}
				}
			}
			else
			{
				// read numbers while we can
				while ( pThis._isDigit( ch ) )
				{
					input += ch;
					ch = pThis._nextChar();
				}
			}
			// check for a decimal value
			if ( ch == '.' )
			{
				input += '.';
				ch = pThis._nextChar();
				// after the decimal there has to be a digit
				if ( !pThis._isDigit( ch ) )
				{
					pThis._parseError( "Expecting a digit" );
				}
				// read more numbers to get the decimal value
				while ( pThis._isDigit( ch ) )
				{
					input += ch;
					ch = pThis._nextChar();
				}
			}

			// check for scientific notation
			if ( ch == 'e' || ch == 'E' )
			{
				input += "e"
				ch = pThis._nextChar();
				// check for sign
				if ( ch == '+' || ch == '-' )
				{
					input += ch;
					ch = pThis._nextChar();
				}

				// require at least one number for the exponent
				// in this case
				if ( !pThis._isDigit( ch ) )
				{
					pThis._parseError( "Scientific notation number needs exponent value" );
				}
				// read in the exponent
				while ( pThis._isDigit( ch ) )
				{
					input += ch;
					ch = pThis._nextChar();
				}
			}

			// convert the string to a number value
			var num = Number( input );

			if ( isFinite( num ) && !isNaN( num ) )
			{
				// the token for the number that we've read
				pThis.setToken(pThis._Token_Type.NUMBER, num);
				return;
			}
			else
			{
				pThis._parseError( "Number " + num + " is not valid!" );
			}
			
			pThis._token = null;
		},

		_nextChar : function()
		{
			var pThis = Eco.Json;
			return pThis._ch = pThis._jsonString.charAt( pThis._loc++ );
		},

		skipIgnored : function()
		{
			var originalLoc;
			var pThis = Eco.Json;
			// keep trying to skip whitespace and comments as long
			// as we keep advancing past the original location 
			do
			{
				originalLoc = pThis._loc;
				pThis._skipWhite();
				pThis._skipComments();
			}
			while ( originalLoc != pThis._loc );
		},

		_skipComments : function()
		{
			var pThis = Eco.Json;
			var ch = pThis._ch;
			if ( ch == '/' )
			{
				// Advance past the first / to find out what type of comment
				ch = pThis._nextChar();
				switch ( ch )
				{
					case '/': // single-line comment, read through end of line

						// Loop over the characters until we find
						// a newline or until there's no more characters left
						do
						{
							ch = pThis._nextChar();
						}
						while ( ch != '\n' && ch != '' )

						// move past the \n
						ch = pThis._nextChar();
						break;

					case '*': // multi-line comment, read until closing */
						// move past the opening *
						ch = pThis._nextChar();

						// try to find a trailing */
						while ( true )
						{
							if ( ch == '*' )
							{
								// check to see if we have a closing /
								ch = pThis._nextChar();
								if ( ch == '/')
								{
									// move past the end of the closing */
									ch = pThis._nextChar();
									break;
								}
							}
							else
							{
								// move along, looking if the next character is a *
								ch = pThis._nextChar();
							}
							// when we're here we've read past the end of 
							// the string without finding a closing */, so error
							if ( ch == '' )
							{
								pThis._parseError( "Multi-line comment not closed" );
							}
						}
						break;
					// Can't match a comment after a /, so it's a parsing error
					default:
						pThis._parseError( "Unexpected " + ch + " encountered (expecting '/' or '*' )" );
				}
			}
		},

		_skipWhite : function()
		{
			// As long as there are spaces in the input 
			// stream, advance the current location pointer
			// past them
			
			var pThis = Eco.Json;
			var ch = pThis._ch;
			while ( pThis._isWhiteSpace( ch ) )
			{
				ch = pThis._nextChar();
			}
		},

		_isWhiteSpace : function( ch )
		{
			return ( ch == ' ' || ch == '\t' || ch == '\n' || ch == '\r' );
		},

		_isDigit : function( ch )
		{
			return ( ch >= '0' && ch <= '9' );
		},

		_isHexDigit : function( ch )
		{
			// get the uppercase value of ch so we only have
			// to compare the value between 'A' and 'F'
			var uc = ch.toUpperCase();

			// a hex digit is a digit of A-F, inclusive ( using
			// our uppercase constraint )
			return ( Eco.Json._isDigit( ch ) || ( uc >= 'A' && uc <= 'F' ) );
		},

		_parseError : function( msg )
		{
			//throw new Error(3000, msg);
			Eco.Logger.error({"message":msg, "stack":true});
		}
        
	});
}

/**
 * @fileoverview
 * XComp 관련 event add, remove 할 때 사용하는 helper
 */

if ( !JsNamespace.exist("Eco.XComp.Event") )
{
	/**
	 * 
	 * @description
	 * XComp 관련 event add, remove 할 때 사용하는 helper<br>
	 * 그 외 dragging 처리를 용이하게 하는 makeDraggable, repeat처리를 용이하게 하는 makeRepeatable 과 <br>
	 * 부드러운 animation 처리를 위한 requestAnimationFrame, cancelAnimationFrame 기능을 포함한다.
	 * 
	 * @namespace
	 * @name Eco.XComp.Event
	 * @memberof! <global>
	 */	 
	JsNamespace.declare("Eco.XComp.Event", {
	
		/**
		 * 주어진 XComp을 가지고 주어진 events 정보로 eventHandler함수들을 추가한다.<br>
		 * 두번째 events는 이벤트명=eventHandler함수로 이루어진 object collection이다.<br>
		 * event가 fire할 때 eventHandler함수가 호출되는데 그 함수 내부의 this는 주어진 scope가 된다.<br>
		 * @example
		 *
		 * this.onLbuttonDownHandler = function(obj, e)
		 * {
		 *    trace(this)//Form
		 * }
		 * this.onLbuttonUpHandler = function(obj, e)
		 * {
		 *    trace(this)//Form
		 * }
		 *
		 * var events = {"onlbuttondown": this.onLbuttonDownHandler, "onlbuttonup": this.onLbuttonUpHandler};
		 *
		 * Eco.XComp.Event.add(this.st_sample01, events, this);
		 *
		 * @param {XComp} XComp events 설정할 대상 XComp.
		 * @param {object} events 이벤트명=eventHandler함수로 정의된 object collection.
		 * @param {*} scope scope로 설정할 대상으로 eventHandler 내부 루틴에 this에 해당하는 값
		 * @memberOf Eco.XComp.Event
		 */	
		"add": function(XComp, events, scope)
		{
			for (var type in events)
			{
				if ( events.hasOwnProperty(type) )
				{
					XComp.addEventHandler(type, events[type], scope);
				}
			}
		},
		
		/**
		 * 주어진 XComp을 가지고 주어진 events 정보로 eventHandler함수들을 제거한다.<br>
		 * 두번째 events는 이벤트명=eventHandler함수로 이루어진 object collection이다.
		 * @example
		 *
		 * this.onLbuttonDownHandler = function(obj, e)
		 * {
		 *    trace(this)//Form
		 * }
		 * this.onLbuttonUpHandler = function(obj, e)
		 * {
		 *    trace(this)//Form
		 * }
		 *
		 * var events = {"onlbuttondown": this.onLbuttonDownHandler, "onlbuttonup": this.onLbuttonUpHandler};
		 *
		 * Eco.XComp.Event.remove(this.st_sample01, events, this);
		 *
		 * @param {XComp} XComp events 설정할 대상 XComp.
		 * @param {object} events 이벤트명=eventHandler함수로 정의된 object collection.
		 * @param {*} scope scope로 설정할 대상으로 eventHandler 내부 루틴에 this에 해당하는 값
		 * @memberOf Eco.XComp.Event
		**/		
		"remove": function(XComp, events, scope)
		{
			for (var type in events)
			{
				if ( events.hasOwnProperty(type) )
				{			
					XComp.removeEventHandler(type, events[type], scope);
				}
			}
		},
		
		/**
		 * 주어진 XComp에 drag 기능를 설정한다.<br>
		 * 두번째 param 값은 function이거나, object type으로 값이 주어져야 한다.<br>
		 * function이면 dragging 되는 시점에 호출되는 함수로 설정된다.<br>
		 * object이면 object.start, object.end, object.dragging 으로 각각 함수값이 주어지는데.<br>
		 * start는 drag시작되는 시점에 호출되는 함수로 return 값이 false 일 경우 드래그를 실행하지 않는다.<br>
		 * end는 drag종료되는 시점에 호출되는 함수<br>
		 * dragging는 dragging 하는 시점에 계속 호출되는 함수이다.<br>
		 * 네번째 param인 addArgs로 주어지는 array는 함수 호출시에 추가되는 arguments이다.<br>
		 * 각 함수의 arguments은 다음과 같다.<br>
		 * ------------------------------------------------------------------------------------------------------<br>
		 * 1. start<br>
		 * ------------------------------------------------------------------------------------------------------<br>
		 * addArgs[0], addArg[1], ... ,clientX, clientY, shiftKey, ctrlKey<br>
		 * ------------------------------------------------------------------------------------------------------<br>
		 * 2. end<br>
		 * ------------------------------------------------------------------------------------------------------<br>
		 * addArgs[0], addArg[1], ... ,clientX, clientY, shiftKey, ctrlKey<br>
		 * ------------------------------------------------------------------------------------------------------<br>
		 * 3. dragging <br>
		 * ------------------------------------------------------------------------------------------------------<br>
		 * offsetX, offsetY, addArgs[0], addArg[1], ... , shiftKey, ctrlKey<br>
		 * <br>
		 * 세번째 param인 scope는 호출되는 함수 내부의 this 로 지정되며 만약 scope를 생략하면 this는 form이 된다.<br>
		 * offsetX, offsetY param 값은 dragging이 발생하는 시점의 x, y기준으로 그 다음에 발생되는 dragging 시점의 x, y 값의 차이가 주어지는데<br>
		 * 만약 다섯번째 isOffsetFromStart 값을 true로 주어지면 offsetX, offsetY 는 최초 drag가 시작되는 시점의 x, y 기준으로 dragging 발생하는 x, y 값의 차이가 주어진다.<br>
		 * 여섯 번째 delayTask 값을 true로 주어지면 dragging 함수 호출 하여 루틴이 실행되고 있는 중에 다시 dragging 함수가 호출하게 되면 호출를 생략하는 하는 처리이다.
		 * @example
		 *
		 * // 1) 2번째 인자를 function 으로 선언 시 drag 진행 시점에 정의된 함수가 호출된다.
		 * Eco.XComp.Event.makeDraggable(this.st_sample02, this.onDragging, this, [this.st_sample02]);
		 *
		 * // 2) 2번째 인자를 object 로 선언 시 drag 시작, 진행, 종료 시점에 정의된 함수가 호출된다.
		 * var draggingFunc = {
		 *      'start': this.onDragStart, // 사용자가 정의한 arguments + [clientX, clientY, shiftKey, ctrlKey] 추가함(2015/3/12) 
		 *      'dragging': this.onDragging, // [offsetX, offsetY] + 사용자가 정의한 arguments + [shiftKey, ctrlKey] 추가함(2015/3/12) 
		 *      'end': this.onDragEnd // 사용자가 정의한 arguments + [clientX, clientY, shiftKey, ctrlKey] 추가함(2015/3/12) 
		 * };
		 * Eco.XComp.Event.makeDraggable(this.st_sample02, draggingFunc, this, [this.st_sample02]);		 
		 *
		 * // drag start 시점에 처리할 함수
		 * this.onDragStart = function(comp)
		 * {	
		 *     trace(comp.name + " Drag Start !!");
		 *	   comp.set_text("Drag Start !!");
		 * }
		 *
		 * // dragging 시점에 처리할 루틴을 정의한 함수
		 * this.onDragging = function(offsetX, offsetY, obj)
		 * {
		 *     var x = obj.getOffsetLeft() + offsetX,
		 *         y = obj.getOffsetTop() + offsetY;	
		 *
		 *     obj.move(x, y);
		 * }
		 *
		 * @param {XComp} XComp draggable하고자 하는 xcomp.
		 * @param {object|function} draggingFunc dragging 처리 루틴에 해당하는 함수들.
		 * @param {*=} scope scope로 설정할 대상.
		 * @param {array=} addArgs 설정된 함수 호출시 추가할 arguments을 array로 설정.
		 * @param {boolean=} isOffsetFromStart offsetX, offsetY arguments의 drag시작 시점을 기준할 것인지 여부.
		 * @param {boolean=} delayTask 반복되어지는 dragging함수 호출을 중간에 겹치면 delay할 것인지 여부
		 * @memberOf Eco.XComp.Event
		**/
		"makeDraggable": function(XComp, draggingFunc, scope, addArgs, isOffsetFromStart, delayTask)
		{
			if ( Eco.isObject(draggingFunc) )
			{
				XComp._dragFuncs = {
					"draggingFunc": draggingFunc.dragging,
					"draggingStartFunc": draggingFunc.start,
					"draggingEndFunc": draggingFunc.end,
					"args": addArgs,
					"mouseEventInfo": draggingFunc.mouseEventInfo,
					"isOffsetFromStart": isOffsetFromStart
					};
			}
			else
			{
				XComp._dragFuncs = {
					"draggingFunc": draggingFunc,
					"args": addArgs,
					"mouseEventInfo": draggingFunc.mouseEventInfo,
					"isOffsetFromStart": isOffsetFromStart
					};
			}
			Eco.XComp.Event.add(XComp,
					{
						"onlbuttondown": Eco.XComp.Event._dragDownHandler,
						"onlbuttonup": Eco.XComp.Event._dragUpHandler
					}, scope);
			
			XComp.__scope = scope;
			
			if ( delayTask )
			{
				XComp._delayDragProc = true;
			}
			else
			{
				XComp._delayDragProc = null;
			}
		},

		/**
		 * 주어진 XComp에 drag 기능를 해제한다.
		 * @example
		 *
		 * Eco.XComp.Event.clearDraggable(this.st_sample02);
		 *
		 * @param {XComp} XComp draggable기능을 해제하는 xcomp.
		 * @memberOf Eco.XComp.Event
		**/
		"clearDraggable": function(XComp)
		{
			if ( XComp._dragFuncs )
			{
				XComp._dragFuncs = null;
				XComp._delayDragProc = null;
				Eco.XComp.Event.remove(XComp,
						{
							"onlbuttondown": Eco.XComp.Event._dragDownHandler,
							"onlbuttonup": Eco.XComp.Event._dragUpHandler
						});
						
				var topForm = Eco.XComp.getTopLevelForm(XComp.parent);
				var uniqueId = XComp._unique_id;
				
				var hasDragComp = false;
				var dragComps = topForm.__makeDraggableTargets;
				
				for (var id in dragComps)
				{
					if ( dragComps.hasOwnProperty(id) )
					{
						if ( id == uniqueId )
						{
							delete dragComps[id];
						}
						else
						{
							hasDragComp = true;
						}
					}
				}
				
				// top form에 drag comp가 없다면 핸들러 및 속성 제거
				if ( !hasDragComp && topForm.findEventHandler("onmousemove", Eco.XComp.Event._dragMoveHandler) > -1 )
				{
					topForm.__makeDraggableTargets = null;
					topForm.__makeDraggableCurComp = null;
					
					delete topForm.__makeDraggableTargets;						
					delete topForm.__makeDraggableCurComp;
					
					topForm.removeEventHandler("onmousemove", Eco.XComp.Event._dragMoveHandler);
				}
			}
		},

		/**
		 * dragging 기능을 처리하기 위해 내부적으로 설정하는 onlbuttondown event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_dragDownHandler": function(obj, e)
		{
			var topForm = Eco.XComp.getTopLevelForm(obj.parent);
			if ( topForm.findEventHandler("onmousemove", Eco.XComp.Event._dragMoveHandler) < 0 )
			{
				topForm.addEventHandler("onmousemove", Eco.XComp.Event._dragMoveHandler);
			}
			
			// top form 에 drag 대상 컴포넌트로 지정하기 위해 추가
			if ( !topForm.__makeDraggableTargets )
			{
				topForm.__makeDraggableTargets = {};			
			}
			
			topForm.__makeDraggableTargets[obj._unique_id] = true;	
			
			// 버튼의 mousemove 이벤트를 topform 에 발생하도록
			// (Form.Div.Button 과 같은 중첩의 경우 버블링이 안된다.)
			Eco.XComp.Event._lockMouseEvent(topForm);
			
			var pt = {x:e.screenX, y:e.screenY};
			obj._drag = {
				"startPt": pt,
				"offsetX": 0,
				"offsetY": 0,
				"isOffsetFromStart": false
			};
		
			// drag 대상으로 지정
			topForm.__makeDraggableCurComp = obj;
			
			// scope 가 없으면 topForm 지정
			if ( !obj.__scope )
			{
				obj.__scope = topForm;
			}
			
			var func = obj._dragFuncs,
				addArgs;

			if ( func )
			{
				if ( func.isOffsetFromStart === true ) obj._drag.isOffsetFromStart = true;
				addArgs = func.args;
				func = func.draggingStartFunc;
			}
			if ( func )
			{
				var args = [];
				if ( addArgs )
				{
					args = args.concat(addArgs);
				}
				if ( func.mouseEventInfo )
				{
					args[args.length] = e;
				}
				else
				{
					// [2015.03.12] arguments 끝 부분에 추가
					args[args.length] = e.clientX;
					args[args.length] = e.clientY;
					args[args.length] = e.shiftKey;
					args[args.length] = e.ctrlKey;
				}
				// [2013.11.13] 리턴값에 따라 드래그 실행 중지
				var ret = func.apply(this, args);
				if ( ret === false )
				{
					obj._drag = null;
				}
			}
		},

		/**
		 * dragging 기능을 처리하기 위해 내부적으로 설정하는 onlbuttonup event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_dragUpHandler": function(obj, e)
		{
			var drag = obj._drag;
			
			// drag 대상 초기화
			var topForm = Eco.XComp.getTopLevelForm(obj.parent);
			topForm.__makeDraggableCurComp = null;

			if ( drag )
			{
				Eco.XComp.Event.cancelAnimationFrame(obj._reqDragId);//func
				obj._reqDragId = null;
				obj._drag = null;
				var func = obj._dragFuncs,
					addArgs;

				if ( func )
				{
					addArgs = func.args;
					func = func.draggingEndFunc;
				}
				if ( func )
				{
					var args = [];
					if ( addArgs )
					{
						args = args.concat(addArgs);
					}
					if ( func.mouseEventInfo )
					{
						args[args.length] = e;
					}
					else
					{
						// [2015.03.12] arguments 끝 부분에 추가 
						args[args.length] = e.clientX;
						args[args.length] = e.clientY;
						args[args.length] = e.shiftKey;
						args[args.length] = e.ctrlKey;
					}
					func.apply(this, args);
				}
			}
		},

		/**
		 * dragging 기능을 처리하기 위해 내부적으로 설정하는 onmousemove event의 handler함수
		 * @param {Form} form mouse move가 발생한 top form.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_dragMoveHandler": function(form, e)
		{
			// 현재 drag 중인 대상 comp
			var obj = form.__makeDraggableCurComp;
			if ( obj )
			{
				var drag = obj._drag;
				if ( drag )
				{
					// [2015.03.12] drag 중에 shiftKey, ctrlKey 정보 추가함. 
					obj._dragCurPt = {x:e.screenX, y:e.screenY, shiftkey:e.shiftKey, ctrlkey:e.ctrlKey};
					if ( obj._delayDragProc )
					{
						Eco.XComp.Event.cancelAnimationFrame(obj._reqDragId); //func
						obj._reqDragId = null;
					}
					
					obj._reqDragId = Eco.XComp.Event.requestAnimationFrame(Eco.XComp.Event._dragProcess, obj.__scope, obj, e); //func, scope(default: topForm), func's arguments
				}
			}
		},
		
		/**
		 * dragging 기능을 처리하기 위해 내부적으로 설정하는 함수
		 * @param {XComp} obj dragging 발생한 XComp.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_dragProcess": function(obj, e)
		{
			var pt = obj._dragCurPt,
				drag = obj._drag;

			if ( drag == null ) return;
			
			drag.offsetX = pt.x - drag.startPt.x;
			drag.offsetY = pt.y - drag.startPt.y;
			
			if ( !drag.isOffsetFromStart )
			{
				drag.startPt = pt;
			}
			var func = obj._dragFuncs,
				addArgs;

			if ( func )
			{
				addArgs = func.args;
				func = func.draggingFunc;
			}
			if ( func )
			{
				var args = [drag.offsetX, drag.offsetY];
				if ( addArgs )
				{
					args = args.concat(addArgs);
				}
				if ( func.mouseEventInfo )
				{
					args[args.length] = e;
				}
				else
				{
					// [2015.03.12] drag 중에 shiftKey, ctrlKey 정보 추가함. 
					args[args.length] = drag.shiftkey;
					args[args.length] = drag.ctrlkey;
				}
				func.apply(this, args);
			}
		},
		
		/**
		 * 전체 화면상에 마우스를 locking 하여 강제로 대상 컴포넌트의 마우스 이벤트로 호출하게 한다.
		 *
		 * @param {XComp} XComp 마우스이벤트를 대체하고자 하는 xcomp.
		 * @private
		 * @memberOf Eco.XComp.Event
		*/
		"_lockMouseEvent": function(comp, onlyLbtnUp)
		{
			var win = comp._getWindow();
			win._mouseLockComp = comp;
			win._on_sys_lbuttonup = Eco.XComp.Event._on_default_sys_lbuttonup;
			if ( !onlyLbtnUp ) win._on_sys_mousemove = Eco.XComp.Event._on_default_sys_mousemove;
		},
		
		/**
		 * locking시에 window _on_sys_lbuttonup 함수를 이것으로 대처함.
		 * @private
		 * @memberOf Eco.XComp.Event
		*/
		"_on_default_sys_lbuttonup": function(elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
		{
			var lockComp = this._mouseLockComp,
				enableChanged = false, tmpFunc,
				visibleChanged = false;

			elem = lockComp._control_element;
			
			if ( !lockComp._isEnable() ) 
			{
				enableChanged = true;
				tmpFunc = lockComp._isEnable;
				lockComp._isEnable = function() { return true };
			}
			if ( !lockComp.visible )
			{
				visibleChanged = true;
				lockComp.visible = true;
			}

			nexacro.Window.prototype._on_default_sys_lbuttonup.call(this, elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY);
			this._on_sys_lbuttonup = nexacro.Window.prototype._on_default_sys_lbuttonup;
			this._on_sys_mousemove = nexacro.Window.prototype._on_default_sys_mousemove;

			if ( enableChanged )
			{
				lockComp._isEnable = tmpFunc;
			}
			if ( visibleChanged )
			{
				lockComp.visible = false;
			}			
			this._mouseLockComp = null;
		},

		/**
		 * locking시에 window _on_sys_mousemove 함수를 이것으로 대처함.
		 * @private
		 * @memberOf Eco.XComp.Event
		*/
		"_on_default_sys_mousemove": function(elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
		{
			elem = this._mouseLockComp._control_element;
			nexacro.Window.prototype._on_default_sys_mousemove.call(this, elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY);
		},
		
		/**
		 * 주어진 XComp에 repeat 기능를 설정한다.<br>
		 * 두번째 param 값은 function이거나, object type으로 값이 주어져야 한다.<br>
		 * function이면 repeating 되는 시점에 호출되는 함수로 설정된다.<br>
		 * object이면 object.start, object.end, object.repeating, object.repeatingStop으로 각각 함수값이 주어지는데.<br>
		 * start는 mouse down되는 시점에 호출되는 함수<br>
		 * end는 mouse up되는 시점에 호출되는 함수<br>
		 * repeating는 repeating 하는 시점에 계속 호출되는 함수이다.<br>
		 * repeatingStop는 mouse 누른 상태에서 마우스가 XComp 영역을 벗어나면 repeating 멈추게 되는데 이 멈추는 시점에 호출되는 함수이다.<br>
		 * 네번째 param인 addArgs로 주어지는 array는 함수 호출시에 추가되는 arguments이다.<br>
		 * 각 함수의 arguments은 다음과 같다.<br>
		 * start                            | end                       | repeating                       | repeatingStop<br>
		 * ----------------------------------------------------------------------------------------------------------------------------<br>
		 * x, y, addArgs[0], addArg[1], ... |addArgs[0], addArg[1], ... |x, y, addArgs[0], addArg[1], ... |addArgs[0], addArg[1], ... <br>
		 * <br>
		 * 세번째 param인 scope는 호출되는 함수 내부의 this값에 해당한다.<br>
		 * 만약 scope를 생략하면 this는 form이 된다.<br>
		 * x, y param 값은 start, repeating이 발생하는 시점의 마우스 x, y값인데 좌표기준은 XComp.parent 기준으로 처리된다.
		 * @example
		 *
		 * // 1) 2번째 인자를 function 으로 선언 시 repeat 진행 시점에 정의된 함수가 호출된다.
		 * Eco.XComp.Event.makeRepeatable(this.btn_repeat, this.onRepeating, this, [ds, this.grd_sample]);
		 *
		 * // 2) 2번째 인자를 object 로 선언 시 repeat 시작, 진행, 중단, 종료 시점에 정의된 함수가 호출된다.
		 * var repeatFunc = {
		 *      'start': this.onRepeatStart,
		 *      'repeating': this.onRepeating,
		 *      'end': this.onRepeatEnd
		 * };
		 * Eco.XComp.Event.makeRepeatable(this.btn_repeat, repeatFunc, this, [ds, this.grd_sample]);	 
		 *
		 * // repeating 시작 시점에 처리할 루틴을 정의한 함수
		 * this.onRepeatStart = function(comp)
		 * {	
		 *     trace("onRepeatStart");
		 * }
		 *
		 * // repeating 시점에 처리할 루틴을 정의한 함수
		 * this.onRepeating = function(offsetX, offsetY, obj)
		 * {
		 *     trace("onRepeating");
		 * }
		 *
		 * // repeating 중단 시점에 처리할 루틴을 정의한 함수
		 * this.onRepeatingStop = function(offsetX, offsetY, obj)
		 * {
		 *     trace("onRepeatingStop");
		 * }
		 *
		 * // repeating 종료 시점에 처리할 루틴을 정의한 함수
		 * this.onRepeatEnd = function(offsetX, offsetY, obj)
		 * {
		 *     trace("onRepeatEnd");
		 * }
		 *
		 * @param {XComp} XComp repeatable하고자 하는 xcomp.
		 * @param {object|function} repeatFunc repeating 처리 루틴에 해당하는 함수들.
		 * @param {*=} scope scope로 설정할 대상.
		 * @param {array=} args 설정된 함수 호출시 추가할 arguments을 array로 설정.
		 * @memberOf Eco.XComp.Event
		**/
		"makeRepeatable": function(XComp, repeatFunc, scope, args)
		{
			if ( Eco.isObject(repeatFunc) )
			{
				XComp._repeatFuncs = {
					"repeatStartFunc": repeatFunc.start,
					"repeatEndFunc": repeatFunc.end,
					"repeatingFunc": repeatFunc.repeating,
					"repeatStopFunc": repeatFunc.repeatingStop,
					"firstInterval": repeatFunc.firstInterval||500,
					"interval": repeatFunc.interval||100,
					"args": args
					};
			}
			else
			{
				XComp._repeatFuncs = {
					"repeatingFunc": repeatFunc,
					"firstInterval": 500,
					"interval": 100,
					"args": args
					};
			}
			Eco.XComp.Event.add(XComp,
					{
						"onlbuttondown": Eco.XComp.Event._repeatDownHandler,
					//	"onmouseenter": Eco.XComp.Event._repeatEnterHandler,
					//	"onmouseleave": Eco.XComp.Event._repeatLeaveHandler,
						"onlbuttonup": Eco.XComp.Event._repeatUpHandler
					}, scope);
		},

		/**
		 * 주어진 XComp에 repeatable 기능를 해제한다.
		 * @param {XComp} XComp repeatable기능을 해제하는 xcomp.
		 * @example
		 *
		 * Eco.XComp.Event.clearRepeatable(this.btn_repeat);
		 *		 
		 * @memberOf Eco.XComp.Event
		**/
		"clearRepeatable": function(XComp)
		{
			if ( XComp._repeatFuncs )
			{
				Eco.XComp.Event._cancelRepeatable(XComp);
				Eco.XComp.Event.remove(XComp, {"onmousemove": Eco.XComp.Event._repeatMoveHandler}, this);
				XComp._repeatStatus = null;
				XComp._repeatFuncs = null;
				Eco.XComp.Event.remove(XComp,
						{
							"onlbuttondown": Eco.XComp.Event._repeatDownHandler,
						//	"onmouseenter": Eco.XComp.Event._repeatEnterHandler,
						//	"onmouseleave": Eco.XComp.Event._repeatLeaveHandler,
							"onlbuttonup": Eco.XComp.Event._repeatUpHandler
						});
			}
		},

		/**
		 * repeating 기능을 취소하기 위해 내부적으로 사용하는 함수.
		 * @param {XComp} XComp repeating 기능을 취소하고자 하는 XComp.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_cancelRepeatable": function(XComp)
		{
			if ( XComp._timeId != null )
			{
					nexacro._clearSystemTimer(XComp._repeatFuncs._win_handle, XComp._timeId);
					XComp._timeId = null;
			}
			if ( XComp._reqId != null )
			{
				Eco.XComp.Event.cancelAnimationFrame(XComp._reqId);
				XComp._reqId = null;
			}
			var curPoint = XComp._curPoint;
			if ( curPoint )
			{
				XComp._curPoint = null;
			}
		},

		/**
		 * repeating 기능을 처리하기 위해 내부적으로 설정하는 onlbuttondown event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_repeatDownHandler": function(obj, e)
		{
			//Eco.XComp.Event._lockMouseEvent(obj, true);
			Eco.XComp.Event._lockMouseEvent(obj);

			Eco.XComp.Event.add(obj, {"onmousemove": Eco.XComp.Event._repeatMoveHandler}, this);
			
			obj._curPoint = {x:e.clientX, y:e.clientY};			

			var func = obj._repeatFuncs,
				args, addArgs;

			if ( func )
			{
				addArgs = func.args;
				func = func.repeatStartFunc;
				if ( !func )
				{
					func = null;
				}
			}

			if ( func )
			{
				var pt = obj._curPoint;
				args = [pt.x, pt.y];
				if ( addArgs )
				{
					args = args.concat(addArgs);
				}
				func.apply(this, args);
			}

			var repeatConf = obj._repeatFuncs, pThis = this;
			repeatConf._win_handle = obj._getReferenceContext()._getWindowHandle();
			obj._repeatStatus = "firstRepeat";
			obj._timeId = nexacro._setSystemTimer(repeatConf._win_handle, 
				function() {
					Eco.XComp.Event._repeatProcess.call(pThis, obj); //func, scope(default: topForm), func's arguments
				}, repeatConf.firstInterval);
			//Eco.XComp.Event._repeatProcess.call(this, obj);
		},

		/**
		 * repeating 기능을 처리하기 위해 내부적으로 설정하는 onlbuttonup event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_repeatUpHandler": function(obj, e)
		{
			//console.log("_repeatUpHandler", obj);
			Eco.XComp.Event.remove(obj, {"onmousemove": Eco.XComp.Event._repeatMoveHandler}, this);
			var repeatConfig = obj._repeatFuncs,
				  args, addArgs;

			Eco.XComp.Event._cancelRepeatable(obj);
			if ( e.clientX > 0 && e.clientY > 0 &&
				e.clientX < obj.getOffsetWidth() &&
				e.clientY < obj.getOffsetHeight() )
			{
				if ( obj._repeatStatus != "repeat" )
				{
					var repeatingFunc, repeatingArg;
					if ( repeatConfig )
					{
						addArgs = repeatConfig.args;
						repeatingFunc = repeatConfig.repeatingFunc;
						if ( !repeatingFunc )
						{
							repeatingFunc = null;
						}
					}
					if ( repeatingFunc )
					{
						repeatingArg = [e.clientX, e.clientY];
						if ( addArgs )
						{
							repeatingArg = repeatingArg.concat(addArgs);
						}
						repeatingFunc.apply(this, repeatingArg);
					}
				}
			}

			var repeatEndFunc;
			addArgs = null;
			if ( repeatConfig )
			{
				addArgs = repeatConfig.args;
				repeatEndFunc = repeatConfig.repeatEndFunc;
				if ( !repeatEndFunc )
				{
					repeatEndFunc = null;
				}
			}

			if ( repeatEndFunc )
			{
				if ( !addArgs )
				{
					addArgs = [];
				}
				repeatEndFunc.apply(this, addArgs);
			}						
		},
		/**
		 * repeating 기능을 처리하기 위해 내부적으로 설정하는 onmousemove event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_repeatMoveHandler": function(obj, e)
		{
			if ( e.clientX < 0 || e.clientY < 0 ||
				e.clientX > obj.getOffsetWidth() ||
				e.clientY > obj.getOffsetHeight() )
			{
				if ( obj._repeatStatus == "firstRepeat" ||
					obj._repeatStatus == "repeat" )
				{
					obj._repeatStatus = "stop";
					Eco.XComp.Event._cancelRepeatable(obj);
					var func = obj._repeatFuncs,
						addArgs;
					if ( func )
					{
						addArgs = func.args;
						func = func.repeatStopFunc;
						if ( !func )
						{
							func = null;
						}
					}
	
					if ( func )
					{
						if ( !addArgs )
						{
							addArgs = [];
						}
						func.apply(this, addArgs);
					}
				}
			}
			else
			{
				var curPoint = obj._curPoint;
				if ( !curPoint )
				{
					curPoint = {x: e.clientX, y: e.clientY};
					obj._curPoint = curPoint;
				}
				else
				{
					curPoint.x = e.clientX;
					curPoint.y = e.clientY;
				}

				if ( obj._repeatStatus == "stop" )
				{
					var repeatConf = obj._repeatFuncs, pThis = this;
					obj._repeatStatus = "firstRepeat";
					obj._timeId = nexacro._setSystemTimer(repeatConf._win_handle, function() {
							Eco.XComp.Event._repeatProcess.call(pThis, obj); //func, scope(default: topForm), func's arguments
						}, repeatConf.firstInterval);
				}
			}
		},
		/**
		 * repeating 기능을 처리하기 위해 내부적으로 설정하는 함수<br>
		 * 이 함수는 XCompEvent.requestAnimationFrame을 통해 호출되는데 내부적으로 timer 호출이 된다.<br>
		 * 이렇게 호출하는 것은 repeating 중간에 화면 render가 존재하면 smooth하게 처리되는 이점이 있다.
		 * @param {XComp} obj repeating 발생한 XComp.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_repeatProcess": function(obj)
		{
			var status = obj._repeatStatus; //firstRepeat, repeat, stop
			if ( obj._reqId != null )
			{
				Eco.XComp.Event.cancelAnimationFrame(obj._reqId);
				obj._reqId = null;
			}
			if ( status == "stop" )
			{
				nexacro._clearSystemTimer(obj._repeatFuncs._win_handle, obj._timeId);
				obj._timeId = null;
				return;
			}
			//obj._reqRepeatId = Eco.XComp.Event.requestAnimationFrame(Eco.XComp.Event._repeatProcess, this, obj); //func, scope(default: topForm), func's arguments
			if ( status == "firstRepeat" )
			{
				nexacro._clearSystemTimer(obj._repeatFuncs._win_handle, obj._timeId);
				obj._timeId = null;
			}

			var func = obj._repeatFuncs,
				args, addArgs;

			if ( func )
			{
				addArgs = func.args;
				func = func.repeatingFunc;
				if ( !func )
				{
					func = null;
				}
			}

			if ( func )
			{
				var curPoint = obj._curPoint;
				if ( curPoint )
				{
					args = [curPoint.x, curPoint.y];
				}
				else
				{
					args = [-1, -1];
				}
				if ( addArgs )
				{
					args = args.concat(addArgs);
				}
				obj._reqId = Eco.XComp.Event.requestAnimationFrame(function() { 
					func.apply(this, args);
				}, this);
			}
			if ( status == "firstRepeat" )
			{
				var pThis = this;
				obj._repeatStatus = "repeat";	
				obj._timeId = nexacro._setSystemTimer(obj._repeatFuncs._win_handle, 
					function() {
						Eco.XComp.Event._repeatProcess.call(pThis, obj); //func, scope(default: topForm), func's arguments
					}, obj._repeatFuncs.interval);
			}
		},

		/**
		 * requestAnimationFrame 기능<br>
		 * callback 함수 내부의 this는 주어진 scope가 된다.<br>
		 * func 내부 루틴에서 화면 render가 존재하면 smooth하게 처리되는 이점이 있다.
		 * 실행하고자 하는 루프 function 에서 requestAnimationFrame 을 호출하고 callback 함수로
		 * 자기 자신을 호출하는 recursive 방식을 사용한다.
		 * @example
		 *
		 * this.renderLoop = function()
		 * {
		 * 	   // something animation code
		 * 	
		 *     var reqId = Eco.XComp.Event.requestAnimationFrame(this.renderLoop, this);
		 * }
		 *
		 * this.renderLoop();
		 *
		 * @param {function} callback 콜백 함수
		 * @param {*} scope callback 함수 내부에서 this 로 사용할 개체.
		 * @param {...} 호출하는 함수의 arguments
		 * @return {number} request id.
		 * @memberOf Eco.XComp.Event
		**/
		"requestAnimationFrame": function(callback, scope)
		{
			var args;
			if ( arguments.length > 2 ) //callback, scope, ....
			{
				args = Eco.array.toArray(arguments, 2);
			}
			else
			{
				args = [];
			}
			
			var isRuntime = nexacro._init_platform_runtime;
			var useSetTimeout = Eco.XComp.Event._requestAnimationFrameUseSetTimer;
			if( useSetTimeout === undefined ) useSetTimeout = false;
			
			var rAF = Eco.XComp.Event._requestAnimationFrame;
			if ( !rAF )
			{
				 // Runtime
				if ( isRuntime )
				{
					// 현재 Runtime 에는 requestAnimationFrame 이 없으므로 timer 를 이용한다.
					// (현재 성능이 썩 좋지 않다... 엔진에 기능 추가될 예정임)
					rAF = function(form, callback, lastTimeRef) {
						var lastTime = lastTimeRef.lastTime;
						var currTime = (Date.now ? Date.now() : (new Date).getTime());
						var interval = (1000/60) + lastTime - currTime;
						
						if ( interval < 0 ) interval = 0;
					
						var id = nexacro.OnceCallbackTimer.callonce(form, function(){
							lastTimeRef.lastTime = (Date.now ? Date.now() : (new Date).getTime());
							callback();
						}, interval);
						
						return id;
					};
				}
				else	// HTML
				{
					// HTML - 브라우저별로 requestAnimationFrame 가 다를 수 있으므로 체크한다.
					var context = JsNamespace.getGlobalContext();
					rAF = context.requestAnimationFrame;
					if ( !rAF )
					{
						var vendors = ['ms', 'moz', 'webkit', 'o'];
						for(var x = 0; x < vendors.length && !rAF; ++x) {
							rAF = context[vendors[x]+'RequestAnimationFrame'];
						}
						if ( !rAF )
						{
							rAF = function(callback, lastTimeRef) {
								var lastTime = lastTimeRef.lastTime;
								var currTime = (Date.now ? Date.now() : (new Date).getTime());
								var interval = (1000/60) + lastTime - currTime;
								
								if ( interval < 0 ) interval = 0;

								var id = context.setTimeout(function(){
									lastTimeRef.lastTime = (Date.now ? Date.now() : (new Date).getTime());
									callback();
								}, interval);
								
								return id;
							};
							
							Eco.XComp.Event._requestAnimationFrameUseSetTimer = true;
							useSetTimeout = true;
						}
					}
				}
				
				Eco.XComp.Event._requestAnimationFrame = rAF;
			}
			
			/*
				RequestAnimationFrame 이 없는 브라우저(런타임 포함)에 유사 기능을
				사용하기 위해 timer 를 사용하는데 시간 계산을 위한 lastTime 이
				필요하다. 동일한 callback에 대해 하나의 lastTime 값이 필요하므로
				속성으로 추가하여 사용하고 cancelAnimationFrame 에서 삭제한다.
			*/
			if ( !Eco.XComp.Event._requestAnimationFrameLastTimeInfo )
			{
				Eco.XComp.Event._requestAnimationFrameLastTimeInfo = {};
			}
						
			var id;
			if ( isRuntime )
			{
				var form = Eco.XComp.Event._getRequestAnimationFrameForm(scope);
				var callbackString = callback.toString();
				var lastTimeRef = Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callbackString];
				if ( lastTimeRef === undefined )
				{	
					Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callback.toString()] = {'lastTime': 0, 'timers':[]};
					lastTimeRef = Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callbackString];
				}
				
				var timer = rAF(form, function() { callback.apply(scope, args); }, lastTimeRef);
				
				id = timer._handle;
				
				// cancel 시 제거할 대상을 위해 지정
				lastTimeRef.id = id;
				lastTimeRef.timers.push(timer);
			}
			else if ( useSetTimeout )
			{
				var callbackString = callback.toString();
				var lastTimeRef = Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callback.toString()];
				if ( lastTimeRef === undefined )
				{	
					Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callbackString] = {'lastTime': 0};
					lastTimeRef = Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callbackString];
				}
				
				id = rAF(function() { callback.apply(scope, args); }, lastTimeRef);
				
				// cancel 시 제거할 대상을 위해 지정
				lastTimeRef.id = id;				
			}
			else
			{
				id = rAF(function() { callback.apply(scope, args); });
			}
						
			return id;
		},
		
		/**
		 * requsetAnimationFrame 기능이 없는 런타임을 위한 것으로<br>
		 * scope 의 ReferenceContext 통해 form 을 찾고 없으면 mainframe의 첫번째 폼을 찾아서 반환.
		 * @param {*} scope requestAnimationFrame 호출시 지정한 scope.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/		
		"_getRequestAnimationFrameForm": function(scope)
		{
			var form;					
			if ( scope._getReferenceContext )
			{
				// scope ==> Form, Component
				form = scope._getReferenceContext();
			}
			else
			{
				var c = application.mainframe.all[0];
				do {
					if ( c instanceof ChildFrame )
					{
						break;
					}
					c = c.all[0];
				}
				while ( true )
				
				form = c.form;
			}
			return form;
		},
		
		/**
		 * requestAnimationFrame 호출한 것을 중지하고자 할때 사용하는 함수.<br>
		 * requestAnimationFrame의 return 값으로 id값이 나온다. 이것을 이 함수 argument로 넘겨준다.
		 * @example
		 * 
		 * Eco.XComp.Event.cancelAnimationFrame(reqId);
		 *
		 * @param {number} id requestAnimationFrame id.
		 * @memberOf Eco.XComp.Event
		**/
		"cancelAnimationFrame": function(id)
		{			
			var cAF = Eco.XComp.Event._cancelAnimationFrame;
			
			if ( !cAF )
			{
				// Runtime
				if ( nexacro._init_platform_runtime )
				{
					cAF = function(id) {
						var lastTimeInfo = Eco.XComp.Event._requestAnimationFrameLastTimeInfo;
						if ( lastTimeInfo )
						{
							for (var p in lastTimeInfo)
							{
								if ( lastTimeInfo.hasOwnProperty(p) )
								{
									if ( id == lastTimeInfo[p].id )
									{
										var timers = lastTimeInfo[p].timers;
										for (var i=0,len=timers.length; i<len ; i++)
										{
											timers[i].destroy();
											timers[i] = null;
										}
										
										lastTimeInfo[p] = null;
										delete lastTimeInfo[p];			
										break;
									}
								}
							}
						}
					};
				}
				else
				{
					var context = JsNamespace.getGlobalContext();
					cAF = context.cancelAnimationFrame;
					
					if ( !cAF )
					{
						var vendors = ['ms', 'moz', 'webkit', 'o'];
						for(var x = 0; x < vendors.length && !cAF; ++x) {
							cAF = context[vendors[x]+'CancelAnimationFrame'] 
                               || context[vendors[x]+'CancelRequestAnimationFrame'];
						}
						
						if ( !cAF )
						{
							cAF = function(id) {
							
								context.clearTimeout(id);
								
								var lastTimeInfo = Eco.XComp.Event._requestAnimationFrameLastTimeInfo;
								if ( lastTimeInfo )
								{
									for (var p in lastTimeInfo)
									{
										if ( lastTimeInfo.hasOwnProperty(p) )
										{
											if ( id == lastTimeInfo[p].id )
											{
												lastTimeInfo[p] = null;
												delete lastTimeInfo[p];
												break;
											}
										}
									}
								}
							};
						}
					} // end if ( !cAF )
					
				}
				
				Eco.XComp.Event._cancelAnimationFrame = cAF;
			}
			
			cAF(id);
		}
		
	});
}

/**
 * @fileoverview LocalStorage와 관련된 함수.
 * key/value 쌍으로 data를 저장한다.
 */
 
if ( !JsNamespace.exist("Eco.LocalStorage") )
{
	/**
	 * @namespace
	 * @name Eco.LocalStorage
	 * @memberof! <global>
	 */
	JsNamespace.declare("Eco.LocalStorage", {
	

	/**
	 * key/value 쌍으로 data를 저장한다.<br>
	 * @param {string} key The key.
	 * @param {string} value The associated value for key.
	 * @param {boolean=} common Whether to bring data in common area(default:false). RUNTIME Only.
	 * @return {boolean} 성공시 true, 실패시 false를 반환한다.
	 * @memberOf Eco.LocalStorage
	 */		
	setItem: function(key, value, common)
   	{ 
		return nexacro.Application.setPrivateProfile(key, value, common);
	},    
 
	
	/**
	 * key에 해당하는 data를 반환한다.<br>
	 * @param {string} key The key.
	 * @param {boolean=} common Whether to bring data in common area(default:false). RUNTIME Only.
	 * @return {string|null} key에 해당하는 값.
	 * @memberOf Eco.LocalStorage
	 */		
	getItem: function(key, common)
   	{ 
		return nexacro.Application.getPrivateProfile(key, common);
	}
	
	});
	
	var me = Eco.LocalStorage;
	//removeItem(), clear() 별도처리. 향후 엔진에 적용되면 없앨 것.
	if(nexacro.Browser.toUpperCase() == "RUNTIME") {
		//런타임 내부의 data 저장방식을 알 수 없어 처리 불가.
		me.removeItem = nexacro._emptyFn;
		me.clear = nexacro._emptyFn;
		
	//HTML5	
	} else {
	    if (nexacro.Browser == "IE" && nexacro.BrowserVersion == 6)
	    {
	    	me.removeItem = nexacro._emptyFn;
	    	me.clear = nexacro._emptyFn;
	    }
	    else if (nexacro.Browser == "IE" && nexacro.BrowserVersion == 7)
	    {    
	    	me.removeItem = function(key) {
	            var localstoragekey = application.key + application.xadl;
	            var iframenode = nexacro._managerFrameNode;
	            if (iframenode)
	            {
	                iframenode.load(localstoragekey);
	                var attribute = iframenode.getAttribute(key);
	                if (attribute)
	                {
	                	iframenode.removeAttribute(key);
	                }            	
	            }
		    }
	    	
	    	me.clear = function() {
	            var localstoragekey = application.key + application.xadl;
	            var iframenode = nexacro._managerFrameNode;
	            if (iframenode)
	            {
	                iframenode.load(localstoragekey);
	                var attribute = iframenode.getAttribute(key);
	                if (attribute)
	                {
	                	//http://msdn.microsoft.com/en-us/library/ms536350(v=vs.85).aspx
	                	iframenode.clearAttributes();
	                }            	
	            }
		    }	    	
	    }
	    else 
	    {
	    	/**
	    	 * localStorage에서 key에 해당하는 key/value를 제거한다(RUNTIME 미지원).<br>
	    	 * @param {string} key The key.
	    	 * @memberOf Eco.LocalStorage
	    	 */			    	
	    	Eco.LocalStorage.removeItem = function(key) {
	            var localstorage = window.localStorage;
	            if (localstorage)
	            {
	                var localstoragekey = application.key + application.xadl;
	                if (localstoragekey)
	                {
	                    var localstoragedata = localstorage.getItem(localstoragekey);
	                    var jsondata = {};
	                    
	                    if (localstoragedata)
	                    {
	                        jsondata = JSON.parse(localstoragedata);
	                    }
	                    
	                    var findkey = jsondata[key];
	                    if (findkey)
	                    {
	                    	delete jsondata[key];
	                    	
	                    	localstorage.setItem(localstoragekey, JSON.stringify(jsondata));
	                    }
	                }
	            }
		    	
		    }
	    	
	    	
	    	/**
	    	 * localStorage에서 모든 key/value를 제거한다(RUNTIME 미지원).<br>
	    	 * @memberOf Eco.LocalStorage
	    	 */			    	
	    	Eco.LocalStorage.clear = function() {
	            var localstorage = window.localStorage;
	            if (localstorage)
	            {
	                var localstoragekey = application.key + application.xadl;
	                if (localstoragekey)
	                {
	                	var jsondata = {};	
	                	localstorage.setItem(localstoragekey, JSON.stringify(jsondata));
	                }
	            }
		    	
		    }	 	    	
	    	
	    }
		
	}

}  
		 
		 



/**
 * @fileoverview
 * XComp를 application 실행중 동적생성시<br>
 * cache 처리하여 매번 create하지 않고 처리되는 기능을 담고 있는 함수들의 집합 Namespace이다.<br> 
 */

if ( !JsNamespace.exist("Eco.XComp.Factory") )
{
	/**
	 * @description
	 * Factory.js파일 at nexacro® software.
	 *
	 * Eco.XComp.Factory Namespace 정의<br>
	 * XComp를 application running시에 동적으로 생성을 필요시에 cache 처리하여 매번 create하지 않고<br> 
	 * 처리되는 기능을 담고 있는 함수들의 집합 Namespace이다.<br>
	 *<br>
	 * Eco.XComp.Factory 생성된 컴포넌트들 관리 방법<br>
	 *<br>
	 * 주어지는 form 컴포넌트에 사용자 속성으로 [_used], [_cache] 명칭의 simple object가 존재하게 된다.<br>
	 *<br>
	 * pool명칭을 지정하지 않은 경우<br>
	 * -----------------------------------------------<br>
	 * _defaultUsed :  사용중인 _id 값으로 이루어진 object collection <br>
	 * _defaultCache :  [comp Type명칭] 속성으로 사용하지 않은 comp를 담고 있는 array<br>
	 *<br>
	 * pool명칭을 지정한 경우<br>
	 * -----------------------------------------------<br>
	 * _used : [pool명칭] 속성으로 사용중인 _id 값으로 이루어진 object collection<br>
	 * _cache : [pool명칭] 속성으로 사용하지 않은 comp를 담고 있는 array<br>
	 *<br>
	 * 또한 XComp 속성 값 할당 및 position, size 변경 처리를 <br>
	 * XComp에 바로 반영하지 않고 예약 기록하여 필요시 한번에 처리하여<br>
	 * 불필요한 화면 render 줄이는 기능을 담고 있다. <br>
	 * Copyright (c) 2013 EcoSystem of nexacro.<br>
	 * Licensed Free under nexacro® software.
	 * @namespace
	 * @name Eco.XComp.Factory
	 * @memberof! <global>
	*/

	JsNamespace.declare("Eco.XComp.Factory", {
	
		/**
		 * 주어진 p 즉 form(div, tabpage포함)에 종속된 comp 중에서 사용되고 있는 것에 해당하고,<br>
		 * 주어진 name과 comp._id가 일치하는 comp 얻는 함수<br>
		 * 단 Factory로 통해서 생성된 경우만 해당된다.<br>
		 * p 첫번쨰 인자는 form, div, tabpage 구성되거나, object로 {target: (form|div|tabpage), poolName: "rowobjs"} 구성 될 수 있다.<br>
		 * object로 주어질때는 poolName를 임의로 지정하여 사용하는 경우이다.<br>
		 * @param {form|div|tabpage|object} p form에 해당하는 XComp 또는 p.target, p.poolName가지는 object.
		 * @param {string} name 찾고자 하는 comp._id.
		 * @return {XComp} name 해당하는 comp.
		 * @example
		 * trace(Eco.XComp.Factory.getXCompByName(Div00, "item01"));	// output : _id가 item01인 comp
		 * @memberOf Eco.XComp.Factory
		 */
		"getXCompByName": function(p, name)
		{
			var poolName = "default",
				target = p;

			if ( Eco.isObject(p) )
			{
				target = p.target;
				poolName = p.poolName;
			}
			var used = Eco.XComp.Factory._getUsed(target, poolName);
			if ( used )
			{
				return used[name];
			}
		},
		/**
		 * 주어진 p 즉 form(div, tabpage포함)에 설정되어진 cache array를 얻는  함수<br>
		 * 만약 poolName이 [default] 인데 isCreate가 true이고 주어진 type 값이 없으면 [default] collection를 return한다.
		 * @param {form|div|tabpage} p form, div, tabpage
		 * @param {string} poolName pool 명칭.
		 * @param {string=} type pool 명칭이 default일 때 XComp type명칭이다.
		 * @param {boolean=} isCreate pool 이 존재하지 않으면 생성 처리한다.
		 * @return {array}  사용하지 않고 cache된 comp array
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_getCache": function(p, poolName, type, isCreate)
		{
			var cache;
			if ( poolName == "default" )
			{
				cache = p._defaultCache;
				if ( isCreate && !cache )
				{
					p._defaultCache = {};
					cache = p._defaultCache;
				}
				if ( !cache ) return null;
				if ( !type || !type.length )
				{
					Eco.Logger.error({message:"poolName이 'default'면 type값이 반드시 존재해야 합니다.", stack: true});
				}
				var typeCache = cache[type];
				if ( isCreate && !typeCache )
				{
					cache[type] = [];
					typeCache = cache[type];
				}
				return typeCache;
			}
			else
			{
				cache = p._cache;
				if ( isCreate && !cache )
				{
					p._cache = {};
					cache = p._cache;
				}
				if ( !cache ) return null;
				var namedCache = cache[poolName];
				if ( isCreate && !namedCache )
				{
					cache[poolName] = [];
					namedCache = cache[poolName];
				}
				return namedCache;
			}
		},
		/**
		 * 주어진 p 즉 form(div, tabpage포함)에 설정되어진 사용하고 있는 comp들의 collection를 얻는  함수
		 * @param {form|div|tabpage} p form.
		 * @param {string} poolName pool 명칭.
		 * @param {boolean=} isCreate pool 이 존재하지 않으면 생성 처리한다.
		 * @return {object} 사용된 comp를 id별로 담고 있는 object collection
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_getUsed": function(p, poolName, isCreate)
		{
			var used;
			if ( poolName == "default" )
			{
				used = p._defaultUsed;
				if ( isCreate && !used )
				{
					p._defaultUsed = {};
					used = p._defaultUsed;
				}
			}
			else
			{
				used = p._used;
				if ( isCreate && !used )
				{
					used = {};
					p._used = used;
				}
				if ( !used ) return null;

				var tmpPoolUsed = used[poolName];

				if ( isCreate && !tmpPoolUsed )
				{
					tmpPoolUsed = {};
					used[poolName] = tmpPoolUsed;
				}
				return tmpPoolUsed;
			}
			return used;
		},		
		/**
		 * 주어진 p 즉 form(div, tabpage포함)에 종속된 comp을 얻는 함수<br>
		 * 주어진 nm으로 comp._id을 설정한다. 필요시에는 cache된 comp를 재 사용한다.
		 * p 첫번쨰 인자는 form이거나, object로 {target: form객체, poolName: "rowobjs"} 구성 될 수 있다.
		 * object로 주어질때는 poolName를 임의로 지정하여 사용하는 경우이다.
		 * @param {form|div|tabpage|object} p form에 해당하는 XComp 또는 p.target, p.poolName가지는 object.
		 * @param {string} type XComp type.
		 * @param {string} nm 설정하고자 하는 comp._id.
		 * @return {XComp} 동적으로 생성되거나, cache에서 재 사용된 comp.
		 * @example
		 * trace(Eco.XComp.Factory.getXComp(Div00, "Static", "item01"));	// output : _id가 item01인 Static's comp
		 * @memberOf Eco.XComp.Factory
		 */
		"getXComp": function(p, type, nm)
		{
			var xcomp,
				poolName = "default",
				target = p,
				cache,
				factory = Eco.XComp.Factory;

			if ( Eco.isObject(p) )
			{
				target = p.target;
				poolName = p.poolName;
			}

			cache = factory._getCache(target, poolName, type);

			var compNm;

			if ( !Eco.isString(nm) ) compNm = null;
			else compNm = nm;

			
			if ( cache && cache.length)
			{
				xcomp = cache.pop();
				xcomp._id = compNm || xcomp._id || xcomp.name;
			}
			else
			{
				var ctor = factory._getConstructor(type);
				if ( !ctor )
				{
					Eco.Logger.error({"message": "type(" + type + ") is not exist!", stack: true});
				}
				xcomp = new ctor();
				xcomp.init(Eco.getUniqueId(type + "_"), "absolute", 0, 0, 0, 0);
				target.addChild(xcomp.name, xcomp);
				xcomp.show();
				xcomp._id = compNm || xcomp.name;
			}
			var argLens = arguments.length;
			if ( argLens > 2 )
			{
				var rect, args;
				if ( Eco.isString(arguments[2])) //nm 이후 rect 처리
				{
					if ( argLens == 4 )
					{
						factory.setRect(xcomp, arguments[3]);
					}
					else if ( argLens == 5 )
					{
						factory.setRect(xcomp, arguments[3], arguments[4]);
					}
					else if ( argLens == 6 )
					{
						factory.setRect(xcomp, arguments[3], arguments[4], arguments[5]);
					}
					else if ( argLens == 7 )
					{
						factory.setRect(xcomp, arguments[3], arguments[4], arguments[5], arguments[6]);
					}
				}
				else if ( arguments[2] != null )
				{
					if ( argLens == 3 )
					{
						factory.setRect(xcomp, arguments[2]);
					}
					else if ( argLens == 4 )
					{
						factory.setRect(xcomp, arguments[2], arguments[3]);
					}
					else if ( argLens == 5 )
					{
						factory.setRect(xcomp, arguments[2], arguments[3], arguments[4]);
					}
					else if ( argLens == 6 )
					{
						factory.setRect(xcomp, arguments[2], arguments[3], arguments[4], arguments[5]);
					}
				}
			}
			factory.setProperties(xcomp, "visible", true);

			var used = factory._getUsed(target, poolName, true);
			used[xcomp._id] = xcomp;
			return xcomp;
		},
		/**
		 * type에 해당하는 생성자를 얻는 함수이다.
		 * @param {string} type XComp type.
		 * @return {xcomp constructor} xpcomp 생성자
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_getConstructor": function(type)
		{
			var context = JsNamespace.getGlobalContext();
			return context[type];
		},
		/**
		 * 주어진 c 즉 XComp을 재활용하기 위해 visible false 처리하는 함수<br>
		 * 두번째 clear는 기 정의된 속성값을 모두 clear할 것인지 flag이다.
		 * @param {XComp} c XComp.
		 * @param {boolean=} clear 정의된 속성값 clear 할 것인지?.
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_recycle": function(c, clear)
		{
			var setPropFunc = Eco.XComp.Factory.setProperties;

			if ( clear )
			{
				if ( c._computeStyles )
				{
					delete c["_computeStyles"];
				}
				c._props = null;
				var props = c._curProps;
				if ( props )
				{
					for ( var prop in props )
					{
						if ( prop != "visible" && props.hasOwnProperty(prop) )
						{
							setPropFunc(c, prop, ""); //comp 속성 값 구성 할 때 null 값은 오류 발생됨
						}
					}
					//c._curProps = null;
				}
				setPropFunc(c, "visible", false);
				//console.log("_recycle==>", c.id, c._props);
			}
			else
			{
				setPropFunc(c, "visible", false);
			}
		},
		/**
		 * 주어진 c 즉 XComp의 설정된 rect 정보를 얻는다.<br>
		 * 변경할 예정이거나, 이미 변경된 rect 정보를 얻는다.
		 * @param {XComp} c XComp.
		 * @return {object} x, y, width, height로 된 객체.
		 * @memberOf Eco.XComp.Factory
		 */
		"getRect": function(c)
		{
			var tmpRect = c._rect || c._curRect;
			if ( !tmpRect )
			{
				tmpRect = {x:c.getPixelLeft(), y:c.getPixelTop(), width:c.getPixelWidth(), height:c.getPixelHeight()};
			}
			return tmpRect;
		},
		
		/**
		 * XComp의 boder,margin,scrollbar width 크기를 제외한 client 영역 width 를 반환한다.
		 ** @param {XComp} XComp nexacro component
		 * @return {number} client 영역 width
		 * @memberOf Eco.XComp.Factory
		 */
		"getClientWidth": function(XComp)
		{
			var wholeWidth = Eco.XComp.Factory.getRect(XComp).width;
			return Eco.XComp.PositionSize.getClientWidth(XComp, wholeWidth);
		},
			
		/**
		 * XComp의 boder,margin,scrollbar height 크기를 제외한 client 영역 height 를 반환한다.
		 * @param {XComp} XComp nexacro Component
		 * @return {number} client 영역 height
		 * @memberOf Eco.XComp.Factory
		 */
		"getClientHeight": function(XComp)
		{
			var wholeHeight =  Eco.XComp.Factory.getRect(XComp).height;
			return Eco.XComp.PositionSize.getClientHeight(XComp, wholeHeight);
		},
						
		 /**
		 * 컴포넌트에 입력받은 스타일 적용했을 경우(실제적용 없음)<br>
		 * 모양을 표시하기 위한 최소 크기(너비,높이) 반환.
		 * <pre>
		 * ※ 크기에 영향을 미치는 요소는 다음과 같다.
		 *    - margin
		 *    - border
		 *    - padding
		 *    - text
		 * </pre>
		 * @param {XComp} XComp nexacro Component
		 * @param {string} text text
		 * @param {Eco.CssItem} CssItem {@link Eco.CssItem}를 사용한 스타일 속성정보
		 * @return {array} [너비, 높이]
		 * @memberOf Eco.XComp.Factory
		 */		 
		"getContentSizeWithStyle": function(XComp, text, styleSheet)
		{
			if(Eco.isEmpty(styleSheet))
			{
				Eco.Logger.error({message:"styleSheet(스타일 속성정보)는 필수 입력값 입니다."
				                   , stack: true});
				return;
			}
			
			//border 변수를 사용하면 object가 반환됨. why??? 2013.09.30.1 버전
			//그래서 변수앞에 underscore를 사용함
			var _margin = styleSheet.getMargin(),
			    _border = styleSheet.getBorder(),
			    _padding = styleSheet.getPadding();
			
			//font를 적용한 텍스트 size 계산.
			var tempFont = styleSheet.getFont()["_font"];
			var textSize = nexacro._getTextSize2(text, tempFont);
			
			_border = _border.getLeft().getWidth() * 2;
			
			var etcWidth = _margin.getLeft()  + _margin.getRight() + _border +
			               _padding.getLeft() + _padding.getRight();
			var etcHeight = _margin.getTop()  + _margin.getBottom() + _border +
			                _padding.getTop() + _padding.getBottom();

			return [textSize[0] + etcWidth, textSize[1] + etcHeight];
		},
		
		/**
		 * 주어진 c 즉 XComp의 rect 정보를 설정한다.<br>
		 * Eco.XComp.Factory.doLayout 함수를 호출하기 전까지 실질로 화면상에 변경이 발생하지 않는다.
		 * 설정된 정보를 _rect에 가지고 있다가 doLayout함수 호출하는 시점에 반영하고 _rect정보는 clear된다.
		 * @param {XComp} c XComp.
		 * @param {...*} x, y, width, height 또는 size 정보인 (width, height)객체 또는 x, y 인자로 구성 될 수 있다.
		 * @memberOf Eco.XComp.Factory
		 */
		"setRect": function(c)
		{
			var argsLen = arguments.length;
			var curRect = c._curRect;
			var rect = c._rect;

			if ( argsLen == 5 ) //x, y, width, height
			{
				if ( rect )
				{
					rect.x = arguments[1];
					rect.y = arguments[2];
					rect.width = arguments[3];
					rect.height = arguments[4];
					
				}
				else
				{
					rect = {x: arguments[1], y: arguments[2], width: arguments[3], height: arguments[4]};
				}
			}
			else if ( argsLen == 3 ) //point, size or x, y
			{
				if ( Eco.isNumber(arguments[1]) )
				{
					if ( rect )
					{
						rect.x = arguments[1];
						rect.y = arguments[2];
					}
					else
					{
						rect = {x: arguments[1], y: arguments[2], width: 0, height: 0};
					}
				}
				else if ( arguments[1] != null && arguments[2] != null && Eco.isNumber(arguments[1].x) && Eco.isNumber(arguments[1].width) )
				{
					if ( rect )
					{
						rect.x = arguments[1].x;
						rect.y = arguments[1].y;
						rect.width = arguments[2].width;
						rect.height = arguments[2].height;
					}
					else
					{
						rect = {x: arguments[1].x, y: arguments[1].y, width: arguments[2].width,  height: arguments[2].height};
					}
				}
				else
				{
					Eco.Logger.error("arguments are not correct! =>" + Eco.Logger.inspect(arguments, false, 0, false));
				}
			}
			else if ( argsLen == 2 ) //point or size or rectangle
			{
				if ( arguments[1] == null || Eco.isNumber(arguments[1]) )
				{
					Eco.Logger.error("arguments are not correct! =>" + Eco.Logger.inspect(arguments, false, 0, false));
				}
				if ( Eco.isNumber(arguments[1].x) && Eco.isNumber(arguments[1].width) ) //rect
				{
					rect = {x: arguments[1].x, y: arguments[1].y, width: arguments[1].width,  height: arguments[1].height};
				}
				else if ( Eco.isNumber(arguments[1].width) ) //size
				{
					if ( rect )
					{
						rect.width = arguments[1].width;
						rect.height = arguments[1].height;
					}
					else
					{
						rect = {x: 0, y: 0, width: arguments[1].width, height: arguments[1].height};
					}
				}
				else if ( Eco.isNumber(arguments[1].x) ) //point
				{
					if ( rect )
					{
						rect.x = arguments[1].x;
						rect.y = arguments[1].y;
					}
					else
					{
						rect = {x: arguments[1].x, y: arguments[1].y, width: 0, height: 0};
					}
				}
			}
			else if ( argsLen == 4 ) // x, y, size or pt, width, height
			{
				if ( Eco.isNumber(arguments[2]) && Eco.isNumber(arguments[3]) && arguments[1] != null && Eco.isNumber(arguments[1].x) ) //pt, width, height
				{
					if ( rect )
					{
						rect.x = arguments[1].x;
						rect.y = arguments[1].y;
						rect.width = arguments[2];
						rect.height = arguments[3];
					}
					else
					{
						rect = {x: arguments[1].x, y: arguments[1].y, width: arguments[2], height: arguments[3]};
					}
				}
				else if ( Eco.isNumber(arguments[1]) && Eco.isNumber(arguments[2]) && arguments[3] != null && Eco.isNumber(arguments[3].width) ) //x, y, size
				{
					if ( rect )
					{
						rect.x = arguments[1];
						rect.y = arguments[2];
						rect.width = arguments[3].width;
						rect.height = arguments[3].height;
					}
					else
					{
						rect = {x: arguments[1], y: arguments[2], width: arguments[3].width, height: arguments[3].height};
					}
				}
				else
				{
					Eco.Logger.error("arguments are not correct! =>" + Eco.Logger.inspect(arguments, false, 0, false));
				}
			}

			var factory = Eco.XComp.Factory;
			if ( curRect )
			{
				if ( curRect.x != rect.x || curRect.y != rect.y
						|| curRect.width != rect.width || curRect.height != rect.height )
				{
					c._rect = rect;
					factory.invalidateRect(c);
				}
				else
				{
					c._needsRender = false;
					factory._removeRenderItems(c);
					factory._deleteParentRect(c.parent);
				}
			}
			else
			{
				c._rect = rect;
				factory.invalidateRect(c);
			}
		},
		/**
		 * 주어진 c을 가지고 주어진 propName의 속성 값을 얻는다.<br>
		 * 변경할 예정이거나, 이미 변경된 순서대로 속성 정보를 얻는다.
		 * @param {XComp} c XComp.
		 * @param {string} propName 속성 명칭.
		 * @return {*} 해당 속성 값.
		 * @memberOf Eco.XComp.Factory
		 */
		"getProperty": function(c, propName)
		{
			var propVal;
			if ( c._props )
			{
				propVal = c._props[propName];
			}
			
			if ( (propVal == null) && c._curProps )
			{
				propVal = c._curProps[propName];
			}

			if (propVal == null)
			{
				propVal = c[propName];
			}
			return propVal;
		},
		/**
		 * 주어진 c 즉 XComp의 속성 값을 설정한다.<br>
		 * Eco.XCompFactory.doLayout 함수를 호출하기 전까지 실질로 화면상에 변경이 발생하지 않는다.
		 * 설정된 정보를 _props에 가지고 있다가 doLayout함수 호출하는 시점에 반영하고 _props정보는 clear된다.
		 * @param {XComp} c XComp.
		 * @param {...*} prop명칭, prop값 순으로 정의되는 인자.
		 * @memberOf Eco.XComp.Factory
		 */
		"setProperties": function(c)
		{
			//style 속성의 하위 속성 명칭은 1depth만 정의
			// 즉 style.font 
			// style = "";
			var curprops = c._curProps || {},
				props = c._props || {},
				args = arguments,
				prop, subProp, value, changed = false;

			for(var i = 1, n = args.length ; i < n ; i+=2 )
			{
				prop = args[i];
				value = args[i+1];
				
				if ( props[prop] != value || curprops[prop] !== value )
				{
					changed = true;
					props[prop] = value;
					if ( curprops[prop] === value )
					{
						delete props[prop];
					}
					else if ( prop == "style" && c._computeStyles )
					{
						c._computeStyles._changed = true;
					}
				}
			}
			if ( changed )
			{
				var isexist = false;
				for ( var p in props )
				{
					if ( props.hasOwnProperty(p) )
					{
						isexist = true;
						break;
					}
				}
				if ( isexist )
				{
					c._props = props;
				}
				else
				{
					c._props = null;
				}
				Eco.XComp.Factory.invalidateProps(c);
			}
		},
		/**
		 * p는 form 객체인데 p에 속한 comp 중에 변경된 속성 및 rect를 실질로 화면상에 반영한다.<br>
		 * isDownward인자는 하위 form까지 처리할 것인지 여부이다. default는 false 처리된다.
		 * @param {form|div|tabpage} p form|div|tabpage type of XComp.
		 * @param {boolean=} isDownward 하위 form까지 처리할 것인지 여부.
		 * @memberOf Eco.XComp.Factory
		 */
		"doLayout": function(p, isDownward)
		{
			var factory = Eco.XComp.Factory;
			if ( isDownward )
			{
				var cs = p._commitPropItems,
					childs = p._changesPropChilds;
				if ( ((cs && cs.length) || (childs && childs.length)) && !p._processLayout )
				{
					p._processLayout = true;
					factory._commitPropsProcess(p, isDownward);
					p._processLayout = false;
				}
				cs = p._renderItems;
				childs = p._changesRectChilds;
				if ( ((cs && cs.length) || (childs && childs.length)) && !p._processLayout )
				{
					p._processLayout = true;
					factory._doRender(p, isDownward);
					p._processLayout = false;
				}
			}
			else
			{
				var cs = p._commitPropItems;
				if ( cs && cs.length && !p._processLayout )
				{
					p._processLayout = true;
					factory._commitPropsProcess(p, isDownward);
					p._processLayout = false;
				}
				cs = p._renderItems;
				if ( cs && cs.length && !p._processLayout )
				{
					p._processLayout = true;
					factory._doRender(p, isDownward);
					p._processLayout = false;
				}
			}
		},
		/**
		 * p는 form 객체인데 p에 속한 comp 중에 속성 값이 변경되어진 목록인 [_commitPropItems] array를<br>
		 * 가지고 속성을 실질로 반영하는 처리를 한다.<br>
		 * isDownward인자는 하위 form까지 처리할 것인지 여부이다. default는 false 처리된다.
		 * @param {form|div|tabpage} p form|div|tabpage type of XComp.
		 * @param {boolean=} isDownward 하위 form까지 처리할 것인지 여부.
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_commitPropsProcess": function(p, isDownward)
		{
			var cs = p._commitPropItems,
				factory = Eco.XComp.Factory;
			if ( cs && cs.length && !p._processCommitProps )
			{
				p._processCommitProps = true;
				for (var i = 0, c; (c = cs[i]) ; i++)
				{
					factory._commitProps(c);
				}
				p._commitPropItems = null;
				p._processCommitProps = false;
			}
			if ( isDownward )
			{
				cs = p._changesPropChilds;
				if ( cs && cs.length )
				{
					for (var i = 0, c; (c = cs[i]) ; i++)
					{
						factory._commitPropsProcess(c, isDownward);
						c._needsPropChildsReg = false;
					}
					p._changesPropChilds = null;
				}
			}
		},
		/**
		 * p는 form 객체인데 p에 속한 comp 중에 rect 값이 변경되어진 목록인 [_renderItems] array를<br>
		 * 가지고 변경된 rect을 실질로 반영하는 처리를 한다.<br>
		 * isDownward인자는 하위 form까지 처리할 것인지 여부이다. default는 false 처리된다.
		 * @param {form|div|tabpage} p form|div|tabpage type of XComp.
		 * @param {boolean=} isDownward 하위 form까지 처리할 것인지 여부.
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_doRender": function(p, isDownward)
		{
			var cs = p._renderItems,
				factory = Eco.XComp.Factory;
			if ( cs && cs.length && !p._processRender )
			{
				p._processRender = true;
				for (var i = 0, c; (c = cs[i]) ; i++)
				{
					 if ( !(c instanceof Tabpage) ) factory._changePosSize(c);
				}
				p._renderItems = null;
				p._processRender = false;
			}
			if ( isDownward )
			{
				cs = p._changesRectChilds;
				if ( cs && cs.length )
				{
					for (var i = 0, c; (c = cs[i]) ; i++)
					{
						factory._doRender(c, isDownward);
						c._needsRectChildsReg = false;
					}
					p._changesRectChilds = null;
				}
			}
		},
		/**
		 * 주어진 clist array 목록 순으로 zorder를 반영한다.<br>
		 * @param {array} clist XComp array.
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_doZOrder": function(clist)
		{
			for ( var i = 1, len = clist.length ; i < len ; i++ )
			{
				//clist[i].moveToNext(clist[i - 1]);
				clist[i].moveToPrev(clist[i - 1]);
			}
		},
		/**
		 * 주어진 c 즉 XComp의 속성 및 rect 변경되어 차후 반영할 것을 예약 처리한다.<br>
		 * c.parent의 _renderItems, _commitPropItems array에 각각 등록한다.
		 * @param {XComp} c XComp.
		 * @memberOf Eco.XComp.Factory
		 */
		"invalidate": function(c)
		{
			var factory = Eco.XComp.Factory;
			factory.invalidateProps(c);
			factory.invalidateRect(c);
		},
		/**
		 * 주어진 c 즉 XComp의 속성 및 rect 변경되었다고 기록한 후 즉시 doLayout를 호출하여 반영처리한다.
		 * @param {XComp} c XComp.
		 * @memberOf Eco.XComp.Factory
		 */
		"validate": function(c)
		{
			var factory = Eco.XComp.Factory;
			factory.invalidate(c);
			factory.doLayout(c.parent);
		},	
		/**
		 * 주어진 c 즉 XComp의 rect 변경되어 차후 반영할 것을 예약 처리한다.<br>
		 * c.parent의 _renderItems array에 등록한다.
		 * @param {XComp} c XComp.
		 * @memberOf Eco.XComp.Factory
		 */
		"invalidateRect": function(c)
		{
			if ( !c._needsRender )
			{
				var factory = Eco.XComp.Factory;
				c._needsRender = true;
				factory._addRenderItems(c);
				factory._invalidateParentRect(c.parent);
			}
		},
		/**
		 * 주어진 c 즉 XComp의 rect 변경되었다고 기록한 후 즉시 doLayout를 호출하여 반영처리한다.
		 * @param {XComp} c XComp.
		 * @memberOf Eco.XComp.Factory
		 */
		"validateRect": function(c)
		{
			var factory = Eco.XComp.Factory;
			factory.invalidateRect(c);
			factory.doLayout(c.parent);
		},
		/**
		 * 주어진 c 의 상위 comp에 rect(position, size)가 변경된 child가 존재하다고 예약 처리한다.<br>
		 * c.parent의 _changesRectChilds array에 등록한다.<br>
		 * recursion으로 parent에 예약 처리하면서 ChildFrame에서 멈춘다. 
		 * @param {XComp} c XComp.
		 * @memberOf Eco.XComp.Factory
		 */
		"_invalidateParentRect": function(c)
		{
			var p = c.parent;
			if ( !p || p instanceof ChildFrame ) return;
			//if ( p instanceof Tabpage )
			//{
			//	var tabParent = p.parent.parent;
			//}
			if ( p._changesRectChilds == null )
			{
				p._changesRectChilds = [];
			}
			if ( !c._needsRectChildsReg )
			{
				c._needsRectChildsReg = true;
				p._changesRectChilds.push(c);
			}
			Eco.XComp.Factory._invalidateParentRect(p);
		},
		/**
		 * 주어진 c 의 상위 comp에 rect(position, size)가 변경되었다고 예약된 child를 삭제한다.<br>
		 * c.parent의 _changesRectChilds array에 삭제한다.<br>
		 * recursion으로 parent에 삭제 처리하면서 ChildFrame에서 멈춘다. 
		 * @param {XComp} c XComp.
		 * @memberOf Eco.XComp.Factory
		 */
		"_deleteParentRect": function(c)
		{
			var p = c.parent;
			if ( p instanceof ChildFrame ) return;
			//if ( p instanceof Tabpage )
			//{
			//	var tabParent = p.parent.parent;
			//}
			if ( p._changesRectChilds && c._needsRectChildsReg && (!c._renderItems || c._renderItems.length == 0 ))
			{
				Eco.array.remove(p._changesRectChilds, c);
				c._needsRectChildsReg = false;
			}
			if ( p._changesPropChilds && c._needsPropChildsReg && (!c._commitPropItems || c._commitPropItems.length == 0 ) )

			//if ( p._changesRectChilds.length == 0 ) p._changesRectChilds = null;

			Eco.XComp.Factory._deleteParentRect(p);
		},
		/**
		 * 주어진 c 즉 XComp의 속성이 변경되어 차후 반영할 것을 예약 처리한다.<br>
		 * c.parent의 _commitPropItems array에 등록한다.<br>
		 * c의 변경할 c._props 값과 변경된 값인 c._curProps 값이 동일하면 <br>
		 * 속성 변경할 목록인_commitPropItems array에서 제거한다.
		 * @param {XComp} c XComp.
		 * @memberOf Eco.XComp.Factory
		 */
		"invalidateProps": function(c)
		{
			var factory = Eco.XComp.Factory;
			if ( c._props )
			{
				if ( !c._needsCommitProps )
				{
					c._needsCommitProps = true;
					factory._addCommitPropItems(c);
					factory._invalidateParentProps(c.parent);
				}
			}
			else
			{
				c._needsCommitProps = false;
				factory._removeCommitPropItems(c);
				factory._deleteParentProps(c.parent);
			}
		},
		/**
		 * 주어진 c 의 상위 comp에 property가 변경된 child가 존재하다고 예약 처리한다.<br>
		 * c.parent의 _changesPropChilds array에 등록한다.<br>
		 * recursion으로 parent에 예약 처리하면서 ChildFrame에서 멈춘다. 
		 * @param {XComp} c XComp.
		 * @memberOf Eco.XComp.Factory
		 */
		"_invalidateParentProps": function(c)
		{
			var p = c.parent;
			if ( !p || p instanceof ChildFrame ) return;
			//if ( p instanceof Tabpage )
			//{
			//	var tabParent = p.parent.parent;
			//}
			if ( p._changesPropChilds == null )
			{
				p._changesPropChilds = [];
			}
			if ( !c._needsPropChildsReg )
			{
				c._needsPropChildsReg = true;
				p._changesPropChilds.push(c);
			}
			Eco.XComp.Factory._invalidateParentProps(p);
		},
		/**
		 * 주어진 c 의 상위 comp에 property가 변경되었다고 예약된 child를 삭제한다.<br>
		 * c.parent의 _changesPropChilds array에 삭제한다.<br>
		 * recursion으로 parent에 삭제 처리하면서 ChildFrame에서 멈춘다. 
		 * @param {XComp} c XComp.
		 * @memberOf Eco.XComp.Factory
		 */
		"_deleteParentProps": function(c)
		{
			var p = c.parent;
			if ( p instanceof ChildFrame ) return;
			//if ( p instanceof Tabpage )
			//{
			//	var tabParent = p.parent.parent;
			//}
			if ( p._changesPropChilds && c._needsPropChildsReg && (!c._commitPropItems || c._commitPropItems.length == 0 ) )
			{
				Eco.array.remove(p._changesPropChilds, c);
				c._needsPropChildsReg = false;
			}

			//if ( p._changesPropChilds.length == 0 ) p._changesPropChilds = null;

			Eco.XComp.Factory._deleteParentProps(p);
		},
		/**
		 * 주어진 c 즉 XComp의 속성이 변경되었다고 기록한 후 즉시 doLayout를 호출하여 반영처리한다.
		 * @param {XComp} c XComp.
		 * @memberOf Eco.XComp.Factory
		 */
		"validateProps": function(c)
		{
			var factory = Eco.XComp.Factory;
			factory.invalidateProps(c);
			factory.doLayout(c.parent);
		},
		/**
		 * rect정보가 변경된 목록인 _renderItems array에 주어진 c 즉 XComp를 추가한다.
		 * @param {XComp} c XComp.
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_addRenderItems": function(c)
		{
			if ( c instanceof Tabpage )
			{
				Eco.Logger.error({"meassge": "Tabpage는 position 및 size를 변경 할 수 없습니다.", "stack": true});
			}
			var p = c.parent;
			if ( p instanceof Tabpage )
			{
				var tabParent = p.parent.parent;
				if ( !tabParent._renderItems )
				{
					tabParent._renderItems = [];
				}
				if ( Eco.array.indexOf(tabParent._renderItems, p) == -1 )
				{
					tabParent._renderItems.push(p);
				}
			}
			if ( !p._renderItems )
			{
				p._renderItems = [];
			}
			p._renderItems.push(c);
		},
		/**
		 * 속성 정보가 변경된 목록인 _commitPropItems array에 주어진 c 즉 XComp를 추가한다.
		 * @param {XComp} c XComp.
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_addCommitPropItems": function(c)
		{
			var p = c.parent;
			if ( !p._commitPropItems )
			{
				p._commitPropItems = [];
			}
			p._commitPropItems.push(c);
		},
		/**
		 * rect정보가 변경된 목록인 _renderItems array에 주어진 c 즉 XComp를 제거한다.
		 * @param {XComp} c XComp.
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_removeRenderItems": function(c)
		{
			var p = c.parent;
			if ( p._renderItems )
			{
				Eco.array.remove(p._renderItems, c);
			}
		},
		/**
		 * 속성 정보가 변경된 목록인 _commitPropItems array에 주어진 c 즉 XComp를 제거한다.
		 * @param {XComp} c XComp.
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_removeCommitPropItems": function(c)
		{
			var p = c.parent;
			if ( p._commitPropItems )
			{
				Eco.array.remove(p._commitPropItems, c);
			}
		},
		/**
		 * 주어진 c 즉 XComp의 c._props는 변경할 속성들의 정보 값인데 이것을 실질로 c에 반영하는 처리.
		 * @param {XComp} c XComp.
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_commitProps": function(c)
		{
			if ( c._needsCommitProps )
			{
				if ( c._debug ) 
					trace("propChange==>" + (c._id || c.name) + "//" + Eco.object.getPropertyNames(c._props));
				var props = c._props,
					curprops = c._curProps || {},
					curVal;
				if ( props )
				{
					for ( var pNm in props )
					{
						if (props.hasOwnProperty(pNm))
						{
							curVal = props[pNm];
							c["set_" +pNm](curVal);
							curprops[pNm] = curVal;
							if ( pNm == "style" && c._computeStyles )
							{
								delete c["_computeStyles"];
							}
						}
					}
					c._props = null;
					c._curProps = curprops;
					//console.log(c._id, c._curProps);
				}
				c._needsCommitProps = false;
			}
		},
		/**
		 * 주어진 c 즉 XComp의 c._rect는 변경할 rect 정보 값인데 이것을 실질로 c에 반영하는 처리.
		 * @param {XComp} c XComp.
		 * @private
		 * @memberOf Eco.XComp.Factory
		 */
		"_changePosSize": function(c)
		{
			if ( c._needsRender )
			{
				if ( c._debug )
				{
					trace("rectChange==>" + (c._id || c.name) + "::" + c._rect.toString() + "," + c.text + "," + c.visible + "," + c.style.border);
				}
				var rect = c._rect;
				if ( rect )
				{
					c.move(rect.x, rect.y, rect.width, rect.height);
					if ( c._debug ) trace("l:"+c.getPixelLeft()+" t:"+c.getPixelTop()+" w:"+c.getPixelWidth()+" h:"+c.getPixelHeight());
					if ( c._curRect )
					{
						var r = c._curRect;
						r.x = rect.x;
						r.y = rect.y;
						r.width = rect.width;
						r.height = rect.height;
					}
					else
					{
						c._curRect = {x: rect.x, y: rect.y, width: rect.width, height: rect.height};
					}
				}
				c._needsRender = false;
			}
		},
		/**
		 * 주어진 p(form|div|tabpage) 객체에 속하고, 주어진 명칭 값을 담고 array에 해당하는 comp를 모두 cache 처리한다.<br>
		 * doLayout 함수 호출 전까지는 실질로 화면상에 보여진다.<br>
		 * 하지만 화면상에 반영되는 것과 별개로 cache된 기록은 내부적으로 처리된다.<br>
		 * 첫번째 인자는 form이거나, object로 {target: form객체, poolName: "rowobjs"} 구성 될 수 있다.
		 * object로 주어질때는 poolName를 임의로 지정하여 사용하는 경우이다.
		 * @param {form|div|tabpage|object} p form XComp 또는 object로 {target: form객체, poolName: "rowobjs"} .
		 * @param {array} names cache처리할 대상를 comp._id의 array.
		 * @param {boolean=} propsClear 기 설정된 속성값들을 clear 할 것인지 여부.
		 * @memberOf Eco.XComp.Factory
		 */
		"releaseNamed": function(p, names, propsClear)
		{
			var poolName = "default",
				target = p,
				used, cache, c, clearArr = [],
				isDefaultPool,
				factory = Eco.XComp.Factory;

			if ( Eco.isObject(p) )
			{
				target = p.target;
				poolName = p.poolName;
			}

			used = factory._getUsed(target, poolName);
			if ( !used ) return;
			isDefaultPool = (poolName == "default");
			if ( isDefaultPool )
			{
				cache = p._defaultCache;
				if ( !cache )
				{
					p._defaultCache = {};
					cache = p._defaultCache;
				}
			}
			else
			{
				cache = factory._getCache(target, poolName, null, true);
			}
			for ( var i = 0, len = names.length ; i < len ; i++ )
			{
				c = used[names[i]];
				if ( c )
				{
					if ( isDefaultPool )
					{
						var type = Eco.XComp.typeOf(c);
						if ( !cache[type] )
						{
							cache[type] = [];
						}
						//p._xppool[type].push(c);
						cache[type].unshift(c); //cache 추가: push를 사용하지 않고 unshift로 추가함 재사용hit가 좋음.			
					}
					else
					{
						cache.unshift(c); //cache 추가: push를 사용하지 않고 unshift로 추가함 재사용hit가 좋음.			
					}
					factory._recycle(c, propsClear);
					clearArr.push(c);
				}
			}
			for ( var i = 0, len = clearArr.length ; i < len ; i++ )
			{
				delete used[clearArr[i]._id];
			}
		},
		/**
		 * 주어진 p 즉 form 객체에 속한 사용중인 comp를 모두 cache 처리한다.<br>
		 * doLayout 함수 호출 전까지는 실질로 화면상에 보여진다.<br>
		 * 하지만 화면상에 반영되는 것과 별개로 cache된 기록은 내부적으로 처리된다.<br>
		 * 두번째 param인 exclude는 XComp array인데 이것은 cache처리할 대상에서 제외한다.<br>
		 * 세번째 param은 cache처리할 때 기 설정된 속성값들을 clear 할 것인지 여부이다.
		 * 첫번째 인자는 form이거나, object로 {target: form객체, poolName: "rowobjs"} 구성 될 수 있다.
		 * object로 주어질때는 poolName를 임의로 지정하여 사용하는 경우이다.
		 * @param {form|div|tabpage|object} p form XComp 또는 object로 {target: form객체, poolName: "rowobjs"} .
		 * @param {array|object=} exclude cache처리할 대상에서 제외할 array 또는 {xpcom._id: true, ...} 된 object collection.
		 * @param {boolean=} propsClear 기 설정된 속성값들을 clear 할 것인지 여부.
		 * @param {boolean=} isDownward 하위 form까지 처리할 것인지 여부.
		 * @memberOf Eco.XComp.Factory
		 */
		"releaseAll": function(p, exclude, propsClear, isDownward)
		{
			var poolName = "default",
				target = p,
				used, cache, c, clearArr = [],
				isDefaultPool,
				factory = Eco.XComp.Factory;

			if ( Eco.isObject(p) )
			{
				target = p.target;
				poolName = p.poolName;
			}

			//trace("factory > p="+p + ", poolName=" + poolName);
			
			used = factory._getUsed(target, poolName);
			
			if ( !used ) return;
			isDefaultPool = (poolName == "default");
			if ( isDefaultPool )
			{
				cache = p._defaultCache;
				if ( !cache )
				{
					p._defaultCache = {};
					cache = p._defaultCache;
				}
			}
			else
			{
				cache = factory._getCache(target, poolName, null, true);
			}

			var excludeIsArray = Eco.isArray(exclude),
				excludeIsObject = false;
			if ( !excludeIsArray ) excludeIsObject = Eco.isObject(exclude);

			if ( excludeIsArray || excludeIsObject )
			{
				var excludeMap;
				if ( excludeIsArray )
				{
					excludeMap = {};
					for ( var i = 0, len = exclude.length ; i < len ; i++ )
					{
						excludeMap[exclude[i]._id] = true;
					}
				}
				else
				{
					excludeMap = exclude;
				}
				for ( var nm in used )
				{
					if ( used.hasOwnProperty(nm) )
					{
						c = used[nm];
						if ( !excludeMap[c._id] )
						{
							if ( isDefaultPool )
							{
								var type = Eco.XComp.typeOf(c);
								if ( !cache[type] )
								{
									cache[type] = [];
								}
								cache[type].push(c);
								//trace("defaultCache(" + type + ")==>" + cache[type].length); 
								//cache[type].unshift(c); //cache 추가: push를 사용하지 않고 splice로 추가함 재사용hit가 좋음.
							}
							else
							{
								cache.unshift(c); //cache 추가: push를 사용하지 않고 splice로 추가함 재사용hit가 좋음.			
							}
							factory._recycle(c, propsClear);
							clearArr.push(c);
							if ( isDownward )
							{
								if ( c instanceof Tab )
								{
									c = c.tabpages[c.tabindex];
									factory.releaseAll(c, null, propsClear);						
								}
								else if ( c instanceof Form )
								{
									factory.releaseAll(c, null, propsClear);
								}
							}
						}
					}
				}
			}
			else
			{
				for ( var nm in used )
				{
					if ( used.hasOwnProperty(nm) )
					{
						c = used[nm];
						if ( isDefaultPool )
						{
							var type = Eco.XComp.typeOf(c);
							if ( !cache[type] )
							{
								cache[type] = [];
							}
							//p._xppool[type].push(c);
							cache[type].unshift(c);//cache 추가: push를 사용하지 않고 splice로 추가함 재사용hit가 좋음.	
						}
						else
						{
							cache.unshift(c); //cache 추가: push를 사용하지 않고 splice로 추가함 재사용hit가 좋음.		
						}
						factory._recycle(c, propsClear);
						clearArr.push(c);
						if ( isDownward )
						{
							if ( c instanceof Tab )
							{
								c = c.tabpages[c.tabindex];
								factory.releaseAll(c, null, propsClear);						
							}
							else if ( c instanceof Form )
							{
								factory.releaseAll(c, null, propsClear);
							}
						}
					}
				}
			}
			for ( var i = 0, len = clearArr.length ; i < len ; i++ )
			{
				delete used[clearArr[i]._id];
			}
		},		
		/**
		 * 사용하고 있는 XComp인 주어진 c에 대하여 cache처리한다.<br>
		 * doLayout 함수 호출 전까지는 실질로 화면상에 보여진다.<br>
		 * 하지만 화면상에 반영되는 것과 별개로 cache된 기록은 내부적으로 처리된다.<br>
		 * 두번째 인자는 임의 poolName에 대하여 처리하고자 할 때 설정한다.
		 * 세번째 param은 cache처리할 때 기 설정된 속성값들을 clear 할 것인지 여부이다.
		 * @param {XComp} c cache처리할 대상인 XComp.
		 * @param {string=} poolName pool 명칭.
		 * @param {boolean=} propsClear 기 설정된 속성값들을 clear 할 것인지 여부.
		 * @memberOf Eco.XComp.Factory
		 */
		"release": function(c, poolName, propsClear)
		{
			var target = c.parent,
				used, cache,
				factory = Eco.XComp.Factory;

			if ( !poolName || !poolName.length )
			{
				poolName = "default";
			}

			if ( poolName == "default" )
			{
				var type = Eco.XComp.typeOf(c);
				cache = factory._getCache(target, poolName, type, true);
				cache.push(c);
			}
			else
			{
				cache = factory._getCache(target, poolName, null, true);
				cache.push(c);
			}

			factory._recycle(c, propsClear);
			used = factory._getUsed(target, poolName);
			if ( used )
			{
				delete used[c._id];
			}
		},
		/**
		 * 주어진 xcomp 의 pseudo에 설정된 값을 기준으로 nonClient영역에 해당하는 left, top, right, bottom 값을 array로 반환한다.<br>
		 * doLayout 처리하기 전에 설정하려는 값을 기준으로 한다 다만 설정하려는 값이 없으면 이미 설정된 값을 사용한다.
		 * @param {XComp} xcomp nexacro Component.
		 * @param {string=} pseudo normal, mouseover 등의 string값
		 * @param {boolean=} includePadding padding값을 포함할 지 여부 (default: true)
		 * @memberOf Eco.XComp.Factory
		 */
		"getNonClientArea": function(xcomp, pseudo, includePadding)
		{
			if(Eco.isEmpty(xcomp)) return;
			var factory = Eco.XComp.Factory, props;
			if ( pseudo == null ) pseudo = xcomp.getCurrentPseudo();
			if ( includePadding === false ) props = factory._nonClientAreaWithOutPadding;
			else props = factory._nonClientArea;

			var curStyle, styleObj;
			if ( Eco.isXComponent(xcomp) )
			{
				var stylestr = factory.getProperty(xcomp, "style"),
					parseStyleObj;

				if ( stylestr && stylestr.length )
				{
					parseStyleObj = xcomp._computeStyles;
					if ( !parseStyleObj || parseStyleObj._changed )
					{
						parseStyleObj = factory.parseStyleStr(stylestr);
						parseStyleObj._changed = false;
						xcomp._computeStyles = parseStyleObj;
					}
				}
				if ( parseStyleObj )
				{
					styleObj = parseStyleObj[pseudo];
				}
				curStyle = xcomp.currentstyle;
			}
			else
			{
				styleObj = xcomp[pseudo];
			}

			var retVal = [0, 0, 0, 0],
				propName, propobj, propProc;

			if ( styleObj )
			{
				for (var i=0,len=props.length; i<len; i++)
				{
					propProc = props[i];
					propName = propProc.name;
					propobj = styleObj[propName];
					if ( !propobj && curStyle)
					{
						propobj = curStyle[propName];
					}
					if ( propobj )
					{
						propProc.calcGap(propobj, retVal);
					}
				}
			}
			else if ( curStyle )
			{
				var propobj, propProc;
				for (var i=0,len=props.length; i<len; i++)
				{
					propProc = props[i];
					propobj = curStyle[propProc.name];
					if ( propobj )
					{
						propProc.calcGap(propobj, retVal);
					}
				}
			}
			return retVal;
		},
		_nonClientArea: [
			{
				name: "border",
				calcGap: function(obj, arr)
				{
					var val;
					switch (obj._linecnt)
					{
						case 1:
							val = obj._top_width;
							arr[0] += val;
							arr[1] += val;
							arr[2] += val;
							arr[3] += val;
							break;
						case 2:
							val = obj._top_width;
							arr[1] += val;
							arr[3] += val;
							val = obj._right_width;
							arr[0] += val; 
							arr[2] += val;
							break;
						case 3:
							val = obj._top_width;
							arr[1] += val;
							val = obj._right_width;
							arr[0] += val; 
							arr[2] += val;
							val = obj._bottom_width;
							arr[3] += val;
							break;
						case 4:
							arr[0] += obj._left_width;
							arr[1] += obj._top_width;
							arr[2] += obj._right_width;
							arr[3] += obj._bottom_width;
							break;
					}
				},
			},
			{
				name: "margin",
				calcGap: function(obj, arr)
				{
					arr[0] += obj.left;
					arr[1] += obj.top;
					arr[2] += obj.right;
					arr[3] += obj.bottom;
				},
			},
			{
				name: "padding",
				calcGap: function(obj, arr)
				{
					arr[0] += obj.left;
					arr[1] += obj.top;
					arr[2] += obj.right;
					arr[3] += obj.bottom;
				},
			}
		],
		_nonClientAreaWithOutPadding: [
			{
				name: "border",
				calcGap: function(obj, arr)
				{
					var val;
					switch (obj._linecnt)
					{
						case 1:
							val = obj._top_width;
							arr[0] += val;
							arr[1] += val;
							arr[2] += val;
							arr[3] += val;
							break;
						case 2:
							val = obj._top_width;
							arr[1] += val;
							arr[3] += val;
							val = obj._right_width;
							arr[0] += val; 
							arr[2] += val;
							break;
						case 3:
							val = obj._top_width;
							arr[1] += val;
							val = obj._right_width;
							arr[0] += val; 
							arr[2] += val;
							val = obj._bottom_width;
							arr[3] += val;
							break;
						case 4:
							arr[0] += obj._left_width;
							arr[1] += obj._top_width;
							arr[2] += obj._right_width;
							arr[3] += obj._bottom_width;
							break;
					}
				},
			},
			{
				name: "margin",
				calcGap: function(obj, arr)
				{
					arr[0] += obj.left;
					arr[1] += obj.top;
					arr[2] += obj.right;
					arr[3] += obj.bottom;
				},
			}
		],
		_styleprops: {
			align: "Align",
			background: "Background",
			bordertype: "Bordertype",
			border: "Border",
			color: "Color",
			cursor: "Style",
			font: "Font",
			glow: "Glow",
			gradation: "Gradation",
			margin: "Margin",
			opacity: "Style",
			padding: "Padding",
			shadow: "Shadow",
			accessibility: "Accessibility"
		},
		_setStylePropObject: function(val, sObj, factory, stringUtil)
		{
			var linearr = val.split(";");
			var propname, propval;
			for (var i = 0, len = linearr.length ; i < len ; i++) 
			{
				var tmpstr = linearr[i];
				var idx = tmpstr.indexOf(":");
				propname = tmpstr.substring(0, idx).trim();
				propval = tmpstr.substring(idx + 1).trim();
	
				if (propname && propval) 
				{
					var fnNm = factory._styleprops[propname];
					if ( fnNm )
					{
						var getFn = nexacro["_getCached" + fnNm + "Obj"];
						if ( fnNm == "Style" )
						{
							sObj[propname] = getFn(propname, propval);
						}
						else
						{
							sObj[propname] = getFn(propval);
						}
					}
				}
			}
		},
		/**
		 * 주어진 str 값을 parsing하여 Style object들을 collection으로 반환한다.<br>
		 * collection는 pseudo별로 background, border 등 name별로 객체들을 담아둔다.
		 * @param {string} str style 설정할 때 사용하는 string형태
		 * @return {object} 주어진 str 값을 parsing하여 Style object들을 collection
		 * @memberOf Eco.XComp.Factory
		 */
		"parseStyleStr": function(str)
		{
			if ( Eco.isEmpty(str) ) return;

			var stringUtil = Eco.string,
				factory = Eco.XComp.Factory;

			var blocks = str.split("}");
			var s = blocks[0].trim();

			// new style
			var styles;

			blocks.pop();

			var i, len = blocks.length;
			var definition_block, pseudo, normal_style, sObj;

			definition_block = s.split("{");
			normal_style = definition_block[0].substring(0, definition_block[0].lastIndexOf(";") + 1).trim();

			if (normal_style.length == 0)
			{
				normal_style = definition_block[0].substring(0, definition_block[0].length).trim();
			}
			if ( normal_style && normal_style.length )
			{
				styles = {};
				sObj = {};
				factory._setStylePropObject(normal_style, sObj, factory, stringUtil);
				styles["normal"] = sObj;
			}

			if (len > 0) 
			{
				for (i = 0; i < len; i++) 
				{
					definition_block = blocks[i].split("{");
					pseudo = definition_block[0].substring(definition_block[0].lastIndexOf(":") + 1).trim();
					if ( definition_block[1] && definition_block[1].length )
					{
						if ( !styles ) styles = {};
						sObj = {};
						factory._setStylePropObject(definition_block[1], sObj, factory, stringUtil);
						styles[pseudo] = sObj;
					}
				}
			}
			return styles;
		},
		/**
		 * 컴포넌트에 스타일 속성설정 예약.<br>
		 * 실제 적용은 doLayout 호출시점.
		 * @param {XComp} XComp nexacro Component.
		 * @param {Eco.CssItem} cssItem {@link Eco.CssItem}를 사용한 스타일 속성정보
		 * @memberOf Eco.XComp.Factory
		 */
		"setStyleSheet": function(XComp, cssItem)
		{
			if(Eco.isEmpty(XComp) || Eco.isEmpty(cssItem)) return;
			
			var keys = ["_border", "font", "margin", "padding"];
			var aliasKeys = ["border", "font", "margin", "padding"];	
			var styleString = "";
			for (var i=0,len=keys.length; i<len; i++)
			{
				styleString += aliasKeys[i] + ":" + cssItem.getString(keys[i]) +";";
			}
			
			Eco.XComp.Factory.setProperties(XComp, "style", styleString);
		}
	});
}

