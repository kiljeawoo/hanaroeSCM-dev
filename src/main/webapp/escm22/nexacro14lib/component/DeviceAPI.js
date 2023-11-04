//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.1.html	
//
//==============================================================================

if (!nexacro.Device || nexacro.OS == "Android") {
	if (!nexacro._init_litedb_api) {
		nexacro._createLiteDBConnectionObject = nexacro._emptyFn;
		nexacro._setLiteDBConnectionHandleBusyTimeOut = nexacro._emptyFn;
		nexacro._setLiteDBConnectionHandleDataSource = nexacro._emptyFn;
		nexacro._setLiteDBConnectionHandleOpenFlag = nexacro._emptyFn;
		nexacro._setLiteDBConnectionHandlePreConnect = nexacro._emptyFn;
		nexacro._setLiteDBConnectionHandleAsync = nexacro._emptyFn;
		nexacro._beginLiteDBConnectionHandle = nexacro._emptyFn;
		nexacro._closeLiteDBConnectionHandle = nexacro._emptyFn;
		nexacro._commitLiteDBConnectionHandle = nexacro._emptyFn;
		nexacro._isConnectedLiteDBConnectionHandle = nexacro._emptyFn;
		nexacro._openLiteDBConnectionHandle = nexacro._emptyFn;
		nexacro._rollbackLiteDBConnectionHandle = nexacro._emptyFn;

		nexacro._createLiteDBStatementObject = nexacro._emptyFn;
		nexacro._setLiteDBStatementHandleQuery = nexacro._emptyFn;
		nexacro._setLiteDBStatementHandleldbConnection = nexacro._emptyFn;
		nexacro._initParamsLiteDBStatementHandle = nexacro._emptyFn;
		nexacro._addParamsLiteDBStatementHandle = nexacro._emptyFn;
		nexacro._setLiteDBStatementHandleParameter = nexacro._emptyFn;
		nexacro._closeLiteDBStatementHandle = nexacro._emptyFn;
		nexacro._executeQueryLiteDBStatementHandle = nexacro._emptyFn;
		nexacro._executeUpdateLiteDBStatementHandle = nexacro._emptyFn;
	}


	if (!nexacro.LiteDBEventInfo) {
		nexacro.LiteDBEventInfo = function (strEventId, strReason, strReturnValue) {
			this.id = this.eventid = strEventId || "onerror";
			this.reason = strReason;
			this.returnvalue = strReturnValue;
			delete strReturnValue;
			strReturnValue = null;
		};
		var _pLiteDBEventInfo = nexacro.LiteDBEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.LiteDBEventInfo);

		_pLiteDBEventInfo._type_name = "LiteDBEventInfo";

		delete _pLiteDBEventInfo;
	}

	if (!nexacro.LiteDBErrorEventInfo) {
		nexacro.LiteDBErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg, strldbErrorCode, strldbErrorMsg) {
			this.id = this.eventid = strEventId || "onsuccess";
			this.errortype = "ObjectError";
			this.statuscode = intErrorCode;
			this.errormsg = strErrorMsg;
			this.ldberrorcode = strldbErrorCode;
			this.ldberrormsg = strldbErrorMsg;
		};
		var _pLiteDBErrorEventInfo = nexacro.LiteDBErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.LiteDBErrorEventInfo);

		_pLiteDBErrorEventInfo._type_name = "LiteDBErrorEventInfo";

		delete _pLiteDBErrorEventInfo;
	}

	if (!nexacro.LiteDBConnection) {
		nexacro.LiteDBConnection = function (id, parent) {
			this.id = this.name = id;
			if (parent) {
				this.parent = parent;
			}
			this.sqlstatement = "";
			this.busytimeout = 60000;
			this.openflag = 1;
			this.datasource = "";
			this.preconnect = "false";
			this.async = "true";


			this._event_list = {
				"onsuccess" : 1, 
				"onerror" : 1
			};

			this.onsuccess = null;
			this.onerror = null;

			this._handle = nexacro._createLiteDBConnectionObject(this);
		};

		nexacro.LiteDBConnection.openReadWrite = 0;
		nexacro.LiteDBConnection.openReadWriteCreate = 1;

		var _pLiteDBConnection = nexacro.LiteDBConnection.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.LiteDBConnection);

		_pLiteDBConnection._type_name = "LiteDBConnection";

		_pLiteDBConnection.on_created = function () {
		};
		_pLiteDBConnection.destroy = function () {
			if (this._handle) {
				this.close();
				this._handle = null;
			}

			return true;
		};
		_pLiteDBConnection.set_busytimeout = function (v) {
			if (this.paramck_busytimeout(v)) {
				this.busytimeout = v;
				nexacro._setLiteDBConnectionHandleBusyTimeOut(this, v);

				return true;
			}
			else {
				return false;
			}
		};
		_pLiteDBConnection.set_datasource = function (v) {
			if (this.paramck_datasource(v)) {
				this.datasource = v;
				nexacro._setLiteDBConnectionHandleDataSource(this, v);

				if (this.preconnect == "true" || this.preconnect == true) {
					this.open();
				}
				return true;
			}
			else {
				return false;
			}
		};
		_pLiteDBConnection.set_openflag = function (v) {
			if (v == LiteDBConnection.openReadWrite || v == LiteDBConnection.openReadWriteCreate) {
				this.openflag = v;
				nexacro._setLiteDBConnectionHandleOpenFlag(this, v);

				return true;
			}
			else {
				return false;
			}
		};
		_pLiteDBConnection.set_preconnect = function (v) {
			if (v == "true" || v == "false" || v == true || v == false) {
				this.preconnect = nexacro._toBoolean(v);
				nexacro._setLiteDBConnectionHandlePreConnect(this, this.preconnect);

				if (this.preconnect == "true" || this.preconnect == true) {
					if (this.datasource != "") {
						this.open();
					}
				}
				return true;
			}
			else {
				return false;
			}
		};
		_pLiteDBConnection.set_async = function (v) {
			if (v == "true" || v == "false" || v == true || v == false) {
				this.async = nexacro._toBoolean(v);
				nexacro._setLiteDBConnectionHandleAsync(this, this.async);

				return true;
			}
			else {
				return false;
			}
		};
		_pLiteDBConnection.begin = function () {
			if (this._handle) {
				nexacro._beginLiteDBConnectionHandle(this);
			}
		};

		_pLiteDBConnection.close = function () {
			if (this._handle) {
				nexacro._closeLiteDBConnectionHandle(this);
			}
		};

		_pLiteDBConnection.commit = function () {
			if (this._handle) {
				nexacro._commitLiteDBConnectionHandle(this);
			}
		};

		_pLiteDBConnection.isConnected = function () {
			if (this._handle) {
				nexacro._isConnectedLiteDBConnectionHandle(this);
			}
		};

		_pLiteDBConnection.open = function (strDataSource, constOpenFlag) {
			if (typeof (constOpenFlag) != "undefined" || constOpenFlag != null) {
				this.openflag = constOpenFlag;
				nexacro._setLiteDBConnectionHandleOpenFlag(this, this.openflag);
			}

			if (typeof (strDataSource) != "undefined" || strDataSource != null) {
				this.datasource = strDataSource;
				nexacro._setLiteDBConnectionHandleDataSource(this, this.datasource);
			}

			if (this.paramck_open(this.datasource, this.openflag)) {
				nexacro._openLiteDBConnectionHandle(this, this.datasource, this.openflag);
			}
			else {
				return false;
			}
			return true;
		};

		_pLiteDBConnection.rollback = function () {
			if (this._handle) {
				nexacro._rollbackLiteDBConnectionHandle(this);
			}
		};

		_pLiteDBConnection.on_success = function (reason, returnvalue) {
			var e = new nexacro.LiteDBEventInfo("onsuccess", reason, returnvalue);
			this.on_fire_onsuccess(this, e);
		};

		_pLiteDBConnection.on_fire_onsuccess = function (objLiteDBConnection, eLiteDBEventInfo) {
			if (this.onsuccess && this.onsuccess._has_handlers) {
				return this.onsuccess._fireEvent(this, eLiteDBEventInfo);
			}
			return true;
		};

		_pLiteDBConnection.on_error = function (errorcode, errormsg, ldberrorcode, ldberrormsg) {
			var e = new nexacro.LiteDBErrorEventInfo("onerror", errorcode, errormsg, ldberrorcode, ldberrormsg);
			this.on_fire_onerror(this, e);
		};

		_pLiteDBConnection.on_fire_onerror = function (objAsyncLiteDBConnection, eAsyncLiteDBErrorEventInfo) {
			if (this.onerror && this.onerror._has_handlers) {
				return this.onerror._fireEvent(this, eAsyncLiteDBErrorEventInfo);
			}
			return true;
		};

		_pLiteDBConnection.paramck_busytimeout = function (timout) {
			if (timout == null || typeof (timout) == "undefined") {
				return false;
			}

			if (!this._publicNumCheck(timout)) {
				return false;
			}

			if (timout < 200 || timout > 86400000) {
				return false;
			}

			return true;
		};
		_pLiteDBConnection.paramck_datasource = function (datasrc) {
			if (datasrc == null || typeof (datasrc) == "undefined") {
				return false;
			}
			return true;
		};
		_pLiteDBConnection.paramck_open = function (strDataSource, constOpenFlag) {
			if (strDataSource == null || typeof (strDataSource) == "undefined" || typeof (strDataSource) != "string") {
				return false;
			}

			if (!this._publicNumCheck(constOpenFlag)) {
				return false;
			}
			return true;
		};
		_pLiteDBConnection._publicNumCheck = function (v) {
			try {
				var strlength = v.toString().split(" ").join("");
			}
			catch (e) {
				return false;
			}

			if (strlength.length == 0) {
				return false;
			}

			try {
				var numberss = Number(v.toString());
			}
			catch (e) {
				return false;
			}

			if ((+numberss) != (+numberss)) {
				return false;
			}

			return true;
		};
		delete _pLiteDBConnection;
	}

	if (!nexacro.LiteDBParameter) {
		nexacro.LiteDBParameter = function (name, type, value) {
			this.name = name || "";
			this.type = type || "string";
			this.value = value;
		};
		var _pLiteDBParameter = nexacro.LiteDBParameter.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.LiteDBParameter);

		_pLiteDBParameter._type_name = "LiteDBParameter";

		_pLiteDBParameter.set_name = function (v) {
			if (this.paramck_datasource(v)) {
				this.name = v;
				return true;
			}
			else {
				return false;
			}
		};
		_pLiteDBParameter.set_value = function (v) {
			if (this.paramck_datasource(v)) {
				this.value = v;
				return true;
			}
			else {
				return false;
			}
		};
		_pLiteDBParameter.set_type = function (v) {
			if (this.paramck_datasource(v)) {
				this.type = v;
				return true;
			}
			else {
				return false;
			}
		};
		if (nexacro.Device) {
			_pLiteDBParameter.toJSON = function () {
				var valueString;
				if (this.value == null) {
					valueString = 'null';
				}
				else if (this.value == undefined) {
					valueString = 'undefined';
				}
				else {
					switch (nexacro.DataUtils.toTypeCode(this.type)) {
						case 2:
						case 3:
							valueString = nexacro.DataUtils.toTextFromDecimal(this.value);
							break;
						case 4:
							valueString = '"' + nexacro.DataUtils.toTextFromDecimal(this.value) + '"';
							break;
						case 5:
							valueString = '"' + nexacro.DataUtils.toTextFromDate(this.value) + '"';
							break;
						case 6:
							valueString = '"' + nexacro.DataUtils.toTextFromTime(this.value) + '"';
							break;
						case 7:
							if (this.value.dateObj == undefined) {
								valueString = '"' + nexacro.DataUtils.toTextFromDateTime(this.value) + '"';
							}
							else {
								valueString = '"' + nexacro.DataUtils.toTextFromDateTime(this.value.dateObj) + '"';
							}
							break;
						case 0:
						case 1:
						case 8:
						case 9:
						default:
							valueString = '"' + nexacro.Device.encodeString(this.value) + '"';
							break;
					}
				}
				return eval('({"name":"' + this.name + '","type":' + nexacro.DataUtils.toTypeCode(this.type) + ',"value":' + valueString + '})');
			};
		}

		_pLiteDBParameter.paramck_datasource = function (datasrc) {
			if (datasrc == null || typeof (datasrc) == "undefined") {
				return false;
			}
			return true;
		};
		delete _pLiteDBParameter;
	}


	if (!nexacro.LiteDBStatement) {
		nexacro.LiteDBStatement = function (id, parent) {
			this.id = this.name = id;
			if (parent) {
				this.parent = parent;
			}

			this.query = "";
			this.ldbconnection = "";
			this.parameters = {
			};
			this.applyrowpos = -1;
			this.async = "true";

			this._event_list = {
				"onsuccess" : 1, 
				"onerror" : 1
			};

			this.onsuccess = null;
			this.onerror = null;

			this._handle = nexacro._createLiteDBStatementObject(this);
		};
		var _pLiteDBStatement = nexacro.LiteDBStatement.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.LiteDBStatement);

		_pLiteDBStatement._type_name = "LiteDBStatement";

		_pLiteDBStatement.on_created = function () {
		};
		_pLiteDBStatement.destroy = function () {
			if (this._handle) {
				this._handle = null;
			}

			return true;
		};

		_pLiteDBStatement.set_query = function (v) {
			if (this.paramck_query(v)) {
				this.query = v;
				nexacro._setLiteDBStatementHandleQuery(this, v);

				return true;
			}
			else {
				return false;
			}
		};
		_pLiteDBStatement.set_ldbconnection = function (v) {
			var ret = false;

			if (v instanceof nexacro.LiteDBConnection) {
				this.ldbconnection = v;
				nexacro._setLiteDBStatementHandleldbConnection(this, v);
				ret = true;
			}
			else if (typeof (v) == "string") {
				var at = "@";
				if (v.indexOf(at) == 0) {
					v = v.substring(at.length);
				}
				else if (v.match(/@/) == null) {
					v = at + v;
				}

				if (null != this.parent[v] && this.parent[v] instanceof nexacro.LiteDBConnection) {
					this.ldbconnection = this.parent[v];
					nexacro._setLiteDBStatementHandleldbConnection(this, this.parent[v]);
					ret = true;
				}
			}

			return ret;
		};
		_pLiteDBStatement.set_parameters = function (v) {
			if (v instanceof nexacro.Dataset) {
				var dataset = v;
				var colsize = dataset.getColCount();
				var rowsize = dataset.getRowCount();

				nexacro._initParamsLiteDBStatementHandle(this);

				for (var row = 0; row < rowsize; row++) {
					var nIdx = nexacro._addParamsLiteDBStatementHandle(this);
					for (var col = 0; col < colsize; col++) {
						var param = new nexacro.LiteDBParameter;
						var colinfo = dataset.getColumnInfo(col);
						var value = dataset.getColumn(row, colinfo.name);

						param.set_name(colinfo.name);
						param.set_type(colinfo.type);
						param.set_value(value);

						nexacro._setLiteDBStatementHandleParameter(this, param, nIdx);
					}
				}

				this.parameters = v;
				return true;
			}
			else if (v instanceof Array) {
				nexacro._initParamsLiteDBStatementHandle(this);
				var nIdx = nexacro._addParamsLiteDBStatementHandle(this);

				for (var i = 0; i < v.length; i += 1) {
					var param = v[i];
					if (param instanceof nexacro.LiteDBParameter) {
						nexacro._setLiteDBStatementHandleParameter(this, param, nIdx);
					}
				}

				this.parameters = v;
				return true;
			}
			else if (v instanceof Object) {
				nexacro._initParamsLiteDBStatementHandle(this);
				var nIdx = nexacro._addParamsLiteDBStatementHandle(this);

				for (var id in v) {
					var param = v[id];
					if (param instanceof nexacro.LiteDBParameter) {
						nexacro._setLiteDBStatementHandleParameter(this, param, nIdx);
					}
				}
				this.parameters = v;
				return true;
			}

			return false;
		};
		_pLiteDBStatement.set_async = function (v) {
			if (v == "true" || v == "false" || v == true || v == false) {
				this.async = nexacro._toBoolean(v);
				nexacro._setLiteDBStatementHandleAsync(this, this.async);

				return true;
			}
			else {
				return false;
			}
		};
		_pLiteDBStatement.close = function () {
			if (this._handle) {
				nexacro._closeLiteDBStatementHandle(this);
			}
		};

		_pLiteDBStatement.executeQuery = function (strQuery) {
			if (strQuery == null) {
				if (this.query.length == 0) {
					return false;
				}
			}
			else {
				if (typeof (strQuery) == "string" && strQuery.length > 0) {
					this.query = strQuery;
					nexacro._setLiteDBStatementHandleQuery(this, strQuery);
				}
				else {
					return false;
				}
			}




			if (this.ldbconnection == null || this.ldbconnection == undefined) {
				return false;
			}

			if (!(this.ldbconnection instanceof nexacro.LiteDBConnection)) {
				return false;
			}

			nexacro._executeQueryLiteDBStatementHandle(this);


			return true;
		};

		_pLiteDBStatement.executeUpdate = function (strQuery) {
			if (strQuery == null) {
				if (this.query.length == 0) {
					return false;
				}
			}
			else {
				if (typeof (strQuery) == "string" && strQuery.length > 0) {
					this.query = strQuery;
					nexacro._setLiteDBStatementHandleQuery(this, strQuery);
				}
				else {
					return false;
				}
			}




			if (this.ldbconnection == null || this.ldbconnection == undefined) {
				return false;
			}

			if (!(this.ldbconnection instanceof nexacro.LiteDBConnection)) {
				return false;
			}

			nexacro._executeUpdateLiteDBStatementHandle(this);

			return true;
		};

		_pLiteDBStatement.on_success = function (reason, returnvalue) {
			var e;
			if (reason != "7") {
				e = new nexacro.LiteDBEventInfo("onsuccess", reason, returnvalue);
			}
			else {
				var tempDS = new nexacro.Dataset("__tempDS", this.parent);

				tempDS = this.JSONStringToDataset2(returnvalue, tempDS);
				e = new nexacro.LiteDBEventInfo("onsuccess", reason, tempDS);
			}
			this.on_fire_onsuccess(this, e);
		};

		_pLiteDBStatement.on_fire_onsuccess = function (objLiteDBStatement, eLiteDBEventInfo) {
			if (this.onsuccess && this.onsuccess._has_handlers) {
				return this.onsuccess._fireEvent(this, eLiteDBEventInfo);
			}
			return true;
		};

		_pLiteDBStatement.on_error = function (errorcode, errormsg, ldberrorcode, ldberrormsg) {
			var e = new nexacro.LiteDBErrorEventInfo("onerror", errorcode, errormsg, ldberrorcode, ldberrormsg);
			this.on_fire_onerror(this, e);
		};

		_pLiteDBStatement.on_fire_onerror = function (objLiteDBStatement, eLiteDBErrorEventInfo) {
			if (this.onerror && this.onerror._has_handlers) {
				return this.onerror._fireEvent(this, eLiteDBErrorEventInfo);
			}
			return true;
		};

		_pLiteDBStatement.retQueryString = function (str) {
			str = str.replace(/"/g, "_DQOUT_");
			str = str.replace(/'/g, "_QUOT_");
			return str;
		};
		_pLiteDBStatement.caheckTypeKeyword = function (strQuery) {
			if (typeof (strQuery) == "undefined" || strQuery.length == 0) {
				return;
			}

			var qry = strQuery.toLowerCase();
			var arr = qry.split(" ");
			for (var i = 0; i < arr.length; i++) {
				if (strQuery.match(/select/i) != null) {
					return 1;
				}
				else if (strQuery.match(/insert/i) != null) {
					return 2;
				}
				else if (strQuery.match(/update/i) != null) {
					return 3;
				}
				else if (strQuery.match(/delete/i) != null) {
					return 4;
				}
			}

			return 0;
		};

		_pLiteDBStatement.paramck_query = function (db_query) {
			if (db_query == null || typeof (db_query) == "undefined" || typeof (db_query) != "string") {
				return false;
			}
			return true;
		};
		_pLiteDBStatement.JSONStringToDataset2 = function (jsonString, dataset) {
			if (dataset == undefined) {
				dataset = new nexacro.Dataset();
			}
			return this.JSONObjectToDataset2(eval('(' + jsonString + ')'), dataset);
		};
		_pLiteDBStatement.JSONObjectToDataset2 = function (jsonObject, dataset) {
			if (jsonObject == undefined) {
				return dataset;
			}
			if (dataset == undefined) {
				dataset = new nexacro.Dataset();
			}

			var colInfos = jsonObject.columnInfos;
			for (var i = 0; i < colInfos.length; i++) {
				dataset.addColumn(colInfos[i].name, nexacro.DataUtils.toTypeName(colInfos[i].type));
			}

			var rows = jsonObject.rows;
			for (var i = 0; i < rows.length; i++) {
				var ridx = dataset.addRow();
				for (var j = 0; j < colInfos.length; j++) {
					switch (colInfos[j].type) {
						case 1:
							dataset.setColumn(ridx, colInfos[j].name, this.jsonDecodeString(rows[i][colInfos[j].name]));
							break;
						case 4:
							dataset.setColumn(ridx, colInfos[j].name, rows[i][colInfos[j].name]);
							break;
						case 2:
						case 3:
						case 5:
						case 6:
						case 7:
						case 0:
						case 8:
						case 9:
						default:
							dataset.setColumn(ridx, colInfos[j].name, rows[i][colInfos[j].name]);
							break;
					}
				}
			}
			return dataset;
		};
		_pLiteDBStatement.jsonDecodeString = function (source) {
			if (source === undefined || source === null) {
				return source;
			}
			if (typeof (source) != 'string') {
				return source;
			}
			var value = source;
			value = value.replace(/\"/g, "&quot;");
			value = value.replace(/\'/g, "&apos;");
			value = value.replace(/\r/g, "&#13;");
			value = value.replace(/\n/g, "&#10;");
			value = value.replace(/\t/g, "&#9;");
			value = value.replace(/\\/g, "&#92;");
			return value;
		};

		_pLiteDBStatement.jsonDecodeString = function (source) {
			if (source === undefined || source === null) {
				return source;
			}
			if (typeof (source) != 'string') {
				return source;
			}
			var value = source;
			value = value.replace(/\&quot\;/g, "\"");
			value = value.replace(/\&apos\;/g, "'");
			value = value.replace(/\&\#13\;/g, "\r");
			value = value.replace(/\&\#10\;/g, "\n");
			value = value.replace(/\&\#9\;/g, "\t");
			value = value.replace(/\&\#92\;/g, "\\");
			return value;
		};

		delete _pLiteDBStatement;
	}
}

//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.1.html	
//
//==============================================================================

if (nexacro.Browser == "Runtime") {
	if (!nexacro._init_litedb_api) {
		nexacro._init_litedb_api = true;

		nexacro._createLiteDBConnectionObject = function (target) {
			return nexacro.__createLiteDBConnectionObject(target, target.on_success, target.on_error);
		};
		nexacro._setLiteDBConnectionHandleBusyTimeOut = function (target, v) {
			return nexacro.__setLiteDBConnectionHandleBusyTimeOut(target._handle, v);
		};
		nexacro._setLiteDBConnectionHandleDataSource = function (target, v) {
			return nexacro.__setLiteDBConnectionHandleDataSource(target._handle, v);
		};
		nexacro._setLiteDBConnectionHandleOpenFlag = function (target, v) {
			return nexacro.__setLiteDBConnectionHandleOpenFlag(target._handle, v);
		};
		nexacro._setLiteDBConnectionHandlePreConnect = function (target, v) {
			return nexacro.__setLiteDBConnectionHandlePreConnect(target._handle, v);
		};
		nexacro._setLiteDBConnectionHandleAsync = function (target, v) {
			return nexacro.__setLiteDBConnectionHandleAsync(target._handle, v);
		};
		nexacro._beginLiteDBConnectionHandle = function (target) {
			nexacro.__beginLiteDBConnectionHandle(target._handle);
		};
		nexacro._closeLiteDBConnectionHandle = function (target) {
			nexacro.__closeLiteDBConnectionHandle(target._handle);
		};
		nexacro._commitLiteDBConnectionHandle = function (target) {
			nexacro.__commitLiteDBConnectionHandle(target._handle);
		};
		nexacro._isConnectedLiteDBConnectionHandle = function (target) {
			nexacro.__isConnectedLiteDBConnectionHandle(target._handle);
		};
		nexacro._openLiteDBConnectionHandle = function (target) {
			nexacro.__openLiteDBConnectionHandle(target._handle, target.datasource, target.openflag);
		};
		nexacro._rollbackLiteDBConnectionHandle = function (target) {
			nexacro.__rollbackLiteDBConnectionHandle(target._handle);
		};

		nexacro._createLiteDBStatementObject = function (target) {
			return nexacro.__createLiteDBStatementObject(target, target.on_success, target.on_error);
		};
		nexacro._setLiteDBStatementHandleQuery = function (target, v) {
			return nexacro.__setLiteDBStatementHandleQuery(target._handle, v);
		};
		nexacro._setLiteDBStatementHandleldbConnection = function (target, v) {
			return nexacro.__setLiteDBStatementHandlelDbConnection(target._handle, v._handle);
		};
		nexacro._initParamsLiteDBStatementHandle = function (target) {
			return nexacro.__initParamsLiteDBStatementHandle(target._handle);
		};
		nexacro._addParamsLiteDBStatementHandle = function (target) {
			return nexacro.__addParamsLiteDBStatementHandle(target._handle);
		};
		nexacro._setLiteDBStatementHandleParameter = function (target, param, idx) {
			if (param instanceof nexacro.LiteDBParameter) {
				return nexacro.__setLiteDBStatementHandleParameter(target._handle, param.name, param.type, param.value, idx);
			}
		};
		nexacro._setLiteDBStatementHandleAsync = function (target, v) {
			return nexacro.__setLiteDBStatementHandleAsync(target._handle, v);
		};

		nexacro._closeLiteDBStatementHandle = function (target) {
			nexacro.__closeLiteDBStatementHandle(target._handle);
		};
		nexacro._executeQueryLiteDBStatementHandle = function (target) {
			nexacro.__executeQueryLiteDBStatementHandle(target._handle);
		};
		nexacro._executeUpdateLiteDBStatementHandle = function (target) {
			nexacro.__executeUpdateLiteDBStatementHandle(target._handle);
		};
	}
}

//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.1.html	
//
//==============================================================================

if (!nexacro.Plugin) {
	nexacro.Plugin = function (id, position, left, top, width, height, right, bottom, parent) {
		nexacro.Component.call(this, id, position, left, top, width, height, right, bottom, parent);

		this._params = new nexacro.Collection();
		this._events = new nexacro.Collection();
	};

	var _pPlugin = nexacro._createPrototype(nexacro.Component, nexacro.Plugin);
	nexacro.Plugin.prototype = _pPlugin;

	_pPlugin._type_name = "Plugin";

	_pPlugin.classid = "";
	_pPlugin.codebase = "";
	_pPlugin.code = "";
	_pPlugin.archive = "";

	_pPlugin.mimetype = "";
	_pPlugin.pluginsrc = "";
	_pPlugin.pluginpage = "";
	_pPlugin.license = "";
	_pPlugin.lpkpath = "";

	_pPlugin.contents = "";
	_pPlugin.adjustalpha = false;
	_pPlugin.usepersistdata = false;

	_pPlugin.windowed = false;
	_pPlugin.popupstyle = false;

	_pPlugin._obj_id = "";
	_pPlugin._obj_elem = null;
	_pPlugin._params = null;

	_pPlugin._event_params = null;

	_pPlugin.set_visible = function (v) {
		if (v === undefined || v === null) {
			return;
		}
		v = nexacro._toBoolean(v);

		nexacro.Component.prototype.set_visible.call(this, v);

		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem.setElementVisible(v);
		}
	};
	_pPlugin.on_create_contents = function () {
		var control_elem = this.getElement();
		if (control_elem) {
			var obj_elem = this._obj_elem = new nexacro.PluginElement(control_elem);
			obj_elem.setElementSize(this._client_width, this._client_height);
		}
	};

	_pPlugin.on_created_contents = function () {
		this.on_apply_classid();
		this.on_apply_codebase();
		this.on_apply_code();
		this.on_apply_archive();
		this.on_apply_mimetype();
		this.on_apply_pluginsrc();
		this.on_apply_pluginpage();
		this.on_apply_plugintype();
		this.on_apply_license();
		this.on_apply_lpkpath();
		this.on_apply_adjustalpha();
		this.on_apply_usepersistdata();
		this.on_apply_windowed();
		this.on_apply_popupstyle();

		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem.component = this;

			var params = this._params;
			var param_cnt = params.length;
			for (var i = 0; i < param_cnt; i++) {
				obj_elem.setElementParam(params.get_id(i), params.get_item(i));
			}

			var events = this._events;
			var event_cnt = events.length;
			for (var i = 0; i < event_cnt; i++) {
				obj_elem.addEventHandler(events.get_id(i), events.get_item(i));
			}

			obj_elem.create();
			obj_elem.setElementVisible(this.visible);
		}
	};

	_pPlugin.on_destroy_contents = function () {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem.destroy();
			this._obj_elem = null;
		}
	};

	_pPlugin.on_update_position = function (resize_flag, move_flag) {
		nexacro.Component.prototype.on_update_position.call(this, resize_flag, move_flag);
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			if (resize_flag || move_flag) {
				obj_elem.on_update_position(resize_flag, move_flag, this._adjust_left, this._adjust_top);
			}
		}
	};

	_pPlugin.on_apply_custom_setfocus = function (focus) {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem.setElementFocus();
		}
	};

	_pPlugin.on_change_containerRect = function (width, height) {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem.setElementSize(width, height);
		}
	};

	_pPlugin._setContents = function (str) {
		if (str.length) {
			if (str.indexOf("<Contents>") != 0) {
				str = "<Contents>" + str + "</Contents>";
			}
			var doc = nexacro._parseXMLDocument(str);
			if (doc) {
				this._params.clear();

				var elems = doc.getElementsByTagName("Param");
				if (elems) {
					var len = elems.length;
					for (var i = 0; i < len; i++) {
						var param = elems[i];
						var name = param.getAttribute("name");
						var value = param.getAttribute("value");

						var obj_elem = this._obj_elem;
						if (obj_elem) {
							obj_elem.setElementParam(name, value);
						}
						else {
							this._params.add_item(name, value);
						}
					}
				}
			}
		}
	};

	_pPlugin.set_contents = function (str) {
		this.contents = str;
		this._setContents(str);
	};

	_pPlugin.set_classid = function (v) {
		this.classid = v;
		this.on_apply_classid();
	};

	_pPlugin.on_apply_classid = function () {
		var elem = this._obj_elem;
		if (elem) {
			var classid = this.classid;
			elem.setElementClassId(classid);
		}
	};

	_pPlugin.set_codebase = function (v) {
		this.codebase = v;
		this.on_apply_codebase();
	};

	_pPlugin.on_apply_codebase = function () {
		var elem = this._obj_elem;
		if (elem) {
			var codebase = this.codebase;
			if (codebase) {
				elem.setElementCodebase(codebase);
			}
		}
	};

	_pPlugin.set_code = function (v) {
		this.code = v;
		this.on_apply_code();
	};

	_pPlugin.on_apply_code = function () {
		var elem = this._obj_elem;
		if (elem) {
			var code = this.code;
			if (code) {
				elem.setElementCode(code);
			}
		}
	};

	_pPlugin.set_archive = function (v) {
		this.archive = v;
		this.on_apply_archive();
	};

	_pPlugin.on_apply_archive = function () {
		var elem = this._obj_elem;
		if (elem) {
			var archive = this.archive;
			if (archive) {
				elem.setElementArchive(archive);
			}
		}
	};

	_pPlugin.set_mimetype = function (v) {
		this.mimetype = v;
		this.on_apply_mimetype();
	};

	_pPlugin.on_apply_mimetype = function () {
		var elem = this._obj_elem;
		if (elem) {
			var mimetype = this.mimetype;
			if (mimetype) {
				elem.setElementMIMEType(mimetype);
			}
		}
	};

	_pPlugin.set_pluginsrc = function (v) {
		this.pluginsrc = v;
		this.on_apply_pluginsrc();
	};

	_pPlugin.on_apply_pluginsrc = function () {
		var elem = this._obj_elem;
		if (elem) {
			var pluginsrc = this.pluginsrc;
			if (pluginsrc) {
				elem.setElementPluginSrc(pluginsrc);
			}
		}
	};

	_pPlugin.set_plugintype = function (v) {
		this.plugintype = v;
		this.on_apply_plugintype();
	};

	_pPlugin.on_apply_plugintype = function () {
		var elem = this._obj_elem;
		if (elem) {
			var plugintype = this.plugintype;
			if (plugintype) {
				elem.setElementPluginMIMEType(plugintype);
			}
		}
	};

	_pPlugin.set_pluginpage = function (v) {
		this.pluginpage = v;
		this.on_apply_pluginpage();
	};

	_pPlugin.on_apply_pluginpage = function () {
		var elem = this._obj_elem;
		if (elem) {
			var pluginpage = this.pluginpage;
			if (pluginpage) {
				elem.setElementPluginPage(pluginpage);
			}
		}
	};

	_pPlugin.set_license = function (v) {
		this.license = v;
		this.on_apply_license();
	};

	_pPlugin.on_apply_license = function () {
		var elem = this._obj_elem;
		if (elem) {
			var license = this.license;
			if (license) {
				elem.setElementLicense(license);
			}
		}
	};

	_pPlugin.set_lpkpath = function (v) {
		this.lpkpath = v;
		this.on_apply_lpkpath();
	};

	_pPlugin.on_apply_lpkpath = function () {
		var elem = this._obj_elem;
		if (elem) {
			var lpkpath = this.lpkpath;
			if (lpkpath) {
				elem.setElementLicenseFile(lpkpath);
			}
		}
	};

	_pPlugin.set_adjustalpha = function (v) {
		this.adjustalpha = nexacro._toBoolean(v);
		this.on_apply_adjustalpha();
	};
	_pPlugin.on_apply_adjustalpha = function () {
		var elem = this._obj_elem;
		if (elem) {
			var adjustalpha = this.adjustalpha;
			if (adjustalpha) {
				elem.setElementAdjustAlpha(adjustalpha);
			}
		}
	};

	_pPlugin.set_usepersistdata = function (v) {
		this.userpersistdata = v;
		this.on_apply_usepersistdata();
	};

	_pPlugin.on_apply_usepersistdata = function () {
		var elem = this._obj_elem;
		if (elem) {
			var usepersistdata = this.usepersistdata;
			if (usepersistdata) {
				elem.setElementUsePersistData(usepersistdata);
			}
		}
	};


	_pPlugin.set_windowed = function (v) {
		this.windowed = nexacro._toBoolean(v);
	};

	_pPlugin.on_apply_windowed = function () {
		var elem = this._obj_elem;
		if (elem) {
			var windowed = this.windowed;
			if (windowed) {
				elem.setElementWindowed(windowed);
			}
		}
	};

	_pPlugin.set_popupstyle = function (v) {
		this.popupstyle = nexacro._toBoolean(v);
		this.on_apply_popupstyle();
	};

	_pPlugin.on_apply_popupstyle = function () {
		var elem = this._obj_elem;
		if (elem) {
			var popupstyle = this.popupstyle;
			if (popupstyle) {
				elem.setElementPopupStyle(popupstyle);
			}
		}
	};
	_pPlugin.install = function () {
		var elem = this._obj_elem;
		if (elem) {
			elem.install();
		}
	};

	_pPlugin.isInstalled = function () {
		var elem = this._obj_elem;
		if (elem) {
			return elem.isInstalled();
		}
		return false;
	};

	_pPlugin.isLoaded = function () {
		var elem = this._obj_elem;
		if (elem) {
			return elem.isLoaded();
		}
		return false;
	};
	_pPlugin.setProperty = function (propId, val) {
		var fname = "set_" + propId;
		var setFn = this[fname];
		if (setFn) {
			setFn.call(this, val);
		}
		else {
			var obj_elem = this._obj_elem;
			if (obj_elem) {
				if (propId.toLowerCase() == "movie") {
					obj_elem.setElementPluginSrc(val);
					obj_elem.setElementPluginMIMEType("application/x-shockwave-flash");
					obj_elem.setElementParam('wmode', "Transparent");
				}
				obj_elem.setElementParam(propId, val);
			}
			else {
				this._params.add_item(propId, val);
			}
		}
	};

	_pPlugin.getProperty = function (propId) {
		var val;
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			val = obj_elem.getElementParam(propId);
		}
		else {
			this._params.get_item(propId);
		}

		if (val == null) {
			val = this[propId];
		}
		return val;
	};

	_pPlugin.callMethod = function () {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i] instanceof nexacro.Plugin) {
					var plugin_elem = arguments[i]._obj_elem;
					if (plugin_elem) {
						arguments[i] = plugin_elem.getPluginObject();
					}
				}
			}
			return obj_elem.callMethod.apply(obj_elem, arguments);
		}
	};

	_pPlugin._fireEvent = function () {
		var i, ret;
		var handlers = this._user_handlers;
		var len = handlers.length;

		for (var i = 0; i < len; i++) {
			h = handlers[i];
			if (h) {
				ret = h.handler.apply(h.target, arguments);
			}
		}
		return ret;
	};

	_pPlugin.addEventHandler = function (evt_id, func, target) {
		var ret = false;
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			ret = obj_elem.addEventHandler(evt_id, func);
		}
		if (ret == false) {
			this._events.add_item(evt_id, func);
		}
		if (evt_id in this._event_list == false) {
			this._event_list[evt_id] = 1;
		}
		nexacro.Component.prototype.addEventHandler.call(this, evt_id, func, target);
		if (this[evt_id]) {
			this[evt_id]._firePluginEvent = _pPlugin._fireEvent;
		}
	};
	_pPlugin.removeEventHandler = function (evt_id, func, target) {
		var obj_elem = this._obj_elem;
		if (obj_elem) {
			obj_elem.removeEventHandler(evt_id, func);
		}
		else {
			this._events.delete_item(evt_id);
		}
		nexacro.Component.prototype.removeEventHandler.call(this, evt_id, func, target);
	};
	delete _pPlugin;
}

//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.1.html	
//
//==============================================================================

if (!nexacro.Device || nexacro.OS == "iOS") {
	if (!nexacro._init_deviceobjs_api) {
		nexacro._createFileDialogObject = nexacro._emptyFn;
		nexacro._setFileDialogHandleDefaultExtension = nexacro._emptyFn;
		nexacro._setFileDialogHandleFilter = nexacro._emptyFn;
		nexacro._setFileDialogHandleFilterIndex = nexacro._emptyFn;
		nexacro._setFileDialogHandleAsync = nexacro._emptyFn;
		nexacro._openFileDialogHandle = nexacro._emptyFn;

		nexacro._createVirtualFileObject = nexacro._emptyFn;
		nexacro._setVirtualFileHandleFileName = nexacro._emptyFn;
		nexacro._setVirtualFileHandleFullPath = nexacro._emptyFn;
		nexacro._setVirtualFileHandlePath = nexacro._emptyFn;
		nexacro._openVirtualFileHandle = nexacro._emptyFn;
		nexacro._closeVirtualFileHandle = nexacro._emptyFn;
		nexacro._readVirtualFileHandle = nexacro._emptyFn;
		nexacro._readlineVirtualFileHandle = nexacro._emptyFn;
		nexacro._seekVirtualFileHandle = nexacro._emptyFn;
		nexacro._writeVirtualFileHandle = nexacro._emptyFn;
		nexacro._removeVirtualFileHandle = nexacro._emptyFn;
		nexacro._getFileListVirtualFileHandle = nexacro._emptyFn;
		nexacro._getFileSizeVirtualFileHandle = nexacro._emptyFn;
		nexacro._isExistVirtualFileHandle = nexacro._emptyFn;
		nexacro._copyVirtualFileHandle = nexacro._emptyFn;
		nexacro._renameVirtualFileHandle = nexacro._emptyFn;
		nexacro._createDirectoryVirtualFileHandle = nexacro._emptyFn;
		nexacro._deleteDirectoryVirtualFileHandle = nexacro._emptyFn;
		nexacro._renameDirectoryVirtualFileHandle = nexacro._emptyFn;

		nexacro._showModalSync = nexacro._emptyFn;
		nexacro._showModalWindow = nexacro._emptyFn;

		nexacro._attachChildFrame = function (_cur_win, _doc, key, adl_url, div_id, fdl_url) {
			nexacro.__attachChildFrame(_cur_win, _doc, key, adl_url, div_id, fdl_url);
		};

		nexacro._setIconWidget = nexacro._emptyFn;
		nexacro._setTopmostWidget = nexacro._emptyFn;
	}

	if (!nexacro.FileDialog && nexacro.OS != "iOS") {
		nexacro.FileDialog = function (id, parent) {
			this.id = this.name = id;
			if (parent) {
				this.parent = parent;
				var curFrame = parent._getOwnerFrame();
				if (curFrame._window) {
					this._winhandle = curFrame._window._handle;
				}
				else {
					this._winhandle = nexacro._getMainWindowHandle();
				}
			}

			this.defaultextension = true;
			this.filter = "";
			this.filterindex = 0;
			this.async = "true";

			this._event_list = {
				"onclose" : 1, 
				"onerror" : 1
			};

			this.onclose = null;
			this.onerror = null;

			this._handle = nexacro._createFileDialogObject(this);
		};

		nexacro.FileDialog.LOAD = 1;
		nexacro.FileDialog.SAVE = 2;
		nexacro.FileDialog.MULTILOAD = 3;
		nexacro.FileDialog.SELFOLDER = 4;

		var _pFileDialog = nexacro.FileDialog.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.FileDialog);

		_pFileDialog._type_name = "FileDialog";

		_pFileDialog.on_created = function () {
		};
		_pFileDialog.destroy = function () {
			if (this._handle) {
				this._handle = null;
			}

			return true;
		};
		_pFileDialog.set_defaultextension = function (v) {
			if (this.pramck_filedialog_defaultextension(v)) {
				v = nexacro._toBoolean(v);
				this.defaultextension = v;
				nexacro._setFileDialogHandleDefaultExtension(this, v);

				return true;
			}
			else {
				return false;
			}
		};
		_pFileDialog.set_filter = function (v) {
			if (this.pramck_filedialog_filter(v)) {
				var filterarr = v.split("|");
				var f_len = filterarr.length;
				if (f_len < 2) {
					return false;
				}

				if ((f_len % 2 == 1) && filterarr[f_len - 1] != "") {
					return false;
				}

				var normalize = /[\*].[a-zA-Z0-9가-힣\*]/gi;

				for (var i = 0; i < f_len; i++) {
					if (i % 2 == 1) {
						if (normalize.test(filterarr[i]) == false) {
							return false;
						}
						normalize.lastIndex = 0;
					}
				}
				this.filter = v;
				nexacro._setFileDialogHandleFilter(this, v);

				return true;
			}
			else {
				return false;
			}
		};
		_pFileDialog.set_filterindex = function (v) {
			if (this.pramck_filedialog_numbercheck(v)) {
				this.filterindex = v;
				nexacro._setFileDialogHandleFilterIndex(this, v);

				return true;
			}
			else {
				return false;
			}
		};
		_pFileDialog.set_async = function (v) {
			if (v == "true" || v == "false" || v == true || v == false) {
				v = nexacro._toBoolean(v);
				this.async = v;
				nexacro._setFileDialogHandleAsync(this, v);

				return true;
			}
			else {
				return false;
			}
		};
		_pFileDialog.open = function (strTitle, constOpenMode, strInitialPath, strFileName) {
			if (strInitialPath == null && strFileName == null) {
				strInitialPath = "%USERAPP%";
				strFileName = "";
			}
			else if (strFileName == null) {
				strFileName = "";
			}
			else if (strFileName != null) {
			}
			else {
				return false;
			}

			if (!this.pramck_filedialogOpen(strTitle, constOpenMode, strInitialPath, strFileName)) {
				return false;
			}

			if (this.filter == "") {
				var filter = "All(*.*)|*.*|";

				this.filter = filter;
				this.set_filter(filter);
			}

			var filterarr = this.filter.split("|");

			if (this.defaultextension == true && this.filterindex >= (filterarr.length / 2)) {
				return false;
			}

			if (this._handle) {
				nexacro._openFileDialogHandle(this, strTitle, constOpenMode, strInitialPath, strFileName);
			}

			return true;
		};

		_pFileDialog.on_close = function (reason, path, virtualfiles, selectedfilterindex) {
			if (selectedfilterindex != undefined) {
				this.filterindex = selectedfilterindex;
			}

			var _virtualFile = virtualfiles;
			var arr = new Array(_virtualFile.length);

			for (var i = 0; i < _virtualFile.length; i++) {
				var obj = new nexacro.VirtualFile("VirtualFile", "");

				obj.filename = _virtualFile[i].filename;
				obj.fullpath = _virtualFile[i].fullpath;
				obj.path = _virtualFile[i].path;
				arr[i] = obj;

				if (obj._handle) {
					obj._handle = null;
				}
			}

			var e = new nexacro.FileDialogEventInfo("onclose", reason, path, arr);
			this.on_fire_onclose(this, e);
		};

		_pFileDialog.on_fire_onclose = function (objFileDialog, eFileDialogEventInfo) {
			if (this.onclose && this.onclose._has_handlers) {
				return this.onclose._fireEvent(this, eFileDialogEventInfo);
			}
			return true;
		};

		_pFileDialog.pramck_filedialog_defaultextension = function (property) {
			if (property == null || typeof (property) == "undefined" || typeof (property) != "boolean") {
				if (property.toLowerCase() == 'true' || property.toLowerCase() == 'false') {
					return true;
				}
				else {
					return false;
				}
			}
			else {
				return true;
			}
		};
		_pFileDialog.pramck_filedialog_filter = function (property) {
			if (property == null || typeof (property) == "undefined" || typeof (property) != "string") {
				return false;
			}
			else {
				return true;
			}
		};
		_pFileDialog.pramck_filedialog_numbercheck = function (property) {
			if (property == null || typeof (property) == "undefined") {
				return false;
			}

			if (!this._publicNumCheck(property)) {
				return false;
			}
			return true;
		};
		_pFileDialog.pramck_filedialogOpen = function (strTitle, constOpenMode, strInitialPath, strFileName) {
			if (strTitle == null || typeof (strTitle) == "undefined") {
				return false;
			}

			if (constOpenMode == null || typeof (constOpenMode) == "undefined") {
				return false;
			}
			else {
				if (!this._publicNumCheck(constOpenMode)) {
					return false;
				}

				if (constOpenMode > 4 || constOpenMode < 1) {
					return false;
				}
			}

			if (strInitialPath == null || typeof (strInitialPath) == "undefined") {
				return false;
			}

			if (strFileName == null || typeof (strFileName) == "undefined") {
				return false;
			}

			return true;
		};
		_pFileDialog._publicNumCheck = function (v) {
			try {
				var strlength = v.toString().split(" ").join("");
			}
			catch (e) {
				return false;
			}

			if (strlength.length == 0) {
				return false;
			}

			try {
				var numberss = Number(v.toString());
			}
			catch (e) {
				return false;
			}

			if ((+numberss) != (+numberss)) {
				return false;
			}

			return true;
		};
		delete _pFileDialog;
	}

	if (!nexacro.FileDialogEventInfo) {
		nexacro.FileDialogEventInfo = function (strEventId, strReason, strPath, arrVirtualfiles) {
			this.eventid = strEventId;
			this.reason = strReason;
			this.path = strPath;
			this.virtualfiles = arrVirtualfiles;
		};
		var _pFileDialogEventInfo = nexacro.FileDialogEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.FileDialogEventInfo);

		_pFileDialogEventInfo._type_name = "FileDialogEventInfo";

		delete _pFileDialogEventInfo;
	}
}

if (!nexacro.Device || nexacro.OS == "Android" || nexacro.OS == "iOS") {
	if (!nexacro.VirtualFile) {
		nexacro.VirtualFile = function (id, parent) {
			if (nexacro.OS == "iOS") {
				this._id = nexacro.Device.makeID();
				nexacro.Device._userCreatedObj[this._id] = this;
			}

			this.id = this.name = id;
			if (parent) {
				this.parent = parent;
			}

			this.filename = "";
			this.fullpath = "";
			this.path = "";
			this.async = "true";

			this._event_list = {
				"onsuccess" : 1, 
				"onerror" : 1
			};

			this._ref_file = null;

			this.onsuccess = null;
			this.onerror = null;

			this._handle = nexacro._createVirtualFileObject(this);

			if (nexacro.OS == "iOS") {
				var params = '{"strFilename":"' + this.filename + '","fullpath":"' + this.fullpath + '","path":"' + this.path + '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"constructor", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
		};

		nexacro.VirtualFile.openRead = 0x0001;
		nexacro.VirtualFile.openWrite = 0x0002;
		nexacro.VirtualFile.openAppend = 0x0010;
		nexacro.VirtualFile.openCreate = 0x1000;
		nexacro.VirtualFile.openText = 0x0100;
		nexacro.VirtualFile.openBinary = 0x0200;

		nexacro.VirtualFile.seekBegin = 0x0000;
		nexacro.VirtualFile.seekCurrent = 0x0001;
		nexacro.VirtualFile.seekEnd = 0x0002;

		nexacro.VirtualFile.findAll = 0x0001;
		nexacro.VirtualFile.findFileOnly = 0x0002;
		nexacro.VirtualFile.findDirectoryOnly = 0x0003;
		nexacro.VirtualFile.findCaseless = 0x0010;

		var _pVirtualFile = nexacro.VirtualFile.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.VirtualFile);

		_pVirtualFile._type_name = "VirtualFile";

		_pVirtualFile.on_created = function () {
		};
		_pVirtualFile.destroy = function () {
			if (this._ref_file) {
				this._ref_file = null;
			}
			if (this._handle) {
				this._handle = null;
			}

			if (nexacro.OS == "iOS") {
				var params = '""';
				var jsonstr;

				delete nexacro.Device._userCreatedObj[this._id];
				jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"destroy", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}

			return true;
		};
		_pVirtualFile.set_filename = function (v) {
			if (this.pramck_virtualproperty(v)) {
				this.filename = v;
				nexacro._setVirtualFileHandleFileName(this, v);

				return true;
			}
			else {
				return false;
			}
		};
		_pVirtualFile.set_fullpath = function (v) {
			if (this.pramck_virtualproperty(v)) {
				this.fullpath = v;
				nexacro._setVirtualFileHandleFullPath(this, v);

				return true;
			}
			else {
				return false;
			}
		};
		_pVirtualFile.set_path = function (v) {
			if (this.pramck_virtualproperty(v)) {
				this.path = v;
				nexacro._setVirtualFileHandlePath(this, v);

				return true;
			}
			else {
				return false;
			}
		};
		_pVirtualFile.set_async = function (v) {
			if (v == "true" || v == "false" || v == true || v == false || nexacro.OS != "iOS") {
				v = nexacro._toBoolean(v);
				this.async = v;

				nexacro._setVirtualFileHandleAsync(this, v);
				return true;
			}
			else {
				return false;
			}
		};
		_pVirtualFile.set_filename = nexacro._emptyFn;
		_pVirtualFile.set_fullpath = nexacro._emptyFn;
		_pVirtualFile.set_path = nexacro._emptyFn;


		_pVirtualFile.open = function (strFileName, nOptions) {
			var nConstOptions = "";
			var fullpath = "";

			if (arguments.length < 1) {
				return false;
			}

			if (arguments == 1) {
				nConstOptions = strFileName;
			}
			else {
				nConstOptions = nOptions;
				fullpath = strFileName;

				fullpath = fullpath.split("\\").join("/");
				this.fullpath = fullpath;
				this.set_fullpath(fullpath);
			}

			if (!this.fullpath || this.fullpath.length <= 0) {
				return false;
			}

			var index_path = fullpath.lastIndexOf("/");
			if (index_path == -1) {
				index_path = fullpath.lastIndexOf("%");
			}
			var path = path = fullpath.substring(0, index_path + 1);

			this.path = path;
			this.set_path(path);

			var index_name = fullpath.lastIndexOf("/");
			if (index_name == -1) {
				index_name = fullpath.lastIndexOf("%");
			}
			var filename = fullpath.substring(index_name + 1, fullpath.length);

			this.filename = filename;
			this.set_filename(filename);

			if (!this.pramck_open(path, nConstOptions)) {
				return false;
			}

			if (this._handle) {
				return nexacro._openVirtualFileHandle(this, strFileName, nConstOptions);
			}

			if (nexacro.OS == "iOS") {
				var iosfilepath = "";
				var rootPathCheck = fullpath.substring(0, 9);

				if (rootPathCheck.toLowerCase() == "%userapp%") {
					iosfilepath = "_userapp_" + fullpath.substring(9, fullpath.length);
				}
				else {
					var _filecache = application._getFileCache(strFileName);
					if (null != _filecache) {
						iosfilepath = "_userapp_" + _filecache;
					}
					else {
						iosfilepath = strFileName;
					}
				}
				this.strFilename = iosfilepath;

				var params = "";
				params = '{"strFilename":"' + this.strFilename + '","nOptions":"' + nConstOptions + '"}';

				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"open", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};

		_pVirtualFile.close = function () {
			if (this._handle) {
				nexacro._closeVirtualFileHandle(this);
			}
			if (nexacro.OS == "iOS") {
				var params = '""';
				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"close", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
		};
		_pVirtualFile.read = function (nLength, strCharset) {
			var _nLen = -1;
			var _strCharset = "utf-8";

			if (arguments.length == 1) {
				_nLen = nLength || -1;
			}
			else if (arguments.length == 2) {
				_nLen = nLength;
				_strCharset = strCharset;
			}

			if (!this.pramck_Read(_nLen)) {
				return false;
			}

			if (this._handle) {
				nexacro._readVirtualFileHandle(this, _nLen, _strCharset);
			}

			if (nexacro.OS == "iOS") {
				var params = '{  "nLength":"' + _nLen;
				params += '", "strCharset":"' + _strCharset;
				params += '"}';

				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"read", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}

			return true;
		};
		_pVirtualFile.readLine = function (strDelimeter, strCharset) {
			var _strDelimeter = "";
			var _strCharset = "utf-8";
			if (arguments.length == 1) {
				_strDelimeter = strDelimeter;
			}
			else if (arguments.length == 2) {
				_strDelimeter = strDelimeter;
				_strCharset = strCharset;
			}
			if (!this.pramck_ReadLine(_strDelimeter)) {
				return false;
			}

			if (this._handle) {
				nexacro._readlineVirtualFileHandle(this, _strDelimeter, _strCharset);
			}

			if (nexacro.OS == "iOS") {
				var params = '{  "strDelimeter":"' + _strDelimeter;
				params += '", "strCharset":"' + _strCharset;
				params += '"}';

				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"readLine", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};
		_pVirtualFile.seek = function (nOffset, nOption) {
			var _nOffset = "";
			var _nOption = "";

			if (arguments.length == 1) {
				_nOffset = nOffset;
				_nOption = VirtualFile.seekCurrent;
			}
			else if (arguments.length == 2) {
				_nOffset = nOffset;
				_nOption = nOption;
			}
			if (!this.paramck_Seek(_nOffset, _nOption)) {
				return false;
			}

			if (this._handle) {
				nexacro._seekVirtualFileHandle(this, _nOffset, _nOption);
			}

			if (nexacro.OS == "iOS") {
				var params = '{  "nOffset":"' + _nOffset;
				params += '", "nOption":"' + _nOption;
				params += '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"seek", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};
		_pVirtualFile.write = function (varData, strCharset) {
			var _varData = varData;
			var _strCharset = "utf-8";

			if (typeof (_varData) == "undefined" || _varData.length == 0) {
				return false;
			}
			if (arguments.length == 2) {
				_strCharset = strCharset;
			}

			if (this._handle) {
				nexacro._writeVirtualFileHandle(this, _varData, _strCharset);
			}

			if (nexacro.OS == "iOS") {
				var params = '{  "varData":"' + _varData;
				params += '", "strCharset":"' + _strCharset;
				params += '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"write", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};
		_pVirtualFile.remove = function (strFilePath) {
			var _strFilePath = "";
			if (strFilePath instanceof nexacro.VirtualFile) {
				_strFilePath = strFilePath.fullpath;
			}
			else {
				_strFilePath = strFilePath;
			}
			if (!this.pramck_Delete(_strFilePath)) {
				return false;
			}

			if (this._handle) {
				nexacro._removeVirtualFileHandle(this, _strFilePath);
			}

			if (nexacro.OS == "iOS") {
				var deletetPath = "";
				var rootPathCheck = "";
				var iosfilepath = "";

				rootPathCheck = _strFilePath.substring(0, 9);
				if (rootPathCheck.toLowerCase() == "%userapp%") {
					iosfilepath = "_userapp_" + _strFilePath.substring(9, _strFilePath.length);
				}
				else {
					var _filecache = application._getFileCache(strFilePath);
					if (null != _filecache) {
						iosfilepath = "_userapp_" + _filecache;
					}
					else {
						iosfilepath = _strFilePath;
					}
				}
				deletetPath = iosfilepath;

				var params = '{"strFilePath":"' + deletetPath + '"}';
				var jsonstr = '{"id":' + this._id + ',"div":"VirtualFile", "method":"remove", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};
		_pVirtualFile.getFileList = function (strPath, strSearchExpr, nOptions) {
			var _strPath = strPath;
			var _strSearchExpr = strSearchExpr;
			var nConstOptions = nOptions;

			if (typeof (nConstOptions) == "undefined") {
				nConstOptions = VirtualFile.findAll;
			}

			if (strPath == null || strSearchExpr == null || !this.pramck_GetFileList(_strPath, _strSearchExpr, nConstOptions)) {
				return false;
			}

			if (arguments.length < 2) {
				return false;
			}

			if (this._handle) {
				nexacro._getFileListVirtualFileHandle(this, _strPath, _strSearchExpr, nConstOptions);
			}

			if (nexacro.OS == "iOS") {
				var params = '{"strPath":"' + _strPath + '" ,"strSearchExpr":"' + _strSearchExpr
					 + '","constOption":"' + nConstOptions + '"}';

				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"getFileList", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};
		_pVirtualFile.getFileSize = function () {
			var ret = 0;


			if (this._handle) {
				if (this.fullpath != null && this.fullpath != "") {
					ret = nexacro._getFileSizeVirtualFileHandle(this, this.fullpath);
				}
			}
			else {
				if (this._ref_file) {
					ret = this._ref_file.size;
				}
			}

			if (nexacro.OS == "iOS") {
				var params;
				var iosfilepath = "";
				var rootPathCheck = this.fullpath.substring(0, 9);
				if (rootPathCheck.toLowerCase() == "%userapp%") {
					iosfilepath = "_userapp_" + this.fullpath.substring(9, this.fullpath.length);
				}

				params = '{  "strPath":"' + iosfilepath + '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"getFileSize", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}

			return ret;
		};
		_pVirtualFile.isExist = function (strPath) {
			if (!this.pramck_IsExist(strPath)) {
				return false;
			}

			if (this._handle) {
				nexacro._isExistVirtualFileHandle(this, strPath);
			}

			if (nexacro.OS == "iOS") {
				var params = '{  "strPath":"' + strPath + '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"isExist", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};
		_pVirtualFile.copy = function (path, destpath) {
			if (!this.pramck_IsExist(path)) {
				return false;
			}

			if (!this.pramck_IsExist(destpath)) {
				return false;
			}

			if (this._handle) {
				nexacro._copyVirtualFileHandle(this, path, destpath);
			}

			if (nexacro.OS == "iOS") {
				var userapppath = path.substring(0, 9);
				if (userapppath.toLowerCase() == "%userapp%") {
					path = "_userapp_" + path.substring(9, path.length);
				}
				else {
					return false;
				}

				userapppath = destpath.substring(0, 9);
				if (userapppath.toLowerCase() == "%userapp%") {
					destpath = "_userapp_" + destpath.substring(9, destpath.length);
				}

				var params = '{  "path":"' + path + '","destpath":"' + destpath + '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"copy", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};
		_pVirtualFile.rename = function (path, destpath) {
			if (!this.pramck_IsExist(path)) {
				return false;
			}

			if (!this.pramck_IsExist(destpath)) {
				return false;
			}

			if (this._handle) {
				nexacro._renameVirtualFileHandle(this, path, destpath);
			}

			if (nexacro.OS == "iOS") {
				var userapppath = path.substring(0, 9);
				if (userapppath.toLowerCase() == "%userapp%") {
					path = "_userapp_" + path.substring(9, path.length);
				}
				else {
					return false;
				}

				userapppath = destpath.substring(0, 9);
				if (userapppath.toLowerCase() == "%userapp%") {
					destpath = "_userapp_" + destpath.substring(9, destpath.length);
				}
				else {
					return false;
				}

				var params = '{  "path":"' + path + '","destpath":"' + destpath + '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"rename", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};
		_pVirtualFile.createDirectory = function (strPath, bAllCreate) {
			if (!this.pramck_IsExist(strPath)) {
				return false;
			}

			if (arguments.length == 1) {
				this.strPath = strPath;
				this.bAllCreate = false;
			}
			else if (arguments.length == 2) {
				this.strPath = strPath;
				this.bAllCreate = nexacro._toBoolean(bAllCreate);
			}
			else {
				return false;
			}

			if (this._handle) {
				nexacro._createDirectoryVirtualFileHandle(this, strPath, this.bAllCreate);
			}

			if (nexacro.OS == "iOS") {
				var strInitialPath = "";
				var strDestPath = "";
				var rootPathCheck = strPath.substring(0, 9);

				if (rootPathCheck.toLowerCase() == "%userapp%") {
					strInitialPath = "_userapp_" + strPath.substring(9, strPath.length);
				}
				else {
					return false;
				}
				var params = '{  "strPath":"' + strInitialPath
					 + '","bAllCreate":"' + this.bAllCreate + '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"createDirectory", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};
		_pVirtualFile.deleteDirectory = function (strPath, bAllChild) {
			if (!this.pramck_IsExist(strPath)) {
				return false;
			}

			if (arguments.length == 1) {
				this.strPath = strPath;
				this.bAllChild = false;
			}
			else if (arguments.length == 2) {
				this.strPath = strPath;
				this.bAllChild = nexacro._toBoolean(bAllChild);
			}
			else {
				return false;
			}

			if (this._handle) {
				nexacro._deleteDirectoryVirtualFileHandle(this, strPath, this.bAllChild);
			}

			if (nexacro.OS == "iOS") {
				var strInitialPath = "";
				var rootPathCheck = strPath.substring(0, 9);
				if (rootPathCheck.toLowerCase() == "%userapp%") {
					strInitialPath = "_userapp_" + strPath.substring(9, strPath.length);
				}
				else {
					return false;
				}

				var params = '{  "strPath":"' + strInitialPath
					 + '","bAllChild":"' + this.bAllChild + '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"deleteDirectory", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};
		_pVirtualFile.renameDirectory = function (strPath, strNewName) {
			if (!this.pramck_IsExist(strPath)) {
				return false;
			}

			if (!this.paramck_folderName(strNewName)) {
				return false;
			}

			if (strNewName == null) {
				return false;
			}

			this.strPath = strPath;
			this.strNewName = strNewName;

			if (this._handle) {
				nexacro._renameDirectoryVirtualFileHandle(this, strPath, strNewName);
			}

			if (nexacro.OS == "iOS") {
				var params = '{  "strPath":"' + strPath
					 + '","strNewName":"' + strNewName + '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"renameDirectory", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		};
		_pVirtualFile.on_success = function (reason, textdata, bindata, fileattributelist, filesize, fileisexist) {
			var _textdata = "";
			var _bindata = "";
			var temptxtlen = 0;
			var tempbinlen = 0;

			if (textdata) {
				temptxtlen = textdata.length;
			}
			if (bindata) {
				tempbinlen = bindata.length;
			}

			if (temptxtlen > 0) {
				_textdata = textdata.replace(/\&amp\;/g, "&");
				_textdata = _textdata.replace(/\&lt\;/g, "<");
				_textdata = _textdata.replace(/\&gt\;/g, ">");
				_textdata = _textdata.replace(/\&quot\;/g, "\"");
				_textdata = _textdata.replace(/\&apos\;/g, "'");
				_textdata = _textdata.replace(/\&\#32\;/g, " ");
				_textdata = _textdata.replace(/\&\#13\;/g, "\r");
				_textdata = _textdata.replace(/\&\#10\;/g, "\n");
				_textdata = _textdata.replace(/\&\#9\;/g, "\t");
			}
			else if (tempbinlen > 0) {
				_bindata = bindata.replace(/\&amp\;/g, "&");
				_bindata = _bindata.replace(/\&lt\;/g, "<");
				_bindata = _bindata.replace(/\&gt\;/g, ">");
				_bindata = _bindata.replace(/\&quot\;/g, "\"");
				_bindata = _bindata.replace(/\&apos\;/g, "'");
				_bindata = _bindata.replace(/\&\#32\;/g, " ");
				_bindata = _bindata.replace(/\&\#13\;/g, "\r");
				_bindata = _bindata.replace(/\&\#10\;/g, "\n");
				_bindata = _bindata.replace(/\&\#9\;/g, "\t");
			}

			var e = new nexacro.VirtualFileEventInfo("onsuccess", reason, _textdata, _bindata, fileattributelist, filesize, fileisexist);
			this.on_fire_onsuccess(this, e);
		};

		_pVirtualFile._onsuccess = function (objData) {
			var _textdata = "";
			var _bindata = "";
			var temptxtlen = 0;
			var tempbinlen = 0;

			if (objData.textdata) {
				temptxtlen = objData.textdata.length;
			}
			if (objData.binarydata) {
				tempbinlen = objData.binarydata.length;
			}

			if (temptxtlen > 0) {
				_textdata = objData.textdata.replace(/\&amp\;/g, "&");
				_textdata = _textdata.replace(/\&lt\;/g, "<");
				_textdata = _textdata.replace(/\&gt\;/g, ">");
				_textdata = _textdata.replace(/\&quot\;/g, "\"");
				_textdata = _textdata.replace(/\&apos\;/g, "'");
				_textdata = _textdata.replace(/\&\#32\;/g, " ");
				_textdata = _textdata.replace(/\&\#13\;/g, "\r");
				_textdata = _textdata.replace(/\&\#10\;/g, "\n");
				_textdata = _textdata.replace(/\&\#9\;/g, "\t");
			}
			else if (tempbinlen > 0) {
				_bindata = objData.binarydata.replace(/\&amp\;/g, "&");
				_bindata = _bindata.replace(/\&lt\;/g, "<");
				_bindata = _bindata.replace(/\&gt\;/g, ">");
				_bindata = _bindata.replace(/\&quot\;/g, "\"");
				_bindata = _bindata.replace(/\&apos\;/g, "'");
				_bindata = _bindata.replace(/\&\#32\;/g, " ");
				_bindata = _bindata.replace(/\&\#13\;/g, "\r");
				_bindata = _bindata.replace(/\&\#10\;/g, "\n");
				_bindata = _bindata.replace(/\&\#9\;/g, "\t");
			}

			var e = new nexacro.VirtualFileEventInfo("onsuccess", objData.reason, _textdata, _bindata, eval(objData.fileattributelist), objData.filesize, objData.fileisexist);
			this.on_fire_onsuccess(this, e);
		};

		_pVirtualFile.on_fire_onsuccess = function (objAsyncVFile, eAsyncVFileEventInfo) {
			if (this.onsuccess && this.onsuccess._has_handlers) {
				return this.onsuccess._fireEvent(this, eAsyncVFileEventInfo);
			}
			return true;
		};

		_pVirtualFile.on_error = function (errorcode, errormsg) {
			var e = new nexacro.VirtualFileErrorEventInfo("onerror", errorcode, errormsg);
			this.on_fire_onerror(this, e);
		};

		_pVirtualFile._onerror = function (objData) {
			var e = new nexacro.VirtualFileErrorEventInfo("onerror", objData.errorcode, objData.errormsg);
			this.on_fire_onerror(this, e);
		};

		_pVirtualFile.on_fire_onerror = function (objAsyncVFile, eAsyncVFileErrorEventInfo) {
			if (this.onerror && this.onerror._has_handlers) {
				return this.onerror._fireEvent(this, eAsyncVFileErrorEventInfo);
			}
			return true;
		};

		_pVirtualFile.toJSON = function () {
			return eval('({"filename":"' + this.filename + '","fullpath":"' + this.fullpath + '","path":"' + this.path + '"})');
		};

		_pVirtualFile.paramck_folderName = function (strName) {
			if (strName == null) {
				return false;
			}

			if (strName.match(/[\"/:*?<>|]/)) {
				return false;
			}

			return true;
		};
		_pVirtualFile.pramck_virtualproperty = function (property) {
			if (typeof (property) == "undefined" || property == "" || property == null) {
				return false;
			}
			else {
				return true;
			}
		};
		_pVirtualFile.pramck_open = function (strFileName, nOptions) {
			if (nOptions == null) {
				if (typeof (strFileName) == "undefined" || strFileName == "" || strFileName == null) {
					return false;
				}

				if (!this._publicNumCheck(strFileName)) {
					return false;
				}
				return true;
			}

			if (strFileName == null || typeof (strFileName) == "undefined") {
				return false;
			}

			if (nOptions == null || typeof (nOptions) == "undefined") {
				return false;
			}

			if (!this._publicNumCheck(nOptions)) {
				return false;
			}
			return true;
		};
		_pVirtualFile.pramck_Read = function (nLength) {
			if (nLength == null || typeof (nLength) == "undefined") {
				return false;
			}

			if (!this._publicNumCheck(nLength)) {
				return false;
			}
			return true;
		};
		_pVirtualFile.pramck_ReadLine = function (strDelimeter) {
			if (strDelimeter == null || typeof (strDelimeter) == "undefined" || typeof (strDelimeter) != "string") {
				return false;
			}

			return true;
		};
		_pVirtualFile.paramck_Seek = function (nOffset, nOption) {
			if (nOffset == null || typeof (nOffset) == "undefined") {
				return false;
			}

			if (nOption == null || typeof (nOption) == "undefined") {
				return false;
			}

			if (!this._publicNumCheck(nOffset)) {
				return false;
			}
			return true;
		};
		_pVirtualFile.pramck_Delete = function (strFilePath) {
			if (strFilePath == null || typeof (strFilePath) == "undefined" || strFilePath == "") {
				return false;
			}
			else {
				return true;
			}
		};
		_pVirtualFile.pramck_IsExist = function (strPath) {
			if (strPath == null || typeof (strPath) == "undefined" || strPath == "" || typeof (strPath) != "string") {
				return false;
			}
			else {
				return true;
			}
		};
		_pVirtualFile.pramck_GetFileList = function (strPath, strSearchExpr, constOption) {
			if (strPath == null || typeof (strPath) == "undefined" || strPath == "" || typeof (strPath) != "string") {
				return false;
			}

			if (strSearchExpr == null || typeof (strSearchExpr) == "undefined" || strSearchExpr == "" || typeof (strSearchExpr) != "string") {
				return false;
			}

			if (constOption == null || typeof (constOption) == "undefined" || constOption == "") {
				return false;
			}

			if (!this._publicNumCheck(constOption)) {
				return false;
			}
			return true;
		};
		_pVirtualFile._publicNumCheck = function (v) {
			try {
				var strlength = v.toString().split(" ").join("");
			}
			catch (e) {
				return false;
			}

			if (strlength.length == 0) {
				return false;
			}

			try {
				var numberss = Number(v.toString());
			}
			catch (e) {
				return false;
			}

			if ((+numberss) != (+numberss)) {
				return false;
			}

			return true;
		};
		_pVirtualFile._setRefFile = function (file) {
			this._ref_file = file;
			this.filename = file.name;
		};
		delete _pVirtualFile;
	}

	if (!nexacro.VirtualFileEventInfo) {
		nexacro.VirtualFileEventInfo = function (strEventId, strReason, strTextdata, strBinarydata, strFilelist, strFilesize, strExist) {
			this.eventid = strEventId;
			this.reason = strReason;
			this.textdata = strTextdata;
			this.binarydata = strBinarydata;


			if (nexacro.OS == "iOS") {
				if (typeof (strFilelist) != "undefined") {
					var tempArr = new Array(strFilelist.length);
					for (var i = 0; i < strFilelist.length; i++) {
						tempArr[i] = new nexacro.FileAttribute(strFilelist[i]);
					}
					this.fileattributelist = tempArr;
				}
				else {
					this.fileattributelist = "";
				}
			}
			else {
				var jsonObject = eval('(' + strFilelist + ')');
				if (jsonObject == undefined) {
					this.fileattributelist = "";
				}
				else {
					var fileattrlist = jsonObject.fileattrlist;
					var tempArr = new Array(fileattrlist.length);

					for (var i = 0; i < fileattrlist.length; i++) {
						tempArr[i] = new nexacro.FileAttribute(fileattrlist[i]);
					}
					this.fileattributelist = tempArr;
				}
			}
			this.filesize = strFilesize;
			this.fileisexist = strExist;
		};
		var _pVirtualFileEventInfo = nexacro.VirtualFileEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.VirtualFileEventInfo);

		_pVirtualFileEventInfo._type_name = "VirtualFileEventInfo";

		delete _pVirtualFileEventInfo;
	}

	if (!nexacro.VirtualFileErrorEventInfo) {
		nexacro.VirtualFileErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg) {
			this.id = this.eventid = strEventId;
			this.errortype = "ObjectError";
			this.statuscode = intErrorCode;
			this.errormsg = strErrorMsg;
		};
		var _pVirtualFileErrorEventInfo = nexacro.VirtualFileErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.VirtualFileErrorEventInfo);

		_pVirtualFileErrorEventInfo._type_name = "VirtualFileErrorEventInfo";

		delete _pVirtualFileErrorEventInfo;
	}

	if (!nexacro.FileAttribute) {
		nexacro.FileAttribute = function (jsonObj) {
			this.accesstime = jsonObj.accesstime;
			this.createtime = jsonObj.createtime;
			this.filename = jsonObj.filename;
			this.groupid = jsonObj.groupid;
			this.modifytime = jsonObj.modifytime;
			this.size = jsonObj.size;
			this.userid = jsonObj.userid;
			this.isdirectory = jsonObj.isdirectory;
			this.isreadonly = jsonObj.isreadonly;
		};
		var _pFileAttribute = nexacro.FileAttribute.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.FileAttribute);

		_pFileAttribute._type_name = "FileAttribute";

		_pFileAttribute.on_created = function () {
		};
		_pFileAttribute.isDirectory = function () {
			return this.isdirectory;
		};
		_pFileAttribute.isReadOnly = function () {
			return this.isreadonly;
		};
		delete _pFileAttribute;
	}

	if (nexacro.Application) {
		nexacro.Application.setIconWidget = function (strWidgetId, strWidgetIconPath) {
			nexacro._setIconWidget(strWidgetId, strWidgetIconPath);
		};

		nexacro.Application.setTopmostWidget = function (strWidgetId, bWidgetTopmost) {
			nexacro._setTopmostWidget(strWidgetId, bWidgetTopmost);
		};
	}
}

//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.1.html	
//
//==============================================================================

if (nexacro.Browser == "Runtime") {
	if (!nexacro._init_deviceobjs_api) {
		nexacro._init_deviceobjs_api = true;

		nexacro._createFileDialogObject = function (target) {
			return nexacro.__createFileDialogObject(target, target.on_close);
		};
		nexacro._setFileDialogHandleDefaultExtension = function (target, v) {
			return nexacro.__setFileDialogHandleDefaultExtension(target._handle, v);
		};
		nexacro._setFileDialogHandleFilter = function (target, v) {
			return nexacro.__setFileDialogHandleFilter(target._handle, v);
		};
		nexacro._setFileDialogHandleFilterIndex = function (target, v) {
			return nexacro.__setFileDialogHandleFilterIndex(target._handle, v);
		};
		nexacro._setFileDialogHandleAsync = function (target, v) {
			return nexacro.__setFileDialogHandleAsync(target._handle, v);
		};
		nexacro._openFileDialogHandle = function (target, strTitle, constOpenMode, strInitialPath, strFileName) {
			return nexacro.__openFileDialogHandle(target._handle, target._winhandle, strTitle, constOpenMode, strInitialPath, strFileName);
		};

		nexacro._createVirtualFileObject = function (target) {
			return nexacro.__createVirtualFileObject(target, target.on_success, target.on_error);
		};
		nexacro._setVirtualFileHandleAsync = function (target, v) {
			return nexacro.__setVirtualFileHandleAsync(target._handle, v);
		};
		nexacro._openVirtualFileHandle = function (target, strFileName, nOptions) {
			return nexacro.__openVirtualFileHandle(target._handle, strFileName, nOptions);
		};
		nexacro._closeVirtualFileHandle = function (target) {
			return nexacro.__closeVirtualFileHandle(target._handle);
		};
		nexacro._readVirtualFileHandle = function (target, nLength, strCharset) {
			return nexacro.__readVirtualFileHandle(target._handle, nLength, strCharset);
		};
		nexacro._readlineVirtualFileHandle = function (target, strDelimeter, strCharset) {
			return nexacro.__readlineVirtualFileHandle(target._handle, strDelimeter, strCharset);
		};
		nexacro._seekVirtualFileHandle = function (target, nOffset, nOption) {
			return nexacro.__seekVirtualFileHandle(target._handle, nOffset, nOption);
		};
		nexacro._writeVirtualFileHandle = function (target, varData, strCharset) {
			return nexacro.__writeVirtualFileHandle(target._handle, varData, strCharset);
		};
		nexacro._removeVirtualFileHandle = function (target, strDeletePath) {
			return nexacro.__removeVirtualFileHandle(target._handle, strDeletePath);
		};
		nexacro._getFileListVirtualFileHandle = function (target, strPath, strSearchExpr, nOptions) {
			return nexacro.__getFileListVirtualFileHandle(target._handle, strPath, strSearchExpr, nOptions);
		};
		nexacro._getFileSizeVirtualFileHandle = function (target, strfullpath) {
			return nexacro.__getFileSizeVirtualFileHandle(target._handle, strfullpath);
		};
		nexacro._isExistVirtualFileHandle = function (target, isExistPath) {
			return nexacro.__isExistVirtualFileHandle(target._handle, isExistPath);
		};
		nexacro._copyVirtualFileHandle = function (target, path, destpath) {
			return nexacro.__copyVirtualFileHandle(target._handle, path, destpath);
		};
		nexacro._renameVirtualFileHandle = function (target, path, destpath) {
			return nexacro.__renameVirtualFileHandle(target._handle, path, destpath);
		};
		nexacro._createDirectoryVirtualFileHandle = function (target, strPath, bAllCreate) {
			return nexacro.__createDirectoryVirtualFileHandle(target._handle, strPath, bAllCreate);
		};
		nexacro._deleteDirectoryVirtualFileHandle = function (target, strPath, bAllChild) {
			return nexacro.__deleteDirectoryVirtualFileHandle(target._handle, strPath, bAllChild);
		};
		nexacro._renameDirectoryVirtualFileHandle = function (target, strPath, strNewName) {
			return nexacro.__renameDirectoryVirtualFileHandle(target._handle, strPath, strNewName);
		};

		nexacro._showModalSync = function (childframe, str_id, _parent_frame, arr_arg, opener) {
			if (childframe != null) {
				return childframe._showModalSync(str_id, _parent_frame, arr_arg, opener);
			}
		};

		nexacro._showModalWindow = function (childframe, str_id, parent_frame, arr_arg, opener) {
			if (childframe) {
				return childframe._showModalWindow(str_id, parent_frame, arr_arg, opener);
			}
		};

		nexacro._attachChildFrame = nexacro._emptyFn;

		nexacro._setIconWidget = function (strWidgetId, strWidgetIconPath) {
			var widgetFrame = application.popupframes.get_item(strWidgetId);

			if (widgetFrame && widgetFrame.widget) {
				if (widgetFrame.titlebar != null) {
					widgetFrame.style.set_icon(strWidgetIconPath);
				}
				else {
					if (strWidgetIconPath) {
						widgetFrame.style.set_icon(strWidgetIconPath);
						widgetFrame.on_update_style_icon();

						var val = widgetFrame.style.icon ? widgetFrame.style.icon._value : "";
						val = nexacro._getURIValue(val);
						val = nexacro._getImageLocation(val, "");
						var result = nexacro._getImageSize(val, function () {
							var attachedWindow = widgetFrame._getWindow();
							nexacro._setWindowHandleIcon(attachedWindow._handle, val);
						}, this);
						if (result != null) {
							var attachedWindow = widgetFrame._getWindow();
							nexacro._setWindowHandleIcon(attachedWindow._handle, val);
						}
					}
				}
			}
		};

		nexacro._setTopmostWidget = function (strWidgetId, bWidgetTopmost) {
			var widgetFrame = application.popupframes.get_item(strWidgetId);
			if (widgetFrame && widgetFrame.widget) {
				var attachedWindow = widgetFrame._getWindow();
				nexacro.__setWindowHandleTopmost(attachedWindow._handle, bWidgetTopmost);
			}
		};
	}
}

//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.1.html	
//
//==============================================================================

if (nexacro.Browser != "Runtime" && !nexacro._isHybrid()) {
	!function (e) {
		if ("object" == typeof exports && "undefined" != typeof module) {
			module.exports = e();
		}
		else if ("function" == typeof define && define.amd) {
			define([], e);
		}
		else {
			var f;
			"undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.SockJS = e();
		}
	}(function () {
		var define, module, exports;
		return (function e (t, n, r) {
			function s (o, u) {
				if (!n[o]) {
					if (!t[o]) {
						var a = typeof require == "function" && require;
						if (!u && a) {
							return a(o, !0);
						}
						if (i) {
							return i(o, !0);
						}
						var f = new Error("Cannot find module '" + o + "'");
						throw f.code = "MODULE_NOT_FOUND", f;
					}
					var l = n[o] = {
						exports : {
						}
					};
					t[o][0].call(l.exports, function (e) {
						var n = t[o][1][e];
						return s(n ? n : e);
					}, l, l.exports, e, t, n, r);
				}
				return n[o].exports;
			}
			var i = typeof require == "function" && require;
			for (var o = 0; o < r.length; o++) {
				s(r[o]);
			}
			return s;
		}
)({
			1 : [function (require, module, exports) {
				(function (global) {
					'use strict';

					var transportList = require('./transport-list');

					module.exports = require('./main')(transportList);

					if ('_sockjs_onload' in global) {
						setTimeout(global._sockjs_onload, 1);
					}
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"./main" : 14, 
				"./transport-list" : 16
			}], 
			2 : [function (require, module, exports) {
				'use strict';

				var inherits = require('inherits'), Event = require('./event');


				function CloseEvent () {
					Event.call(this);
					this.initEvent('close', false, false);
					this.wasClean = false;
					this.code = 0;
					this.reason = '';
				}

				inherits(CloseEvent, Event);

				module.exports = CloseEvent;
			}, {
				"./event" : 4, 
				"inherits" : 57
			}], 
			3 : [function (require, module, exports) {
				'use strict';

				var inherits = require('inherits'), EventTarget = require('./eventtarget');


				function EventEmitter () {
					EventTarget.call(this);
				}

				inherits(EventEmitter, EventTarget);

				EventEmitter.prototype.removeAllListeners = function (type) {
					if (type) {
						delete this._listeners[type];
					}
					else {
						this._listeners = {
						};
					}
				};

				EventEmitter.prototype.once = function (type, listener) {
					var self = this, fired = false;

					function g () {
						self.removeListener(type, g);

						if (!fired) {
							fired = true;
							listener.apply(this, arguments);
						}
					}

					this.on(type, g);
				};

				EventEmitter.prototype.emit = function () {
					var type = arguments[0];
					var listeners = this._listeners[type];
					if (!listeners) {
						return;
					}
					var l = arguments.length;
					var args = new Array(l - 1);
					for (var ai = 1; ai < l; ai++) {
						args[ai - 1] = arguments[ai];
					}
					for (var i = 0; i < listeners.length; i++) {
						listeners[i].apply(this, args);
					}
				};

				EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
				EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;

				module.exports.EventEmitter = EventEmitter;
			}, {
				"./eventtarget" : 5, 
				"inherits" : 57
			}], 
			4 : [function (require, module, exports) {
				'use strict';

				function Event (eventType) {
					this.type = eventType;
				}

				Event.prototype.initEvent = function (eventType, canBubble, cancelable) {
					this.type = eventType;
					this.bubbles = canBubble;
					this.cancelable = cancelable;
					this.timeStamp = +new Date();
					return this;
				};

				Event.prototype.stopPropagation = function () {
				};
				Event.prototype.preventDefault = function () {
				};

				Event.CAPTURING_PHASE = 1;
				Event.AT_TARGET = 2;
				Event.BUBBLING_PHASE = 3;

				module.exports = Event;
			}, {
			}], 
			5 : [function (require, module, exports) {
				'use strict';



				function EventTarget () {
					this._listeners = {
					};
				}

				EventTarget.prototype.addEventListener = function (eventType, listener) {
					if (!(eventType in this._listeners)) {
						this._listeners[eventType] = [];
					}
					var arr = this._listeners[eventType];
					if (arr.indexOf(listener) === -1) {
						arr = arr.concat([listener]);
					}
					this._listeners[eventType] = arr;
				};

				EventTarget.prototype.removeEventListener = function (eventType, listener) {
					var arr = this._listeners[eventType];
					if (!arr) {
						return;
					}
					var idx = arr.indexOf(listener);
					if (idx !== -1) {
						if (arr.length > 1) {
							this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
						}
						else {
							delete this._listeners[eventType];
						}
						return;
					}
				};

				EventTarget.prototype.dispatchEvent = function () {
					var event = arguments[0];
					var t = event.type;
					var args = arguments.length === 1 ? [event] : Array.apply(null, arguments);
					if (this['on' + t]) {
						this['on' + t].apply(this, args);
					}
					if (t in this._listeners) {
						var listeners = this._listeners[t];
						for (var i = 0; i < listeners.length; i++) {
							listeners[i].apply(this, args);
						}
					}
				};

				module.exports = EventTarget;
			}, {
			}], 
			6 : [function (require, module, exports) {
				'use strict';

				var inherits = require('inherits'), Event = require('./event');


				function TransportMessageEvent (data) {
					Event.call(this);
					this.initEvent('message', false, false);
					this.data = data;
				}

				inherits(TransportMessageEvent, Event);

				module.exports = TransportMessageEvent;
			}, {
				"./event" : 4, 
				"inherits" : 57
			}], 
			7 : [function (require, module, exports) {
				'use strict';

				var JSON3 = require('json3'), iframeUtils = require('./utils/iframe');


				function FacadeJS (transport) {
					this._transport = transport;
					transport.on('message', this._transportMessage.bind(this));
					transport.on('close', this._transportClose.bind(this));
				}

				FacadeJS.prototype._transportClose = function (code, reason) {
					iframeUtils.postMessage('c', JSON3.stringify([code, reason]));
				};
				FacadeJS.prototype._transportMessage = function (frame) {
					iframeUtils.postMessage('t', frame);
				};
				FacadeJS.prototype._send = function (data) {
					this._transport.send(data);
				};
				FacadeJS.prototype._close = function () {
					this._transport.close();
					this._transport.removeAllListeners();
				};

				module.exports = FacadeJS;
			}, {
				"./utils/iframe" : 47, 
				"json3" : 58
			}], 
			8 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var urlUtils = require('./utils/url'), eventUtils = require('./utils/event'), JSON3 = require('json3'), FacadeJS = require('./facade'), InfoIframeReceiver = require('./info-iframe-receiver'), iframeUtils = require('./utils/iframe'), loc = require('./location');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:iframe-bootstrap');
					}

					module.exports = function (SockJS, availableTransports) {
						var transportMap = {
						};
						availableTransports.forEach(function (at) {
							if (at.facadeTransport) {
								transportMap[at.facadeTransport.transportName] = at.facadeTransport;
							}
						});

						transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
						var parentOrigin;


						SockJS.bootstrap_iframe = function () {
							var facade;
							iframeUtils.currentWindowId = loc.hash.slice(1);
							var onMessage = function (e) {
								if (e.source !== parent) {
									return;
								}
								if (typeof parentOrigin === 'undefined') {
									parentOrigin = e.origin;
								}
								if (e.origin !== parentOrigin) {
									return;
								}

								var iframeMessage;
								try {
									iframeMessage = JSON3.parse(e.data);
								}
								catch (ignored) {
									debug('bad json', e.data);
									return;
								}

								if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
									return;
								}
								switch (iframeMessage.type) {
									case 's':
										var p;
										try {
											p = JSON3.parse(iframeMessage.data);
										}
										catch (ignored) {
											debug('bad json', iframeMessage.data);
											break;
										}
										var version = p[0];
										var transport = p[1];
										var transUrl = p[2];
										var baseUrl = p[3];
										debug(version, transport, transUrl, baseUrl);
										if (version !== SockJS.version) {
											throw new Error('Incompatible SockJS! Main site uses:' + 
												' "' + version + '", the iframe:' + 
												' "' + SockJS.version + '".');
										}

										if (!urlUtils.isOriginEqual(transUrl, loc.href) || 
											!urlUtils.isOriginEqual(baseUrl, loc.href)) {
											throw new Error('Can\'t connect to different domain from within an ' + 
												'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
										}
										facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
										break;
									case 'm':
										facade._send(iframeMessage.data);
										break;
									case 'c':
										if (facade) {
											facade._close();
										}
										facade = null;
										break;
								}
							};

							eventUtils.attachEvent('message', onMessage);

							iframeUtils.postMessage('s');
						};
					};
				}).call(this, {
					env : {
					}
				});
			}, {
				"./facade" : 7, 
				"./info-iframe-receiver" : 10, 
				"./location" : 13, 
				"./utils/event" : 46, 
				"./utils/iframe" : 47, 
				"./utils/url" : 52, 
				"debug" : 54, 
				"json3" : 58
			}], 
			9 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var EventEmitter = require('events').EventEmitter, inherits = require('inherits'), JSON3 = require('json3'), objectUtils = require('./utils/object');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:info-ajax');
					}

					function InfoAjax (url, AjaxObject) {
						EventEmitter.call(this);

						var self = this;
						var t0 = +new Date();
						this.xo = new AjaxObject('GET', url);

						this.xo.once('finish', function (status, text) {
							var info, rtt;
							if (status === 200) {
								rtt = (+new Date()) - t0;
								if (text) {
									try {
										info = JSON3.parse(text);
									}
									catch (e) {
										debug('bad json', text);
									}
								}

								if (!objectUtils.isObject(info)) {
									info = {
									};
								}
							}
							self.emit('finish', info, rtt);
							self.removeAllListeners();
						});
					}

					inherits(InfoAjax, EventEmitter);

					InfoAjax.prototype.close = function () {
						this.removeAllListeners();
						this.xo.close();
					};

					module.exports = InfoAjax;
				}).call(this, {
					env : {
					}
				});
			}, {
				"./utils/object" : 49, 
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57, 
				"json3" : 58
			}], 
			10 : [function (require, module, exports) {
				'use strict';

				var inherits = require('inherits'), EventEmitter = require('events').EventEmitter, JSON3 = require('json3'), XHRLocalObject = require('./transport/sender/xhr-local'), InfoAjax = require('./info-ajax');


				function InfoReceiverIframe (transUrl) {
					var self = this;
					EventEmitter.call(this);

					this.ir = new InfoAjax(transUrl, XHRLocalObject);
					this.ir.once('finish', function (info, rtt) {
						self.ir = null;
						self.emit('message', JSON3.stringify([info, rtt]));
					});
				}

				inherits(InfoReceiverIframe, EventEmitter);

				InfoReceiverIframe.transportName = 'iframe-info-receiver';

				InfoReceiverIframe.prototype.close = function () {
					if (this.ir) {
						this.ir.close();
						this.ir = null;
					}
					this.removeAllListeners();
				};

				module.exports = InfoReceiverIframe;
			}, {
				"./info-ajax" : 9, 
				"./transport/sender/xhr-local" : 37, 
				"events" : 3, 
				"inherits" : 57, 
				"json3" : 58
			}], 
			11 : [function (require, module, exports) {
				(function (process, global) {
					'use strict';

					var EventEmitter = require('events').EventEmitter, inherits = require('inherits'), JSON3 = require('json3'), utils = require('./utils/event'), IframeTransport = require('./transport/iframe'), InfoReceiverIframe = require('./info-iframe-receiver');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:info-iframe');
					}

					function InfoIframe (baseUrl, url) {
						var self = this;
						EventEmitter.call(this);

						var go = function () {
							var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);

							ifr.once('message', function (msg) {
								if (msg) {
									var d;
									try {
										d = JSON3.parse(msg);
									}
									catch (e) {
										debug('bad json', msg);
										self.emit('finish');
										self.close();
										return;
									}

									var info = d[0], rtt = d[1];
									self.emit('finish', info, rtt);
								}
								self.close();
							});

							ifr.once('close', function () {
								self.emit('finish');
								self.close();
							});
						};

						if (!global.document.body) {
							utils.attachEvent('load', go);
						}
						else {
							go();
						}
					}

					inherits(InfoIframe, EventEmitter);

					InfoIframe.enabled = function () {
						return IframeTransport.enabled();
					};

					InfoIframe.prototype.close = function () {
						if (this.ifr) {
							this.ifr.close();
						}
						this.removeAllListeners();
						this.ifr = null;
					};

					module.exports = InfoIframe;
				}).call(this, {
					env : {
					}
				}, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"./info-iframe-receiver" : 10, 
				"./transport/iframe" : 22, 
				"./utils/event" : 46, 
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57, 
				"json3" : 58
			}], 
			12 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var EventEmitter = require('events').EventEmitter, inherits = require('inherits'), urlUtils = require('./utils/url'), XDR = require('./transport/sender/xdr'), XHRCors = require('./transport/sender/xhr-cors'), XHRLocal = require('./transport/sender/xhr-local'), XHRFake = require('./transport/sender/xhr-fake'), InfoIframe = require('./info-iframe'), InfoAjax = require('./info-ajax');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:info-receiver');
					}

					function InfoReceiver (baseUrl, urlInfo) {
						debug(baseUrl);
						var self = this;
						EventEmitter.call(this);

						setTimeout(function () {
							self.doXhr(baseUrl, urlInfo);
						}, 0);
					}

					inherits(InfoReceiver, EventEmitter);


					InfoReceiver._getReceiver = function (baseUrl, url, urlInfo) {
						if (urlInfo.sameOrigin) {
							return new InfoAjax(url, XHRLocal);
						}
						if (XHRCors.enabled) {
							return new InfoAjax(url, XHRCors);
						}
						if (XDR.enabled && urlInfo.sameScheme) {
							return new InfoAjax(url, XDR);
						}
						if (InfoIframe.enabled()) {
							return new InfoIframe(baseUrl, url);
						}
						return new InfoAjax(url, XHRFake);
					};

					InfoReceiver.prototype.doXhr = function (baseUrl, urlInfo) {
						var self = this, url = urlUtils.addPath(baseUrl, '/info');

						debug('doXhr', url);

						this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);

						this.timeoutRef = setTimeout(function () {
							debug('timeout');
							self._cleanup(false);
							self.emit('finish');
						}, InfoReceiver.timeout);

						this.xo.once('finish', function (info, rtt) {
							debug('finish', info, rtt);
							self._cleanup(true);
							self.emit('finish', info, rtt);
						});
					};

					InfoReceiver.prototype._cleanup = function (wasClean) {
						debug('_cleanup');
						clearTimeout(this.timeoutRef);
						this.timeoutRef = null;
						if (!wasClean && this.xo) {
							this.xo.close();
						}
						this.xo = null;
					};

					InfoReceiver.prototype.close = function () {
						debug('close');
						this.removeAllListeners();
						this._cleanup(false);
					};

					InfoReceiver.timeout = 8000;

					module.exports = InfoReceiver;
				}).call(this, {
					env : {
					}
				});
			}, {
				"./info-ajax" : 9, 
				"./info-iframe" : 11, 
				"./transport/sender/xdr" : 34, 
				"./transport/sender/xhr-cors" : 35, 
				"./transport/sender/xhr-fake" : 36, 
				"./transport/sender/xhr-local" : 37, 
				"./utils/url" : 52, 
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57
			}], 
			13 : [function (require, module, exports) {
				(function (global) {
					'use strict';

					module.exports = global.location || {
						origin : 'http://localhost:80', 
						protocol : 'http', 
						host : 'localhost', 
						port : 80, 
						href : 'http://localhost/', 
						hash : ''
					};
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
			}], 
			14 : [function (require, module, exports) {
				(function (process, global) {
					'use strict';

					require('./shims');

					var URL = require('url-parse'), inherits = require('inherits'), JSON3 = require('json3'), random = require('./utils/random'), escape = require('./utils/escape'), urlUtils = require('./utils/url'), eventUtils = require('./utils/event'), transport = require('./utils/transport'), objectUtils = require('./utils/object'), browser = require('./utils/browser'), log = require('./utils/log'), Event = require('./event/event'), EventTarget = require('./event/eventtarget'), loc = require('./location'), CloseEvent = require('./event/close'), TransportMessageEvent = require('./event/trans-message'), InfoReceiver = require('./info-receiver');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:main');
					}

					var transports;

					function SockJS (url, protocols, options) {
						if (!(this instanceof SockJS)) {
							return new SockJS(url, protocols, options);
						}
						if (arguments.length < 1) {
							throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
						}
						EventTarget.call(this);

						this.readyState = SockJS.CONNECTING;
						this.extensions = '';
						this.protocol = '';

						options = options || {
						};
						if (options.protocols_whitelist) {
							log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
						}
						this._transportsWhitelist = options.transports;
						this._transportOptions = options.transportOptions || {
						};

						var sessionId = options.sessionId || 8;
						if (typeof sessionId === 'function') {
							this._generateSessionId = sessionId;
						}
						else if (typeof sessionId === 'number') {
							this._generateSessionId = function () {
								return random.string(sessionId);
							};
						}
						else {
							throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
						}

						this._server = options.server || random.numberString(1000);

						var parsedUrl = new URL(url);
						if (!parsedUrl.host || !parsedUrl.protocol) {
							throw new SyntaxError("The URL '" + url + "' is invalid");
						}
						else if (parsedUrl.hash) {
							throw new SyntaxError('The URL must not contain a fragment');
						}
						else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
							throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
						}

						var secure = parsedUrl.protocol === 'https:';
						if (loc.protocol === 'https' && !secure) {
							throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
						}

						if (!protocols) {
							protocols = [];
						}
						else if (!Array.isArray(protocols)) {
							protocols = [protocols];
						}

						var sortedProtocols = protocols.sort();
						sortedProtocols.forEach(function (proto, i) {
							if (!proto) {
								throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
							}
							if (i < (sortedProtocols.length - 1) && proto === sortedProtocols[i + 1]) {
								throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
							}
						});

						var o = urlUtils.getOrigin(loc.href);
						this._origin = o ? o.toLowerCase() : null;

						parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));

						this.url = parsedUrl.href;
						debug('using url', this.url);

						this._urlInfo = {
							nullOrigin : !browser.hasDomain(), 
							sameOrigin : urlUtils.isOriginEqual(this.url, loc.href), 
							sameScheme : urlUtils.isSchemeEqual(this.url, loc.href)
						};

						this._ir = new InfoReceiver(this.url, this._urlInfo);
						this._ir.once('finish', this._receiveInfo.bind(this));
					}

					inherits(SockJS, EventTarget);

					function userSetCode (code) {
						return code === 1000 || (code >= 3000 && code <= 4999);
					}

					SockJS.prototype.close = function (code, reason) {
						if (code && !userSetCode(code)) {
							throw new Error('InvalidAccessError: Invalid code');
						}
						if (reason && reason.length > 123) {
							throw new SyntaxError('reason argument has an invalid length');
						}

						if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
							return;
						}

						var wasClean = true;
						this._close(code || 1000, reason || 'Normal closure', wasClean);
					};

					SockJS.prototype.send = function (data) {
						if (typeof data !== 'string') {
							data = '' + data;
						}
						if (this.readyState === SockJS.CONNECTING) {
							throw new Error('InvalidStateError: The connection has not been established yet');
						}
						if (this.readyState !== SockJS.OPEN) {
							return;
						}
						this._transport.send(escape.quote(data));
					};

					SockJS.version = require('./version');

					SockJS.CONNECTING = 0;
					SockJS.OPEN = 1;
					SockJS.CLOSING = 2;
					SockJS.CLOSED = 3;

					SockJS.prototype._receiveInfo = function (info, rtt) {
						debug('_receiveInfo', rtt);
						this._ir = null;
						if (!info) {
							this._close(1002, 'Cannot connect to server');
							return;
						}

						this._rto = this.countRTO(rtt);
						this._transUrl = info.base_url ? info.base_url : this.url;
						info = objectUtils.extend(info, this._urlInfo);
						debug('info', info);
						var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
						this._transports = enabledTransports.main;
						debug(this._transports.length + ' enabled transports');

						this._connect();
					};

					SockJS.prototype._connect = function () {
						for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
							debug('attempt', Transport.transportName);
							if (Transport.needBody) {
								if (!global.document.body || (typeof global.document.readyState !== 'undefined' && 
									global.document.readyState !== 'complete' && 
									global.document.readyState !== 'interactive')) {
									debug('waiting for body');
									this._transports.unshift(Transport);
									eventUtils.attachEvent('load', this._connect.bind(this));
									return;
								}
							}

							var timeoutMs = (this._rto * Transport.roundTrips) || 5000;
							this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
							debug('using timeout', timeoutMs);

							var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
							var options = this._transportOptions[Transport.transportName];
							debug('transport url', transportUrl);
							var transportObj = new Transport(transportUrl, this._transUrl, options);
							transportObj.on('message', this._transportMessage.bind(this));
							transportObj.once('close', this._transportClose.bind(this));
							transportObj.transportName = Transport.transportName;
							this._transport = transportObj;

							return;
						}
						this._close(2000, 'All transports failed', false);
					};

					SockJS.prototype._transportTimeout = function () {
						debug('_transportTimeout');
						if (this.readyState === SockJS.CONNECTING) {
							this._transportClose(2007, 'Transport timed out');
						}
					};

					SockJS.prototype._transportMessage = function (msg) {
						debug('_transportMessage', msg);
						var self = this, type = msg.slice(0, 1), content = msg.slice(1), payload;


						switch (type) {
							case 'o':
								this._open();
								return;
							case 'h':
								this.dispatchEvent(new Event('heartbeat'));
								debug('heartbeat', this.transport);
								return;
						}

						if (content) {
							try {
								payload = JSON3.parse(content);
							}
							catch (e) {
								debug('bad json', content);
							}
						}

						if (typeof payload === 'undefined') {
							debug('empty payload', content);
							return;
						}

						switch (type) {
							case 'a':
								if (Array.isArray(payload)) {
									payload.forEach(function (p) {
										debug('message', self.transport, p);
										self.dispatchEvent(new TransportMessageEvent(p));
									});
								}
								break;
							case 'm':
								debug('message', this.transport, payload);
								this.dispatchEvent(new TransportMessageEvent(payload));
								break;
							case 'c':
								if (Array.isArray(payload) && payload.length === 2) {
									this._close(payload[0], payload[1], true);
								}
								break;
						}
					};

					SockJS.prototype._transportClose = function (code, reason) {
						debug('_transportClose', this.transport, code, reason);
						if (this._transport) {
							this._transport.removeAllListeners();
							this._transport = null;
							this.transport = null;
						}

						if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
							this._connect();
							return;
						}

						this._close(code, reason);
					};

					SockJS.prototype._open = function () {
						debug('_open', this._transport.transportName, this.readyState);
						if (this.readyState === SockJS.CONNECTING) {
							if (this._transportTimeoutId) {
								clearTimeout(this._transportTimeoutId);
								this._transportTimeoutId = null;
							}
							this.readyState = SockJS.OPEN;
							this.transport = this._transport.transportName;
							this.dispatchEvent(new Event('open'));
							debug('connected', this.transport);
						}
						else {
							this._close(1006, 'Server lost session');
						}
					};

					SockJS.prototype._close = function (code, reason, wasClean) {
						debug('_close', this.transport, code, reason, wasClean, this.readyState);
						var forceFail = false;

						if (this._ir) {
							forceFail = true;
							this._ir.close();
							this._ir = null;
						}
						if (this._transport) {
							this._transport.close();
							this._transport = null;
							this.transport = null;
						}

						if (this.readyState === SockJS.CLOSED) {
							throw new Error('InvalidStateError: SockJS has already been closed');
						}

						this.readyState = SockJS.CLOSING;
						setTimeout(function () {
							this.readyState = SockJS.CLOSED;

							if (forceFail) {
								this.dispatchEvent(new Event('error'));
							}

							var e = new CloseEvent('close');
							e.wasClean = wasClean || false;
							e.code = code || 1000;
							e.reason = reason;

							this.dispatchEvent(e);
							this.onmessage = this.onclose = this.onerror = null;
							debug('disconnected');
						}.bind(this), 0);
					};

					SockJS.prototype.countRTO = function (rtt) {
						if (rtt > 100) {
							return 4 * rtt;
						}
						return 300 + rtt;
					};

					module.exports = function (availableTransports) {
						transports = transport(availableTransports);
						require('./iframe-bootstrap')(SockJS, availableTransports);
						return SockJS;
					};
				}).call(this, {
					env : {
					}
				}, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"./event/close" : 2, 
				"./event/event" : 4, 
				"./event/eventtarget" : 5, 
				"./event/trans-message" : 6, 
				"./iframe-bootstrap" : 8, 
				"./info-receiver" : 12, 
				"./location" : 13, 
				"./shims" : 15, 
				"./utils/browser" : 44, 
				"./utils/escape" : 45, 
				"./utils/event" : 46, 
				"./utils/log" : 48, 
				"./utils/object" : 49, 
				"./utils/random" : 50, 
				"./utils/transport" : 51, 
				"./utils/url" : 52, 
				"./version" : 53, 
				"debug" : 54, 
				"inherits" : 57, 
				"json3" : 58, 
				"url-parse" : 59
			}], 
			15 : [function (require, module, exports) {
				'use strict';


				var ArrayPrototype = Array.prototype;
				var ObjectPrototype = Object.prototype;
				var FunctionPrototype = Function.prototype;
				var StringPrototype = String.prototype;
				var array_slice = ArrayPrototype.slice;

				var _toString = ObjectPrototype.toString;
				var isFunction = function (val) {
					return ObjectPrototype.toString.call(val) === '[object Function]';
				};
				var isArray = function (obj) {
					return _toString.call(obj) === '[object Array]';
				};
				var isString = function (obj) {
					return _toString.call(obj) === '[object String]';
				};

				var supportsDescriptors = Object.defineProperty && (function () {
					try {
						Object.defineProperty({
						}, 'x', {
						});
						return true;
					}
					catch (e) {
						return false;
					}
				}());

				var defineProperty;
				if (supportsDescriptors) {
					defineProperty = function (object, name, method, forceAssign) {
						if (!forceAssign && (name in object)) {
							return;
						}
						Object.defineProperty(object, name, {
							configurable : true, 
							enumerable : false, 
							writable : true, 
							value : method
						});
					};
				}
				else {
					defineProperty = function (object, name, method, forceAssign) {
						if (!forceAssign && (name in object)) {
							return;
						}
						object[name] = method;
					};
				}
				var defineProperties = function (object, map, forceAssign) {
					for (var name in map) {
						if (ObjectPrototype.hasOwnProperty.call(map, name)) {
							defineProperty(object, name, map[name], forceAssign);
						}
					}
				};

				var toObject = function (o) {
					if (o == null) {
						throw new TypeError("can't convert " + o + ' to object');
					}
					return Object(o);
				};



				function toInteger (num) {
					var n = +num;
					if (n !== n) {
						n = 0;
					}
					else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
						n = (n > 0 || -1) * Math.floor(Math.abs(n));
					}
					return n;
				}

				function ToUint32 (x) {
					return x >>> 0;
				}



				function Empty () {
				}

				defineProperties(FunctionPrototype, {
					bind : function (that) {
						var target = this;
						if (!isFunction(target)) {
							throw new TypeError('Function.prototype.bind called on incompatible ' + target);
						}
						var args = array_slice.call(arguments, 1);
						var binder = function () {
							if (this instanceof bound) {
								var result = target.apply(this, args.concat(array_slice.call(arguments))
								);
								if (Object(result) === result) {
									return result;
								}
								return this;
							}
							else {
								return target.apply(that, args.concat(array_slice.call(arguments))
								);
							}
						};


						var boundLength = Math.max(0, target.length - args.length);

						var boundArgs = [];
						for (var i = 0; i < boundLength; i++) {
							boundArgs.push('$' + i);
						}

						var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

						if (target.prototype) {
							Empty.prototype = target.prototype;
							bound.prototype = new Empty();
							Empty.prototype = null;
						}




						return bound;
					}
				});


				defineProperties(Array, {
					isArray : isArray
				});


				var boxedString = Object('a');
				var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

				var properlyBoxesContext = function properlyBoxed (method) {
					var properlyBoxesNonStrict = true;
					var properlyBoxesStrict = true;
					if (method) {
						method.call('foo', function (_, __, context) {
							if (typeof context !== 'object') {
								properlyBoxesNonStrict = false;
							}
						});

						method.call([1], function () {
							'use strict';
							properlyBoxesStrict = typeof this === 'string';
						}, 'x');
					}
					return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
				}
;

				defineProperties(ArrayPrototype, {
					forEach : function (fun) {
						var object = toObject(this), self = splitString && isString(this) ? this.split('') : object, thisp = arguments[1], i = -1, length = self.length >>> 0;

						if (!isFunction(fun)) {
							throw new TypeError();
						}

						while (++i < length) {
							if (i in self) {
								fun.call(thisp, self[i], i, object);
							}
						}
					}
				}, !properlyBoxesContext(ArrayPrototype.forEach));

				var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
				defineProperties(ArrayPrototype, {
					indexOf : function (sought) {
						var self = splitString && isString(this) ? this.split('') : toObject(this), length = self.length >>> 0;

						if (!length) {
							return -1;
						}

						var i = 0;
						if (arguments.length > 1) {
							i = toInteger(arguments[1]);
						}

						i = i >= 0 ? i : Math.max(0, length + i);
						for (; i < length; i++) {
							if (i in self && self[i] === sought) {
								return i;
							}
						}
						return -1;
					}
				}, hasFirefox2IndexOfBug);




				var string_split = StringPrototype.split;
				if ('ab'.split(/(?:ab)*/).length !== 2 || 
					'.'.split(/(.?)(.?)/).length !== 4 || 
					'tesst'.split(/(s)*/)[1] === 't' || 
					'test'.split(/(?:)/, -1).length !== 4 || 
					''.split(/.?/).length || 
					'.'.split(/()()/).length > 1) {
					(function () {
						var compliantExecNpcg = /()??/.exec('')[1] === void 0;

						StringPrototype.split = function (separator, limit) {
							var string = this;
							if (separator === void 0 && limit === 0) {
								return [];
							}

							if (_toString.call(separator) !== '[object RegExp]') {
								return string_split.call(this, separator, limit);
							}

							var output = [], flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.extended ? 'x' : '') + (separator.sticky ? 'y' : ''), lastLastIndex = 0, separator2, match, lastIndex, lastLength;
							separator = new RegExp(separator.source, flags + 'g');
							string += '';
							if (!compliantExecNpcg) {
								separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
							}

							limit = limit === void 0 ? 
								-1 >>> 0 : 
								ToUint32(limit);
							while (match = separator.exec(string)) {
								lastIndex = match.index + match[0].length;
								if (lastIndex > lastLastIndex) {
									output.push(string.slice(lastLastIndex, match.index));
									if (!compliantExecNpcg && match.length > 1) {
										match[0].replace(separator2, function () {
											for (var i = 1; i < arguments.length - 2; i++) {
												if (arguments[i] === void 0) {
													match[i] = void 0;
												}
											}
										});
									}
									if (match.length > 1 && match.index < string.length) {
										ArrayPrototype.push.apply(output, match.slice(1));
									}
									lastLength = match[0].length;
									lastLastIndex = lastIndex;
									if (output.length >= limit) {
										break;
									}
								}
								if (separator.lastIndex === match.index) {
									separator.lastIndex++;
								}
							}
							if (lastLastIndex === string.length) {
								if (lastLength || !separator.test('')) {
									output.push('');
								}
							}
							else {
								output.push(string.slice(lastLastIndex));
							}
							return output.length > limit ? output.slice(0, limit) : output;
						};
					}());
				}
				else if ('0'.split(void 0, 0).length) {
					StringPrototype.split = function split (separator, limit) {
						if (separator === void 0 && limit === 0) {
							return [];
						}
						return string_split.call(this, separator, limit);
					}
;
				}

				var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + 
					'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + 
					'\u2029\uFEFF';
				var zeroWidth = '\u200b';
				var wsRegexChars = '[' + ws + ']';
				var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
				var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
				var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
				defineProperties(StringPrototype, {
					trim : function () {
						if (this === void 0 || this === null) {
							throw new TypeError("can't convert " + this + ' to object');
						}
						return String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
					}
				}, hasTrimWhitespaceBug);

				var string_substr = StringPrototype.substr;
				var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
				defineProperties(StringPrototype, {
					substr : function (start, length) {
						return string_substr.call(this, start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start, length
						);
					}
				}, hasNegativeSubstrBug);
			}, {
			}], 
			16 : [function (require, module, exports) {
				'use strict';

				module.exports = [require('./transport/websocket'), require('./transport/xhr-streaming'), require('./transport/xdr-streaming'), require('./transport/eventsource'), require('./transport/lib/iframe-wrap')(require('./transport/eventsource')), require('./transport/htmlfile'), require('./transport/lib/iframe-wrap')(require('./transport/htmlfile')), require('./transport/xhr-polling'), require('./transport/xdr-polling'), require('./transport/lib/iframe-wrap')(require('./transport/xhr-polling')), require('./transport/jsonp-polling')
				];
			}, {
				"./transport/eventsource" : 20, 
				"./transport/htmlfile" : 21, 
				"./transport/jsonp-polling" : 23, 
				"./transport/lib/iframe-wrap" : 26, 
				"./transport/websocket" : 38, 
				"./transport/xdr-polling" : 39, 
				"./transport/xdr-streaming" : 40, 
				"./transport/xhr-polling" : 41, 
				"./transport/xhr-streaming" : 42
			}], 
			17 : [function (require, module, exports) {
				(function (process, global) {
					'use strict';

					var EventEmitter = require('events').EventEmitter, inherits = require('inherits'), utils = require('../../utils/event'), urlUtils = require('../../utils/url'), XHR = global.XMLHttpRequest;


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:browser:xhr');
					}

					function AbstractXHRObject (method, url, payload, opts) {
						debug(method, url);
						var self = this;
						EventEmitter.call(this);

						setTimeout(function () {
							self._start(method, url, payload, opts);
						}, 0);
					}

					inherits(AbstractXHRObject, EventEmitter);

					AbstractXHRObject.prototype._start = function (method, url, payload, opts) {
						var self = this;

						try {
							this.xhr = new XHR();
						}
						catch (x) {
						}

						if (!this.xhr) {
							debug('no xhr');
							this.emit('finish', 0, 'no xhr support');
							this._cleanup();
							return;
						}

						url = urlUtils.addQuery(url, 't=' + (+new Date()));

						this.unloadRef = utils.unloadAdd(function () {
							debug('unload cleanup');
							self._cleanup(true);
						});
						try {
							this.xhr.open(method, url, true);
							if (this.timeout && 'timeout' in this.xhr) {
								this.xhr.timeout = this.timeout;
								this.xhr.ontimeout = function () {
									debug('xhr timeout');
									self.emit('finish', 0, '');
									self._cleanup(false);
								};
							}
						}
						catch (e) {
							debug('exception', e);
							this.emit('finish', 0, '');
							this._cleanup(false);
							return;
						}

						if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
							debug('withCredentials');

							this.xhr.withCredentials = 'true';
						}
						if (opts && opts.headers) {
							for (var key in opts.headers) {
								this.xhr.setRequestHeader(key, opts.headers[key]);
							}
						}

						this.xhr.onreadystatechange = function () {
							if (self.xhr) {
								var x = self.xhr;
								var text, status;
								debug('readyState', x.readyState);
								switch (x.readyState) {
									case 3:
										try {
											status = x.status;
											text = x.responseText;
										}
										catch (e) {
										}
										debug('status', status);
										if (status === 1223) {
											status = 204;
										}

										if (status === 200 && text && text.length > 0) {
											debug('chunk');
											self.emit('chunk', status, text);
										}
										break;
									case 4:
										status = x.status;
										debug('status', status);
										if (status === 1223) {
											status = 204;
										}
										if (status === 12005 || status === 12029) {
											status = 0;
										}

										debug('finish', status, x.responseText);
										self.emit('finish', status, x.responseText);
										self._cleanup(false);
										break;
								}
							}
						};

						try {
							self.xhr.send(payload);
						}
						catch (e) {
							self.emit('finish', 0, '');
							self._cleanup(false);
						}
					};

					AbstractXHRObject.prototype._cleanup = function (abort) {
						debug('cleanup');
						if (!this.xhr) {
							return;
						}
						this.removeAllListeners();
						utils.unloadDel(this.unloadRef);

						this.xhr.onreadystatechange = function () {
						};
						if (this.xhr.ontimeout) {
							this.xhr.ontimeout = null;
						}

						if (abort) {
							try {
								this.xhr.abort();
							}
							catch (x) {
							}
						}
						this.unloadRef = this.xhr = null;
					};

					AbstractXHRObject.prototype.close = function () {
						debug('close');
						this._cleanup(true);
					};

					AbstractXHRObject.enabled = !!XHR;
					var axo = ['Active'].concat('Object').join('X');
					if (!AbstractXHRObject.enabled && (axo in global)) {
						debug('overriding xmlhttprequest');
						XHR = function () {
							try {
								return new global[axo]('Microsoft.XMLHTTP');
							}
							catch (e) {
								return null;
							}
						};
						AbstractXHRObject.enabled = !!new XHR();
					}

					var cors = false;
					try {
						cors = 'withCredentials' in new XHR();
					}
					catch (ignored) {
					}

					AbstractXHRObject.supportsCORS = cors;

					module.exports = AbstractXHRObject;
				}).call(this, {
					env : {
					}
				}, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"../../utils/event" : 46, 
				"../../utils/url" : 52, 
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57
			}], 
			18 : [function (require, module, exports) {
				(function (global) {
					module.exports = global.EventSource;
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
			}], 
			19 : [function (require, module, exports) {
				(function (global) {
					'use strict';

					var Driver = global.WebSocket || global.MozWebSocket;
					if (Driver) {
						module.exports = function WebSocketBrowserDriver (url) {
							return new Driver(url);
						}
;
					}
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
			}], 
			20 : [function (require, module, exports) {
				'use strict';

				var inherits = require('inherits'), AjaxBasedTransport = require('./lib/ajax-based'), EventSourceReceiver = require('./receiver/eventsource'), XHRCorsObject = require('./sender/xhr-cors'), EventSourceDriver = require('eventsource');


				function EventSourceTransport (transUrl) {
					if (!EventSourceTransport.enabled()) {
						throw new Error('Transport created when disabled');
					}

					AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
				}

				inherits(EventSourceTransport, AjaxBasedTransport);

				EventSourceTransport.enabled = function () {
					return !!EventSourceDriver;
				};

				EventSourceTransport.transportName = 'eventsource';
				EventSourceTransport.roundTrips = 2;

				module.exports = EventSourceTransport;
			}, {
				"./lib/ajax-based" : 24, 
				"./receiver/eventsource" : 29, 
				"./sender/xhr-cors" : 35, 
				"eventsource" : 18, 
				"inherits" : 57
			}], 
			21 : [function (require, module, exports) {
				'use strict';

				var inherits = require('inherits'), HtmlfileReceiver = require('./receiver/htmlfile'), XHRLocalObject = require('./sender/xhr-local'), AjaxBasedTransport = require('./lib/ajax-based');


				function HtmlFileTransport (transUrl) {
					if (!HtmlfileReceiver.enabled) {
						throw new Error('Transport created when disabled');
					}
					AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
				}

				inherits(HtmlFileTransport, AjaxBasedTransport);

				HtmlFileTransport.enabled = function (info) {
					return HtmlfileReceiver.enabled && info.sameOrigin;
				};

				HtmlFileTransport.transportName = 'htmlfile';
				HtmlFileTransport.roundTrips = 2;

				module.exports = HtmlFileTransport;
			}, {
				"./lib/ajax-based" : 24, 
				"./receiver/htmlfile" : 30, 
				"./sender/xhr-local" : 37, 
				"inherits" : 57
			}], 
			22 : [function (require, module, exports) {
				(function (process) {
					'use strict';


					var inherits = require('inherits'), JSON3 = require('json3'), EventEmitter = require('events').EventEmitter, version = require('../version'), urlUtils = require('../utils/url'), iframeUtils = require('../utils/iframe'), eventUtils = require('../utils/event'), random = require('../utils/random');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:transport:iframe');
					}

					function IframeTransport (transport, transUrl, baseUrl) {
						if (!IframeTransport.enabled()) {
							throw new Error('Transport created when disabled');
						}
						EventEmitter.call(this);

						var self = this;
						this.origin = urlUtils.getOrigin(baseUrl);
						this.baseUrl = baseUrl;
						this.transUrl = transUrl;
						this.transport = transport;
						this.windowId = random.string(8);

						var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
						debug(transport, transUrl, iframeUrl);

						this.iframeObj = iframeUtils.createIframe(iframeUrl, function (r) {
							debug('err callback');
							self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
							self.close();
						});

						this.onmessageCallback = this._message.bind(this);
						eventUtils.attachEvent('message', this.onmessageCallback);
					}

					inherits(IframeTransport, EventEmitter);

					IframeTransport.prototype.close = function () {
						debug('close');
						this.removeAllListeners();
						if (this.iframeObj) {
							eventUtils.detachEvent('message', this.onmessageCallback);
							try {
								this.postMessage('c');
							}
							catch (x) {
							}
							this.iframeObj.cleanup();
							this.iframeObj = null;
							this.onmessageCallback = this.iframeObj = null;
						}
					};

					IframeTransport.prototype._message = function (e) {
						debug('message', e.data);
						if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
							debug('not same origin', e.origin, this.origin);
							return;
						}

						var iframeMessage;
						try {
							iframeMessage = JSON3.parse(e.data);
						}
						catch (ignored) {
							debug('bad json', e.data);
							return;
						}

						if (iframeMessage.windowId !== this.windowId) {
							debug('mismatched window id', iframeMessage.windowId, this.windowId);
							return;
						}

						switch (iframeMessage.type) {
							case 's':
								this.iframeObj.loaded();
								this.postMessage('s', JSON3.stringify([version, this.transport, this.transUrl, this.baseUrl
								]));
								break;
							case 't':
								this.emit('message', iframeMessage.data);
								break;
							case 'c':
								var cdata;
								try {
									cdata = JSON3.parse(iframeMessage.data);
								}
								catch (ignored) {
									debug('bad json', iframeMessage.data);
									return;
								}
								this.emit('close', cdata[0], cdata[1]);
								this.close();
								break;
						}
					};

					IframeTransport.prototype.postMessage = function (type, data) {
						debug('postMessage', type, data);
						this.iframeObj.post(JSON3.stringify({
							windowId : this.windowId, 
							type : type, 
							data : data || ''
						}), this.origin);
					};

					IframeTransport.prototype.send = function (message) {
						debug('send', message);
						this.postMessage('m', message);
					};

					IframeTransport.enabled = function () {
						return iframeUtils.iframeEnabled;
					};

					IframeTransport.transportName = 'iframe';
					IframeTransport.roundTrips = 2;

					module.exports = IframeTransport;
				}).call(this, {
					env : {
					}
				});
			}, {
				"../utils/event" : 46, 
				"../utils/iframe" : 47, 
				"../utils/random" : 50, 
				"../utils/url" : 52, 
				"../version" : 53, 
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57, 
				"json3" : 58
			}], 
			23 : [function (require, module, exports) {
				(function (global) {
					'use strict';


					var inherits = require('inherits'), SenderReceiver = require('./lib/sender-receiver'), JsonpReceiver = require('./receiver/jsonp'), jsonpSender = require('./sender/jsonp');


					function JsonPTransport (transUrl) {
						if (!JsonPTransport.enabled()) {
							throw new Error('Transport created when disabled');
						}
						SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
					}

					inherits(JsonPTransport, SenderReceiver);

					JsonPTransport.enabled = function () {
						return !!global.document;
					};

					JsonPTransport.transportName = 'jsonp-polling';
					JsonPTransport.roundTrips = 1;
					JsonPTransport.needBody = true;

					module.exports = JsonPTransport;
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"./lib/sender-receiver" : 28, 
				"./receiver/jsonp" : 31, 
				"./sender/jsonp" : 33, 
				"inherits" : 57
			}], 
			24 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var inherits = require('inherits'), urlUtils = require('../../utils/url'), SenderReceiver = require('./sender-receiver');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:ajax-based');
					}

					function createAjaxSender (AjaxObject) {
						return function (url, payload, callback) {
							debug('create ajax sender', url, payload);
							var opt = {
							};
							if (typeof payload === 'string') {
								opt.headers = {
									'Content-type' : 'text/plain'
								};
							}
							var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
							var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
							xo.once('finish', function (status) {
								debug('finish', status);
								xo = null;

								if (status !== 200 && status !== 204) {
									return callback(new Error('http status ' + status));
								}
								callback();
							});
							return function () {
								debug('abort');
								xo.close();
								xo = null;

								var err = new Error('Aborted');
								err.code = 1000;
								callback(err);
							};
						};
					}

					function AjaxBasedTransport (transUrl, urlSuffix, Receiver, AjaxObject) {
						SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
					}

					inherits(AjaxBasedTransport, SenderReceiver);

					module.exports = AjaxBasedTransport;
				}).call(this, {
					env : {
					}
				});
			}, {
				"../../utils/url" : 52, 
				"./sender-receiver" : 28, 
				"debug" : 54, 
				"inherits" : 57
			}], 
			25 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var inherits = require('inherits'), EventEmitter = require('events').EventEmitter;


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:buffered-sender');
					}

					function BufferedSender (url, sender) {
						debug(url);
						EventEmitter.call(this);
						this.sendBuffer = [];
						this.sender = sender;
						this.url = url;
					}

					inherits(BufferedSender, EventEmitter);

					BufferedSender.prototype.send = function (message) {
						debug('send', message);
						this.sendBuffer.push(message);
						if (!this.sendStop) {
							this.sendSchedule();
						}
					};

					BufferedSender.prototype.sendScheduleWait = function () {
						debug('sendScheduleWait');
						var self = this;
						var tref;
						this.sendStop = function () {
							debug('sendStop');
							self.sendStop = null;
							clearTimeout(tref);
						};
						tref = setTimeout(function () {
							debug('timeout');
							self.sendStop = null;
							self.sendSchedule();
						}, 25);
					};

					BufferedSender.prototype.sendSchedule = function () {
						debug('sendSchedule', this.sendBuffer.length);
						var self = this;
						if (this.sendBuffer.length > 0) {
							var payload = '[' + this.sendBuffer.join(',') + ']';
							this.sendStop = this.sender(this.url, payload, function (err) {
								self.sendStop = null;
								if (err) {
									debug('error', err);
									self.emit('close', err.code || 1006, 'Sending error: ' + err);
									self._cleanup();
								}
								else {
									self.sendScheduleWait();
								}
							});
							this.sendBuffer = [];
						}
					};

					BufferedSender.prototype._cleanup = function () {
						debug('_cleanup');
						this.removeAllListeners();
					};

					BufferedSender.prototype.stop = function () {
						debug('stop');
						this._cleanup();
						if (this.sendStop) {
							this.sendStop();
							this.sendStop = null;
						}
					};

					module.exports = BufferedSender;
				}).call(this, {
					env : {
					}
				});
			}, {
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57
			}], 
			26 : [function (require, module, exports) {
				(function (global) {
					'use strict';

					var inherits = require('inherits'), IframeTransport = require('../iframe'), objectUtils = require('../../utils/object');


					module.exports = function (transport) {
						function IframeWrapTransport (transUrl, baseUrl) {
							IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
						}

						inherits(IframeWrapTransport, IframeTransport);

						IframeWrapTransport.enabled = function (url, info) {
							if (!global.document) {
								return false;
							}

							var iframeInfo = objectUtils.extend({
							}, info);
							iframeInfo.sameOrigin = true;
							return transport.enabled(iframeInfo) && IframeTransport.enabled();
						};

						IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
						IframeWrapTransport.needBody = true;
						IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1;

						IframeWrapTransport.facadeTransport = transport;

						return IframeWrapTransport;
					};
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"../../utils/object" : 49, 
				"../iframe" : 22, 
				"inherits" : 57
			}], 
			27 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var inherits = require('inherits'), EventEmitter = require('events').EventEmitter;


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:polling');
					}

					function Polling (Receiver, receiveUrl, AjaxObject) {
						debug(receiveUrl);
						EventEmitter.call(this);
						this.Receiver = Receiver;
						this.receiveUrl = receiveUrl;
						this.AjaxObject = AjaxObject;
						this._scheduleReceiver();
					}

					inherits(Polling, EventEmitter);

					Polling.prototype._scheduleReceiver = function () {
						debug('_scheduleReceiver');
						var self = this;
						var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);

						poll.on('message', function (msg) {
							debug('message', msg);
							self.emit('message', msg);
						});

						poll.once('close', function (code, reason) {
							debug('close', code, reason, self.pollIsClosing);
							self.poll = poll = null;

							if (!self.pollIsClosing) {
								if (reason === 'network') {
									self._scheduleReceiver();
								}
								else {
									self.emit('close', code || 1006, reason);
									self.removeAllListeners();
								}
							}
						});
					};

					Polling.prototype.abort = function () {
						debug('abort');
						this.removeAllListeners();
						this.pollIsClosing = true;
						if (this.poll) {
							this.poll.abort();
						}
					};

					module.exports = Polling;
				}).call(this, {
					env : {
					}
				});
			}, {
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57
			}], 
			28 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var inherits = require('inherits'), urlUtils = require('../../utils/url'), BufferedSender = require('./buffered-sender'), Polling = require('./polling');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:sender-receiver');
					}

					function SenderReceiver (transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
						var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
						debug(pollUrl);
						var self = this;
						BufferedSender.call(this, transUrl, senderFunc);

						this.poll = new Polling(Receiver, pollUrl, AjaxObject);
						this.poll.on('message', function (msg) {
							debug('poll message', msg);
							self.emit('message', msg);
						});
						this.poll.once('close', function (code, reason) {
							debug('poll close', code, reason);
							self.poll = null;
							self.emit('close', code, reason);
							self.close();
						});
					}

					inherits(SenderReceiver, BufferedSender);

					SenderReceiver.prototype.close = function () {
						debug('close');
						this.removeAllListeners();
						if (this.poll) {
							this.poll.abort();
							this.poll = null;
						}
						this.stop();
					};

					module.exports = SenderReceiver;
				}).call(this, {
					env : {
					}
				});
			}, {
				"../../utils/url" : 52, 
				"./buffered-sender" : 25, 
				"./polling" : 27, 
				"debug" : 54, 
				"inherits" : 57
			}], 
			29 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var inherits = require('inherits'), EventEmitter = require('events').EventEmitter, EventSourceDriver = require('eventsource');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:receiver:eventsource');
					}

					function EventSourceReceiver (url) {
						debug(url);
						EventEmitter.call(this);

						var self = this;
						var es = this.es = new EventSourceDriver(url);
						es.onmessage = function (e) {
							debug('message', e.data);
							self.emit('message', decodeURI(e.data));
						};
						es.onerror = function (e) {
							debug('error', es.readyState, e);
							var reason = (es.readyState !== 2 ? 'network' : 'permanent');
							self._cleanup();
							self._close(reason);
						};
					}

					inherits(EventSourceReceiver, EventEmitter);

					EventSourceReceiver.prototype.abort = function () {
						debug('abort');
						this._cleanup();
						this._close('user');
					};

					EventSourceReceiver.prototype._cleanup = function () {
						debug('cleanup');
						var es = this.es;
						if (es) {
							es.onmessage = es.onerror = null;
							es.close();
							this.es = null;
						}
					};

					EventSourceReceiver.prototype._close = function (reason) {
						debug('close', reason);
						var self = this;
						setTimeout(function () {
							self.emit('close', null, reason);
							self.removeAllListeners();
						}, 200);
					};

					module.exports = EventSourceReceiver;
				}).call(this, {
					env : {
					}
				});
			}, {
				"debug" : 54, 
				"events" : 3, 
				"eventsource" : 18, 
				"inherits" : 57
			}], 
			30 : [function (require, module, exports) {
				(function (process, global) {
					'use strict';

					var inherits = require('inherits'), iframeUtils = require('../../utils/iframe'), urlUtils = require('../../utils/url'), EventEmitter = require('events').EventEmitter, random = require('../../utils/random');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:receiver:htmlfile');
					}

					function HtmlfileReceiver (url) {
						debug(url);
						EventEmitter.call(this);
						var self = this;
						iframeUtils.polluteGlobalNamespace();

						this.id = 'a' + random.string(6);
						url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));

						debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
						var constructFunc = HtmlfileReceiver.htmlfileEnabled ? 
							iframeUtils.createHtmlfile : iframeUtils.createIframe;

						global[iframeUtils.WPrefix][this.id] = {
							start : function () {
								debug('start');
								self.iframeObj.loaded();
							}, 
							message : function (data) {
								debug('message', data);
								self.emit('message', data);
							}, 
							stop : function () {
								debug('stop');
								self._cleanup();
								self._close('network');
							}
						};
						this.iframeObj = constructFunc(url, function () {
							debug('callback');
							self._cleanup();
							self._close('permanent');
						});
					}

					inherits(HtmlfileReceiver, EventEmitter);

					HtmlfileReceiver.prototype.abort = function () {
						debug('abort');
						this._cleanup();
						this._close('user');
					};

					HtmlfileReceiver.prototype._cleanup = function () {
						debug('_cleanup');
						if (this.iframeObj) {
							this.iframeObj.cleanup();
							this.iframeObj = null;
						}
						delete global[iframeUtils.WPrefix][this.id];
					};

					HtmlfileReceiver.prototype._close = function (reason) {
						debug('_close', reason);
						this.emit('close', null, reason);
						this.removeAllListeners();
					};

					HtmlfileReceiver.htmlfileEnabled = false;

					var axo = ['Active'].concat('Object').join('X');
					if (axo in global) {
						try {
							HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
						}
						catch (x) {
						}
					}

					HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;

					module.exports = HtmlfileReceiver;
				}).call(this, {
					env : {
					}
				}, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"../../utils/iframe" : 47, 
				"../../utils/random" : 50, 
				"../../utils/url" : 52, 
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57
			}], 
			31 : [function (require, module, exports) {
				(function (process, global) {
					'use strict';

					var utils = require('../../utils/iframe'), random = require('../../utils/random'), browser = require('../../utils/browser'), urlUtils = require('../../utils/url'), inherits = require('inherits'), EventEmitter = require('events').EventEmitter;


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:receiver:jsonp');
					}

					function JsonpReceiver (url) {
						debug(url);
						var self = this;
						EventEmitter.call(this);

						utils.polluteGlobalNamespace();

						this.id = 'a' + random.string(6);
						var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));

						global[utils.WPrefix][this.id] = this._callback.bind(this);
						this._createScript(urlWithId);

						this.timeoutId = setTimeout(function () {
							debug('timeout');
							self._abort(new Error('JSONP script loaded abnormally (timeout)'));
						}, JsonpReceiver.timeout);
					}

					inherits(JsonpReceiver, EventEmitter);

					JsonpReceiver.prototype.abort = function () {
						debug('abort');
						if (global[utils.WPrefix][this.id]) {
							var err = new Error('JSONP user aborted read');
							err.code = 1000;
							this._abort(err);
						}
					};

					JsonpReceiver.timeout = 35000;
					JsonpReceiver.scriptErrorTimeout = 1000;

					JsonpReceiver.prototype._callback = function (data) {
						debug('_callback', data);
						this._cleanup();

						if (this.aborting) {
							return;
						}

						if (data) {
							debug('message', data);
							this.emit('message', data);
						}
						this.emit('close', null, 'network');
						this.removeAllListeners();
					};

					JsonpReceiver.prototype._abort = function (err) {
						debug('_abort', err);
						this._cleanup();
						this.aborting = true;
						this.emit('close', err.code, err.message);
						this.removeAllListeners();
					};

					JsonpReceiver.prototype._cleanup = function () {
						debug('_cleanup');
						clearTimeout(this.timeoutId);
						if (this.script2) {
							this.script2.parentNode.removeChild(this.script2);
							this.script2 = null;
						}
						if (this.script) {
							var script = this.script;
							script.parentNode.removeChild(script);
							script.onreadystatechange = script.onerror = 
								script.onload = script.onclick = null;
							this.script = null;
						}
						delete global[utils.WPrefix][this.id];
					};

					JsonpReceiver.prototype._scriptError = function () {
						debug('_scriptError');
						var self = this;
						if (this.errorTimer) {
							return;
						}

						this.errorTimer = setTimeout(function () {
							if (!self.loadedOkay) {
								self._abort(new Error('JSONP script loaded abnormally (onerror)'));
							}
						}, JsonpReceiver.scriptErrorTimeout);
					};

					JsonpReceiver.prototype._createScript = function (url) {
						debug('_createScript', url);
						var self = this;
						var script = this.script = global.document.createElement('script');
						var script2;

						script.id = 'a' + random.string(8);
						script.src = url;
						script.type = 'text/javascript';
						script.charset = 'UTF-8';
						script.onerror = this._scriptError.bind(this);
						script.onload = function () {
							debug('onload');
							self._abort(new Error('JSONP script loaded abnormally (onload)'));
						};

						script.onreadystatechange = function () {
							debug('onreadystatechange', script.readyState);
							if (/loaded|closed/.test(script.readyState)) {
								if (script && script.htmlFor && script.onclick) {
									self.loadedOkay = true;
									try {
										script.onclick();
									}
									catch (x) {
									}
								}
								if (script) {
									self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
								}
							}
						};
						if (typeof script.async === 'undefined' && global.document.attachEvent) {
							if (!browser.isOpera()) {
								try {
									script.htmlFor = script.id;
									script.event = 'onclick';
								}
								catch (x) {
								}
								script.async = true;
							}
							else {
								script2 = this.script2 = global.document.createElement('script');
								script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
								script.async = script2.async = false;
							}
						}
						if (typeof script.async !== 'undefined') {
							script.async = true;
						}

						var head = global.document.getElementsByTagName('head')[0];
						head.insertBefore(script, head.firstChild);
						if (script2) {
							head.insertBefore(script2, head.firstChild);
						}
					};

					module.exports = JsonpReceiver;
				}).call(this, {
					env : {
					}
				}, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"../../utils/browser" : 44, 
				"../../utils/iframe" : 47, 
				"../../utils/random" : 50, 
				"../../utils/url" : 52, 
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57
			}], 
			32 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var inherits = require('inherits'), EventEmitter = require('events').EventEmitter;


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:receiver:xhr');
					}

					function XhrReceiver (url, AjaxObject) {
						debug(url);
						EventEmitter.call(this);
						var self = this;

						this.bufferPosition = 0;

						this.xo = new AjaxObject('POST', url, null);
						this.xo.on('chunk', this._chunkHandler.bind(this));
						this.xo.once('finish', function (status, text) {
							debug('finish', status, text);
							self._chunkHandler(status, text);
							self.xo = null;
							var reason = status === 200 ? 'network' : 'permanent';
							debug('close', reason);
							self.emit('close', null, reason);
							self._cleanup();
						});
					}

					inherits(XhrReceiver, EventEmitter);

					XhrReceiver.prototype._chunkHandler = function (status, text) {
						debug('_chunkHandler', status);
						if (status !== 200 || !text) {
							return;
						}

						for (var idx = -1; ; this.bufferPosition += idx + 1) {
							var buf = text.slice(this.bufferPosition);
							idx = buf.indexOf('\n');
							if (idx === -1) {
								break;
							}
							var msg = buf.slice(0, idx);
							if (msg) {
								debug('message', msg);
								this.emit('message', msg);
							}
						}
					};

					XhrReceiver.prototype._cleanup = function () {
						debug('_cleanup');
						this.removeAllListeners();
					};

					XhrReceiver.prototype.abort = function () {
						debug('abort');
						if (this.xo) {
							this.xo.close();
							debug('close');
							this.emit('close', null, 'user');
							this.xo = null;
						}
						this._cleanup();
					};

					module.exports = XhrReceiver;
				}).call(this, {
					env : {
					}
				});
			}, {
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57
			}], 
			33 : [function (require, module, exports) {
				(function (process, global) {
					'use strict';

					var random = require('../../utils/random'), urlUtils = require('../../utils/url');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:sender:jsonp');
					}

					var form, area;

					function createIframe (id) {
						debug('createIframe', id);
						try {
							return global.document.createElement('<iframe name="' + id + '">');
						}
						catch (x) {
							var iframe = global.document.createElement('iframe');
							iframe.name = id;
							return iframe;
						}
					}

					function createForm () {
						debug('createForm');
						form = global.document.createElement('form');
						form.style.display = 'none';
						form.style.position = 'absolute';
						form.method = 'POST';
						form.enctype = 'application/x-www-form-urlencoded';
						form.acceptCharset = 'UTF-8';

						area = global.document.createElement('textarea');
						area.name = 'd';
						form.appendChild(area);

						global.document.body.appendChild(form);
					}

					module.exports = function (url, payload, callback) {
						debug(url, payload);
						if (!form) {
							createForm();
						}
						var id = 'a' + random.string(8);
						form.target = id;
						form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);

						var iframe = createIframe(id);
						iframe.id = id;
						iframe.style.display = 'none';
						form.appendChild(iframe);

						try {
							area.value = payload;
						}
						catch (e) {
						}
						form.submit();

						var completed = function (err) {
							debug('completed', id, err);
							if (!iframe.onerror) {
								return;
							}
							iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
							setTimeout(function () {
								debug('cleaning up', id);
								iframe.parentNode.removeChild(iframe);
								iframe = null;
							}, 500);
							area.value = '';
							callback(err);
						};
						iframe.onerror = function () {
							debug('onerror', id);
							completed();
						};
						iframe.onload = function () {
							debug('onload', id);
							completed();
						};
						iframe.onreadystatechange = function (e) {
							debug('onreadystatechange', id, iframe.readyState, e);
							if (iframe.readyState === 'complete') {
								completed();
							}
						};
						return function () {
							debug('aborted', id);
							completed(new Error('Aborted'));
						};
					};
				}).call(this, {
					env : {
					}
				}, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"../../utils/random" : 50, 
				"../../utils/url" : 52, 
				"debug" : 54
			}], 
			34 : [function (require, module, exports) {
				(function (process, global) {
					'use strict';

					var EventEmitter = require('events').EventEmitter, inherits = require('inherits'), eventUtils = require('../../utils/event'), browser = require('../../utils/browser'), urlUtils = require('../../utils/url');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:sender:xdr');
					}


					function XDRObject (method, url, payload) {
						debug(method, url);
						var self = this;
						EventEmitter.call(this);

						setTimeout(function () {
							self._start(method, url, payload);
						}, 0);
					}

					inherits(XDRObject, EventEmitter);

					XDRObject.prototype._start = function (method, url, payload) {
						debug('_start');
						var self = this;
						var xdr = new global.XDomainRequest();
						url = urlUtils.addQuery(url, 't=' + (+new Date()));

						xdr.onerror = function () {
							debug('onerror');
							self._error();
						};
						xdr.ontimeout = function () {
							debug('ontimeout');
							self._error();
						};
						xdr.onprogress = function () {
							debug('progress', xdr.responseText);
							self.emit('chunk', 200, xdr.responseText);
						};
						xdr.onload = function () {
							debug('load');
							self.emit('finish', 200, xdr.responseText);
							self._cleanup(false);
						};
						this.xdr = xdr;
						this.unloadRef = eventUtils.unloadAdd(function () {
							self._cleanup(true);
						});
						try {
							this.xdr.open(method, url);
							if (this.timeout) {
								this.xdr.timeout = this.timeout;
							}
							this.xdr.send(payload);
						}
						catch (x) {
							this._error();
						}
					};

					XDRObject.prototype._error = function () {
						this.emit('finish', 0, '');
						this._cleanup(false);
					};

					XDRObject.prototype._cleanup = function (abort) {
						debug('cleanup', abort);
						if (!this.xdr) {
							return;
						}
						this.removeAllListeners();
						eventUtils.unloadDel(this.unloadRef);

						this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
						if (abort) {
							try {
								this.xdr.abort();
							}
							catch (x) {
							}
						}
						this.unloadRef = this.xdr = null;
					};

					XDRObject.prototype.close = function () {
						debug('close');
						this._cleanup(true);
					};

					XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());

					module.exports = XDRObject;
				}).call(this, {
					env : {
					}
				}, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"../../utils/browser" : 44, 
				"../../utils/event" : 46, 
				"../../utils/url" : 52, 
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57
			}], 
			35 : [function (require, module, exports) {
				'use strict';

				var inherits = require('inherits'), XhrDriver = require('../driver/xhr');


				function XHRCorsObject (method, url, payload, opts) {
					XhrDriver.call(this, method, url, payload, opts);
				}

				inherits(XHRCorsObject, XhrDriver);

				XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;

				module.exports = XHRCorsObject;
			}, {
				"../driver/xhr" : 17, 
				"inherits" : 57
			}], 
			36 : [function (require, module, exports) {
				'use strict';

				var EventEmitter = require('events').EventEmitter, inherits = require('inherits');


				function XHRFake () {
					var self = this;
					EventEmitter.call(this);

					this.to = setTimeout(function () {
						self.emit('finish', 200, '{}');
					}, XHRFake.timeout);
				}

				inherits(XHRFake, EventEmitter);

				XHRFake.prototype.close = function () {
					clearTimeout(this.to);
				};

				XHRFake.timeout = 2000;

				module.exports = XHRFake;
			}, {
				"events" : 3, 
				"inherits" : 57
			}], 
			37 : [function (require, module, exports) {
				'use strict';

				var inherits = require('inherits'), XhrDriver = require('../driver/xhr');


				function XHRLocalObject (method, url, payload) {
					XhrDriver.call(this, method, url, payload, {
						noCredentials : true
					});
				}

				inherits(XHRLocalObject, XhrDriver);

				XHRLocalObject.enabled = XhrDriver.enabled;

				module.exports = XHRLocalObject;
			}, {
				"../driver/xhr" : 17, 
				"inherits" : 57
			}], 
			38 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var utils = require('../utils/event'), urlUtils = require('../utils/url'), inherits = require('inherits'), EventEmitter = require('events').EventEmitter, WebsocketDriver = require('./driver/websocket');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:websocket');
					}

					function WebSocketTransport (transUrl, ignore, options) {
						if (!WebSocketTransport.enabled()) {
							throw new Error('Transport created when disabled');
						}

						EventEmitter.call(this);
						debug('constructor', transUrl);

						var self = this;
						var url = urlUtils.addPath(transUrl, '/websocket');
						if (url.slice(0, 5) === 'https') {
							url = 'wss' + url.slice(5);
						}
						else {
							url = 'ws' + url.slice(4);
						}
						this.url = url;

						this.ws = new WebsocketDriver(this.url, [], options);
						this.ws.onmessage = function (e) {
							debug('message event', e.data);
							self.emit('message', e.data);
						};
						this.unloadRef = utils.unloadAdd(function () {
							debug('unload');
							self.ws.close();
						});
						this.ws.onclose = function (e) {
							debug('close event', e.code, e.reason);
							self.emit('close', e.code, e.reason);
							self._cleanup();
						};
						this.ws.onerror = function (e) {
							debug('error event', e);
							self.emit('close', 1006, 'WebSocket connection broken');
							self._cleanup();
						};
					}

					inherits(WebSocketTransport, EventEmitter);

					WebSocketTransport.prototype.send = function (data) {
						var msg = '[' + data + ']';
						debug('send', msg);
						this.ws.send(msg);
					};

					WebSocketTransport.prototype.close = function () {
						debug('close');
						if (this.ws) {
							this.ws.close();
						}
						this._cleanup();
					};

					WebSocketTransport.prototype._cleanup = function () {
						debug('_cleanup');
						var ws = this.ws;
						if (ws) {
							ws.onmessage = ws.onclose = ws.onerror = null;
						}
						utils.unloadDel(this.unloadRef);
						this.unloadRef = this.ws = null;
						this.removeAllListeners();
					};

					WebSocketTransport.enabled = function () {
						debug('enabled');
						return !!WebsocketDriver;
					};
					WebSocketTransport.transportName = 'websocket';

					WebSocketTransport.roundTrips = 2;

					module.exports = WebSocketTransport;
				}).call(this, {
					env : {
					}
				});
			}, {
				"../utils/event" : 46, 
				"../utils/url" : 52, 
				"./driver/websocket" : 19, 
				"debug" : 54, 
				"events" : 3, 
				"inherits" : 57
			}], 
			39 : [function (require, module, exports) {
				'use strict';

				var inherits = require('inherits'), AjaxBasedTransport = require('./lib/ajax-based'), XdrStreamingTransport = require('./xdr-streaming'), XhrReceiver = require('./receiver/xhr'), XDRObject = require('./sender/xdr');


				function XdrPollingTransport (transUrl) {
					if (!XDRObject.enabled) {
						throw new Error('Transport created when disabled');
					}
					AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
				}

				inherits(XdrPollingTransport, AjaxBasedTransport);

				XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
				XdrPollingTransport.transportName = 'xdr-polling';
				XdrPollingTransport.roundTrips = 2;

				module.exports = XdrPollingTransport;
			}, {
				"./lib/ajax-based" : 24, 
				"./receiver/xhr" : 32, 
				"./sender/xdr" : 34, 
				"./xdr-streaming" : 40, 
				"inherits" : 57
			}], 
			40 : [function (require, module, exports) {
				'use strict';

				var inherits = require('inherits'), AjaxBasedTransport = require('./lib/ajax-based'), XhrReceiver = require('./receiver/xhr'), XDRObject = require('./sender/xdr');



				function XdrStreamingTransport (transUrl) {
					if (!XDRObject.enabled) {
						throw new Error('Transport created when disabled');
					}
					AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
				}

				inherits(XdrStreamingTransport, AjaxBasedTransport);

				XdrStreamingTransport.enabled = function (info) {
					if (info.cookie_needed || info.nullOrigin) {
						return false;
					}
					return XDRObject.enabled && info.sameScheme;
				};

				XdrStreamingTransport.transportName = 'xdr-streaming';
				XdrStreamingTransport.roundTrips = 2;

				module.exports = XdrStreamingTransport;
			}, {
				"./lib/ajax-based" : 24, 
				"./receiver/xhr" : 32, 
				"./sender/xdr" : 34, 
				"inherits" : 57
			}], 
			41 : [function (require, module, exports) {
				'use strict';

				var inherits = require('inherits'), AjaxBasedTransport = require('./lib/ajax-based'), XhrReceiver = require('./receiver/xhr'), XHRCorsObject = require('./sender/xhr-cors'), XHRLocalObject = require('./sender/xhr-local');


				function XhrPollingTransport (transUrl) {
					if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
						throw new Error('Transport created when disabled');
					}
					AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
				}

				inherits(XhrPollingTransport, AjaxBasedTransport);

				XhrPollingTransport.enabled = function (info) {
					if (info.nullOrigin) {
						return false;
					}

					if (XHRLocalObject.enabled && info.sameOrigin) {
						return true;
					}
					return XHRCorsObject.enabled;
				};

				XhrPollingTransport.transportName = 'xhr-polling';
				XhrPollingTransport.roundTrips = 2;

				module.exports = XhrPollingTransport;
			}, {
				"./lib/ajax-based" : 24, 
				"./receiver/xhr" : 32, 
				"./sender/xhr-cors" : 35, 
				"./sender/xhr-local" : 37, 
				"inherits" : 57
			}], 
			42 : [function (require, module, exports) {
				(function (global) {
					'use strict';

					var inherits = require('inherits'), AjaxBasedTransport = require('./lib/ajax-based'), XhrReceiver = require('./receiver/xhr'), XHRCorsObject = require('./sender/xhr-cors'), XHRLocalObject = require('./sender/xhr-local'), browser = require('../utils/browser');


					function XhrStreamingTransport (transUrl) {
						if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
							throw new Error('Transport created when disabled');
						}
						AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
					}

					inherits(XhrStreamingTransport, AjaxBasedTransport);

					XhrStreamingTransport.enabled = function (info) {
						if (info.nullOrigin) {
							return false;
						}
						if (browser.isOpera()) {
							return false;
						}

						return XHRCorsObject.enabled;
					};

					XhrStreamingTransport.transportName = 'xhr-streaming';
					XhrStreamingTransport.roundTrips = 2;

					XhrStreamingTransport.needBody = !!global.document;

					module.exports = XhrStreamingTransport;
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"../utils/browser" : 44, 
				"./lib/ajax-based" : 24, 
				"./receiver/xhr" : 32, 
				"./sender/xhr-cors" : 35, 
				"./sender/xhr-local" : 37, 
				"inherits" : 57
			}], 
			43 : [function (require, module, exports) {
				(function (global) {
					'use strict';

					if (global.crypto && global.crypto.getRandomValues) {
						module.exports.randomBytes = function (length) {
							var bytes = new Uint8Array(length);
							global.crypto.getRandomValues(bytes);
							return bytes;
						};
					}
					else {
						module.exports.randomBytes = function (length) {
							var bytes = new Array(length);
							for (var i = 0; i < length; i++) {
								bytes[i] = Math.floor(Math.random() * 256);
							}
							return bytes;
						};
					}
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
			}], 
			44 : [function (require, module, exports) {
				(function (global) {
					'use strict';

					module.exports = {
						isOpera : function () {
							return global.navigator && 
								/opera/i.test(global.navigator.userAgent);
						}, 
						isKonqueror : function () {
							return global.navigator && 
								/konqueror/i.test(global.navigator.userAgent);
						}, 
						hasDomain : function () {
							if (!global.document) {
								return true;
							}

							try {
								return !!global.document.domain;
							}
							catch (e) {
								return false;
							}
						}
					};
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
			}], 
			45 : [function (require, module, exports) {
				'use strict';

				var JSON3 = require('json3');

				var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g, extraLookup;

				var unrollLookup = function (escapable) {
					var i;
					var unrolled = {
					};
					var c = [];
					for (i = 0; i < 65536; i++) {
						c.push(String.fromCharCode(i));
					}
					escapable.lastIndex = 0;
					c.join('').replace(escapable, function (a) {
						unrolled[a] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
						return '';
					});
					escapable.lastIndex = 0;
					return unrolled;
				};

				module.exports = {
					quote : function (string) {
						var quoted = JSON3.stringify(string);

						extraEscapable.lastIndex = 0;
						if (!extraEscapable.test(quoted)) {
							return quoted;
						}

						if (!extraLookup) {
							extraLookup = unrollLookup(extraEscapable);
						}

						return quoted.replace(extraEscapable, function (a) {
							return extraLookup[a];
						});
					}
				};
			}, {
				"json3" : 58
			}], 
			46 : [function (require, module, exports) {
				(function (global) {
					'use strict';

					var random = require('./random');

					var onUnload = {
					}, afterUnload = false, isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime;


					module.exports = {
						attachEvent : function (event, listener) {
							if (typeof global.addEventListener !== 'undefined') {
								global.addEventListener(event, listener, false);
							}
							else if (global.document && global.attachEvent) {
								global.document.attachEvent('on' + event, listener);
								global.attachEvent('on' + event, listener);
							}
						}, 
						detachEvent : function (event, listener) {
							if (typeof global.addEventListener !== 'undefined') {
								global.removeEventListener(event, listener, false);
							}
							else if (global.document && global.detachEvent) {
								global.document.detachEvent('on' + event, listener);
								global.detachEvent('on' + event, listener);
							}
						}, 
						unloadAdd : function (listener) {
							if (isChromePackagedApp) {
								return null;
							}

							var ref = random.string(8);
							onUnload[ref] = listener;
							if (afterUnload) {
								setTimeout(this.triggerUnloadCallbacks, 0);
							}
							return ref;
						}, 
						unloadDel : function (ref) {
							if (ref in onUnload) {
								delete onUnload[ref];
							}
						}, 
						triggerUnloadCallbacks : function () {
							for (var ref in onUnload) {
								onUnload[ref]();
								delete onUnload[ref];
							}
						}
					};

					var unloadTriggered = function () {
						if (afterUnload) {
							return;
						}
						afterUnload = true;
						module.exports.triggerUnloadCallbacks();
					};

					if (!isChromePackagedApp) {
						module.exports.attachEvent('unload', unloadTriggered);
					}
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"./random" : 50
			}], 
			47 : [function (require, module, exports) {
				(function (process, global) {
					'use strict';

					var eventUtils = require('./event'), JSON3 = require('json3'), browser = require('./browser');


					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:utils:iframe');
					}

					module.exports = {
						WPrefix : '_jp', 
						currentWindowId : null, 
						polluteGlobalNamespace : function () {
							if (!(module.exports.WPrefix in global)) {
								global[module.exports.WPrefix] = {
								};
							}
						}, 
						postMessage : function (type, data) {
							if (global.parent !== global) {
								global.parent.postMessage(JSON3.stringify({
									windowId : module.exports.currentWindowId, 
									type : type, 
									data : data || ''
								}), '*');
							}
							else {
								debug('Cannot postMessage, no parent window.', type, data);
							}
						}, 
						createIframe : function (iframeUrl, errorCallback) {
							var iframe = global.document.createElement('iframe');
							var tref, unloadRef;
							var unattach = function () {
								debug('unattach');
								clearTimeout(tref);
								try {
									iframe.onload = null;
								}
								catch (x) {
								}
								iframe.onerror = null;
							};
							var cleanup = function () {
								debug('cleanup');
								if (iframe) {
									unattach();
									setTimeout(function () {
										if (iframe) {
											iframe.parentNode.removeChild(iframe);
										}
										iframe = null;
									}, 0);
									eventUtils.unloadDel(unloadRef);
								}
							};
							var onerror = function (err) {
								debug('onerror', err);
								if (iframe) {
									cleanup();
									errorCallback(err);
								}
							};
							var post = function (msg, origin) {
								debug('post', msg, origin);
								try {
									setTimeout(function () {
										if (iframe && iframe.contentWindow) {
											iframe.contentWindow.postMessage(msg, origin);
										}
									}, 0);
								}
								catch (x) {
								}
							};

							iframe.src = iframeUrl;
							iframe.style.display = 'none';
							iframe.style.position = 'absolute';
							iframe.onerror = function () {
								onerror('onerror');
							};
							iframe.onload = function () {
								debug('onload');
								clearTimeout(tref);
								tref = setTimeout(function () {
									onerror('onload timeout');
								}, 2000);
							};
							global.document.body.appendChild(iframe);
							tref = setTimeout(function () {
								onerror('timeout');
							}, 15000);
							unloadRef = eventUtils.unloadAdd(cleanup);
							return {
								post : post, 
								cleanup : cleanup, 
								loaded : unattach
							};
						}, 
						createHtmlfile : function (iframeUrl, errorCallback) {
							var axo = ['Active'].concat('Object').join('X');
							var doc = new global[axo]('htmlfile');
							var tref, unloadRef;
							var iframe;
							var unattach = function () {
								clearTimeout(tref);
								iframe.onerror = null;
							};
							var cleanup = function () {
								if (doc) {
									unattach();
									eventUtils.unloadDel(unloadRef);
									iframe.parentNode.removeChild(iframe);
									iframe = doc = null;
									CollectGarbage();
								}
							};
							var onerror = function (r) {
								debug('onerror', r);
								if (doc) {
									cleanup();
									errorCallback(r);
								}
							};
							var post = function (msg, origin) {
								try {
									setTimeout(function () {
										if (iframe && iframe.contentWindow) {
											iframe.contentWindow.postMessage(msg, origin);
										}
									}, 0);
								}
								catch (x) {
								}
							};

							doc.open();
							doc.write('<html><s' + 'cript>' + 
								'document.domain="' + global.document.domain + '";' + 
								'</s' + 'cript></html>');
							doc.close();
							doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
							var c = doc.createElement('div');
							doc.body.appendChild(c);
							iframe = doc.createElement('iframe');
							c.appendChild(iframe);
							iframe.src = iframeUrl;
							iframe.onerror = function () {
								onerror('onerror');
							};
							tref = setTimeout(function () {
								onerror('timeout');
							}, 15000);
							unloadRef = eventUtils.unloadAdd(cleanup);
							return {
								post : post, 
								cleanup : cleanup, 
								loaded : unattach
							};
						}
					};

					module.exports.iframeEnabled = false;
					if (global.document) {
						module.exports.iframeEnabled = (typeof global.postMessage === 'function' || 
							typeof global.postMessage === 'object') && (!browser.isKonqueror());
					}
				}).call(this, {
					env : {
					}
				}, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"./browser" : 44, 
				"./event" : 46, 
				"debug" : 54, 
				"json3" : 58
			}], 
			48 : [function (require, module, exports) {
				(function (global) {
					'use strict';

					var logObject = {
					};
					['log', 'debug', 'warn'].forEach(function (level) {
						var levelExists;

						try {
							levelExists = global.console && global.console[level] && global.console[level].apply;
						}
						catch (e) {
						}

						logObject[level] = levelExists ? function () {
							return global.console[level].apply(global.console, arguments);
						} : (level === 'log' ? function () {
						} : logObject.log);
					});

					module.exports = logObject;
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
			}], 
			49 : [function (require, module, exports) {
				'use strict';

				module.exports = {
					isObject : function (obj) {
						var type = typeof obj;
						return type === 'function' || type === 'object' && !!obj;
					}, 
					extend : function (obj) {
						if (!this.isObject(obj)) {
							return obj;
						}
						var source, prop;
						for (var i = 1, length = arguments.length; i < length; i++) {
							source = arguments[i];
							for (prop in source) {
								if (Object.prototype.hasOwnProperty.call(source, prop)) {
									obj[prop] = source[prop];
								}
							}
						}
						return obj;
					}
				};
			}, {
			}], 
			50 : [function (require, module, exports) {
				'use strict';


				var crypto = require('crypto');

				var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
				module.exports = {
					string : function (length) {
						var max = _randomStringChars.length;
						var bytes = crypto.randomBytes(length);
						var ret = [];
						for (var i = 0; i < length; i++) {
							ret.push(_randomStringChars.substr(bytes[i] % max, 1));
						}
						return ret.join('');
					}, 
					number : function (max) {
						return Math.floor(Math.random() * max);
					}, 
					numberString : function (max) {
						var t = ('' + (max - 1)).length;
						var p = new Array(t + 1).join('0');
						return (p + this.number(max)).slice(-t);
					}
				};
			}, {
				"crypto" : 43
			}], 
			51 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:utils:transport');
					}

					module.exports = function (availableTransports) {
						return {
							filterToEnabled : function (transportsWhitelist, info) {
								var transports = {
									main : [], 
									facade : []
								};
								if (!transportsWhitelist) {
									transportsWhitelist = [];
								}
								else if (typeof transportsWhitelist === 'string') {
									transportsWhitelist = [transportsWhitelist];
								}

								availableTransports.forEach(function (trans) {
									if (!trans) {
										return;
									}

									if (trans.transportName === 'websocket' && info.websocket === false) {
										debug('disabled from server', 'websocket');
										return;
									}

									if (transportsWhitelist.length && 
										transportsWhitelist.indexOf(trans.transportName) === -1) {
										debug('not in whitelist', trans.transportName);
										return;
									}

									if (trans.enabled(info)) {
										debug('enabled', trans.transportName);
										transports.main.push(trans);
										if (trans.facadeTransport) {
											transports.facade.push(trans.facadeTransport);
										}
									}
									else {
										debug('disabled', trans.transportName);
									}
								});
								return transports;
							}
						};
					};
				}).call(this, {
					env : {
					}
				});
			}, {
				"debug" : 54
			}], 
			52 : [function (require, module, exports) {
				(function (process) {
					'use strict';

					var URL = require('url-parse');

					var debug = function () {
					};
					if (process.env.NODE_ENV !== 'production') {
						debug = require('debug')('sockjs-client:utils:url');
					}

					module.exports = {
						getOrigin : function (url) {
							if (!url) {
								return null;
							}

							var p = new URL(url);
							if (p.protocol === 'file:') {
								return null;
							}

							var port = p.port;
							if (!port) {
								port = (p.protocol === 'https:') ? '443' : '80';
							}

							return p.protocol + '//' + p.hostname + ':' + port;
						}, 
						isOriginEqual : function (a, b) {
							var res = this.getOrigin(a) === this.getOrigin(b);
							debug('same', a, b, res);
							return res;
						}, 
						isSchemeEqual : function (a, b) {
							return (a.split(':')[0] === b.split(':')[0]);
						}, 
						addPath : function (url, path) {
							var qs = url.split('?');
							return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
						}, 
						addQuery : function (url, q) {
							return url + (url.indexOf('?') === -1 ? ('?' + q) : ('&' + q));
						}
					};
				}).call(this, {
					env : {
					}
				});
			}, {
				"debug" : 54, 
				"url-parse" : 59
			}], 
			53 : [function (require, module, exports) {
				module.exports = '1.1.1';
			}, {
			}], 
			54 : [function (require, module, exports) {
				exports = module.exports = require('./debug');
				exports.log = log;
				exports.formatArgs = formatArgs;
				exports.save = save;
				exports.load = load;
				exports.useColors = useColors;
				exports.storage = 'undefined' != typeof chrome
					 && 'undefined' != typeof chrome.storage
					 ? chrome.storage.local
					 : localstorage();



				exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'
				];



				function useColors () {
					return ('WebkitAppearance' in document.documentElement.style) || (window.console && (console.firebug || (console.exception && console.table))) || (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
				}



				exports.formatters.j = function (v) {
					return JSON.stringify(v);
				};




				function formatArgs () {
					var args = arguments;
					var useColors = this.useColors;

					args[0] = (useColors ? '%c' : '')
						 + this.namespace
						 + (useColors ? ' %c' : ' ')
						 + args[0]
						 + (useColors ? '%c ' : ' ')
						 + '+' + exports.humanize(this.diff);

					if (!useColors) {
						return args;
					}

					var c = 'color: ' + this.color;
					args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

					var index = 0;
					var lastC = 0;
					args[0].replace(/%[a-z%]/g, function (match) {
						if ('%%' === match) {
							return;
						}
						index++;
						if ('%c' === match) {
							lastC = index;
						}
					});

					args.splice(lastC, 0, c);
					return args;
				}



				function log () {
					return 'object' === typeof console
						 && console.log
						 && Function.prototype.apply.call(console.log, console, arguments);
				}



				function save (namespaces) {
					try {
						if (null == namespaces) {
							exports.storage.removeItem('debug');
						}
						else {
							exports.storage.debug = namespaces;
						}
					}
					catch (e) {
					}
				}



				function load () {
					var r;
					try {
						r = exports.storage.debug;
					}
					catch (e) {
					}
					return r;
				}



				exports.enable(load());



				function localstorage () {
					try {
						return window.localStorage;
					}
					catch (e) {
					}
				}
			}, {
				"./debug" : 55
			}], 
			55 : [function (require, module, exports) {
				exports = module.exports = debug;
				exports.coerce = coerce;
				exports.disable = disable;
				exports.enable = enable;
				exports.enabled = enabled;
				exports.humanize = require('ms');



				exports.names = [];
				exports.skips = [];



				exports.formatters = {
				};



				var prevColor = 0;



				var prevTime;



				function selectColor () {
					return exports.colors[prevColor++ % exports.colors.length];
				}



				function debug (namespace) {
					function disabled () {
					}
					disabled.enabled = false;

					function enabled () {
						var self = enabled;

						var curr = +new Date();
						var ms = curr - (prevTime || curr);
						self.diff = ms;
						self.prev = prevTime;
						self.curr = curr;
						prevTime = curr;

						if (null == self.useColors) {
							self.useColors = exports.useColors();
						}
						if (null == self.color && self.useColors) {
							self.color = selectColor();
						}

						var args = Array.prototype.slice.call(arguments);

						args[0] = exports.coerce(args[0]);

						if ('string' !== typeof args[0]) {
							args = ['%o'].concat(args);
						}

						var index = 0;
						args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
							if (match === '%%') {
								return match;
							}
							index++;
							var formatter = exports.formatters[format];
							if ('function' === typeof formatter) {
								var val = args[index];
								match = formatter.call(self, val);

								args.splice(index, 1);
								index--;
							}
							return match;
						});

						if ('function' === typeof exports.formatArgs) {
							args = exports.formatArgs.apply(self, args);
						}
						var logFn = enabled.log || exports.log || console.log.bind(console);
						logFn.apply(self, args);
					}
					enabled.enabled = true;

					var fn = exports.enabled(namespace) ? enabled : disabled;

					fn.namespace = namespace;

					return fn;
				}



				function enable (namespaces) {
					exports.save(namespaces);

					var split = (namespaces || '').split(/[\s,]+/);
					var len = split.length;

					for (var i = 0; i < len; i++) {
						if (!split[i]) {
							continue;
						}
						namespaces = split[i].replace(/\*/g, '.*?');
						if (namespaces[0] === '-') {
							exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
						}
						else {
							exports.names.push(new RegExp('^' + namespaces + '$'));
						}
					}
				}



				function disable () {
					exports.enable('');
				}



				function enabled (name) {
					var i, len;
					for (i = 0, len = exports.skips.length; i < len; i++) {
						if (exports.skips[i].test(name)) {
							return false;
						}
					}
					for (i = 0, len = exports.names.length; i < len; i++) {
						if (exports.names[i].test(name)) {
							return true;
						}
					}
					return false;
				}



				function coerce (val) {
					if (val instanceof Error) {
						return val.stack || val.message;
					}
					return val;
				}
			}, {
				"ms" : 56
			}], 
			56 : [function (require, module, exports) {
				var s = 1000;
				var m = s * 60;
				var h = m * 60;
				var d = h * 24;
				var y = d * 365.25;



				module.exports = function (val, options) {
					options = options || {
					};
					if ('string' == typeof val) {
						return parse(val);
					}
					return options.long
						 ? long(val)
						 : short(val);
				};



				function parse (str) {
					str = '' + str;
					if (str.length > 10000) {
						return;
					}
					var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
					if (!match) {
						return;
					}
					var n = parseFloat(match[1]);
					var type = (match[2] || 'ms').toLowerCase();
					switch (type) {
						case 'years':
						case 'year':
						case 'yrs':
						case 'yr':
						case 'y':
							return n * y;
						case 'days':
						case 'day':
						case 'd':
							return n * d;
						case 'hours':
						case 'hour':
						case 'hrs':
						case 'hr':
						case 'h':
							return n * h;
						case 'minutes':
						case 'minute':
						case 'mins':
						case 'min':
						case 'm':
							return n * m;
						case 'seconds':
						case 'second':
						case 'secs':
						case 'sec':
						case 's':
							return n * s;
						case 'milliseconds':
						case 'millisecond':
						case 'msecs':
						case 'msec':
						case 'ms':
							return n;
					}
				}



				function short (ms) {
					if (ms >= d) {
						return Math.round(ms / d) + 'd';
					}
					if (ms >= h) {
						return Math.round(ms / h) + 'h';
					}
					if (ms >= m) {
						return Math.round(ms / m) + 'm';
					}
					if (ms >= s) {
						return Math.round(ms / s) + 's';
					}
					return ms + 'ms';
				}



				function long (ms) {
					return plural(ms, d, 'day')
						 || plural(ms, h, 'hour')
						 || plural(ms, m, 'minute')
						 || plural(ms, s, 'second')
						 || ms + ' ms';
				}



				function plural (ms, n, name) {
					if (ms < n) {
						return;
					}
					if (ms < n * 1.5) {
						return Math.floor(ms / n) + ' ' + name;
					}
					return Math.ceil(ms / n) + ' ' + name + 's';
				}
			}, {
			}], 
			57 : [function (require, module, exports) {
				if (typeof Object.create === 'function') {
					module.exports = function inherits (ctor, superCtor) {
						ctor.super_ = superCtor;
						ctor.prototype = Object.create(superCtor.prototype, {
							constructor : {
								value : ctor, 
								enumerable : false, 
								writable : true, 
								configurable : true
							}
						});
					}
;
				}
				else {
					module.exports = function inherits (ctor, superCtor) {
						ctor.super_ = superCtor;
						var TempCtor = function () {
						};
						TempCtor.prototype = superCtor.prototype;
						ctor.prototype = new TempCtor();
						ctor.prototype.constructor = ctor;
					}
;
				}
			}, {
			}], 
			58 : [function (require, module, exports) {
				(function (global) {
					;
					(function () {
						var isLoader = typeof define === "function" && define.amd;

						var objectTypes = {
							"function" : true, 
							"object" : true
						};

						var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

						var root = objectTypes[typeof window] && window || this, freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

						if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
							root = freeGlobal;
						}

						function runInContext (context, exports) {
							context || (context = root["Object"]());
							exports || (exports = root["Object"]());

							var Number = context["Number"] || root["Number"], String = context["String"] || root["String"], Object = context["Object"] || root["Object"], Date = context["Date"] || root["Date"], SyntaxError = context["SyntaxError"] || root["SyntaxError"], TypeError = context["TypeError"] || root["TypeError"], Math = context["Math"] || root["Math"], nativeJSON = context["JSON"] || root["JSON"];

							if (typeof nativeJSON == "object" && nativeJSON) {
								exports.stringify = nativeJSON.stringify;
								exports.parse = nativeJSON.parse;
							}

							var objectProto = Object.prototype, getClass = objectProto.toString, isProperty, forEach, undef;

							var isExtended = new Date(-3509827334573292);
							try {
								isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 && 
									isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
							}
							catch (exception) {
							}

							function has (name) {
								if (has[name] !== undef) {
									return has[name];
								}
								var isSupported;
								if (name == "bug-string-char-index") {
									isSupported = "a"[0] != "a";
								}
								else if (name == "json") {
									isSupported = has("json-stringify") && has("json-parse");
								}
								else {
									var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
									if (name == "json-stringify") {
										var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
										if (stringifySupported) {
											(value = function () {
												return 1;
											}).toJSON = value;
											try {
												stringifySupported = 
													stringify(0) === "0" && 
													stringify(new Number()) === "0" && 
													stringify(new String()) == '""' && 
													stringify(getClass) === undef && 
													stringify(undef) === undef && 
													stringify() === undef && 
													stringify(value) === "1" && 
													stringify([value]) == "[1]" && 
													stringify([undef]) == "[null]" && 
													stringify(null) == "null" && 
													stringify([undef, getClass, null]) == "[null,null,null]" && 
													stringify({
													"a" : [value, true, false, null, "\x00\b\n\f\r\t"]
												}) == serialized && 
													stringify(null, value) === "1" && 
													stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && 
													stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' && 
													stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' && 
													stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && 
													stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
											}
											catch (exception) {
												stringifySupported = false;
											}
										}
										isSupported = stringifySupported;
									}
									if (name == "json-parse") {
										var parse = exports.parse;
										if (typeof parse == "function") {
											try {
												if (parse("0") === 0 && !parse(false)) {
													value = parse(serialized);
													var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
													if (parseSupported) {
														try {
															parseSupported = !parse('"\t"');
														}
														catch (exception) {
														}
														if (parseSupported) {
															try {
																parseSupported = parse("01") !== 1;
															}
															catch (exception) {
															}
														}
														if (parseSupported) {
															try {
																parseSupported = parse("1.") !== 1;
															}
															catch (exception) {
															}
														}
													}
												}
											}
											catch (exception) {
												parseSupported = false;
											}
										}
										isSupported = parseSupported;
									}
								}
								return has[name] = !!isSupported;
							}

							if (!has("json")) {
								var functionClass = "[object Function]", dateClass = "[object Date]", numberClass = "[object Number]", stringClass = "[object String]", arrayClass = "[object Array]", booleanClass = "[object Boolean]";

								var charIndexBuggy = has("bug-string-char-index");

								if (!isExtended) {
									var floor = Math.floor;
									var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
									var getDay = function (year, month) {
										return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
									};
								}

								if (!(isProperty = objectProto.hasOwnProperty)) {
									isProperty = function (property) {
										var members = {
										}, constructor;
										if ((members.__proto__ = null, members.__proto__ = {
											"toString" : 1
										}, members).toString != getClass) {
											isProperty = function (property) {
												var original = this.__proto__, result = property in (this.__proto__ = null, this);
												this.__proto__ = original;
												return result;
											};
										}
										else {
											constructor = members.constructor;
											isProperty = function (property) {
												var parent = (this.constructor || constructor).prototype;
												return property in this && !(property in parent && this[property] === parent[property]);
											};
										}
										members = null;
										return isProperty.call(this, property);
									};
								}

								forEach = function (object, callback) {
									var size = 0, Properties, members, property;
									(Properties = function () {
										this.valueOf = 0;
									}).prototype.valueOf = 0;

									members = new Properties();
									for (property in members) {
										if (isProperty.call(members, property)) {
											size++;
										}
									}
									Properties = members = null;

									if (!size) {
										members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
										forEach = function (object, callback) {
											var isFunction = getClass.call(object) == functionClass, property, length;
											var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
											for (property in object) {
												if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
													callback(property);
												}
											}
											for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property)) {
											}
										};
									}
									else if (size == 2) {
										forEach = function (object, callback) {
											var members = {
											}, isFunction = getClass.call(object) == functionClass, property;
											for (property in object) {
												if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
													callback(property);
												}
											}
										};
									}
									else {
										forEach = function (object, callback) {
											var isFunction = getClass.call(object) == functionClass, property, isConstructor;
											for (property in object) {
												if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
													callback(property);
												}
											}
											if (isConstructor || isProperty.call(object, (property = "constructor"))) {
												callback(property);
											}
										};
									}
									return forEach(object, callback);
								};

								if (!has("json-stringify")) {
									var Escapes = {
										92 : "\\\\", 
										34 : '\\"', 
										8 : "\\b", 
										12 : "\\f", 
										10 : "\\n", 
										13 : "\\r", 
										9 : "\\t"
									};

									var leadingZeroes = "000000";
									var toPaddedString = function (width, value) {
										return (leadingZeroes + (value || 0)).slice(-width);
									};

									var unicodePrefix = "\\u00";
									var quote = function (value) {
										var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
										var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
										for (; index < length; index++) {
											var charCode = value.charCodeAt(index);
											switch (charCode) {
												case 8:
												case 9:
												case 10:
												case 12:
												case 13:
												case 34:
												case 92:
													result += Escapes[charCode];
													break;
												default:
													if (charCode < 32) {
														result += unicodePrefix + toPaddedString(2, charCode.toString(16));
														break;
													}
													result += useCharIndex ? symbols[index] : value.charAt(index);
											}
										}
										return result + '"';
									};

									var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
										var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
										try {
											value = object[property];
										}
										catch (exception) {
										}
										if (typeof value == "object" && value) {
											className = getClass.call(value);
											if (className == dateClass && !isProperty.call(value, "toJSON")) {
												if (value > -1 / 0 && value < 1 / 0) {
													if (getDay) {
														date = floor(value / 864e5);
														for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++) {
														}
														for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++) {
														}
														date = 1 + date - getDay(year, month);
														time = (value % 864e5 + 864e5) % 864e5;
														hours = floor(time / 36e5) % 24;
														minutes = floor(time / 6e4) % 60;
														seconds = floor(time / 1e3) % 60;
														milliseconds = time % 1e3;
													}
													else {
														year = value.getUTCFullYear();
														month = value.getUTCMonth();
														date = value.getUTCDate();
														hours = value.getUTCHours();
														minutes = value.getUTCMinutes();
														seconds = value.getUTCSeconds();
														milliseconds = value.getUTCMilliseconds();
													}
													value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + 
														"-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + 
														"T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + 
														"." + toPaddedString(3, milliseconds) + "Z";
												}
												else {
													value = null;
												}
											}
											else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
												value = value.toJSON(property);
											}
										}
										if (callback) {
											value = callback.call(object, property, value);
										}
										if (value === null) {
											return "null";
										}
										className = getClass.call(value);
										if (className == booleanClass) {
											return "" + value;
										}
										else if (className == numberClass) {
											return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
										}
										else if (className == stringClass) {
											return quote("" + value);
										}
										if (typeof value == "object") {
											for (length = stack.length; length--; ) {
												if (stack[length] === value) {
													throw TypeError();
												}
											}
											stack.push(value);
											results = [];
											prefix = indentation;
											indentation += whitespace;
											if (className == arrayClass) {
												for (index = 0, length = value.length; index < length; index++) {
													element = serialize(index, value, callback, properties, whitespace, indentation, stack);
													results.push(element === undef ? "null" : element);
												}
												result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
											}
											else {
												forEach(properties || value, function (property) {
													var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
													if (element !== undef) {
														results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
													}
												});
												result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
											}
											stack.pop();
											return result;
										}
									};

									exports.stringify = function (source, filter, width) {
										var whitespace, callback, properties, className;
										if (objectTypes[typeof filter] && filter) {
											if ((className = getClass.call(filter)) == functionClass) {
												callback = filter;
											}
											else if (className == arrayClass) {
												properties = {
												};
												for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1)) {
												}
											}
										}
										if (width) {
											if ((className = getClass.call(width)) == numberClass) {
												if ((width -= width % 1) > 0) {
													for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ") {
													}
												}
											}
											else if (className == stringClass) {
												whitespace = width.length <= 10 ? width : width.slice(0, 10);
											}
										}
										return serialize("", (value = {
										}, value[""] = source, value), callback, properties, whitespace, "", []);
									};
								}

								if (!has("json-parse")) {
									var fromCharCode = String.fromCharCode;

									var Unescapes = {
										92 : "\\", 
										34 : '"', 
										47 : "/", 
										98 : "\b", 
										116 : "\t", 
										110 : "\n", 
										102 : "\f", 
										114 : "\r"
									};

									var Index, Source;

									var abort = function () {
										Index = Source = null;
										throw SyntaxError();
									};

									var lex = function () {
										var source = Source, length = source.length, value, begin, position, isSigned, charCode;
										while (Index < length) {
											charCode = source.charCodeAt(Index);
											switch (charCode) {
												case 9:
												case 10:
												case 13:
												case 32:
													Index++;
													break;
												case 123:
												case 125:
												case 91:
												case 93:
												case 58:
												case 44:
													value = charIndexBuggy ? source.charAt(Index) : source[Index];
													Index++;
													return value;
												case 34:
													for (value = "@", Index++; Index < length; ) {
														charCode = source.charCodeAt(Index);
														if (charCode < 32) {
															abort();
														}
														else if (charCode == 92) {
															charCode = source.charCodeAt(++Index);
															switch (charCode) {
																case 92:
																case 34:
																case 47:
																case 98:
																case 116:
																case 110:
																case 102:
																case 114:
																	value += Unescapes[charCode];
																	Index++;
																	break;
																case 117:
																	begin = ++Index;
																	for (position = Index + 4; Index < position; Index++) {
																		charCode = source.charCodeAt(Index);
																		if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
																			abort();
																		}
																	}
																	value += fromCharCode("0x" + source.slice(begin, Index));
																	break;
																default:
																	abort();
															}
														}
														else {
															if (charCode == 34) {
																break;
															}
															charCode = source.charCodeAt(Index);
															begin = Index;
															while (charCode >= 32 && charCode != 92 && charCode != 34) {
																charCode = source.charCodeAt(++Index);
															}
															value += source.slice(begin, Index);
														}
													}
													if (source.charCodeAt(Index) == 34) {
														Index++;
														return value;
													}
													abort();
												default:
													begin = Index;
													if (charCode == 45) {
														isSigned = true;
														charCode = source.charCodeAt(++Index);
													}
													if (charCode >= 48 && charCode <= 57) {
														if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
															abort();
														}
														isSigned = false;
														for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++) {
														}
														if (source.charCodeAt(Index) == 46) {
															position = ++Index;
															for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++) {
															}
															if (position == Index) {
																abort();
															}
															Index = position;
														}
														charCode = source.charCodeAt(Index);
														if (charCode == 101 || charCode == 69) {
															charCode = source.charCodeAt(++Index);
															if (charCode == 43 || charCode == 45) {
																Index++;
															}
															for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++) {
															}
															if (position == Index) {
																abort();
															}
															Index = position;
														}
														return +source.slice(begin, Index);
													}
													if (isSigned) {
														abort();
													}
													if (source.slice(Index, Index + 4) == "true") {
														Index += 4;
														return true;
													}
													else if (source.slice(Index, Index + 5) == "false") {
														Index += 5;
														return false;
													}
													else if (source.slice(Index, Index + 4) == "null") {
														Index += 4;
														return null;
													}
													abort();
											}
										}
										return "$";
									};

									var get = function (value) {
										var results, hasMembers;
										if (value == "$") {
											abort();
										}
										if (typeof value == "string") {
											if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
												return value.slice(1);
											}
											if (value == "[") {
												results = [];
												for (; ; hasMembers || (hasMembers = true)) {
													value = lex();
													if (value == "]") {
														break;
													}
													if (hasMembers) {
														if (value == ",") {
															value = lex();
															if (value == "]") {
																abort();
															}
														}
														else {
															abort();
														}
													}
													if (value == ",") {
														abort();
													}
													results.push(get(value));
												}
												return results;
											}
											else if (value == "{") {
												results = {
												};
												for (; ; hasMembers || (hasMembers = true)) {
													value = lex();
													if (value == "}") {
														break;
													}
													if (hasMembers) {
														if (value == ",") {
															value = lex();
															if (value == "}") {
																abort();
															}
														}
														else {
															abort();
														}
													}
													if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
														abort();
													}
													results[value.slice(1)] = get(lex());
												}
												return results;
											}
											abort();
										}
										return value;
									};

									var update = function (source, property, callback) {
										var element = walk(source, property, callback);
										if (element === undef) {
											delete source[property];
										}
										else {
											source[property] = element;
										}
									};

									var walk = function (source, property, callback) {
										var value = source[property], length;
										if (typeof value == "object" && value) {
											if (getClass.call(value) == arrayClass) {
												for (length = value.length; length--; ) {
													update(value, length, callback);
												}
											}
											else {
												forEach(value, function (property) {
													update(value, property, callback);
												});
											}
										}
										return callback.call(source, property, value);
									};

									exports.parse = function (source, callback) {
										var result, value;
										Index = 0;
										Source = "" + source;
										result = get(lex());
										if (lex() != "$") {
											abort();
										}
										Index = Source = null;
										return callback && getClass.call(callback) == functionClass ? walk((value = {
										}, value[""] = result, value), "", callback) : result;
									};
								}
							}

							exports["runInContext"] = runInContext;
							return exports;
						}

						if (freeExports && !isLoader) {
							runInContext(root, freeExports);
						}
						else {
							var nativeJSON = root.JSON, previousJSON = root["JSON3"], isRestored = false;

							var JSON3 = runInContext(root, (root["JSON3"] = {
								"noConflict" : function () {
									if (!isRestored) {
										isRestored = true;
										root.JSON = nativeJSON;
										root["JSON3"] = previousJSON;
										nativeJSON = previousJSON = null;
									}
									return JSON3;
								}
							}));

							root.JSON = {
								"parse" : JSON3.parse, 
								"stringify" : JSON3.stringify
							};
						}

						if (isLoader) {
							define(function () {
								return JSON3;
							});
						}
					}).call(this);
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
			}], 
			59 : [function (require, module, exports) {
				'use strict';

				var required = require('requires-port'), lolcation = require('./lolcation'), qs = require('querystringify'), relativere = /^\/(?!\/)/, protocolre = /^([a-z0-9.+-]+:)?(\/\/)?(.*)$/i;


				var instructions = [['#', 'hash'], ['?', 'query'], ['/', 'pathname'], ['@', 'auth', 1], [NaN, 'host', undefined, 1, 1], [/\:(\d+)$/, 'port'], [NaN, 'hostname', undefined, 1, 1]
				];




				function extractProtocol (address) {
					var match = protocolre.exec(address);
					return {
						protocol : match[1] ? match[1].toLowerCase() : '', 
						slashes : !!match[2], 
						rest : match[3] ? match[3] : ''
					};
				}


				function URL (address, location, parser) {
					if (!(this instanceof URL)) {
						return new URL(address, location, parser);
					}

					var relative = relativere.test(address), parse, instruction, index, key, type = typeof location, url = this, i = 0;

					if ('object' !== type && 'string' !== type) {
						parser = location;
						location = null;
					}

					if (parser && 'function' !== typeof parser) {
						parser = qs.parse;
					}

					location = lolcation(location);

					var extracted = extractProtocol(address);
					url.protocol = extracted.protocol || location.protocol || '';
					url.slashes = extracted.slashes || location.slashes;
					address = extracted.rest;

					for (; i < instructions.length; i++) {
						instruction = instructions[i];
						parse = instruction[0];
						key = instruction[1];

						if (parse !== parse) {
							url[key] = address;
						}
						else if ('string' === typeof parse) {
							if (~(index = address.indexOf(parse))) {
								if ('number' === typeof instruction[2]) {
									url[key] = address.slice(0, index);
									address = address.slice(index + instruction[2]);
								}
								else {
									url[key] = address.slice(index);
									address = address.slice(0, index);
								}
							}
						}
						else if (index = parse.exec(address)) {
							url[key] = index[1];
							address = address.slice(0, address.length - index[0].length);
						}

						url[key] = url[key] || (instruction[3] || ('port' === key && relative) ? location[key] || '' : '');

						if (instruction[4]) {
							url[key] = url[key].toLowerCase();
						}
					}

					if (parser) {
						url.query = parser(url.query);
					}

					if (!required(url.port, url.protocol)) {
						url.host = url.hostname;
						url.port = '';
					}

					url.username = url.password = '';
					if (url.auth) {
						instruction = url.auth.split(':');
						url.username = instruction[0] || '';
						url.password = instruction[1] || '';
					}

					url.href = url.toString();
				}


				URL.prototype.set = function set (part, value, fn) {
					var url = this;

					if ('query' === part) {
						if ('string' === typeof value && value.length) {
							value = (fn || qs.parse)(value);
						}

						url[part] = value;
					}
					else if ('port' === part) {
						url[part] = value;

						if (!required(value, url.protocol)) {
							url.host = url.hostname;
							url[part] = '';
						}
						else if (value) {
							url.host = url.hostname + ':' + value;
						}
					}
					else if ('hostname' === part) {
						url[part] = value;

						if (url.port) {
							value += ':' + url.port;
						}
						url.host = value;
					}
					else if ('host' === part) {
						url[part] = value;

						if (/\:\d+/.test(value)) {
							value = value.split(':');
							url.hostname = value[0];
							url.port = value[1];
						}
					}
					else if ('protocol' === part) {
						url.protocol = value;
						url.slashes = !fn;
					}
					else {
						url[part] = value;
					}

					url.href = url.toString();
					return url;
				}
;


				URL.prototype.toString = function toString (stringify) {
					if (!stringify || 'function' !== typeof stringify) {
						stringify = qs.stringify;
					}

					var query, url = this, protocol = url.protocol;

					if (protocol && protocol.charAt(protocol.length - 1) !== ':') {
						protocol += ':';
					}

					var result = protocol + (url.slashes ? '//' : '');

					if (url.username) {
						result += url.username;
						if (url.password) {
							result += ':' + url.password;
						}
						result += '@';
					}

					result += url.hostname;
					if (url.port) {
						result += ':' + url.port;
					}

					result += url.pathname;

					query = 'object' === typeof url.query ? stringify(url.query) : url.query;
					if (query) {
						result += '?' !== query.charAt(0) ? '?' + query : query;
					}

					if (url.hash) {
						result += url.hash;
					}

					return result;
				}
;

				URL.qs = qs;
				URL.location = lolcation;
				module.exports = URL;
			}, {
				"./lolcation" : 60, 
				"querystringify" : 61, 
				"requires-port" : 62
			}], 
			60 : [function (require, module, exports) {
				(function (global) {
					'use strict';

					var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;


					var ignore = {
						hash : 1, 
						query : 1
					}, URL;


					module.exports = function lolcation (loc) {
						loc = loc || global.location || {
						};
						URL = URL || require('./');

						var finaldestination = {
						}, type = typeof loc, key;

						if ('blob:' === loc.protocol) {
							finaldestination = new URL(unescape(loc.pathname), {
							});
						}
						else if ('string' === type) {
							finaldestination = new URL(loc, {
							});
							for (key in ignore) {
								delete finaldestination[key];
							}
						}
						else if ('object' === type) {
							for (key in loc) {
								if (key in ignore) {
									continue;
								}
								finaldestination[key] = loc[key];
							}

							if (finaldestination.slashes === undefined) {
								finaldestination.slashes = slashes.test(loc.href);
							}
						}

						return finaldestination;
					}
;
				}).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
				});
			}, {
				"./" : 59
			}], 
			61 : [function (require, module, exports) {
				'use strict';

				var has = Object.prototype.hasOwnProperty;


				function querystring (query) {
					var parser = /([^=?&]+)=([^&]*)/g, result = {
					}, part;

					for (; part = parser.exec(query); result[decodeURIComponent(part[1])] = decodeURIComponent(part[2])) {
					}

					return result;
				}


				function querystringify (obj, prefix) {
					prefix = prefix || '';

					var pairs = [];

					if ('string' !== typeof prefix) {
						prefix = '?';
					}

					for (var key in obj) {
						if (has.call(obj, key)) {
							pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
						}
					}

					return pairs.length ? prefix + pairs.join('&') : '';
				}

				exports.stringify = querystringify;
				exports.parse = querystring;
			}, {
			}], 
			62 : [function (require, module, exports) {
				'use strict';


				module.exports = function required (port, protocol) {
					protocol = protocol.split(':')[0];
					port = +port;

					if (!port) {
						return false;
					}

					switch (protocol) {
						case 'http':
						case 'ws':
							return port !== 80;
						case 'https':
						case 'wss':
							return port !== 443;
						case 'ftp':
							return port !== 21;
						case 'gopher':
							return port !== 70;
						case 'file':
							return false;
					}

					return port !== 0;
				}
;
			}, {
			}]
		}, {
		}, [1])(1);
	});
}
;

if ((!nexacro.Device || nexacro.OS == "Android") && !nexacro.Event.XPushEventInfo) {
	nexacro.Event.XPushEventInfo = function (eventid, reason, action, serverip, serverport, command, pushmessageobject) {
		this.eventid = eventid;
		this.reason = reason;
		this.action = action;
		this.serverip = serverip;
		this.serverport = serverport;
		this.command = command;
		this.message = pushmessageobject;
		this.statuscode = "";
		this.errormsg = "";
		if (pushmessageobject.returnvalue != undefined && pushmessageobject.returnvalue[0] != undefined) {
			this.returnvalue = pushmessageobject.returnvalue[0].count;
		}
		if (this.command == undefined) {
			this.command = null;
		}
	};

	var _pXPushEventInfo = nexacro.Event.XPushEventInfo.prototype = nexacro._createPrototype(nexacro.Event);
	_pXPushEventInfo._type = "nexacroXPushEventInfo";
	_pXPushEventInfo._type_name = "XPushEventInfo";

	delete _pXPushEventInfo;
}

if ((!nexacro.Device || nexacro.OS == "Android") && !nexacro.Event.XPushErrorEventInfo) {
	nexacro.Event.XPushErrorEventInfo = function (strEventId, action, intErrorCode, strErrorMsg, strServerip, strServerport, strCommand) {
		this.errortype = "ObjectError";
		this.action = action;
		this.eventid = strEventId;
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
		this.serverip = strServerip;
		this.serverport = strServerport;
		this.command = strCommand;
		if (this.command == undefined) {
			this.command = null;
		}
		this.reply = null;
	};
	var _pXPushErrorEventInfo = nexacro.Event.XPushErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event);
	_pXPushErrorEventInfo._type = "nexacroXPushErrorEventInfo";
	_pXPushErrorEventInfo._type_name = "XPushErrorEventInfo";

	delete _pXPushErrorEventInfo;
}

if ((!nexacro.Device || nexacro.OS == "Android") && !nexacro.Event.XPushKeepAliveEventInfo) {
	nexacro.Event.XPushKeepAliveEventInfo = function (eventid, type) {
		this.eventid = eventid;
		this.type = type;
	};

	var _pXPushKeepAliveEventInfo = nexacro.Event.XPushKeepAliveEventInfo.prototype = nexacro._createPrototype(nexacro.Event);
	_pXPushKeepAliveEventInfo._type = "nexacroXPushKeepAliveEventInfo";
	_pXPushKeepAliveEventInfo._type_name = "XPushKeepAliveEventInfo";

	delete _pXPushErrorEventInfo;
}

if ((!nexacro.Device || nexacro.OS == "Android") && !nexacro.Event.XPushRequestMessageCountEventInfo) {
	nexacro.Event.XPushRequestMessageCountEventInfo = function (eventid, userid, sendtype, sendid, receivetype, receiveid) {
		this.eventid = eventid;
		this.userid = userid;
		this.sendtype = sendtype;
		this.sendid = sendid;
		this.receivetype = receivetype;
		this.receiveid = receiveid;
	};

	var _pXPushRequestMessageCountEventInfo = nexacro.Event.XPushRequestMessageCountEventInfo.prototype = nexacro._createPrototype(nexacro.Event);
	_pXPushRequestMessageCountEventInfo._type = "nexacroXPushRequestMessageCountEventInfo";
	_pXPushRequestMessageCountEventInfo._type_name = "XPushRequestMessageCountEventInfo";

	delete _pXPushErrorEventInfo;
}

if ((!nexacro.Device || nexacro.OS == "Android") && !nexacro.CommandControl) {
	nexacro.CommandControl = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.actiontype;
		this.callback;
		this.check = "0";
		this.messagekey;
		this.messagetype;
		this.objdataset;
		this.objform;
		this.row = -1;
		this.type = "update";
		this.useactiveformcallback = false;
	};

	var _pCommandControl = nexacro.CommandControl.prototype = nexacro._createPrototype(nexacro.EventSinkObject);
	_pCommandControl._type = "nexacroCommandControl";
	_pCommandControl._type_name = "CommandControl";

	_pCommandControl.destroy = function () {
		var params = '""';
		var jsonstr;
		return true;
	};

	_pCommandControl.on_created = function () {
	};

	_pCommandControl.equal = function (other) {
		if (this.callback != other.callback) {
			return false;
		}
		if (this.check != other.check) {
			return false;
		}
		if (this.messagekey != other.messagekey) {
			return false;
		}
		if (this.messagetype != other.messagetype) {
			return false;
		}

		if (this.objdataset !== other.objdataset) {
			return false;
		}
		if (this.objform !== other.objform) {
			return false;
		}

		if (this.row != other.row) {
			return false;
		}
		if (this.type != other.type) {
			return false;
		}
		if (this.useactiveformcallback != other.useactiveformcallback) {
			return false;
		}

		return true;
	};

	_pCommandControl.remove = function (idx) {
		return (idx < 0 || idx > this.length) ? this : this.slice(0, idx).concat(this.slice(idx + 1, this.length));
	};

	delete _pCommandControl;
}

if ((!nexacro.Device || nexacro.OS == "Android") && !nexacro.XPush) {
	if (nexacro.Browser != "Runtime" && !nexacro._isHybrid()) {
		nexacro.Field = function () {
			this.id = null;
			this.type = null;
			this.size = 0;
			this.key = false;
			this.check = false;
		};

		var _pField = nexacro.Field.prototype;
		_pField._type_name = "Field";



		nexacro.PushLayout = function () {
			this.id = null;
			this.nokey = false;
			this.repeat = false;
			this.noreg = false;
			this.checkfieldidx = -1;

			this.listfield = [];
		};

		var _pPushLayout = nexacro.PushLayout.prototype;
		_pPushLayout._type_name = "PushLayout";


		var g_sockjs = null;

		nexacro.SockJSWrapper = function (url, protocols, options) {
			SockJS.call(this, url, protocols, options);

			this.userid = "";
			this.sessionid = "";
			this.projectid = "";

			this.webpush = null;

			this.interval_id = -1;
		};

		var _pSockJSWrapper = nexacro._createPrototype(SockJS, nexacro.SockJSWrapper);
		nexacro.SockJSWrapper.prototype = _pSockJSWrapper;

		_pSockJSWrapper._nexacro_destroy = function () {
			clearInterval(this.interval_id);
			g_sockjs = null;
			this.webpush = null;
		};


		_pSockJSWrapper.onopen = function () {
			var AUTH = {
				'Action' : 'AUTH', 
				'ID' : this.userid, 
				'PW' : this.sessionid
			};
			if (this.webpush.xpush.protocolversion == 3) {
				AUTH["ProjectID"] = this.projectid;
			}

			this.send(JSON.stringify(AUTH));

			g_sockjs = this;
			if (g_sockjs) {
				g_sockjs._nexacro_keepalive();
			}

			this.interval_id = setInterval(function () {
				if (g_sockjs) {
					g_sockjs._nexacro_keepalive();
				}
			}, (this.webpush.keepalivetime * 1000));
		};

		_pSockJSWrapper._nexacro_disconnect = function () {
			clearInterval(this.interval_id);

			var BYEC = {
				Action : 'BYEC'
			};
			this.send(JSON.stringify(BYEC));
		};

		_pSockJSWrapper._nexacro_keepalive = function () {
			var KEEP = {
				Action : 'KEEP'
			};
			this.send(JSON.stringify(KEEP));
		};

		_pSockJSWrapper._nexacro_ackn = function (messagetype) {
			var ACKN = {
				Action : 'ACKN', 
				'USERID' : this.userid, 
				'MessageID' : messagetype
			};

			if (this.webpush.xpush.protocolversion == 3) {
				ACKN["ProjectID"] = this.projectid;
			}

			this.send(JSON.stringify(ACKN));
		};
		_pSockJSWrapper._nexacro_command = function (strCommand, strMessageType, strMessageKey, strType, userid, strProjectID) {
			var cmd;
			if (strCommand == "ADDF" || strCommand == "DELF") {
				cmd = {
					'Action' : strCommand, 
					'TopicType' : strMessageType, 
					'TopicId' : strMessageKey
				};
			}
			else if (strCommand == "MSGC" || strCommand == "ADUI" || strCommand == "UNUI") {
				cmd = {
					'Action' : strCommand, 
					'UserID' : userid ? userid : this.userid, 
					'TopicType' : strMessageType, 
					'TopicId' : strMessageKey
				};

				if (this.webpush.xpush.protocolversion == 3) {
					cmd["ProjectID"] = strProjectID ? strProjectID : this.projectid;
				}
			}
			else if (strCommand == "RECT") {
				cmd = {
					'Action' : strCommand, 
					'UserID' : userid ? userid : this.userid, 
					'MessageID' : strMessageType
				};

				if (this.webpush.xpush.protocolversion == 3) {
					cmd["ProjectID"] = this.projectid;
				}
			}
			else if (strCommand == "RGST" || strCommand == "UNRG") {
				return;
			}
			else if (strCommand == "REQD") {
				cmd = {
					'Action' : strCommand, 
					'UserID' : userid ? userid : this.userid, 
					'TopicType' : strMessageType, 
					'TopicId' : strMessageKey
				};

				if (this.webpush.xpush.protocolversion == 3) {
					cmd["ProjectID"] = this.projectid;
				}
			}
			else {
				cmd = {
					'Action' : strCommand, 
					'UserID' : userid ? userid : this.userid, 
					'TopicType' : strMessageType, 
					'TopicId' : strMessageKey
				};
			}

			this.send(JSON.stringify(cmd));
		};

		_pSockJSWrapper.onmessage = function (e) {
			var obj = JSON.parse(e.data);

			if (this.webpush) {
				this.webpush._message(obj);
			}
		};

		_pSockJSWrapper.onerror = function () {
		};

		_pSockJSWrapper.onclose = function (e) {
			if (this.webpush) {
				this.webpush._is_connected = false;
			}

			if (e.code == 1002) {
				if (this.webpush) {
					this.webpush._message(e.code);
				}
				return;
			}
		};


		nexacro.WebPush = function () {
			this.sockjs = null;
			this.xpush = null;

			this._ajax = null;
			this.layoutlist = [];

			this.userid = "";
			this.sessionid = "";
			this.ip_idx = 0;
			this.keepalivetime = 30;

			this.retry_cnt = 1;
			this.control_retry_cnt = 1;
			this._is_connected = false;
			this._do_disconnect = false;

			this.action = null;
			this.msg_type = null;
			this.msg_key = null;
			this.type = null;
		};

		var _pWebPush = nexacro._createPrototype(nexacro.Object, nexacro.WebPush);
		nexacro.WebPush.prototype = _pWebPush;

		_pWebPush.destroy = function () {
			this.layoutlist = [];

			if (this.sockjs) {
				this.sockjs._nexacro_destroy();
				delete this.sockjs;
				this.sockjs = null;
			}

			this.userid = "";
			this.sessionid = "";
			this.ip_idx = 0;
			this.retry_cnt = 1;

			this.action = null;
			this.msg_type = null;
			this.msg_key = null;
			this.type = null;
			this.control_retry_cnt = 1;
			this._is_connected = false;
			this._do_disconnect = false;

			this.xpush = null;

			if (this._ajax) {
				if (this._ajax._destroy) {
					this._ajax._destroy();
				}
				this._ajax = null;
			}
		};

		_pWebPush.connect = function (userid, sessionid, projectid) {
			if (this._is_connected) {
				this.xpush._onerror(-302, 0);
				return;
			}

			if (this.sockjs) {
				this.sockjs.webpush = null;
				delete this.sockjs;
				this.sockjs = null;
			}

			var iplist = this.xpush.iplist;
			var iplist_len = iplist ? iplist.length : 0;
			if (iplist && this.ip_idx >= iplist_len) {
				this.retry_cnt++;
				this.ip_idx = 0;

				if ((parseInt(this.xpush.retry) + 1) < this.retry_cnt) {
					this.retry_cnt = 1;
					this.xpush._onerror(-201, 0);
					return;
				}
			}

			var skip = true;
			for (var i = this.ip_idx; i < iplist_len; i++) {
				if (iplist[i].type == "http" || iplist[i].type == "https") {
					skip = false;
					break;
				}
			}

			this.ip_idx = i;

			if (skip) {
				this.xpush._onerror(-201);
				return;
			}

			this.xpush._currentipinfo = iplist[this.ip_idx];

			var browser_jsessionid = false;
			if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 8) {
				browser_jsessionid = true;
			}

			var push_debug = this.xpush.debug;
			var ip = this.xpush.iplist[this.ip_idx].ip;
			if (ip == "localhost") {
				ip = "127.0.0.1";
			}
			var sockjs_url = iplist[this.ip_idx].type + "://" + ip + ":" + iplist[this.ip_idx].port + "/XPUSH";
			var sock_type = "websocket";
			if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 9) {
				sock_type = "xdr-streaming", "iframe-htmlfile";
			}
			var options = {
				transports : [sock_type], 
				debug : push_debug, 
				jsessionid : browser_jsessionid
			};



			if (userid) {
				this.userid = userid;
			}
			if (sessionid) {
				this.sessionid = sessionid;
			}


			var sockjs = new nexacro.SockJSWrapper(sockjs_url, [], options);
			sockjs.userid = this.userid;
			sockjs.sessionid = this.sessionid;

			if (projectid) {
				sockjs.projectid = projectid;
			}

			sockjs.webpush = this;

			this.sockjs = sockjs;

			this._do_disconnect = false;
		};

		_pWebPush.disconnect = function () {
			this._do_disconnect = true;

			if (this.sockjs) {
				this.sockjs._nexacro_disconnect();
			}
			else {
				this.xpush._onerror(-401, 1);
			}

			this._is_connected = false;
		};

		_pWebPush.command = function (strCommand, strMessageType, strMessageKey, strType, msg_data, userid, strProjectID) {
			if (!this._is_connected || !this.sockjs || parseInt(this.xpush.controlretry) < this.control_retry_cnt) {
				this.control_retry_cnt = 1;

				var reply = "";
				var conv_action = 0;
				var status_code = -701;
				if (strCommand == "ADDF") {
					conv_action = 2;
				}
				else if (strCommand == "DELF") {
					conv_action = 3;
				}
				else if (strCommand == "REQD") {
					status_code = -902;
					conv_action = 4;
				}
				else if (strCommand == "RECT") {
					status_code = -901;
					conv_action = 5;
				}
				else if (strCommand == "ADUI") {
					status_code = -1002;
					conv_action = 8;
					if (msg_data.Result) {
						if (msg_data.Result[1] == "1") {
							status_code = -1092;
						}
						reply = "'{\"status\":" + msg_data.Result + ",\"reason\":" + msg_data.ErrorMessage + "\"}'";
					}
				}
				else if (strCommand == "UNUI") {
					status_code = -1003;
					conv_action = 9;
				}
				else if (strCommand == "MSGC") {
					status_code = -1004;
					conv_action = 10;
				}

				this.xpush._onerror(status_code, conv_action, strCommand, strMessageType, strMessageKey, reply);
				return;
			}

			if (strCommand == "keepalive") {
				this.sockjs._nexacro_keepalive();
			}
			else {
				if (strCommand == "ADDF") {
					if (strType == "append" || strType == "update" || strType == "allupdate") {
						if (!this._hasKey(strMessageType)) {
							this.xpush._onerror(-701, 2, strCommand, strMessageType, strMessageKey);
							return false;
						}
					}
				}
				else if (strCommand == "DELF") {
					var idx = this._find_layout(strMessageType);
					if (idx < 0) {
						this.xpush._onerror(-703);
						return false;
					}
					else {
						if (this.layoutlist[idx].noreg) {
							return true;
						}
					}
				}

				this.action = strCommand;
				this.msg_type = strMessageType;
				this.msg_key = strMessageKey;
				this.type = strType;

				this.sockjs._nexacro_command(strCommand, strMessageType, strMessageKey, strType, userid, strProjectID);
			}
		};

		_pWebPush._message = function (msg_data) {
			if (msg_data == 1002) {
				this.ip_idx++;
				this.xpush._onerror(-300, 0);

				this.connect();

				return;
			}
			else if (msg_data.Result == "NG" && msg_data.Action == "AUTH") {
				this.xpush._onerror(-202, 0);
				return;
			}

			var conv_action = 0;
			if (msg_data.Action == "AUTH") {
				conv_action = 0;
			}
			else if (msg_data.Action == "BYEC") {
				conv_action = 1;
			}
			else if (msg_data.Action == "ADDF") {
				conv_action = 2;
			}
			else if (msg_data.Action == "DELF") {
				conv_action = 3;
			}
			else if (msg_data.Action == "REQD") {
				conv_action = 4;
			}
			else if (msg_data.Action == "RECT") {
				conv_action = 5;
			}
			else if (msg_data.Action == "ADUI") {
				conv_action = 8;
			}
			else if (msg_data.Action == "UNUI") {
				conv_action = 9;
			}
			else if (msg_data.Action == "MSGC") {
				conv_action = 10;
			}

			if (msg_data.Action == "BYEC") {
				this.sockjs._nexacro_destroy();
				delete this.sockjs;
				this.sockjs = null;
				g_sockjs = null;
				this.ip_idx = 0;
				this._is_connected = false;

				if (this._do_disconnect) {
					this.xpush._onsuccess(2, conv_action);
				}
				else {
					this.xpush._onerror(-100);
				}
			}
			else if (msg_data.Action == "KEEP") {
				this.xpush._onkeepalive(2);
			}
			else if (msg_data.Action == "AUTH") {
				this.control_retry_cnt = 1;
				this.retry = 1;

				this._is_connected = true;

				this.xpush._onsuccess(1, conv_action);
			}
			else if (msg_data.Action == "PUSH" || msg_data.Action == "RELI") {
				this.control_retry_cnt = 1;

				var idx = this._find_layout(msg_data.TopicType);
				if (idx == -1) {
					this.xpush._onerror(-703);
					return;
				}

				if (msg_data.Action == "RELI") {
					this.sockjs._nexacro_ackn(msg_data.MessageID);
				}

				var layout = this.layoutlist[idx];

				var msg = msg_data.Message;
				var datalist = [];
				var data = {
				};

				var listfield = layout.listfield;
				var field = listfield[0];
				data.id = field.id;
				data.item = msg_data.TopicId;
				data.key = field.key;
				var checkfield = field.check;

				if (layout.checkfieldidx == 0) {
					checkfield = data.item;
				}
				else if (layout.checkfieldidx > 0) {
					checkfield = msg[layout.checkfieldidx - 1];
				}

				data.checkfield = checkfield;

				datalist.push(data);

				var data_val = "";
				var data_size = (msg_data.TopicType ? msg_data.TopicType.length : 0) + (msg_data.TopicId ? msg_data.TopicId.length : 0);
				var msg_len = msg.length;
				for (i = 0; i < msg_len; i++) {
					data = {
					};

					data_val = data_val + " " + msg[i];

					field = listfield[i + 1];
					if (!field) {
						continue;
					}

					data.id = field.id;
					data.item = msg[i];

					data.key = field.key;
					data.checkfield = checkfield;
					datalist.push(data);
				}

				data_size += data_val.length;

				var recvObj = {
				};
				recvObj.type = msg_data.TopicType;
				recvObj.datalist = datalist;
				recvObj.action = msg_data.Action;
				if (msg_data.MessageID) {
					recvObj.msgid = msg_data.MessageID;
				}


				this.xpush._onkeepalive(0);

				if (this.xpush.debug) {
					trace("SIZE:" + data_size + " CMD:" + msg_data.Action + " RECV Data:" + data_val);
				}

				this.xpush._onxpush(recvObj);
			}
			else if (msg_data.Result == "OK") {
				this.control_retry_cnt = 1;

				var reason = 0;
				if (msg_data.Action == "MSGC") {
					var msgc_list = [];
					var msgc_len = msg_data.MsgcList.length;
					for (var i = 0; i < msgc_len; i++) {
						var msgcList = {
						};
						msgcList.topictype = msg_data.MsgcList[i].type;
						msgcList.topicid = msg_data.MsgcList[i].id;
						msgcList.count = msg_data.MsgcList[i].count;

						msgc_list.push(msgcList);
					}

					this.xpush._onsuccess(9, conv_action, msg_data.Action, this.msg_type, this.msg_key, msgc_list);

					msgc_list = [];

					return;
				}
				else if (msg_data.Action == "REQD") {
					reason = 6;
				}
				else if (msg_data.Action == "RECT") {
					this.xpush._onsuccess(5, conv_action, msg_data.Action, msg_data.MessageID, msg_data.TopicId);
					return;
				}

				this.xpush._onsuccess(reason, conv_action, msg_data.Action, msg_data.TopicType, msg_data.TopicId);
			}
			else if (msg_data.Result == "NG") {
				if (msg_data.Action == this.action && 
					msg_data.TopicType == this.msg_type && 
					msg_data.TopicId == this.msg_key) {
					this.control_retry_cnt++;
					this.command(this.action, this.msg_type, this.msg_key, this.type, undefined, userid);
				}
			}
			else {
				if (msg_data.Action == this.action && 
					msg_data.TopicType == this.msg_type && 
					msg_data.TopicId == this.msg_key) {
					this.control_retry_cnt++;
					this.command(this.action, this.msg_type, this.msg_key, this.type, msg_data, userid);
				}
			}
		};

		_pWebPush.set_keepalivetime = function (keepalivetime) {
			this.keepalivetime = parseInt(keepalivetime);
		};

		_pWebPush.set_layouturl = function (layouturl) {
			if (this._ajax) {
				if (this._ajax._destroy) {
					this._ajax._destroy();
				}
				this._ajax = null;

				var layoutlist = this.layoutlist;
				var layoutlist_len = layoutlist.length;

				for (var i = 0; i < layoutlist_len; i++) {
					var listfield = layoutlist[i].listfield;
					listfield = [];
				}

				this.layoutlist = [];
			}

			this._ajax = nexacro.__createHttpRequest();
			this._ajax._handle.open("GET", layouturl, false);
			this._ajax._handle.send("");

			var xml = this._ajax._handle.responseXML;
			this._load_layoutxml(xml);
		};

		_pWebPush._find_layout = function (id) {
			var layoutlist = this.layoutlist;
			var layoutlist_len = layoutlist.length;
			for (var i = 0; i < layoutlist_len; i++) {
				var layout = layoutlist[i];
				if (layout.id == id) {
					return i;
				}
			}

			return -1;
		};

		_pWebPush._hasKey = function (strMessageType) {
			var idx = this._find_layout(strMessageType);
			if (idx == -1) {
				this.xpush._onerror(-703);
				return false;
			}

			var layoutlist = this.layoutlist;
			var layout = layoutlist[idx];
			if (layout.id == strMessageType) {
				var listfield = layout.listfield;
				var listfield_len = listfield.length;
				var key = false;

				for (var i = 0; i < listfield_len; i++) {
					var field = listfield[i];
					key = field.key;
					if (key) {
						break;
					}
				}

				if (!key) {
					this.xpush._onerror(-703);
					return false;
				}

				if (layout.noreg) {
					return false;
				}
			}

			return true;
		};

		_pWebPush._load_layoutxml = function (xml) {
			if (!xml) {
				this.xpush._onerror(-703);
				return false;
			}

			var rootnode;
			if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 8) {
				rootnode = xml.childNodes[1];
			}
			else {
				rootnode = xml.childNodes[0];
			}

			if (rootnode.nodeName != "message_layout") {
				return false;
			}

			var childnodes = rootnode.childNodes;
			for (var i = 0, childnode_len = childnodes.length; i < childnode_len; i++) {
				if (childnodes[i].nodeName == "#text") {
					continue;
				}

				var svcid = null;
				var nokey = false;
				var repeat = false;
				var noreg = false;

				var attr = childnodes[i].attributes;
				var attr_len = attr.length;
				for (var j = 0; j < attr_len; j++) {
					if (!svcid && attr[j].nodeName == "id" || attr[j].nodeName == "type") {
						svcid = attr[j].nodeValue;
					}
					else if (attr[j].nodeName == "key") {
						nokey = attr[j].nodeValue;
					}
					else if (attr[j].nodeName == "repeat") {
						repeat = attr[j].nodeValue;
					}
					else if (attr[j].nodeName == "noreg") {
						noreg = nexacro._toBoolean(attr[j].nodeValue);
					}
				}

				var fieldnode = childnodes[i];
				var fieldnode_len = fieldnode.childNodes.length;
				if (fieldnode_len > 0) {
					var layout = new nexacro.PushLayout();
					layout.id = svcid;
					layout.nokey = nokey;
					layout.repeat = repeat;
					layout.noreg = noreg;

					var check_idx = 0;
					for (var j = 0; j < fieldnode_len; j++) {
						if (fieldnode.childNodes[j].nodeName == "#text") {
							continue;
						}

						var field = new nexacro.Field();

						var attr = fieldnode.childNodes[j].attributes;
						var attr_len = attr.length;
						for (var k = 0; k < attr_len; k++) {
							if (attr[k].nodeName == "id") {
								field.id = attr[k].nodeValue;
							}
							if (attr[k].nodeName == "type") {
								field.type = attr[k].nodeValue;
							}
							if (attr[k].nodeName == "size") {
								field.type = parseInt(attr[k].nodeValue);
							}
							if (attr[k].nodeName == "key") {
								var v = nexacro._toBoolean(attr[k].nodeValue);
								field.key = v;
							}
							if (attr[k].nodeName == "check") {
								var v = nexacro._toBoolean(attr[k].nodeValue);
								if (v) {
									field.check = true;
									layout.checkfieldidx = check_idx;
								}
							}
						}

						layout.listfield.push(field);
						check_idx++;
					}

					this.layoutlist.push(layout);
				}
			}
		};
	}


	nexacro.XPush = function (name, obj) {
		if (nexacro.OS == "Android") {
			this._id = nexacro.Device.makeID();
			nexacro.Device._userCreatedObj[this._id] = this;
		}
		this.name = name || "";
		this.enableevent = true;

		this.commandlist = new Array;
		this.controlretry = "5";
		this.debug = false;
		this.iplist = new Array;
		this.keepalivetime = "30";
		this.keeptimeout = "60";
		this.layouturl = "";
		this.retry = 1;
		this.sessionid = "";
		this.timeout = "30";
		this.userid = "";
		this._parent_elem = obj;
		this.errorcode;
		this.errormsg;
		this.async = true;
		this.projectid = undefined;
		this.protocolversion = 2;

		this._event_list = {
			"onsuccess" : 1, 
			"onerror" : 1, 
			"onkeepalive" : 1
		};

		this.onsuccess = null;
		this.onerror = null;

		this._msg_unusedataset = ["RGST", "UNRG", "ADUI", "UNUI", "MSGC"];

		var params = '""';

		this.webpush = null;

		if (!this._isWebPush()) {
			if (this._parent_elem) {
				var _win = this._parent_elem._getWindow();
				if (_win) {
					this._handle = nexacro.__createXPushHandle(this, _win._handle);
					if (this._handle) {
						nexacro.__setXPushHandleOnEvent(this._handle, this._onxpush, this._onsuccess, this._onerror, this._onkeepalive);

						nexacro.__setXPushHandleOnFunction(this._handle, this._getrandomipinfo, this._seterror);
					}
				}
			}
		}
		else {
			this.webpush = new nexacro.WebPush();
			this.webpush.xpush = this;
		}
	};

	var _pXPush = nexacro.XPush.prototype = nexacro._createPrototype(nexacro.EventSinkObject);
	_pXPush._type = "nexacroXPush";
	_pXPush._type_name = "XPush";
	_pXPush._handle = null;
	_pXPush._currentipinfo = null;
	_pXPush._sock = null;

	_pXPush._isWebPush = function () {
		if (nexacro.Browser != "Runtime" && !nexacro.Device.isHybrid()) {
			return true;
		}
		else {
			return false;
		}
	};

	_pXPush._findForm = function (comp) {
		var form = comp;
		while (form && form._is_form == false) {
			form = form.parent;
		}
		return form;
	};

	_pXPush.on_created = function () {
	};

	_pXPush.destroy = function () {
		var params = '""';
		var jsonstr;

		if (this._isWebPush()) {
			this.webpush.destroy();
			this.webpush = null;
		}
		else {
			if (this._handle) {
				nexacro.__destroyXPushHandle(this._handle);
			}
		}


		return true;
	};


	_pXPush.set_name = function (name) {
		this.name = name;
	};

	_pXPush.set_channeltype = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.channeltype = "single";
		}
		else {
			this.channeltype = v;
		}
		return true;
	};

	_pXPush.set_commandlist = function () {
	};

	_pXPush.set_connectip = function (v) {
	};
	_pXPush.set_connectport = function (v) {
	};

	_pXPush.set_controlretry = function (v) {
		if (typeof (v) == "undefined" || v == null) {
			this.controlretry = 5;
		}
		else {
			if (nexacro._isNumber(v)) {
				if (v >= 0) {
					this.controlretry = v;
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		this.on_apply_controlretry();
		return true;
	};

	_pXPush.on_apply_controlretry = function () {
		if (this._handle) {
			nexacro.__setXPushControlRetry(this._handle, this.controlretry);
		}
	};

	_pXPush.set_debug = function (v) {
		if (v === undefined || v === null) {
			return;
		}
		v = nexacro._toBoolean(v);

		this.debug = v;

		this.on_apply_debug();
		return true;
	};

	_pXPush.on_apply_debug = function () {
		if (!this._isWebPush()) {
			if (this._handle) {
				nexacro.__setXPushHandleDebug(this._handle, this.debug);
			}
		}
	};

	_pXPush.set_iplist = function (v) {
		var len = this.iplist.length;
		if (len > 0) {
			this.iplist.splice(0, len);
		}

		if (typeof (v) == "undefined" || v == null || v == "") {
		}
		else {
			if (v.indexOf(",") >= 0) {
				var ipinfolist = v.split(",");
				if (ipinfolist.length > 0) {
					for (var i = 0; i < ipinfolist.length; i++) {
						var trim_ipinfolist = ipinfolist[i];
						trim_ipinfolist = trim_ipinfolist.replace(/(^\s*)|(\s*$)/gi, "");
						var temp = trim_ipinfolist.split(":");
						var ipinfo = new Object;

						if (temp[0] == "tcp" || temp[0] == "http" || temp[0] == "https" || temp[0] == "tcps" || temp[0] == "TCPS") {
							if ((!this._isWebPush() && (temp[0] == "http" || temp[0] == "https")) || (this._isWebPush() && (temp[0] == "tcp" || temp[0] == "tcps" || temp[0] == "TCPS"))) {
								continue;
							}

							ipinfo.type = temp[0];
							var ip = temp[1];
							ipinfo.ip = ip.split("//")[1];
							ipinfo.port = temp[2].valueOf();
						}
						else {
							if (this._isWebPush()) {
								continue;
							}

							ipinfo.type = "tcp";
							ipinfo.ip = temp[0];
							ipinfo.port = temp[1].valueOf();
						}

						ipinfo.retry = false;
						this.iplist.push(ipinfo);
					}
				}
			}
			else {
				var temp = v.replace(/(^\s*)|(\s*$)/gi, "");
				temp = temp.split(":");
				var ipinfo = new Object;

				if (temp[0] == "tcp" || temp[0] == "http" || temp[0] == "https" || temp[0] == "tcps" || temp[0] == "TCPS") {
					ipinfo.type = temp[0];
					var ip = temp[1];
					ipinfo.ip = ip.split("//")[1];

					ipinfo.port = 0;
					if (temp[2]) {
						var temp_port = temp[2].split("/");
						if (temp_port && temp_port.length > 0) {
							ipinfo.port = temp_port[0].valueOf();

							for (var n = 1; n < temp_port.length; n++) {
								if (temp_port[n]) {
									ipinfo.ip += "/" + temp_port[n];
								}
							}
						}
						else {
							ipinfo.port = temp[2].valueOf();
						}
					}
				}
				else {
					ipinfo.type = "tcp";
					ipinfo.ip = temp[0];
					ipinfo.port = temp[1].valueOf();
				}

				ipinfo.retry = false;
				this.iplist.push(ipinfo);
			}
		}
		return true;
	};


	_pXPush.set_keepalivetime = function (v) {
		v = nexacro._toInt(v);
		if (typeof (v) == "undefined" || v == null) {
			this.keepalivetime = 30;
		}
		else {
			if (v >= 0) {
				this.keepalivetime = v;
			}
			else {
				this.keepalivetime = 30;
			}
		}
		this.on_apply_keepalivetime();
		return true;
	};

	_pXPush.on_apply_keepalivetime = function () {
		if (this._isWebPush()) {
			if (this.webpush) {
				this.webpush.set_keepalivetime(this.keepalivetime);
			}
		}
		else {
			if (this._handle) {
				nexacro.__setXPushHandleKeepAliveTime(this._handle, this.keepalivetime);
			}
		}
	};

	_pXPush.set_keeptimeout = function (v) {
		v = nexacro._toInt(v);
		if (typeof (v) == "undefined" || v == null) {
			this.keeptimeout = 60;
		}
		else {
			if (v > 0) {
				this.keeptimeout = v;
			}
			else {
				this.keeptimeout = 60;
			}
		}
		return true;
	};

	_pXPush.set_layouturl = function (v) {
		if (typeof (v) == "undefined" || v == null) {
			this.layouturl = "";
		}
		else {
			this.layouturl = v;
		}
		this.on_apply_layouturl();
		return true;
	};

	_pXPush.on_apply_layouturl = function () {
		if (this.layouturl != "") {
			var layouturl = this.layouturl;
			if (nexacro.OS != "Android" || this._isWebPush()) {
				var url = this.layouturl;

				if (url.substring(0, 4).toLowerCase() == "url(") {
					url = url.substring(5, url.length - 2);
				}

				var form = this._findForm(this._parent_elem);
				if (form) {
					if (url.indexOf("%") < 0) {
						layouturl = nexacro._getServiceLocation(url, form._getRefFormBaseUrl());
					}
				}
			}
			if (this._isWebPush()) {
				this.webpush.set_layouturl(layouturl);
			}
			else {
				if (this._handle) {
					nexacro.__setXPushHandleLayoutURL(this._handle, layouturl);
				}
			}
		}
	};

	_pXPush.set_retry = function (v) {
		v = nexacro._toInt(v);
		if (typeof (v) == "undefined" || v == null) {
			this.retry = 1;
		}
		else {
			if (v >= 0) {
				this.retry = v;
			}
			else {
				this.retry = 1;
			}
		}
		this.on_apply_retry();
		return true;
	};

	_pXPush.on_apply_retry = function () {
		if (!this._isWebPush()) {
			if (this._handle) {
				nexacro.__setXPushHandleRetry(this._handle, this.retry);
			}
		}
	};

	_pXPush.set_sessionid = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.sessionid = "";
		}
		else {
			this.sessionid = v;
		}
		return true;
	};

	_pXPush.set_timeout = function (v) {
		v = nexacro._toInt(v);
		if (typeof (v) == "undefined" || v == null) {
			this.timeout = 30;
		}
		else {
			if (v > 0) {
				this.timeout = v;
			}
			else {
				this.timeout = 30;
			}
		}
		return true;
	};

	_pXPush.set_userid = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.userid = "";
		}
		else {
			this.userid = v;
		}
		return true;
	};

	_pXPush.set_async = function (v) {
		if (v === undefined || v === null) {
			return;
		}
		v = nexacro._toBoolean(v);

		this.async = v;

		this.on_apply_async();
		return true;
	};

	_pXPush.on_apply_async = function () {
		if (!this._isWebPush()) {
			if (this._handle) {
				nexacro.__setXPushHandleAsync(this._handle, this.async);
			}
		}
	};

	_pXPush.set_projectid = function (v) {
		v = nexacro._toString(v);
		if (this.projectid !== v) {
			this.projectid = v;
		}
	};
	_pXPush.set_protocolversion = function (v) {
		var val = nexacro._parseInt(v, 2);
		if (val < 0) {
			val = 2;
		}

		if (this.protocolversion != val) {
			this.protocolversion = val;
		}

		this.on_apply_protocolversion();
	};

	_pXPush.on_apply_protocolversion = function () {
		if (!this._isWebPush()) {
			if (this._handle) {
				nexacro.__setXPushHandleProtocolversion(this._handle, this.protocolversion);
			}
		}
	};



	_pXPush.subscribe = function (strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "ADDF";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack);
	};
	_pXPush.unsubscribe = function (strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "DELF";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack);
	};
	_pXPush.registerDevice = function (strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "RGST";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack);
	};
	_pXPush.unregisterDevice = function (strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "UNRG";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack);
	};
	_pXPush.registerTopic = function (strMessageType, strMessageKey, strUserID, strProjectID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "ADUI";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID, strProjectID);
	};
	_pXPush.unregisterTopic = function (strMessageType, strMessageKey, strUserID, strProjectID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "UNUI";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID, strProjectID);
	};
	_pXPush.requestMessageCount = function (strMessageType, strMessageKey, strUserID, strProjectID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "MSGC";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID, strProjectID);
	};
	_pXPush.registerTopicWithUserID = function (strMessageType, strMessageKey, strUserID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "ADUI";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID);
	};
	_pXPush.unregisterTopicWithUserID = function (strMessageType, strMessageKey, strUserID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "UNUI";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID);
	};
	_pXPush.requestMessageCountWithUserID = function (strMessageType, strMessageKey, strUserID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "MSGC";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID);
	};
	_pXPush.command = function (strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID, strProjectID) {
		var cc = new nexacro.CommandControl();

		cc.actiontype = strCommand;
		cc.type = strType;
		cc.callback = strCallBack;
		cc.messagekey = strMessageKey;
		cc.messagetype = strMessageType;
		cc.objdataset = objDataset;
		cc.objform = objForm;




		if (nRow != undefined) {
			if ((+nRow) != (+nRow)) {
				return false;
			}
			else {
				cc.row = nRow;
			}
		}
		else {
			cc.row = -1;
		}

		if (strCheck != undefined) {
			cc.check = strCheck;
		}
		else {
			cc.check = "0";
		}

		if (bUseActiveFormCallBack != undefined) {
			if (typeof (bUseActiveFormCallBack) != "boolean") {
				if ((bUseActiveFormCallBack.toLowerCase() != "false") && (bUseActiveFormCallBack.toLowerCase() != "true")) {
					cc.useactiveformcallback = false;
				}
				else {
					cc.useactiveformcallback = nexacro._toBoolean(bUseActiveFormCallBack);
				}
			}
			else {
				cc.useactiveformcallback = bUseActiveFormCallBack;
			}
		}
		else {
			cc.useactiveformcallback = false;
		}

		this.strCommand = strCommand;
		this.strMessageType = strMessageType;
		this.strMessageKey = strMessageKey;
		this.objDataset = objDataset;
		this.strCallBack = strCallBack;


		if (this.strCommand === undefined || this.strCommand === null || this.strCommand == "") {
			if (this._isWebPush()) {
				this._onerror(-701);
			}
			else {
				nexacro.__fireXPushHandleErrorEvent(this._handle, -701);
			}
		}
		else {
			var _strProjectID = strProjectID;
			if (this.protocolversion == 3) {
				_strProjectID = _strProjectID ? _strProjectID : this.projectid;
			}
			else {
				_strProjectID = "";
			}

			this.strCommand = this.strCommand.toString();

			if (strCommand == "ADDF" || strCommand == "DELF") {
				if (objForm === undefined || objForm === null || 
					this.strMessageType === undefined || this.strMessageType === null || this.strMessageType == "" || 
					this.strMessageKey === undefined || this.strMessageKey === null || this.strMessageKey == "" || 
					this.objDataset === undefined || this.objDataset === null || 
					strType === undefined || strType === null || strType == "" || 
					this.strCallBack === undefined || this.strCallBack === null || this.strCallBack == "") {
					if (this._isWebPush()) {
						this._onerror(-701);
					}
					else {
						nexacro.__fireXPushHandleErrorEvent(this._handle, -701);
					}
				}
				else {
					this.strMessageType = this.strMessageType.toString();
					this.strMessageKey = this.strMessageKey.toString();

					if ((strType.toLowerCase() != "append") && (strType.toLowerCase() != "update") && (strType.toLowerCase() != "insert") && (strType.toLowerCase() != "replace") && (strType != "allUpdate")) {
						if (this._isWebPush()) {
							this._onerror(-701);
						}
						else {
							nexacro.__fireXPushHandleErrorEvent(this._handle, -701);
						}
					}
					else {
						this.strCallBack = this.strCallBack.toString();
						if (objForm[this.strCallBack] === undefined) {
							if (this._isWebPush()) {
								this._onerror(-701);
							}
							else {
								nexacro.__fireXPushHandleErrorEvent(this._handle, -701);
							}
						}
						else {
							var same_type = false;
							if (strCommand == "ADDF") {
								var skip = false;
								if (this._isWebPush()) {
									if (!this.webpush || (this.webpush && !this.webpush._is_connected)) {
										skip = true;
									}
								}

								if (!skip) {
									var i;
									for (i = 0; i < this.commandlist.length; i++) {
										var item = this.commandlist[i];
										if (item.equal(cc) || (item.messagekey == cc.messagekey && item.messagetype == cc.messagetype && item.actiontype == cc.actiontype)) {
											same_type = true;
											break;
										}
									}
									if (i == this.commandlist.length) {
										this.commandlist.push(cc);
									}
								}
							}

							if (this._isWebPush()) {
								if (same_type) {
									if (strCommand == "ADDF") {
										this._onerror(-701, 2, strCommand, strMessageType, strMessageKey);
									}
									return;
								}

								if (strCommand == "DELF") {
									for (i = 0; i < this.commandlist.length; i++) {
										var item = this.commandlist[i];
										if (item.messagekey == cc.messagekey && item.messagetype == cc.messagetype && item.type == cc.type) {
											break;
										}
									}

									if (i == this.commandlist.length) {
										this._onerror(-701, 3, strCommand, strMessageType, strMessageKey);
										return;
									}
								}

								this.webpush.command(strCommand, strMessageType, strMessageKey, strType.toLowerCase());
							}
							else {
								if (this._handle) {
									nexacro.__commandXPushHandle(this._handle, strCommand, strMessageType, strMessageKey, strType.toLowerCase());
								}
							}
						}
					}
				}
			}
			else if (strCommand == "ADUI" || strCommand == "UNUI") {
				this.commandlist.push(cc);
				if (this._isWebPush()) {
					this.webpush.command(strCommand, strMessageType, strMessageKey, undefined, undefined, strUserID ? strUserID : "", _strProjectID);
				}
				else {
					if (this._handle) {
						nexacro.__commandXPushHandle(this._handle, strCommand, strMessageType, strMessageKey, "", strUserID ? strUserID : "", _strProjectID);
					}
				}
			}
			else if (strCommand == "MSGC") {
				this.commandlist.push(cc);
				if (this._isWebPush()) {
					this.webpush.command(strCommand, strMessageType, strMessageKey, undefined, undefined, strUserID ? strUserID : "", _strProjectID);
				}
				else {
					if (this._handle) {
						nexacro.__commandXPushHandle(this._handle, strCommand, strMessageType, strMessageKey, "", strUserID ? strUserID : "", _strProjectID);
					}
				}
			}
			else if (strCommand == "RGST" || strCommand == "UNRG") {
				this.commandlist.push(cc);
				if (!this._isWebPush()) {
					if (this._handle) {
						nexacro.__commandXPushHandle(this._handle, strCommand);
					}
				}
			}
			else {
				if (this._isWebPush()) {
					this._onerror(-701);
				}
				else {
					if (this._handle) {
						nexacro.__fireXPushHandleErrorEvent(this._handle, -701);
					}
				}
			}
		}
	};


	_pXPush.connect = function (userid, sessionid) {
		if (userid == null) {
			userid = this.userid;
		}

		if (sessionid == null) {
			sessionid = this.sessionid;
		}

		var projectid = this.protocolversion == 3 ? this.projectid : "";

		if (this._isWebPush()) {
			this._getrandomipinfo();
			this._resetIPList();

			this.webpush.connect(userid, sessionid, projectid);
		}
		else {
			var bSuccessed;
			if (this._handle) {
				this._resetIPList();
				nexacro.__connectXPushHandle(this._handle, userid, sessionid, projectid, this.retry, this.timeout, this.controlretry, this.keeptimeout);
			}
		}
	};

	_pXPush.disconnect = function () {
		if (this._isWebPush()) {
			this.webpush.disconnect();
		}
		else {
			if (this._handle) {
				nexacro.__disconnectXPushHandle(this._handle);
			}
		}
	};

	_pXPush.resume = function () {
		if (this._handle) {
			nexacro.__resumeXPushHandle(this._handle);
		}
	};

	_pXPush.suspend = function () {
		if (this._handle) {
			nexacro.__suspendXPushHandle(this._handle);
		}
	};

	_pXPush.getCurrentIP = function () {
		if (this._currentipinfo) {
			return this._currentipinfo.ip;
		}
		return null;
	};

	_pXPush.getCurrentPort = function () {
		if (this._currentipinfo) {
			return this._currentipinfo.port;
		}
		return null;
	};

	_pXPush.sendResponse = function (msgid) {
		if (this._isWebPush()) {
			this.webpush.command("RECT", msgid);
		}
		else {
			if (this._handle) {
				nexacro.__sendResponseXPushHandle(this._handle, msgid);
			}
		}
	};

	_pXPush.requestMessage = function () {
		if (arguments.length < 2) {
			return;
		}

		var messagetype = arguments[0];
		var messagekeys = new Array();
		for (var i = 1; i < arguments.length; i++) {
			if (this._isWebPush()) {
				this.webpush.command("REQD", messagetype, arguments[i]);
			}
			else {
				messagekeys.push(arguments[i]);
			}
		}

		if (!this._isWebPush()) {
			if (messagekeys.length > 0) {
				if (this._handle) {
					nexacro.__requestMessageXPushHandle(this._handle, messagetype, messagekeys);
				}
			}
		}
	};


	_pXPush._resetIPList = function () {
		var length = this.iplist.length;
		for (var i = 0; i < length; i++) {
			if (this.iplist[i].retry) {
				this.iplist[i].retry = false;
			}
		}
	};

	_pXPush._getrandomipinfo = function () {
		var length = this.iplist.length;
		if (length > 0) {
			for (var i = 0; i < length; i++) {
				if (this.iplist[i].retry == false) {
					break;
				}
			}
			if (i == length) {
				return null;
			}

			var randidx;
			do {
				randidx = parseInt((Math.random() * length));
			} while (this.iplist[randidx].retry);

			if (this._isWebPush() && this.webpush) {
				this.webpush.ip_idx = randidx;
			}

			this.iplist[randidx].retry = true;
			this._currentipinfo = this.iplist[randidx];
			return this._currentipinfo;
		}
		return null;
	};



	_pXPush._onxpush = function (recv) {
		var paramRow;
		var paramChangeColumns = new Array();
		var paramAllColumns = new Array();
		var paramChangeRows = new Array();
		var paramobjChangeList = new Array();
		var paramChangeRowsTemp = new Array();
		var msg_unusedataset_len = this._msg_unusedataset.length;
		for (var j = 0; j < this.commandlist.length; j++) {
			var cc = this.commandlist[j];
			var skip = false;
			for (var msg_idx = 0; msg_idx < msg_unusedataset_len; msg_idx++) {
				if (cc.actiontype == this._msg_unusedataset[msg_idx]) {
					skip = true;
				}
			}
			if (skip) {
				continue;
			}

			if (cc.messagetype == recv.type) {
				var cr = -1;
				var data_key = false;
				var datasetColIndexList = new Array();
				var datalistlen = recv.datalist.length;

				for (var dlidx = 0; dlidx < datalistlen; dlidx++) {
					var data = recv.datalist[dlidx];
					var layoutKey = data.id;
					var messageKey = data.item;
					var idx = cc.objdataset.colinfos.indexOf(data.id);
					datasetColIndexList.push(idx);

					if (data.key) {
						data_key = data.key;
					}

					if (cr == -1 && cc.type == "update") {
						cr = cc.objdataset.findRow(layoutKey, messageKey);
					}
				}

				var bfind = false;
				var callfunc = false;
				var callfunc1 = false;
				for (var dlidx = 0; dlidx < datalistlen; dlidx++) {
					var data = recv.datalist[dlidx];
					var layoutKey = data.id;
					var messageKey = data.item;
					var checkfield = data.checkfield;
					var colIdx = datasetColIndexList[dlidx];

					if (colIdx === undefined) {
						continue;
					}

					if (dlidx == 0 && messageKey != cc.messagekey) {
						break;
					}

					if (cc.type == "append") {
						if (cr == -1) {
							if (cc.messagekey == data.item) {
								cr = cc.objdataset.addRow();
								cc.objdataset.setColumn(cr, colIdx, data.item);
								paramAllColumns.push(data.id);
								paramChangeColumns.push(data.id);
							}
						}
						else {
							callfunc = true;
							cc.objdataset.setColumn(cr, colIdx, data.item);
							paramAllColumns.push(data.id);
							paramChangeColumns.push(data.id);
							paramRow = cr;
						}
						callfunc1 = true;
					}
					else if (cc.type == "insert") {
						if (cr == -1) {
							if (cc.messagekey == data.item) {
								cr = cc.objdataset.insertRow(cc.row);
								cc.objdataset.setColumn(cr, colIdx, data.item);
								paramAllColumns.push(data.id);
								paramChangeColumns.push(data.id);
							}
						}
						else {
							cc.objdataset.setColumn(cr, colIdx, data.item);
							paramAllColumns.push(data.id);
							paramChangeColumns.push(data.id);
							paramRow = cr;
						}
						callfunc = true;
						callfunc1 = true;
					}
					else if (cc.type == "replace") {
						if (cc.row < cc.objdataset.getRowCount()) {
							var value = cc.objdataset.getColumn(cc.row, colIdx);
							if (value != data.item) {
								cc.objdataset.setColumn(cc.row, colIdx, data.item);
								paramChangeColumns.push(data.id);
								paramRow = cc.row;
								callfunc = true;
							}
							callfunc1 = true;
							paramAllColumns.push(data.id);
						}
					}
					else if (cc.type == "update") {
						if (!data_key) {
							this._onerror(-703);
							break;
						}

						paramAllColumns.push(data.id);
						var value = cc.objdataset.getColumn(cr, colIdx);
						if (value != data.item) {
							callfunc1 = true;
							callfunc = true;

							if ((cc.check == "0") || (checkfield && checkfield == cc.check)) {
								var ret = cc.objdataset.setColumn(cr, colIdx, data.item);
								paramChangeColumns.push(data.id);
							}
						}
						paramRow = cr;
					}
					else if (cc.type == "allUpdate") {
						if (!data_key) {
							this._onerror(-703);
							break;
						}


						if (paramChangeRowsTemp.length == 0) {
							for (var cr = 0; cr < cc.objdataset.getRowCount(); cr++) {
								if (messageKey == cc.objdataset.getColumn(cr, layoutKey)) {
									paramChangeRows.push(cr);
									paramChangeRowsTemp.push(cr);
									continue;
								}
							}
						}
						else {
							while (paramChangeRowsTemp.length) {
								cr = paramChangeRowsTemp.splice(0, 1);
								var value = cc.objdataset.getColumn(cr, colIdx);
								if (value != data.item) {
									if ((cc.check == "0") || (checkfield && checkfield == cc.check)) {
										cc.objdataset.setColumn(cr, colIdx, data.item);
										var change_val = cr + "," + data.id;

										paramobjChangeList.push(change_val);
									}
								}
							}
							callfunc = true;
						}
						callfunc1 = true;
					}
				}

				if (recv.action == "RELI" && recv.msgid != undefined && recv.msgid != null) {
					callfunc = true;
				}
				else if (callfunc == false) {
					continue;
				}

				if (!callfunc1) {
					continue;
				}

				if ((!cc.useactiveformcallback) || (cc.useactiveformcallback && (cc.objform === application.getActiveForm()))) {
					if (cc.type != "allUpdate") {
						var callbackFn = cc.objform[cc.callback];
						if (callbackFn instanceof Function) {
							callbackFn.call(cc.objform, paramRow, paramChangeColumns.join(), paramAllColumns.join(), "DATA", recv.action, recv.msgid);
							paramChangeRows.splice(0, paramChangeRows.length);
							paramAllColumns.splice(0, paramAllColumns.length);
						}
					}
					else if (cc.type == "allUpdate") {
						var callbackFn = cc.objform[cc.callback];
						if (callbackFn instanceof Function) {
							callbackFn.call(cc.objform, paramChangeRows.join(), null, paramobjChangeList, "DATA", recv.action, recv.msgid);
							paramChangeRows.splice(0, paramChangeRows.length);
							paramobjChangeList.splice(0, paramobjChangeList.length);
						}
					}
				}
			}
		}
	};


	_pXPush._onsuccess = function (reason, action, classtype, messagetype, messagekey, returnvalue) {
		var pushmessageobject = new Object();
		pushmessageobject.messagetype = "";
		pushmessageobject.messagekey = "";
		pushmessageobject.messageid = "";
		pushmessageobject.returnvalue = "";

		if (classtype == "RECT") {
			pushmessageobject.messagetype = "";
			pushmessageobject.messagekey = "";
			pushmessageobject.messageid = messagetype;
		}
		else if (classtype == "RGST" || classtype == "UNRG") {
			if (nexacro.OS == "Android") {
				pushmessageobject.messagetype = "";
				pushmessageobject.messagekey = "";
				pushmessageobject.messageid = "";
			}
		}
		else if (classtype == "MSGC") {
			pushmessageobject.messageid = "";
			pushmessageobject.messagetype = messagetype;
			pushmessageobject.messagekey = messagekey;
			pushmessageobject.returnvalue = returnvalue;
		}
		else if (action == 0 || action == 1) {
		}
		else {
			pushmessageobject.messageid = "";
			pushmessageobject.messagetype = messagetype;
			pushmessageobject.messagekey = messagekey;
		}

		var command;
		var listlength = this.commandlist.length;
		var index;

		for (index = 0; index < listlength; index++) {
			command = this.commandlist[index].valueOf();

			if (command.messagetype == messagetype) {
				if (command.messagekey == messagekey && ((command.actiontype == classtype) || (classtype == "DELF" && command.actiontype == "ADDF"))) {
					break;
				}
			}
		}
		if (index == listlength) {
			command = null;
		}

		if (command && (classtype == "DELF" || classtype == "ADUI" || classtype == "DELF" || classtype == "UNUI" || classtype == "MSGC" || classtype == "RGST " || classtype == "UNRG")) {
			command.actiontype = classtype;
			var e = new nexacro.Event.XPushEventInfo("onsuccess", reason, action, this.getCurrentIP(), this.getCurrentPort(), command, pushmessageobject);
			this._fire_onsuccess(this, e);
			this.commandlist.splice(index, 1);

			delete e;
			e = null;
		}
		else {
			if (this._isWebPush() == true) {
				if (action == 1 || action == 0) {
					this.commandlist = null;
					this.commandlist = new Array;
				}
			}

			var e = new nexacro.Event.XPushEventInfo("onsuccess", reason, action, this.getCurrentIP(), this.getCurrentPort(), command, pushmessageobject);
			this._fire_onsuccess(this, e);

			if (this._isWebPush() == false) {
				if (action == 1) {
					this.commandlist = null;
					this.commandlist = new Array;
				}
			}

			delete e;
			e = null;
		}

		delete pushmessageobject;
		pushmessageobject = null;
	};

	_pXPush._fire_onsuccess = function (objXPush, eXPushEventInfo) {
		if (this.onsuccess && this.onsuccess._has_handlers) {
			return this.onsuccess._fireEvent(this, eXPushEventInfo);
		}
		return true;
	};

	_pXPush._onerror = function (errorcode, action, classtype, messagetype, messagekey, reply) {
		if (action == undefined) {
			action = -1;
		}

		var pushmessageobject = new Object();
		pushmessageobject.messagetype = "";
		pushmessageobject.messagekey = "";
		pushmessageobject.messageid = "";
		pushmessageobject.returnvalue = "";


		if (classtype == "RECT") {
			pushmessageobject.messageid = messagetype;
			pushmessageobject.messagekey = "";
			pushmessageobject.messagetype = "";
		}
		else {
			pushmessageobject.messagetype = messagetype;
			pushmessageobject.messagekey = messagekey;
			pushmessageobject.messageid = "";
		}

		var command;
		var listlength = this.commandlist.length;
		for (var i = 0; i < listlength; i++) {
			command = this.commandlist[i];
			if (command.messagetype == messagetype) {
				if (command.messagekey == messagekey) {
					break;
				}
			}
			command = null;
		}
		var errormsg = this._geterrormsg(errorcode);

		this.errorcode = errorcode;
		this.errormsg = errormsg;

		var e = new nexacro.Event.XPushErrorEventInfo("onerror", action, errorcode, errormsg, this.getCurrentIP(), this.getCurrentPort(), command, pushmessageobject);
		reply && (e.reply = eval("(" + reply + ")"));

		this._fire_onerror(this, e);
	};
	_pXPush._fire_onerror = function (objXPush, eXPushErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, eXPushErrorEventInfo);
		}
		return true;
	};

	_pXPush._onkeepalive = function (type) {
		var e = new nexacro.Event.XPushKeepAliveEventInfo("onkeepalive", type);
		this._fire_onkeepalive(this, e);
	};

	_pXPush._fire_onkeepalive = function (objXPush, eXPushKeepAliveEventInfo) {
		if (this.onkeepalive && this.onkeepalive._has_handlers) {
			return this.onkeepalive._fireEvent(this, eXPushKeepAliveEventInfo);
		}
	};

	_pXPush._seterror = function (errorcode, errormsg) {
		this.errorcode = errorcode;
		this.errormsg = errormsg;
	};

	_pXPush._onrequestmessagecount = function (userid, sendtype, sendid, receivetype, receiveid) {
		var e = new nexacro.Event.XPushRequestMessageCountEventInfo(userid, sendtype, sendid, receivetype, receiveid);
		this._fire_onrequestmessagecount(this, e);
	};

	_pXPush._fire_onrequestmessagecount = function (objXPush, eXPushRequestMessageCountEventInfo) {
		if (this.onrequestmessagecount && this.requestmessagecount._has_handlers) {
			return this.onrequestmessagecount._fireEvent(this, eXPushRequestMessageCountEventInfo);
		}
	};

	_pXPush._geterrormsg = function (errorcode) {
		var codename;
		if (errorcode == -100) {
			codename = "object_push_send_byec";
		}
		else if (errorcode == -101) {
			codename = "object_push_socket_timeout";
		}
		else if (errorcode == -200) {
			codename = "object_push_fail_command_auth";
		}
		else if (errorcode == -201) {
			codename = "object_push_fail_all_command_auth";
		}
		else if (errorcode == -202) {
			codename = "object_push_fail_data_auth";
		}
		else if (errorcode == -300) {
			codename = "object_push_fail_connect";
		}
		else if (errorcode == -301) {
			codename = "object_push_fail_send_receive";
		}
		else if (errorcode == -302) {
			codename = "object_push_connected_already";
		}
		else if (errorcode == -401) {
			codename = "object_push_fail_disconnect";
		}
		else if (errorcode == -501) {
			codename = "object_push_fail_suspend";
		}
		else if (errorcode == -601) {
			codename = "object_push_fail_resume";
		}
		else if (errorcode == -701) {
			codename = "object_push_fail_command";
		}
		else if (errorcode == -702) {
			codename = "object_push_notfound_layouturl";
		}
		else if (errorcode == -703) {
			codename = "object_push_invalid_layouturl";
		}
		else if (errorcode == -801) {
			codename = "object_push_fail_protocol_version";
		}
		else if (errorcode == -901) {
			codename = "object_push_fail_rect";
		}
		else if (errorcode == -902) {
			codename = "object_push_fail_reqd";
		}
		else if (errorcode == -1001) {
			codename = "object_push_fail_rgst_unrg";
		}
		else if (errorcode == -1002) {
			codename = "object_push_fail_adui";
		}
		else if (errorcode == -1003) {
			codename = "object_push_fail_unui";
		}
		else if (errorcode == -1004) {
			codename = "object_push_fail_msgc";
		}
		else if (errorcode == -1072) {
			codename = "object_push_fail_rgst_unrg";
		}
		else if (errorcode == -1092) {
			codename = "object_push_fail_adui";
		}
		return application._getErrorMessge(codename);
	};



	_pXPush.getObject = function (sid) {
		if (sid == undefined) {
			willrunfunc = null;
		}
		else {
			sid = sid * 1;
			var willrunfunc = nexacro.Device._userCreatedObj[sid];

			if (typeof willrunfunc == "undefined" || willrunfunc == null) {
				willrunfunc = null;
			}
		}
		return willrunfunc;
	};
	delete _pXPush;
}
;

//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.1.html	
//
//==============================================================================

if (!nexacro.Device && !nexacro.TCPClientSocket) {
	nexacro.SocketConnectEventInfo = function (obj, id, errmsg, errno) {
		this.id = this.eventid = id || "onconnect";
		this.fromobject = this.fromreferenceobject = obj;

		this.errmsg = errmsg;
		this.errno = errno;
	};
	var _pSocketConnectEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.SocketConnectEventInfo);
	nexacro.SocketConnectEventInfo.prototype = _pSocketConnectEventInfo;
	_pSocketConnectEventInfo._type_name = "SocketConnectEventInfo";

	delete _pSocketConnectEventInfo;
	_pSocketConnectEventInfo = null;

	nexacro.SocketSendEventInfo = function (obj, id, bytesremain, bytessent, errmsg, errno) {
		this.id = this.eventid = id || "onsend";
		this.fromobject = this.fromreferenceobject = obj;

		this.bytesremain = bytesremain;
		this.bytessent = bytessent;
		this.errmsg = errmsg;
		this.errno = errno;
	};
	var _pSocketSendEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.SocketSendEventInfo);
	nexacro.SocketSendEventInfo.prototype = _pSocketSendEventInfo;
	_pSocketSendEventInfo._type_name = "SocketSendEventInfo";

	delete _pSocketSendEventInfo;
	_pSocketSendEventInfo = null;

	nexacro.SocketReceiveEventInfo = function (obj, id, bytesread) {
		this.id = this.eventid = id || "ondataarrived";
		this.fromobject = this.fromreferenceobject = obj;

		this.bytesread = bytesread;
	};
	var _pSocketReceiveEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.SocketReceiveEventInfo);
	nexacro.SocketReceiveEventInfo.prototype = _pSocketReceiveEventInfo;
	_pSocketReceiveEventInfo._type_name = "SocketReceiveEventInfo";

	delete _pSocketReceiveEventInfo;
	_pSocketReceiveEventInfo = null;

	nexacro.SocketCloseEventInfo = function (obj, id, errmsg, errno) {
		this.id = this.eventid = id || "onclose";
		this.fromobject = this.fromreferenceobject = obj;

		this.errmsg = errmsg;
		this.errno = errno;
	};
	var _pSocketCloseEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.SocketCloseEventInfo);
	nexacro.SocketCloseEventInfo.prototype = _pSocketCloseEventInfo;
	_pSocketCloseEventInfo._type_name = "SocketCloseEventInfo";

	delete _pSocketCloseEventInfo;
	_pSocketCloseEventInfo = null;

	nexacro.SocketErrorEventInfo = function (obj, id, errmsg, errno) {
		this.id = this.eventid = id || "onerror";
		this.fromobject = this.fromreferenceobject = obj;

		this.errmsg = errmsg;
		this.errno = errno;
	};
	var _pSocketErrorEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.SocketErrorEventInfo);
	nexacro.SocketErrorEventInfo.prototype = _pSocketErrorEventInfo;
	_pSocketErrorEventInfo._type_name = "SocketErrorEventInfo";

	delete _pSocketErrorEventInfo;
	_pSocketErrorEventInfo = null;

	nexacro.TCPClientSocket = function (id, parent) {
		this.id = this.name = id;
		if (parent) {
			this.parent = parent;
		}

		this.address = "";
		this.port = 0;
		this.errmsg = "";
		this.errno = 0;
		this._event_list = {
			"onconnect" : 1, 
			"onclose" : 1, 
			"onsend" : 1, 
			"ondataarrived" : 1, 
			"onerror" : 1
		};

		this._handle = null;
		this.onconnect = null;
		this.onclose = null;
		this.onsend = null;
		this.ondataarrived = null;
		this.onerror = null;

		if (nexacro.Browser == "Runtime") {
			this._handle = nexacro.__createTCPClientSocket(this, this.on_success, this.on_error);
		}
	};

	var _pTCPClientSocket = nexacro.TCPClientSocket.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.TCPClientSocket);
	_pTCPClientSocket._type_name = "TCPClientSocket";

	_pTCPClientSocket.on_created = function () {
	};

	_pTCPClientSocket.destroy = function () {
		if (this._handle) {
			nexacro.__destroyTCPClientSocket(this._handle);

			this.address = "";
			this.port = 0;
			this.errmsg = "";
			this.errno = 0;
			this.isopen = false;
			this._handle = null;
		}

		return true;
	};

	_pTCPClientSocket.open = function (address, port, timeout) {
		if (this._handle && address && (port != undefined)) {
			var ret = nexacro.__openTCPClientSocket(this._handle, address, port, timeout);
			if (ret) {
				this.address = address;
				this.port = port;
			}
			return ret;
		}
		return false;
	};

	_pTCPClientSocket.close = function () {
		if (this._handle) {
			return nexacro.__closeTCPClientSocket(this._handle);
		}
		return false;
	};

	_pTCPClientSocket.read = function (size, timeout, charset) {
		if (this._handle && (size != undefined)) {
			var isreadline = false;
			return nexacro.__readTCPClientSocket(this._handle, isreadline, size, timeout, charset);
		}
		return Array(false);
	};

	_pTCPClientSocket.readLine = function (maxsize, timeout, charset) {
		if (this._handle && (maxsize != undefined)) {
			var isreadline = true;
			return nexacro.__readTCPClientSocket(this._handle, isreadline, maxsize, timeout, charset);
		}
		return Array(false);
	};

	_pTCPClientSocket.write = function (data, charset) {
		if (this._handle && (data != undefined)) {
			return nexacro.__writeTCPClientSocket(this._handle, data, charset);
		}
		return false;
	};



	_pTCPClientSocket.on_success = function (evt_id, arg0, arg1, arg2, arg3) {
		if (evt_id == "on_connect") {
			return this.on_connect(arg0, arg1);
		}
		else if (evt_id == "on_close") {
			return this.on_close(arg0, arg1);
		}
		else if (evt_id == "on_send") {
			return this.on_send(arg0, arg1, arg2, arg3);
		}
		else if (evt_id == "on_dataarrived") {
			return this.on_dataarrived(arg0);
		}

		return false;
	};

	_pTCPClientSocket.on_connect = function (errmsg, errno) {
		this.isopen = true;

		if (this.onconnect && this.onconnect._has_handlers) {
			var evt = new nexacro.SocketConnectEventInfo(this, "onconnect", errmsg, errno);
			return this.onconnect._fireEvent(this, evt);
		}
		return true;
	};

	_pTCPClientSocket.on_close = function (errmsg, errno) {
		this.isopen = false;

		if (this.onclose && this.onclose._has_handlers) {
			var evt = new nexacro.SocketCloseEventInfo(this, "onclose", errmsg, errno);
			return this.onclose._fireEvent(this, evt);
		}
		return true;
	};

	_pTCPClientSocket.on_send = function (errmsg, errno, bytessent, bytesremain) {
		if (this.onsend && this.onsend._has_handlers) {
			var evt = new nexacro.SocketSendEventInfo(this, "onsend", bytesremain, bytessent, errmsg, errno);
			return this.onsend._fireEvent(this, evt);
		}
		return true;
	};

	_pTCPClientSocket.on_dataarrived = function (bytesread) {
		if (this.ondataarrived && this.ondataarrived._has_handlers) {
			var evt = new nexacro.SocketReceiveEventInfo(this, "ondataarrived", bytesread);
			return this.ondataarrived._fireEvent(this, evt);
		}
		return true;
	};

	_pTCPClientSocket.on_error = function (errmsg, errno) {
		this.errmsg = errmsg;
		this.errno = errno;
		if (this.onerror && this.onerror._has_handlers) {
			var evt = new nexacro.SocketErrorEventInfo(this, "onerror", errmsg, errno);
			return this.onerror._fireEvent(this, evt);
		}
		return true;
	};

	delete _pTCPClientSocket;
}

//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.1.html	
//
//==============================================================================

if (!nexacro.Device) {
	nexacro.DeviceI = function () {
		this._userCreatedObj = {
		};
		this.curDevice = 0;
		this.isphone = 0;
		this._is_hybrid = true;
	};

	var _pDeviceI = nexacro.DeviceI.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.DeviceI);
	_pDeviceI._type_name = "Device";
	_pDeviceI.setup = function () {
	};
	_pDeviceI.execiOS = function () {
	};

	_pDeviceI.exec = function (method) {
	};
	_pDeviceI.makeID = function () {
	};
	_pDeviceI.runCallback = function (sid, sfunc, params) {
	};
	_pDeviceI.on_created = function () {
	};
	_pDeviceI.isHybrid = function () {
	};
	_pDeviceI.useFakeXHR = function () {
	};

	_pDeviceI.publicNumCheck = function () {
	};
	_pDeviceI.paramck_folderName = function (strName) {
	};
	_pDeviceI.publicNumCheck_Sms = function () {
	};
	_pDeviceI.pramck_makeCall = function (strPhoneNumber, bAutoDialing) {
	};
	_pDeviceI.paramck_play = function (strFilePath) {
	};
	_pDeviceI.paramck_phoneNumber = function (strPhoneNumber) {
	};
	_pDeviceI.paramck_message = function (strMessage) {
	};
	_pDeviceI.paramck_sendMessage = function (strPhoneNumber, strMessage) {
	};
	_pDeviceI.paramck_deleteMessage = function (id) {
	};
	_pDeviceI.paramck_AudioLoad = function (strFilePath) {
	};
	_pDeviceI.paramck_isReachable = function (strUrl) {
	};
	_pDeviceI.paramck_watchStart = function (strTime) {
	};
	_pDeviceI.parmack_Geolocation = function (nAccuracy, nTimeout, method) {
	};
	_pDeviceI.paramck_vibstartpos = function (v) {
	};
	_pDeviceI.paramck_vibrepeatcount = function (v) {
	};
	_pDeviceI.paramck_vibpattern = function (obj) {
	};
	_pDeviceI.paramck_accuracy = function (v) {
	};
	_pDeviceI.parmack_AccelgetCurrentPosition = function (nAccuracy) {
	};
	_pDeviceI.pramck_AccelwatchStart = function (nIntervalTime, nAccuracy) {
	};
	_pDeviceI.pramck_virtualproperty = function (property) {
	};
	_pDeviceI.pramck_asyncOpen = function (strFileName, nOptions) {
	};
	_pDeviceI.pramck_asyncRead = function (nLength) {
	};
	_pDeviceI.pramck_asyncReadLine = function (strDelimeter) {
	};
	_pDeviceI.paramck_asyncSeek = function (nOffset, nOption) {
	};
	_pDeviceI.pramck_asyncDelete = function (strFilePath) {
	};
	_pDeviceI.pramck_asyncIsExist = function (strPath) {
	};
	_pDeviceI.pramck_asyncGetFileList = function (strPath, strSearchExpr, constOption) {
	};
	_pDeviceI.pramck_filedialog_defaultextension = function (property) {
	};
	_pDeviceI.pramck_filedialog_filter = function (property) {
	};
	_pDeviceI.pramck_filedialog_numbercheck = function (property) {
	};
	_pDeviceI.pramck_filedialogasyncOpen = function (strTitle, constOpenMode, strInitialPath, strFileName) {
	};
	_pDeviceI.pramck_contactString = function (strProperty) {
	};
	_pDeviceI.isConvertDateToString = function (dateString) {
	};
	_pDeviceI.isValidDate = function (argDate) {
	};
	_pDeviceI.pramk_ContactFieldArray = function (argContactFieldArr) {
	};
	_pDeviceI.pramk_ContactIMArray = function (argContactIMArr) {
	};
	_pDeviceI.pramk_ContactAddressArray = function (argContactAddressArr) {
	};
	_pDeviceI.pramk_ContactOrganizationArray = function (argContactOrganizationArr) {
	};
	_pDeviceI.pramk_ContactPhotoArray = function (argContactPhotoArr) {
	};
	_pDeviceI.parseDateToInt = function (strDate) {
	};
	_pDeviceI.paramck_takePicture = function (nQuality, nWidth, nHeight, strEncodingType, strGetType) {
	};
	_pDeviceI.paramck_busytimeout = function (timout) {
	};
	_pDeviceI.paramck_datasource = function (datasrc) {
	};
	_pDeviceI.paramck_asyncOpen = function (strDataSource, constOpenFlag) {
	};
	_pDeviceI.paramck_query = function (db_query) {
	};
	_pDeviceI.paramck_paramck_ldbconnection = function (objconnection) {
	};
	_pDeviceI.paramck_asyncExecuteQuery = function (db_query) {
	};
	_pDeviceI.paramck_ImagePicker_asyncOpen = function (nQuality, nWidth, nHeight, strEncodingType, strGetType) {
	};
	_pDeviceI.encodeString = function (source) {
	};
	_pDeviceI.DatasetToJSONString = function (dataset) {
	};
	_pDeviceI.DatasetToJSONObject = function (dataset) {
	};
	_pDeviceI.JSONObjectToDataset = function (jsonObject, dataset) {
	};
	_pDeviceI.JSONStringToDataset = function (jsonString, dataset) {
	};
	_pDeviceI.DatasetToJSONString2 = function (dataset) {
	};
	_pDeviceI.DatasetToJSONObject2 = function (dataset) {
	};
	_pDeviceI.JSONObjectToDataset2 = function (jsonObject, dataset) {
	};
	_pDeviceI.JSONStringToDataset2 = function (jsonString, dataset) {
	};
	_pDeviceI.exit = function (useCache) {
	};
	_pDeviceI = null;

	nexacro.Device = new nexacro.DeviceI();
	if (nexacro.Device.isHybrid()) {
		if (window.system) {
			if (nexacro.Device.curDevice == 1) {
				nexacro.System.prototype();
				nexacro.System.getSystemInfo();
			}
		}
	}

	if (nexacro.System) {
		nexacro.System.makeCall = function (strPhoneNumber, bAutoDialing) {
		};
		nexacro.System.execBrowserHybrid = function (strUrl) {
		};
		nexacro.System.play = function (strFilePath) {
		};
		nexacro.System.stop = function () {
		};
		nexacro.System.getSystemInfo = function () {
		};
		nexacro.System.recvPhoneInfo = function (params) {
		};
		nexacro.System.setOrientation = function (nOrientation) {
		};
		nexacro.System.getPackageVersion = function () {
		};
	}
}


if (!nexacro.Sms) {
	nexacro.Sms = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this._refform = obj;

		this.name = name || "";
		this.phonenumber = "";
		this.message = "";

		this.enableevent = true;
		this._is_alive = true;

		this._event_list = 
			{
			"cansendmessage" : 1, 
			"onsendmessage" : 1, 
			"onrecvmessage" : 1, 
			"ondeletemessage" : 1, 
			"onerror" : 1, 
			"onreadmessagelist" : 1
		};

		this.cansendmessage = null;
		this.onsendmessage = null;
		this.onrecvmessage = null;
		this.ondeletemessage = null;
		this.onerror = null;
		this.onreadmessagelist = null;

		var params = '""';
		var jsonstr;

		jsonstr = '{"id":' + this._id + ', "div":"Sms", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pSms = nexacro.Sms.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.Sms);
	_pSms._type_name = "Sms";

	_pSms.destroy = function () {
		var params = '""';
		var jsonstr;
		this._is_alive = false;

		delete nexacro.Device._userCreatedObj[this._id];

		jsonstr = '{"id":' + this._id + ', "div":"Sms", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pSms.on_created = function () {
	};

	_pSms._getReferenceContext = function () {
		return this._refform;
	};

	_pSms.set_phonenumber = function (v) {
		if (this.paramck_phoneNumber(v) == true) {
			this.phonenumber = v;
			return true;
		}
		return false;
	};

	_pSms.set_message = function (v) {
		if (this.paramck_message(v) == true) {
			this.message = v;
			return true;
		}
		return false;
	};

	_pSms.sendMessage = function (strPhoneNumber, strMessage) {
		if (nexacro.Device.curDevice != 0) {
			if (nexacro.SystemType == "ipad") {
				this.sendUnsupportedFunc();
				return false;
			}
		}

		var objSmsMessage = new nexacro.SmsMessage("SmsMessage", this);
		objSmsMessage.set_smsid("-1");

		if (strPhoneNumber == null && strMessage == null) {
			objSmsMessage.set_phonenumber(this.phonenumber || "");
			objSmsMessage.set_message(this.message || "");
		}
		else if (strPhoneNumber && strMessage) {
			if (typeof (strPhoneNumber) == "undefined") {
				strPhoneNumber = "";
			}
			if (typeof (strMessage) == "undefined") {
				strMessage = "";
			}

			if (!objSmsMessage.set_phonenumber(strPhoneNumber)) {
				return false;
			}

			objSmsMessage.set_message(strMessage);
		}
		else if (strPhoneNumber != null || strMessage != null) {
			if (typeof (strPhoneNumber) == "undefined") {
				strPhoneNumber = "";
			}
			if (!objSmsMessage.set_phonenumber(strPhoneNumber)) {
				return false;
			}

			objSmsMessage.set_message(strMessage || "");
		}
		else {
			return false;
		}

		var cansendFlag = this._cansendmessage(objSmsMessage.phonenumber, objSmsMessage.message);
		if (cansendFlag != null) {
			if (cansendFlag.toString() == "false") {
				return false;
			}
		}

		if (this.paramck_sendMessage(objSmsMessage.phonenumber, objSmsMessage.message)) {
			var params;
			var jsonstr;
			var renamephonNumber = objSmsMessage.phonenumber.split("+").join("");

			if (nexacro.Device.curDevice == 0) {
				params = '{"number":"' + renamephonNumber + '", "msg":"' + objSmsMessage.message + '"}';
			}
			else {
				params = '{  "number":"' + objSmsMessage.phonenumber;
				params += '", "msg":"' + objSmsMessage.message.replace(/\n/g, "_NEWLINE_");
				params += '"}';
			}

			jsonstr = '{"id":' + this._id + ', "div":"Sms", "method":"sendMessage", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);

			return true;
		}
		else {
			return false;
		}
	};

	_pSms.recvStart = function () {
		if (nexacro.Device.curDevice == 0) {
			var params = '""';
			var jsonstr = '{"id":' + this._id + ', "div":"Sms", "method":"recvStart", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}
		else {
			this.sendUnsupportedFunc();
		}
	};

	_pSms.recvStop = function () {
		if (nexacro.Device.curDevice == 0) {
			var params = '""';
			var jsonstr = '{"id":' + this._id + ', "div":"Sms", "method":"recvStop", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}
		else {
			this.sendUnsupportedFunc();
		}
	};

	_pSms.readMessageList = function () {
		if (nexacro.Device.curDevice == 0) {
			var params = '""';
			var jsonstr = '{"id":' + this._id + ', "div":"Sms", "method":"readMessageList", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}
		else {
			this.sendUnsupportedFunc();
		}
	};

	_pSms.deleteMessage = function (_id) {
		if (nexacro.Device.curDevice != 0) {
			this.sendUnsupportedFunc();
			return false;
		}

		this.index = _id;
		if (this.paramck_deleteMessage(this.index)) {
			if (nexacro.Device.curDevice == 0) {
				this.id = _id;
				var params = '{"id":"' + this.id + '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"Sms", "method":"deleteMessage", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			return true;
		}
		else {
			return false;
		}
	};

	_pSms._onsendmessage = function (objData) {
		var e;
		if (nexacro.Device.curDevice == 0) {
			e = new nexacro.SmsEventInfo("onsendmessage", objData.smsid, objData.phonenumber, objData.message);
		}
		else {
			e = new nexacro.SmsEventInfo("onsendmessage", -1, objData.phonenumber, objData.message);
		}
		this._fire_onsendmessage(this, e);
	};

	_pSms._fire_onsendmessage = function (objSms, eSmsEventInfo) {
		if (this.onsendmessage && this.onsendmessage._has_handlers) {
			return this.onsendmessage._fireEvent(this, eSmsEventInfo);
		}
		return true;
	};

	_pSms._onrecvmessage = function (objData) {
		var e = new nexacro.SmsEventInfo("onrecvmessage", objData.smsid, objData.phonenumber, objData.message);
		this._fire_onrecvmessage(this, e);
	};

	_pSms._fire_onrecvmessage = function (objSms, eSmsEventInfo) {
		if (this.onrecvmessage && this.onrecvmessage._has_handlers) {
			return this.onrecvmessage._fireEvent(this, eSmsEventInfo);
		}
		return true;
	};

	_pSms._onreadmessagelist = function (objData) {
		var arr = new Array(objData.length);
		for (var i = 0; i < objData.length; i++) {
			var jsonOb = eval("(" + objData[i] + ")");
			var temp = new nexacro.SmsMessage(jsonOb.id, jsonOb.phonenumber, jsonOb.message, jsonOb.type, jsonOb.date);
			arr[i] = temp;
		}
		var e = new nexacro.SmsMessagListEventInfo(arr);
		this._fire_onreadmessagelist(this, e);
	};

	_pSms._fire_onreadmessagelist = function (objSms, eSmsMsgList) {
		if (this.onreadmessagelist && this.onreadmessagelist._has_handlers) {
			return this.onreadmessagelist._fireEvent(this, eSmsMsgList);
		}
		return true;
	};

	_pSms._ondeletemessage = function (objData) {
		var e = new nexacro.SmsEventInfo("ondeletemessage", objData.smsid, objData.phonenumber, objData.message);
		this._fire_ondeletemessage(this, e);
	};

	_pSms._fire_ondeletemessage = function (objSms, eSmsEventInfo) {
		if (this.ondeletemessage && this.ondeletemessage._has_handlers) {
			return this.ondeletemessage._fireEvent(this, eSmsEventInfo);
		}
		return true;
	};

	_pSms._cansendmessage = function (strPhoneNumber, strMessage) {
		var e;

		if (nexacro.Device.curDevice == 0) {
			if (nexacro.__getMobileProductType().toLowerCase() == "shw-m380s") {
				this.sendUnsupportedFunc();
				return false;
			}
			e = new nexacro.SmsEventInfo("cansendmessage", "-1", strPhoneNumber, strMessage);
		}
		else {
			if (nexacro.SystemType == "ipad") {
				this.sendUnsupportedFunc();
				return false;
			}
			e = new nexacro.SmsEventInfo("cansendmessage", -1, strPhoneNumber, strMessage);
		}

		return this._fire_cansendmessage(this, e);
	};

	_pSms._fire_cansendmessage = function (objSms, eSmsEventInfo) {
		if (this.cansendmessage && this.cansendmessage._has_handlers) {
			return this.cansendmessage._fireEvent(this, eSmsEventInfo);
		}
		return true;
	};

	_pSms._onerror = function (objData) {
		var e;
		if (nexacro.Device.curDevice == 0) {
			e = new nexacro.SmsErrorEventInfo("onerror", objData.smsid, objData.phonenumber, objData.message, objData.errorcode, objData.errormsg);
		}
		else {
			objSmsMessage.set_smsid(-1);
			e = new nexacro.SmsErrorEventInfo("onerror", objData.smsid, objData.phonenumber, objData.message, objData.errorcode, objData.errormsg);
		}
		this._fire_onerror(this, e);
	};

	_pSms._fire_onerror = function (objSms, SmsErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, SmsErrorEventInfo);
		}
		return true;
	};

	_pSms.sendUnsupportedFunc = function () {
		var smsobj = this;

		nexacro.OnceCallbackTimer.callonce(this, function () {
			var e = new nexacro.SmsErrorEventInfo("onerror", "-1", smsobj.phonenumber, smsobj.message, "2002", "The phone does not support");
			this._fire_onerror(this, e);
		}, 20);

		return true;
	};

	_pSms.paramck_phoneNumber = function (strPhoneNumber) {
		if (strPhoneNumber == null || typeof (strPhoneNumber) == "undefined") {
			return false;
		}
		else {
			strPhoneNumber = strPhoneNumber.toString();
		}


		var number = "";
		try {
			number = strPhoneNumber.split("+").join("");
			number = number.split("-").join("");
		}
		catch (e) {
			return false;
		}

		if (number.length < 3) {
			return false;
		}

		if (!this.publicNumCheck_Sms(number)) {
			return false;
		}
		return true;
	};

	_pSms.paramck_message = function (strMessage) {
		if (strMessage == null || typeof (strMessage) == "undefined" || typeof (strMessage) != "string") {
			return false;
		}
		return true;
	};

	_pSms.paramck_sendMessage = function (strPhoneNumber, strMessage) {
		if (strPhoneNumber == null || strMessage == null || typeof (strPhoneNumber) == "undefined" || typeof (strMessage) == "undefined"
			 || typeof (strMessage) != "string") {
			return false;
		}
		else {
			strPhoneNumber = strPhoneNumber.toString();
		}

		try {
			var number = "";
			number = strPhoneNumber.split("+").join("");
			number = number.split("-").join("");
		}
		catch (e) {
			return false;
		}

		if (!this.publicNumCheck_Sms(number)) {
			return false;
		}

		return true;
	};

	_pSms.paramck_deleteMessage = function (id) {
		if (id == null || typeof (id) == "undefined") {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(id)) {
			return false;
		}

		if (id < 1) {
			return false;
		}

		return true;
	};

	_pSms.publicNumCheck_Sms = function (v) {
		try {
			var strlength = v.toString().split(" ").join("");
		}
		catch (e) {
			return false;
		}

		if (strlength.length == 0) {
			return false;
		}

		try {
			var numberss = Number(v.toString());
		}
		catch (e) {
			return false;
		}

		return true;
	};

	_pSms = null;
}

if (!nexacro.SmsMessagListEventInfo) {
	nexacro.SmsMessagListEventInfo = function (obj) {
		this.eventid = "onreadmessagelist";
		this.smsmessages = obj;
	};
	var _pSmsMsgList = nexacro.SmsMessagListEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.SmsMessagListEventInfo);
	_pSmsMsgList._type_name = "SmsMessageListEventInfo";

	_pSmsMsgList = null;
}

if (!nexacro.SmsMessage) {
	nexacro.SmsMessage = function (_id, _number, _message, _type, _data) {
		this.smsid = _id;
		this.phonenumber = _number;
		this.message = _message;
		this.type = _type;
		this.date = _data;
	};
	var _pSmsMessage = nexacro.SmsMessage.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.SmsMessage);
	_pSmsMessage._type_name = "SmsMessage";

	_pSmsMessage.set_phonenumber = function (v) {
		if (this.paramck_phoneNumber(v) == true) {
			this.phonenumber = v;
			return true;
		}
		return false;
	};

	_pSmsMessage.set_message = function (v) {
		if (this.paramck_message(v) == true) {
			this.message = v;
			return true;
		}
		return false;
	};

	_pSmsMessage.set_smsid = function (v) {
		if (typeof (v) == "undefined") {
			this.smsid = "";
			return true;
		}
		else if (typeof (v) == "string") {
			this.smsid = Number(v);
			return true;
		}
		else {
			this.smsid = v;
			return true;
		}
		return false;
	};

	_pSmsMessage.set_type = function (v) {
		if (typeof (v) == "undefined") {
			this.Type = "";
			return true;
		}
		else {
			this.Type = v;
			return true;
		}
		return false;
	};

	_pSmsMessage.set_date = function (v) {
		if (typeof (v) == "undefined") {
			this.date = "";
			return true;
		}
		else {
			this.date = v;
			return true;
		}
		return false;
	};

	_pSmsMessage.paramck_phoneNumber = function (strPhoneNumber) {
		if (strPhoneNumber == null || typeof (strPhoneNumber) == "undefined") {
			return false;
		}
		else {
			strPhoneNumber = strPhoneNumber.toString();
		}


		var number = "";
		try {
			number = strPhoneNumber.split("+").join("");
			number = number.split("-").join("");
		}
		catch (e) {
			return false;
		}

		if (number.length < 3) {
			return false;
		}

		if (!this.publicNumCheck_Sms(number)) {
			return false;
		}
		return true;
	};

	_pSmsMessage.paramck_message = function (strMessage) {
		if (strMessage == null || typeof (strMessage) == "undefined" || typeof (strMessage) != "string") {
			return false;
		}
		return true;
	};

	_pSmsMessage.publicNumCheck_Sms = function (v) {
		try {
			var strlength = v.toString().split(" ").join("");
		}
		catch (e) {
			return false;
		}

		if (strlength.length == 0) {
			return false;
		}

		try {
			var numberss = Number(v.toString());
		}
		catch (e) {
			return false;
		}

		return true;
	};

	_pSmsMessage = null;
}

if (!nexacro.SmsEventInfo) {
	nexacro.SmsEventInfo = function (strEventId, strSmsId, strPhonenumber, strMessage) {
		if (typeof (strSmsId) == "undefined") {
			this.smsid = "";
		}
		else if (typeof (strSmsId) == "string") {
			this.smsid = Number(strSmsId);
		}
		else {
			this.smsid = strSmsId;
		}

		this.eventid = strEventId;
		this.phonenumber = strPhonenumber;

		if (nexacro.Device.curDevice == 0) {
			this.message = strMessage;
		}
		else {
			this.message = strMessage.replace(/__NEW_LINE__/g, "\n");
		}
	};

	var _pSmsEventInfo = nexacro.SmsEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.SmsEventInfo);
	_pSmsEventInfo._type_name = "SmsEventInfo";

	_pSmsEventInfo = null;
}

if (!nexacro.SmsErrorEventInfo) {
	nexacro.SmsErrorEventInfo = function (strEventId, strSmsId, strPhonenumber, strMessage, intErrorCode, strErrorMsg) {
		if (typeof (strSmsId) == "undefined") {
			this.smsid = "";
		}
		else {
			this.smsid = strSmsId;
		}
		this.eventid = strEventId;
		this.smsid = strSmsId;
		this.phonenumber = strPhonenumber;

		if (nexacro.Device.curDevice == 0) {
			this.message = strMessage;
		}
		else {
			this.message = strMessage.replace(/__NEW_LINE__/g, "\n");
		}
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
	};

	var _pSmsErrorEventInfo = nexacro.SmsErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.SmsErrorEventInfo);
	_pSmsErrorEventInfo._type_name = "SmsErrorEventInfo";

	_pSmsErrorEventInfo = null;
}


if (!nexacro.AudioPlayer) {
	nexacro.AudioPlayer = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this._refform = obj;
		this.name = name || "";

		this.bload = false;
		this.bplay = false;
		this.bpaused = false;
		this.enableevent = true;
		this._is_alive = true;

		this.url = "";
		this.duration = 0.0;
		this.currentpos = 0.0;
		this.repeatcount = 1;
		this.startpos = -1;
		this.stoppos = -1;
		this.volume = -1;
		this.pan = -1;

		this._event_list = 
			{
			"onload" : 1, 
			"onplay" : 1, 
			"onplaying" : 1, 
			"onstop" : 1, 
			"onerror" : 1, 
			"onmovepos" : 1
		};

		this.onload = null;
		this.onplay = null;
		this.onplaying = null;
		this.onstop = null;
		this.onerror = null;
		this.onmovepos = null;

		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pAudioPlayer = nexacro.AudioPlayer.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.AudioPlayer);
	_pAudioPlayer._type_name = "AudioPlayer";

	_pAudioPlayer.destroy = function () {
		var params = '""';
		var jsonstr;
		this._is_alive = false;

		delete nexacro.Device._userCreatedObj[this._id];
		jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pAudioPlayer.on_created = function () {
	};

	_pAudioPlayer._getReferenceContext = function () {
		return this._refform;
	};

	_pAudioPlayer.setSystemVolume = function (v) {
		this.volume = v;
	};

	_pAudioPlayer.set_duration = function (v) {
	};
	_pAudioPlayer.set_currentpos = function (v) {
	};

	_pAudioPlayer.set_repeatcount = function (v) {
		if (typeof (v) == "undefind" || v == null) {
			return false;
		}
		else {
			if (nexacro.Device.publicNumCheck(v)) {
				if (v >= 0) {
					this.repeatcount = v;
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pAudioPlayer.set_startpos = function (v) {
		if (typeof (v) == "undefind" || v == null) {
			return false;
		}
		else {
			if ((v == -1) || (0 <= v && v <= this.duration)) {
				this.startpos = v;
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pAudioPlayer.set_stoppos = function (v) {
		if (typeof (v) == "undefind" || v == null) {
			return false;
		}
		else {
			if ((v == -1) || (0 <= v && v <= this.duration)) {
				this.stoppos = v;
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pAudioPlayer.set_volume = function (v) {
		if (typeof (v) == "undefind" || v == null) {
			return false;
		}
		else {
			if ((v >= 0.0 && v <= 1.0) || v == -1) {
				this.volume = v;
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pAudioPlayer.set_pan = function (v) {
		if (typeof (v) == "undefind" || v == null) {
			return false;
		}
		else {
			if ((v >= 0.0 && v <= 1.0) || v == -1) {
				this.pan = v;
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pAudioPlayer.set_url = function (v) {
		var pcheck = this.paramck_AudioLoad(v);
		if (pcheck == true) {
			this.url = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pAudioPlayer.load = function (strUrl) {
		this.startpos = -1;
		this.stoppos = -1;

		var pcheck = this.paramck_AudioLoad(strUrl);
		if (pcheck == true) {
			this.url = strUrl;
			if (nexacro.Device.curDevice == 0) {
				var EnvironmentPath = "";
				var androidFilePath = "";
				var rootPathCheck = strUrl.substring(0, 9);

				if (rootPathCheck.toLowerCase() == "%userapp%") {
					EnvironmentPath = 1;
					androidFilePath = strUrl.substring(9, strUrl.length);
				}
				else if (rootPathCheck.toLowerCase() == "%sd_card%") {
					EnvironmentPath = 2;
					androidFilePath = strUrl.substring(9, strUrl.length);
				}
				else if (rootPathCheck.substring(0, 7) == "http://") {
					androidFilePath = strUrl;
					EnvironmentPath = "";
				}
				else {
					var _filecache = application._getFileCache(strUrl);
					if (null != _filecache) {
						EnvironmentPath = 3;
						androidFilePath = _filecache;
					}
					else {
						androidFilePath = strUrl;
					}
				}
				var params = '{"target":"' + androidFilePath + '", "EnvironmentPath":"' + EnvironmentPath + '"}';
			}
			else {
				var iosfilepath = "";
				var rootPathCheck = strUrl.substring(0, 9);

				if (rootPathCheck.toLowerCase() == "%userapp%") {
					iosfilepath = "_userapp_" + strUrl.substring(9, strUrl.length);
				}
				else if (rootPathCheck.substring(0, 7) == "http://") {
					iosfilepath = strUrl;
				}
				else {
					var _filecache = application._getFileCache(strUrl);
					if (null != _filecache) {
						iosfilepath = "_userapp_" + _filecache;
					}
					else {
						iosfilepath = strUrl;
					}
				}

				var params = '{"target":"' + iosfilepath + '"}';
			}
			var jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"load", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
			return true;
		}
		else {
			return false;
		}
	};

	_pAudioPlayer.play = function (nIntervalTime) {
		var params;
		var jsonstr;

		var IntervalTimeState;
		if (typeof (nIntervalTime) == "undefined" || nIntervalTime == null || nIntervalTime == "") {
			nIntervalTime = 0;
			IntervalTimeState = 1;
		}
		else {
			if (nexacro.Device.publicNumCheck(nIntervalTime) && nIntervalTime >= 0 && nIntervalTime <= 86400000) {
				if (nIntervalTime < 200) {
					return false;
				}
				else {
					IntervalTimeState = 0;
				}
			}
			else {
				return false;
			}
		}

		if (typeof (this.repeatcount) == "undefined" || this.repeatcount == null) {
			this.repeatcount = 1;
		}

		if (typeof (this.startpos) == "undefined" || this.startpos == null || this.startpos == 0) {
			this.startpos = -1;
		}

		if (typeof (this.stoppos) == "undefined" || this.stoppos == null || this.stoppos == 0) {
			this.stoppos = -1;
		}

		if (this.volume >= 0.0 && this.volume <= 1.0) {
			this.setvolume();
		}

		if ((this.pan >= 0.0 && this.pan <= 1.0) || this.pan == -1) {
			this.setpan();
		}

		if (nexacro.Device.curDevice == 0) {
			params = '{  repeatstartpos:"' + this.startpos;
			params += '", repeatstoppos:"' + this.stoppos;
			params += '", repeatcount:"' + this.repeatcount;
			params += '", playingeventtime:"' + nIntervalTime;
			params += '", intervaltimestate:"' + IntervalTimeState;
			params += '"}';
		}
		else {
			params = '{  "repeatstartpos":"' + this.startpos;
			params += '", "repeatstoppos":"' + this.stoppos;
			params += '", "repeatcount":"' + this.repeatcount;
			params += '", "playingeventtime":"' + nIntervalTime;
			params += '", "intervaltimestate":"' + IntervalTimeState;
			params += '"}';
		}


		if (this.bload == false) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", "0", "1007", "Not loaded");
				this._fire_onerror(this, e);
			}, 20);
			return true;
		}

		if (this.bplay == true) {
			var avobj = this;

			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", avobj.currentpos, "1008", "Already playing");
				this._fire_onerror(this, e);
			}, 20);
			return true;
		}


		if (this.startpos == -1 && this.stoppos == -1) {
			jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"play", "params":' + params + '}';
		}
		else {
			jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"repeatplay", "params":' + params + '}';
		}

		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pAudioPlayer.pause = function () {
		if (this.bload == false) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", "0", "1007", "Not loaded");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}

		if (this.bplay == false && this.bpaused == false) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", "0", "1009", "Not playing");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}

		if (this.bpaused == true) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", this.currentpos, "1303", "Already paused");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}

		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"pause", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pAudioPlayer.resume = function () {
		if (this.bload == false) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", "0", "1007", "Not loaded");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}

		if (this.bplay == true) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", this.currentpos, "1011", "Not Paused");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}

		if (this.bpaused == false) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", this.currentpos, "1010", "Can't resume.");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}

		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"resume", "params":' + params + '}';

		nexacro.Device.exec(jsonstr);
	};

	_pAudioPlayer.stop = function () {
		if (this.bload == false) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", "0", "1007", "Not loaded");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}

		if (this.bplay == false && this.bpaused != true) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", this.currentpos, "1009", "Not playing");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}

		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"stop", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pAudioPlayer._onload = function (objData) {
		var e = new nexacro.AudioEventInfo("onload", objData.reason, objData.url, objData.playtime, objData.curtime, objData.repeatstart, objData.repeatend, objData.repeatcount);
		this.duration = objData.playtime;

		this.bload = true;
		this.bplay = false;
		this.bpaused = false;
		this.duration = objData.playtime;
		this._fire_onload(this, e);
	};

	_pAudioPlayer._fire_onload = function (objAudioPlayer, eAudioEventInfo) {
		if (this.onload && this.onload._has_handlers) {
			return this.onload._fireEvent(this, eAudioEventInfo);
		}
		return true;
	};

	_pAudioPlayer._onplay = function (objData) {
		var e = new nexacro.AudioEventInfo("onplay", objData.reason, objData.url, objData.playtime, objData.curtime, objData.repeatstart, objData.repeatend, objData.repeatcount);
		this.duration = objData.playtime;
		this.currentpos = objData.curtime;

		this.bplay = true;
		this.bpaused = false;

		this._fire_onplay(this, e);
	};

	_pAudioPlayer._fire_onplay = function (objAudioPlayer, eAudioEventInfo) {
		if (this.onplay && this.onplay._has_handlers) {
			return this.onplay._fireEvent(this, eAudioEventInfo);
		}
		return true;
	};

	_pAudioPlayer._onplaying = function (objData) {
		var e = new nexacro.AudioEventInfo("onplaying", objData.reason, objData.url, objData.playtime, objData.curtime, objData.repeatstart, objData.repeatend, objData.repeatcount);
		this.duration = objData.playtime;
		this.currentpos = objData.curtime;
		this._fire_onplaying(this, e);
	};

	_pAudioPlayer._fire_onplaying = function (objAudioPlayer, eAudioEventInfo) {
		if (this.onplaying && this.onplaying._has_handlers) {
			return this.onplaying._fireEvent(this, eAudioEventInfo);
		}
		return true;
	};

	_pAudioPlayer._onstop = function (objData) {
		var e = new nexacro.AudioEventInfo("onstop", objData.reason, objData.url, objData.playtime, objData.curtime, objData.repeatstart, objData.repeatend, objData.repeatcount);
		this.duration = objData.playtime;
		this.currentpos = objData.curtime;
		if (objData.reason == "4" || objData.reason == "5") {
			this.bpaused = false;
			this.bplay = false;
			this.currentpos = 0.0;
		}
		else if (objData.reason == "6") {
			this.bpaused = true;
			this.bplay = false;
		}
		this._fire_onstop(this, e);
	};

	_pAudioPlayer._fire_onstop = function (objAudioPlayer, eAudioEventInfo) {
		if (this.onstop && this.onstop._has_handlers) {
			return this.onstop._fireEvent(this, eAudioEventInfo);
		}
		return true;
	};

	_pAudioPlayer.movePos = function (nPos) {
		if (this.bload == false) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", 0, "1007", "Not loaded");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}

		if (typeof (nPos) != "undefined" && (nPos >= 0 && nPos <= this.duration) && nexacro.Device.publicNumCheck(nPos)) {
			this.time = nPos || "";
			var params;
			if (nexacro.Device.curDevice == 0) {
				params = '{  desttime:"' + this.time;
				params += '"}';
			}
			else {
				params = '{  "desttime":"' + this.time;
				params += '"}';
			}
			var jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"movePos", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
			return true;
		}
		else {
			return false;
		}
	};

	_pAudioPlayer._onmovepos = function (objData) {
		this.currentpos = objData.curtime;
		var e = new nexacro.AudioEventInfo("onmovepos", objData.reason, objData.url, objData.playtime, objData.curtime, objData.repeatstart, objData.repeatend, objData.repeatcount);
		this.duration = objData.playtime;
		this._fire_onmovepos(this, e);
	};

	_pAudioPlayer._fire_onmovepos = function (objAudioPlayer, eAudioEventInfo) {
		if (this.onmovepos && this.onmovepos._has_handlers) {
			return this.onmovepos._fireEvent(this, eAudioEventInfo);
		}
		return true;
	};

	_pAudioPlayer.setvolume = function () {
		var params;
		if (nexacro.Device.curDevice == 0) {
			params = '{  volume:"' + this.volume;
			params += '"}';
		}
		else {
			params = '{  "volume":"' + this.volume;
			params += '"}';
		}
		var jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"setvolum", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pAudioPlayer.setpan = function () {
		var params;
		if (nexacro.Device.curDevice == 0) {
			params = '{  pan:"' + this.pan;
			params += '"}';
		}
		else {
			params = '{  "pan":"' + this.pan;
			params += '"}';
		}
		var jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"setpan", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pAudioPlayer._onerror = function (objData) {
		var e = new nexacro.AudioErrorEventInfo("onerror", objData.url, objData.curtime, objData.errorcode, objData.errormsg);
		this._fire_onerror(this, e);
	};

	_pAudioPlayer._fire_onerror = function (objAudioPlayer, AudioErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, AudioErrorEventInfo);
		}
		return true;
	};

	_pAudioPlayer.paramck_AudioLoad = function (strFilePath) {
		if (strFilePath == null || typeof (strFilePath) == "undefined" || typeof (strFilePath) != "string") {
			return false;
		}
		return true;
	};

	_pAudioPlayer = null;
}

if (!nexacro.AudioEventInfo) {
	nexacro.AudioEventInfo = function (strEventId, strReason, strUrl, intPlaytime, intCurtime, intrepeatstart, intrepeatend, intrepeatcount) {
		this.eventid = strEventId;
		this.reason = strReason;
		this.url = strUrl;
		this.duration = intPlaytime;
		this.currentpos = intCurtime;
	};
	var _pAudioEventInfo = nexacro.AudioEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.AudioEventInfo);
	_pAudioEventInfo._type_name = "AudioEventInfo";

	_pAudioEventInfo = null;
}

if (!nexacro.AudioErrorEventInfo) {
	nexacro.AudioErrorEventInfo = function (strEventId, strUrl, intCurtime, intErrorCode, strErrorMsg) {
		this.eventid = strEventId;
		this.url = strUrl;
		this.currentpos = intCurtime;
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
	};
	var _pAudioErrorEventInfo = nexacro.AudioErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.AudioErrorEventInfo);
	_pAudioErrorEventInfo._type_name = "AudioErrorEventInfo";

	_pAudioErrorEventInfo = null;
}


if (!nexacro.Geolocation) {
	nexacro.Geolocation = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";

		this.ACCURACY_0 = 0;
		this.ACCURACY_1 = 1;
		this.ACCURACY_2 = 2;
		this.ACCURACY_3 = 3;
		this.ACCURACY_4 = 4;

		this.coords = {
			latitude : 0.0, 
			longitude : 0.0, 
			altitude : 0.0, 
			heading : 0.0, 
			speed : 0.0, 
			accuracy : 0.0, 
			altitudeaccuracy : 0.0, 
			set_latitude : function () {
			}, 
			set_longitude : function () {
			}, 
			set_altitude : function () {
			}, 
			set_heading : function () {
			}, 
			set_speed : function () {
			}, 
			set_accuracy : function () {
			}, 
			set_altitudeaccuracy : function () {
			}
		};
		this.timestamp = "";
		this.sourcetype = "";
		this.enableevent = true;

		this._event_list = 
			{
			"onrecvsuccess" : 1, 
			"onrecverror" : 1
		};

		this.onrecvsuccess = null;
		this.onrecverror = null;

		var params = '""';
		var jsonstr;

		jsonstr = '{"id":' + this._id + ', "div":"Geolocation", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pGeolocation = nexacro.Geolocation.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.Geolocation);
	_pGeolocation._type_name = "Geolocation";

	_pGeolocation.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];

		jsonstr = '{"id":' + this._id + ', "div":"Geolocation", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pGeolocation.on_created = function () {
	};


	_pGeolocation.set_coords = function () {
	};


	_pGeolocation.set_latitude = function () {
	};
	_pGeolocation.set_longitude = function () {
	};
	_pGeolocation.set_altitude = function () {
	};
	_pGeolocation.set_heading = function () {
	};
	_pGeolocation.set_speed = function () {
	};
	_pGeolocation.set_accuracy = function () {
	};
	_pGeolocation.set_altitudeaccuracy = function () {
	};

	_pGeolocation.set_sourcetype = function () {
	};
	_pGeolocation.set_timestamp = function () {
	};

	_pGeolocation.getCurrentPosition = function (nAccuracy, nTimeout) {
		var params;

		if (nAccuracy == null || nTimeout == null) {
			return false;
		}

		if (this.parmack_Geolocation(nAccuracy, nTimeout, 1)) {
			this.Accuracy = nAccuracy;
			this.Timeout = nTimeout;
			if (nexacro.Device.curDevice == 0) {
				params = '{Accuracy:"' + this.Accuracy + '", Timeout:"' + this.Timeout + '"}';
			}
			else {
				params = '{"Accuracy":"' + this.Accuracy;
				params += '", "timeout":"' + this.Timeout + '"}';
			}

			var jsonstr = '{"id":' + this._id + ', "div":"Geolocation", "method":"getCurrentPosition", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);

			return true;
		}
		else {
			return false;
		}
	};

	_pGeolocation.watchStart = function (nAccuracy, nIntervalTime) {
		var params;

		if (nAccuracy == null || nIntervalTime == null) {
			return false;
		}

		if (this.parmack_Geolocation(nAccuracy, nIntervalTime, 2)) {
			this.Accuracy = nAccuracy.toString();
			this.IntervalTime = nIntervalTime.toString();

			if (nexacro.Device.curDevice == 0) {
				params = '{"Accuracy":"' + this.Accuracy + '", "IntervalTime":"' + this.IntervalTime + '"}';
			}
			else {
				this.Accuracy = nAccuracy;
				params = '{"Accuracy":"' + this.Accuracy;
				params += '", "timeout":"' + this.IntervalTime + '"}';
			}

			var jsonstr = '{"id":' + this._id + ', "div":"Geolocation", "method":"watchStart", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}
		else {
			return false;
		}
		return true;
	};

	_pGeolocation.watchStop = function () {
		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"Geolocation", "method":"watchStop", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pGeolocation._onrecvsuccess = function (objData) {
		this.coords.latitude = objData.coords.latitude;
		this.coords.longitude = objData.coords.longitude;
		this.coords.altitude = objData.coords.altitude;
		this.coords.heading = objData.coords.heading;
		this.coords.speed = objData.coords.speed;
		this.coords.accuracy = objData.coords.accuracy;
		this.coords.altitudeaccuracy = objData.coords.altitudeaccuracy;
		this.timestamp = new Date(objData.timestamp);
		this.sourcetype = objData.sourcetype;

		var e = new nexacro.GeolocationEventInfo("onrecvsuccess", this.coords, this.timestamp, this.sourcetype);
		this._fire_onrecvsuccess(this, e);
	};

	_pGeolocation._fire_onrecvsuccess = function (objGeolocation, eGeolocationEventInfo) {
		if (this.onrecvsuccess && this.onrecvsuccess._has_handlers) {
			return this.onrecvsuccess._fireEvent(this, eGeolocationEventInfo);
		}
		return true;
	};

	_pGeolocation._onrecverror = function (objData) {
		var e = new nexacro.GeolocationErrorEventInfo("onrecverror", objData.errorcode, objData.errormsg);
		this._fire_onrecverror(this, e);
	};

	_pGeolocation._fire_onrecverror = function (objGeolocation, eGeolocationErrorEventInfo) {
		if (this.onrecverror && this.onrecverror._has_handlers) {
			return this.onrecverror._fireEvent(this, eGeolocationErrorEventInfo);
		}
		return true;
	};

	_pGeolocation.parmack_Geolocation = function (nAccuracy, nTimeout, method) {
		if (nAccuracy == null || typeof (nAccuracy) == "undefined") {
			return false;
		}

		if (nTimeout == null || typeof (nTimeout) == "undefined") {
			return false;
		}

		if (method == null || typeof (method) == "undefined") {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(nAccuracy)) {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(nTimeout)) {
			return false;
		}

		if (nexacro.Device.curDevice == 0) {
			if (method == 1) {
				if ((nAccuracy >= 0 && nAccuracy < 3) && (nTimeout >= 200 && nTimeout <= 86400000)) {
					return true;
				}
				else {
					return false;
				}
			}
			else if (method == 2) {
				if ((nAccuracy >= 0 && nAccuracy < 3) && (nTimeout >= 200 && nTimeout <= 86400000)) {
					return true;
				}
				else {
					return false;
				}
			}
		}
		else {
			if (method == 1) {
				if ((nAccuracy >= 0 && nAccuracy < 5) && (nTimeout >= 200 && nTimeout <= 86400000)) {
					return true;
				}
				else {
					return false;
				}
			}
			else if (method == 2) {
				if ((nAccuracy >= 0 && nAccuracy < 5) && (nTimeout >= 200 && nTimeout <= 86400000)) {
					return true;
				}
				else {
					return false;
				}
			}
		}
		return true;
	};

	_pGeolocation = null;
}

if (!nexacro.GeolocationEventInfo) {
	nexacro.GeolocationEventInfo = function (strEventId, objCoords, strTimestamp, strSourcetype) {
		this.eventid = strEventId;
		this.coords = {
			latitude : Number(objCoords.latitude), 
			longitude : Number(objCoords.longitude), 
			altitude : Number(objCoords.altitude), 
			heading : Number(objCoords.heading), 
			speed : Number(objCoords.speed), 
			accuracy : Number(objCoords.accuracy), 
			altitudeaccuracy : Number(objCoords.altitudeaccuracy)
		};
		this.timestamp = strTimestamp;
		this.sourcetype = strSourcetype;
	};
	var _pGeolocationEventInfo = nexacro.GeolocationEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.GeolocationEventInfo);
	_pGeolocationEventInfo._type_name = "GeolocationEventInfo";

	_pGeolocationEventInfo = null;
}

if (!nexacro.GeolocationErrorEventInfo) {
	nexacro.GeolocationErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg) {
		this.eventid = strEventId;
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
	};
	var _pGeolocationErrorEventInfo = nexacro.GeolocationErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.GeolocationErrorEventInfo);
	_pGeolocationErrorEventInfo._type_name = "GeolocationErrorEventInfo";

	_pGeolocationErrorEventInfo = null;
}


if (!nexacro.Acceleration) {
	nexacro.Acceleration = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";

		this.xpos = 0;
		this.ypos = 0;
		this.zpos = 0;
		this.timestamp = "";
		this.accuracy = 0;
		this.enableevent = true;

		this._event_list = {
			"onrecvsuccess" : 1, 
			"onrecverror" : 1
		};

		this.onrecvsuccess = null;
		this.onrecverror = null;

		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"Acceleration", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pAcceleration = nexacro.Acceleration.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.Acceleration);
	_pAcceleration._type_name = "Acceleration";

	_pAcceleration.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];

		jsonstr = '{"id":' + this._id + ', "div":"Acceleration", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pAcceleration.on_created = function () {
	};

	_pAcceleration.set_xpos = function () {
	};
	_pAcceleration.set_ypos = function () {
	};
	_pAcceleration.set_zpos = function () {
	};
	_pAcceleration.set_timestamp = function () {
	};
	_pAcceleration.set_accuracy = function () {
	};

	_pAcceleration.getCurrentAcceleration = function (nAccuracy) {
		var params;

		if (typeof (nAccuracy) == "undefined" || nAccuracy == null) {
			this.accuracy = 0;
		}
		else {
			if (this.paramck_accuracy(nAccuracy)) {
				if (nAccuracy >= 0 && nAccuracy <= 3) {
					this.accuracy = nAccuracy;
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}

		var pcheck = this.parmack_AccelgetCurrentPosition(this.accuracy);
		if (pcheck == true) {
			if (nexacro.Device.curDevice == 0) {
				params = '{"Accuracy" : "' + this.accuracy.toString() + '"}';
			}
			else {
				params = '{"Accuracy":"' + this.accuracy + '"}';
			}

			var jsonstr = '{"id":' + this._id + ', "div":"Acceleration", "method":"getCurrentAcceleration", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);

			return true;
		}
		else {
			return false;
		}
	};

	_pAcceleration.watchStart = function (nAccuracy, nIntervalTime) {
		var params;

		var pcheck = this.pramck_AccelwatchStart(nIntervalTime, nAccuracy);
		if (pcheck == true) {
			if (nexacro.Device.curDevice == 0) {
				params = '{  IntervalTime:"' + nIntervalTime;
				params += '", Accuracy:"' + nAccuracy;
				params += '"}';
			}
			else {
				params = '{"timeout":"' + nIntervalTime;
				params += '", "Accuracy":"' + nAccuracy;
				params += '"}';
			}

			var jsonstr = '{"id":' + this._id + ', "div":"Acceleration", "method":"watchStart", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);

			return true;
		}
		else {
			return false;
		}
	};

	_pAcceleration.watchStop = function () {
		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"Acceleration", "method":"watchStop", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pAcceleration._onrecvsuccess = function (objData) {
		this.xpos = parseFloat(objData.xpos);
		this.ypos = parseFloat(objData.ypos);
		this.zpos = parseFloat(objData.zpos);
		this.timestamp = new Date(objData.timestamp);
		this.accuracy = parseFloat(objData.accuracy);
		var e = new nexacro.AccelerationEventInfo("onrecvsuccess", this);
		this._fire_onrecvsuccess(this, e);
	};

	_pAcceleration._fire_onrecvsuccess = function (objAcceleration, eAccelerationEventInfo) {
		if (this.onrecvsuccess && this.onrecvsuccess._has_handlers) {
			return this.onrecvsuccess._fireEvent(this, eAccelerationEventInfo);
		}
		return true;
	};

	_pAcceleration._onrecverror = function (objData) {
		var e = new nexacro.AccelerationErrorEventInfo("onrecverror", objData.errorcode, objData.errormsg);
		this._fire_onrecverror(this, e);
	};

	_pAcceleration._fire_onrecverror = function (objAcceleration, eAccelerationErrorEventInfo) {
		if (this.onrecverror && this.onrecverror._has_handlers) {
			return this.onrecverror._fireEvent(this, eAccelerationErrorEventInfo);
		}
		return true;
	};

	_pAcceleration.paramck_accuracy = function (v) {
		if (v == null || typeof (v) == "undefined") {
			return false;
		}
		if (!nexacro.Device.publicNumCheck(v)) {
			return false;
		}
		return true;
	};

	_pAcceleration.parmack_AccelgetCurrentPosition = function (nAccuracy) {
		if (!nexacro.Device.publicNumCheck(nAccuracy)) {
			return false;
		}
		return true;
	};

	_pAcceleration.pramck_AccelwatchStart = function (nIntervalTime, nAccuracy) {
		if (nIntervalTime == null || typeof (nIntervalTime) == "undefined") {
			return false;
		}

		if (nAccuracy == null || typeof (nAccuracy) == "undefined") {
			return false;
		}

		if ((nAccuracy >= 0 && nAccuracy <= 3) && (nIntervalTime >= 200 && nIntervalTime <= 86400000)) {
		}
		else {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(nIntervalTime)) {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(nAccuracy)) {
			return false;
		}

		return true;
	};

	_pAcceleration = null;
}

if (!nexacro.AccelerationEventInfo) {
	nexacro.AccelerationEventInfo = function (strEventId, objAcceleration) {
		this.eventid = strEventId;
		this.xpos = objAcceleration.xpos;
		this.ypos = objAcceleration.ypos;
		this.zpos = objAcceleration.zpos;
		this.timestamp = objAcceleration.timestamp;
		this.accuracy = objAcceleration.accuracy;
	};
	_pAccelerationEventInfo = nexacro.AccelerationEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.AccelerationEventInfo);
	_pAccelerationEventInfo._type_name = "AccelerationEventInfo";

	_pAccelerationEventInfo = null;
}

if (!nexacro.AccelerationErrorEventInfo) {
	nexacro.AccelerationErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg) {
		this.eventid = strEventId;
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
	};
	_pAccelerationErrorEventInfo = nexacro.AccelerationErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.AccelerationErrorEventInfo);
	_pAccelerationErrorEventInfo._type_name = "AccelerationErrorEventInfo";

	_pAccelerationErrorEventInfo = null;
}


if (!nexacro.Vibrator) {
	nexacro.Vibrator = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";

		this.repeatcount = "1";
		this.patterns = new Array(100, 100);
		this.startpos = "0";
		this.enableevent = true;

		this._event_list = {
			"onplay" : 1, 
			"onstop" : 1, 
			"onerror" : 1
		};

		this.onplay = null;
		this.onstop = null;
		this.onerror = null;

		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"Vibrator", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pVibrator = nexacro.Vibrator.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.Vibrator);
	_pVibrator._type_name = "Vibrator";

	_pVibrator.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];

		jsonstr = '{"id":' + this._id + ', "div":"Vibrator", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pVibrator.on_created = function () {
	};

	_pVibrator.set_repeatcount = function (v) {
		if (this.paramck_vibrepeatcount(v)) {
			this.repeatcount = v;
			return true;
		}
		return false;
	};

	_pVibrator.set_patterns = function (v) {
		if (this.paramck_vibpattern(v)) {
			this.patterns = v;
			return true;
		}
		return false;
	};

	_pVibrator.set_startpos = function (v) {
		if (this.paramck_vibstartpos(v)) {
			this.startpos = v;
			return true;
		}
		return false;
	};

	_pVibrator.hasVibrator = function () {
		if (nexacro.Device.curDevice == 0) {
			return nexacro.__hasVibrator();
		}
		else {
			if (nexacro.Device.isphone == 1) {
				return true;
			}
			else {
				return false;
			}
		}
	};

	_pVibrator.play = function () {
		var params;

		if (nexacro.Device.curDevice == 0) {
			if (this.startpos < this.patterns.length && this.startpos >= 0) {
				var startPosArray = new Array();
				var startIndex = 0;
				if (Number(this.startpos) % 2 != 0) {
					startPosArray[0] = 0;
					startIndex++;
				}

				var lastIndex = this.patterns.length;
				for (var i = this.startpos; i < lastIndex; i++) {
					startPosArray[startIndex] = this.patterns[i];
					startIndex++;
				}

				params = '{  turn:"' + this.repeatcount.toString();
				params += '", delay:"' + startPosArray;
				params += '"}';
			}
			else {
				return this._onerror({
					errorcode : '00001', 
					errormsg : 'parameter error'
				});
			}
		}
		else {
			params = '{  "turn":"' + this.repeatcount;
			params += '", "delay":"' + this.patterns;
			params += '", "startpos":"' + this.startpos;
			params += '"}';

			if (nexacro.Device.isphone != 1) {
				return this._onerror({
					errorcode : '10001', 
					errormsg : 'Unsupported device Vibrator'
				});
			}
		}

		var jsonstr = '{"id":' + this._id + ', "div":"Vibrator", "method":"play", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pVibrator.stop = function () {
		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"Vibrator", "method":"stop", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pVibrator._onplay = function (objData) {
		var e = new nexacro.VibratorEventInfo("onplay");
		this._fire_onplay(this, e);
	};

	_pVibrator._fire_onplay = function (objVibrator, eVibratorEventInfo) {
		if (this.onplay && this.onplay._has_handlers) {
			return this.onplay._fireEvent(this, eVibratorEventInfo);
		}
		return true;
	};

	_pVibrator._onstop = function (objData) {
		var e = new nexacro.VibratorEventInfo("onstop");
		this._fire_onstop(this, e);
	};

	_pVibrator._fire_onstop = function (objVibrator, eVibratorEventInfo) {
		if (this.onstop && this.onstop._has_handlers) {
			return this.onstop._fireEvent(this, eVibratorEventInfo);
		}
		return true;
	};

	_pVibrator._onerror = function (objData) {
		var e = new nexacro.VibratorErrorEventInfo("onerror", objData.errorcode, objData.errormsg);
		this._fire_onerror(this, e);
	};

	_pVibrator._fire_onerror = function (objVibrator, VibratorErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, VibratorErrorEventInfo);
		}
		return true;
	};

	_pVibrator.paramck_vibstartpos = function (v) {
		if (!nexacro.Device.publicNumCheck(v) || Number(v) < 0) {
			return false;
		}
		return true;
	};

	_pVibrator.paramck_vibrepeatcount = function (v) {
		if (!nexacro.Device.publicNumCheck(v)) {
			return false;
		}
		if (Number(v) < 0) {
			return false;
		}
		return true;
	};

	_pVibrator.paramck_vibpattern = function (obj) {
		if (obj instanceof Array) {
			if (obj.length <= 100) {
				for (var i = 0; i < obj.length; i++) {
					if (!nexacro.Device.publicNumCheck(obj[i])) {
						return false;
					}

					if (obj[i] < 1) {
						return false;
					}
				}
			}
			else {
				return false;
			}

			if (obj.length % 2 != 0) {
				return false;
			}
		}
		else {
			return false;
		}
		return true;
	};

	_pVibrator = null;
}

if (!nexacro.VibratorEventInfo) {
	nexacro.VibratorEventInfo = function (strEventId) {
		this.eventid = strEventId;
	};
	var _pVibratorEventInfo = nexacro.VibratorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.VibratorEventInfo);
	_pVibratorEventInfo._type_name = "VibratorEventInfo";

	_pVibratorEventInfo = null;
}
if (!nexacro.VibratorErrorEventInfo) {
	nexacro.VibratorErrorEventInfo = function (strEventId, strErrorCode, strErrorMsg) {
		this.eventid = strEventId;
		this.errortype = "ObjectError";
		this.statuscode = strErrorCode;
		this.errormsg = strErrorMsg;
	};
	var _pVibratorErrorEventInfo = nexacro.VibratorErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.VibratorErrorEventInfo);
	_pVibratorErrorEventInfo._type_name = "VibratorErrorEventInfo";

	_pVibratorErrorEventInfo = null;
}


if (!nexacro.Network) {
	nexacro.Network = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";

		this.availabletype = "";
		this.timestamp = "";
		this.enableevent = true;

		this._event_list = {
			"onrecvsuccess" : 1, 
			"onrecverror" : 1
		};

		this.onrecvsuccess = null;
		this.onrecverror = null;

		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"Network", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pNetwork = nexacro.Network.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.Network);
	_pNetwork._type_name = "Network";

	_pNetwork.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];

		jsonstr = '{"id":' + this._id + ', "div":"Network", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pNetwork.on_created = function () {
	};


	_pNetwork.set_availabletype = function () {
	};
	_pNetwork.set_timestamp = function () {
	};

	_pNetwork.isReachable = function (strURL) {
		var params;

		if (strURL == null) {
			return false;
		}

		var pcheck = this.paramck_isReachable(strURL);
		if (pcheck == true) {
			if (nexacro.Device.curDevice == 0) {
				this.url = strURL || "";
				params = '{"url":"' + this.url + '"}';
			}
			else {
				params = '{"target":"' + strURL + '"}';
				this.availabletype = "availabletype";
				this.timestamp = "timestamp";
			}

			var jsonstr = '{"id":' + this._id + ', "div":"Network", "method":"isReachable", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);

			return true;
		}
		else {
			return false;
		}
	};

	_pNetwork.watchStart = function (nIntervalTime) {
		var params;
		var pcheck = this.paramck_watchStart(nIntervalTime);

		if (pcheck == true) {
			if (nexacro.Device.curDevice == 0) {
				this.intervalTime = nIntervalTime || "";
				params = '{"target":"' + this.intervalTime + '"}';
			}
			else {
				params = '{"target":"' + nIntervalTime + '"}';
			}
			var jsonstr = '{"id":' + this._id + ', "div":"Network", "method":"watchStart", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);

			return true;
		}
		else {
			return false;
		}
	};

	_pNetwork.watchStop = function () {
		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"Network", "method":"watchStop", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pNetwork._onrecvsuccess = function (objData) {
		this.availabletype = parseInt(objData.availabletype) | 0;
		this.timestamp = new Date(objData.timestamp);
		var e = new nexacro.NetworkEventInfo("onrecvsuccess");
		this._fire_onrecvsuccess(this, e);
	};

	_pNetwork._fire_onrecvsuccess = function (objNetwork, eNetworkEventInfo) {
		if (this.onrecvsuccess && this.onrecvsuccess._has_handlers) {
			return this.onrecvsuccess._fireEvent(this, eNetworkEventInfo);
		}
		return true;
	};

	_pNetwork._onrecverror = function (objData) {
		var e = new nexacro.NetworkErrorEventInfo("onrecverror", objData.errorcode, objData.errormsg);
		this._fire_onrecverror(this, e);
	};

	_pNetwork._fire_onrecverror = function (objNetwork, eNetworkErrorEventInfo) {
		if (this.onrecverror && this.onrecverror._has_handlers) {
			return this.onrecverror._fireEvent(this, eNetworkErrorEventInfo);
		}
		return true;
	};

	_pNetwork.paramck_isReachable = function (strUrl) {
		if (strUrl.trim().length < 1 || strUrl == null || typeof (strUrl) == "undefined" || typeof (strUrl) != "string" || strUrl == "") {
			return false;
		}
		return true;
	};

	_pNetwork.paramck_watchStart = function (strTime) {
		if (strTime == null || typeof (strTime) == "undefined") {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(strTime)) {
			return false;
		}

		if (strTime < 200 || strTime > 86400000) {
			return false;
		}
		return true;
	};

	_pNetwork = null;
}

if (!nexacro.NetworkEventInfo) {
	nexacro.NetworkEventInfo = function (strEventId) {
		this.eventid = strEventId;
	};
	var _pNetworkEventInfo = nexacro.NetworkEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.NetworkEventInfo);
	_pNetworkEventInfo._type_name = "NetworkEventInfo";

	_pNetworkEventInfo = null;
}

if (!nexacro.NetworkErrorEventInfo) {
	nexacro.NetworkErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg) {
		this.eventid = strEventId;
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
	};
	var _pNetworkErrorEventInfo = nexacro.NetworkErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.NetworkErrorEventInfo);
	_pNetworkErrorEventInfo._type_name = "NetworkErrorEventInfo";

	_pNetworkErrorEventInfo = null;
}


if (!nexacro.FileDialog) {
	nexacro.FileDialog = function (name, obj) {
		this.name = name || "";

		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.enableevent = true;
		this.defaultextension = true;
		this.filter = "";
		this.filterindex = 0;
		this.EnvironmentPath = 1;
		this.async = true;

		this._event_list = {
			"onclose" : 1, 
			"onerror" : 1
		};

		this.onclose = null;
		this.onerror = null;

		var params = '{"defaultextension":"' + this.defaultextension
			 + '","filter":"' + this.filter
			 + '","filterindex":"' + this.filterindex + '"}';

		var jsonstr = '{"id":' + this._id + ', "div":"FileDialog", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	nexacro.FileDialog.LOAD = 1;
	nexacro.FileDialog.SAVE = 2;
	nexacro.FileDialog.MULTILOAD = 3;
	nexacro.FileDialog.SELFOLDER = 4;

	var _pFileDialog = nexacro.FileDialog.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.FileDialog);
	_pFileDialog._type_name = "FileDialog";

	_pFileDialog.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];
		jsonstr = '{"id":' + this._id + ', "div":"FileDialog", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pFileDialog.on_created = function () {
	};

	_pFileDialog.set_defaultextension = function (v) {
		if (this.pramck_filedialog_defaultextension(v)) {
			if (typeof (v) != "boolean") {
				if (v.toLowerCase() == 'true') {
					this.defaultextension = true;
				}
				else if (v.toLowerCase() == 'false') {
					this.defaultextension = false;
				}
			}
			else {
				this.defaultextension = v;
			}
			return true;
		}
		else {
			return false;
		}
	};

	_pFileDialog.set_filter = function (v) {
		if (this.pramck_filedialog_filter(v)) {
			var filterarr = v.split("|");
			var f_len = filterarr.length;
			if (f_len < 2) {
				return false;
			}

			if ((f_len % 2 == 1) && filterarr[f_len - 1] != "") {
				return false;
			}

			var normalize = /[\*].[a-zA-Z0-9가-힣\*]/gi;

			for (var i = 0; i < f_len; i++) {
				if (i % 2 == 1) {
					if (normalize.test(filterarr[i]) == false) {
						return false;
					}
					normalize.lastIndex = 0;
				}
			}
			this.filter = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pFileDialog.set_filterindex = function (v) {
		if (this.pramck_filedialog_numbercheck(v)) {
			this.filterindex = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pFileDialog.set_async = function (v) {
	};

	_pFileDialog.open = function (strTitle, constOpenMode, strInitialPath, strFileName) {
		if (strInitialPath == null || typeof (strInitialPath) == "undefined") {
			strInitialPath = "%USERAPP%";
		}

		if (strFileName == null || typeof (strFileName) == "undefined") {
			strFileName = "";
		}

		if (!this.pramck_filedialogasyncOpen(strTitle, constOpenMode)) {
			return false;
		}

		if (this.filter == "") {
			this.filter = "All(*.*)|*.*|";
		}
		var filterarr = this.filter.split("|");

		if (this.defaultextension == true && this.filterindex >= (filterarr.length / 2)) {
			return false;
		}

		if (nexacro.Device.curDevice == 0) {
			var rootPathCheck = strInitialPath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				this.EnvironmentPath = 1;
			}
			else if (rootPathCheck.toLowerCase() == "%sd_card%") {
				this.EnvironmentPath = 2;
			}
			else {
				return false;
			}
		}
		else {
			var rootPathCheck = strInitialPath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				strInitialPath = "_userapp_";
			}
			else {
				return false;
			}
		}

		var params = '{"strTitle":"' + strTitle
			 + '","constOpenMode":"' + constOpenMode + '","strInitialPath":"' + strInitialPath
			 + '","strFileName":"' + strFileName + '","defaultextension":"' + this.defaultextension
			 + '","filter":"' + this.filter + '","filterindex":"' + this.filterindex
			 + '","EnvironmentPath":"' + this.EnvironmentPath + '"}';
		var jsonstr;

		jsonstr = '{"id":' + this._id + ', "div":"FileDialog", "method":"open", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pFileDialog._onclose = function (objData) {
		var _virtualFile = objData.virtualfiles;
		var arr = new Array(_virtualFile.length);

		for (var i = 0; i < _virtualFile.length; i++) {
			var obj = new nexacro.VirtualFile("VirtualFile", "");
			obj.filename = _virtualFile[i].filename;
			obj.fullpath = _virtualFile[i].fullpath;
			obj.path = _virtualFile[i].path;
			arr[i] = obj;
		}

		var e = new nexacro.FileDialogEventInfo("onclose", objData.reason, objData.reason == 4 ? objData.path : undefined, arr);
		this._fire_onclose(this, e);
	};

	_pFileDialog._fire_onclose = function (objFileDialog, eFileDialogEventInfo) {
		if (this.onclose && this.onclose._has_handlers) {
			return this.onclose._fireEvent(this, eFileDialogEventInfo);
		}
		return true;
	};

	_pFileDialog.pramck_filedialog_defaultextension = function (property) {
		if (property == null || typeof (property) == "undefined" || typeof (property) != "boolean") {
			if (property.toLowerCase() == 'true' || property.toLowerCase() == 'false') {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return true;
		}
	};

	_pFileDialog.pramck_filedialog_filter = function (property) {
		if (property == null || typeof (property) == "undefined" || typeof (property) != "string") {
			return false;
		}
		else {
			return true;
		}
	};

	_pFileDialog.pramck_filedialog_numbercheck = function (property) {
		if (property == null || typeof (property) == "undefined") {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(property)) {
			return false;
		}
		return true;
	};

	_pFileDialog.pramck_filedialogasyncOpen = function (strTitle, constOpenMode) {
		if (strTitle == null || typeof (strTitle) == "undefined") {
			return false;
		}

		if (constOpenMode == null || typeof (constOpenMode) == "undefined") {
			return false;
		}
		else {
			if (!nexacro.Device.publicNumCheck(constOpenMode)) {
				return false;
			}

			if (constOpenMode > 4 || constOpenMode < 1) {
				return false;
			}
		}

		return true;
	};

	_pFileDialog = null;
}

if (!nexacro.FileDialogEventInfo) {
	nexacro.FileDialogEventInfo = function (strEventId, strReason, strPath, arrVirtualfiles) {
		this.eventid = strEventId;
		this.reason = strReason;
		this.path = strPath;
		this.virtualfiles = arrVirtualfiles;
	};
	var _pFileDialogEventInfo = nexacro.FileDialogEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.FileDialogEventInfo);
	_pFileDialogEventInfo._type_name = "FileDialogEventInfo";

	_pFileDialogEventInfo = null;
}




if (nexacro.OS == "iOS" && !nexacro.VirtualFile) {
	nexacro.VirtualFile = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";

		this.filename = "";
		this.fullpath = "";
		this.path = "";
		this.enableevent = true;
		this.async = true;

		this._event_list = {
			"onsuccess" : 1, 
			"onerror" : 1, 
			"getEvent" : 1
		};

		this.onsuccess = null;
		this.onerror = null;
		this.getEvent = null;

		var params = '{"strFilename":"' + this.filename + '","fullpath":"' + this.fullpath + '","path":"' + this.path + '"}';
		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};
	nexacro.VirtualFile.openRead = 0x0001;
	nexacro.VirtualFile.openWrite = 0x0002;
	nexacro.VirtualFile.openAppend = 0x0010;
	nexacro.VirtualFile.openCreate = 0x1000;
	nexacro.VirtualFile.openText = 0x0100;
	nexacro.VirtualFile.openBinary = 0x0200;

	nexacro.VirtualFile.seekBegin = 0x0000;
	nexacro.VirtualFile.seekCurrent = 0x0001;
	nexacro.VirtualFile.seekEnd = 0x0002;

	nexacro.VirtualFile.findAll = 0x0001;
	nexacro.VirtualFile.findFileOnly = 0x0002;
	nexacro.VirtualFile.findDirectoryOnly = 0x0003;
	nexacro.VirtualFile.findCaseless = 0x0010;
	nexacro.VirtualFile.EnvironmentPath = 1;

	var _pVirtualFile = nexacro.VirtualFile.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.VirtualFile);
	_pVirtualFile._type_name = "VirtualFile";

	_pVirtualFile.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];
		jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pVirtualFile.on_created = function () {
	};

	_pVirtualFile.set_filename = function (v) {
		if (this.pramck_virtualproperty(v)) {
			this.filename = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pVirtualFile.set_fullpath = function (v) {
		if (this.pramck_virtualproperty(v)) {
			this.fullpath = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pVirtualFile.set_path = function (v) {
		if (this.pramck_virtualproperty(v)) {
			this.path = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pVirtualFile.set_environmentpath = function (v) {
		if (this.pramck_virtualproperty(v)) {
			this.EnvironmentPath = v;
			if ((+this.EnvironmentPath) != (+this.EnvironmentPath)) {
				return false;
			}
			return true;
		}
		else {
			return false;
		}
	};

	_pVirtualFile.set_async = function (v) {
	};

	_pVirtualFile.set_filename = function () {
	};
	_pVirtualFile.set_fullpath = function () {
	};
	_pVirtualFile.set_path = function () {
	};

	_pVirtualFile.open = function (strFileName, nOption) {
		this.nOptions = "";
		this.nFiletype = "";

		if (arguments.length < 1) {
			return false;
		}

		if (arguments == 1) {
			this.nOptions = strFileName;
		}
		else {
			this.nOptions = nOption;
			this.fullpath = strFileName;
		}

		if (!this.fullpath || this.fullpath.length <= 0) {
			return false;
		}

		var index_path = this.fullpath.lastIndexOf("/");
		if (index_path == -1) {
			index_path = this.fullpath.lastIndexOf("%");
		}
		this.path = this.fullpath.substring(0, index_path + 1);

		var index_name = this.fullpath.lastIndexOf("/");
		if (index_name == -1) {
			index_name = this.fullpath.lastIndexOf("%");
		}

		this.filename = this.fullpath.substring(index_name + 1, this.fullpath.length);

		if (!this.pramck_asyncOpen(this.path, this.nOptions)) {
			return false;
		}

		this.strFilename = "";

		if (nexacro.Device.curDevice == 0) {
			this.strFilename = this.fullpath.substring(9, this.fullpath.length);

			var rootPathCheck = this.fullpath.substring(0, 9);

			if (rootPathCheck.toLowerCase() == "%userapp%") {
				this.EnvironmentPath = 1;
			}
			else if (rootPathCheck.toLowerCase() == "%sd_card%") {
				this.EnvironmentPath = 2;
			}
			else {
				var _filecache = application._getFileCache(strFileName);
				if (null != _filecache) {
					this.EnvironmentPath = 3;
					this.strFilename = _filecache;
				}
				else {
					return false;
				}
			}
		}
		else {
			var iosfilepath = "";
			var rootPathCheck = this.fullpath.substring(0, 9);

			if (rootPathCheck.toLowerCase() == "%userapp%") {
				iosfilepath = "_userapp_" + this.fullpath.substring(9, this.fullpath.length);
			}
			else {
				var _filecache = application._getFileCache(strFileName);
				if (null != _filecache) {
					iosfilepath = "_userapp_" + _filecache;
				}
				else {
					iosfilepath = strFileName;
				}
			}
			this.strFilename = iosfilepath;
		}

		var params = "";

		if (nexacro.Device.curDevice == 0) {
			params = '{"strFilename":"' + this.strFilename + '","nOptions":"' + this.nOptions
				 + '","nFiletype":"' + this.nFiletype
				 + '","EnvironmentPath":"' + this.EnvironmentPath + '"}';
		}
		else {
			params = '{"strFilename":"' + this.strFilename + '","nOptions":"' + this.nOptions
				 + '","nFiletype":"' + this.nFiletype + '"}';
		}

		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"open", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pVirtualFile.close = function () {
		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"close", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pVirtualFile.read = function (nLength) {
		this.nLength = nLength || -1;
		this.strCharset = "UTF-8";

		if (!this.pramck_asyncRead(this.nLength)) {
			return false;
		}

		var params = '{  "nLength":"' + this.nLength;
		params += '", "strCharset":"' + this.strCharset;
		params += '"}';

		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"read", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pVirtualFile.readLine = function (strDelimeter) {
		this.strCharset = "UTF-8";

		if (strDelimeter == null) {
			this.strDelimeter = "";
		}
		else if (strDelimeter != null) {
			this.strDelimeter = nexacro.Device.encodeString(strDelimeter);

			if (!this.pramck_asyncReadLine(this.strDelimeter)) {
				return false;
			}
		}

		var params = '{  "strDelimeter":"' + this.strDelimeter;
		params += '", "strCharset":"' + this.strCharset;
		params += '"}';

		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"readLine", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pVirtualFile.seek = function (nOffset, nOption) {
		this.nOffset = "";
		this.nOption = "";

		if (nOption == null) {
			this.nOffset = nOffset;
			this.nOption = VirtualFile.seekCurrent;
		}
		else if (nOption != null) {
			this.nOffset = nOffset;
			this.nOption = nOption;
		}
		if (!this.paramck_asyncSeek(this.nOffset, this.nOption)) {
			return false;
		}

		var params = '{  "nOffset":"' + this.nOffset;
		params += '", "nOption":"' + this.nOption;
		params += '"}';
		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"seek", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pVirtualFile.write = function (varData, strCharset) {
		this.varData = varData;
		this.strCharset = strCharset;

		if (typeof (this.varData) == "undefined" || this.varData.length == 0) {
			return false;
		}

		var params = '{  "varData":"' + this.varData;
		params += '", "strCharset":"' + this.strCharset;
		params += '"}';
		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"write", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pVirtualFile.remove = function (strFilePath) {
		this._strFilePath = "";
		if (strFilePath instanceof nexacro.VirtualFile) {
			this._strFilePath = strFilePath.fullpath;
		}
		else {
			this._strFilePath = strFilePath;
		}
		if (!this.pramck_asyncDelete(this._strFilePath)) {
			return false;
		}

		var deletetPath = "";
		var rootPathCheck = "";
		if (nexacro.Device.curDevice == 0) {
			rootPathCheck = this._strFilePath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				this.EnvironmentPath = 1;
				deletetPath = this._strFilePath.substring(9, this._strFilePath.length);
			}
			else if (rootPathCheck.toLowerCase() == "%sd_card%") {
				this.EnvironmentPath = 2;
				deletetPath = this._strFilePath.substring(9, this._strFilePath.length);
			}
			else {
				var _filecache = application._getFileCache(strFilePath);
				if (null != _filecache) {
					this.EnvironmentPath = 3;
					deletetPath = _filecache;
				}
				else {
					return false;
				}
			}
		}
		else {
			var iosfilepath = "";
			rootPathCheck = this._strFilePath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				iosfilepath = "_userapp_" + this._strFilePath.substring(9, this._strFilePath.length);
			}
			else {
				var _filecache = application._getFileCache(strFilePath);
				if (null != _filecache) {
					iosfilepath = "_userapp_" + _filecache;
				}
				else {
					return false;
				}
			}
			deletetPath = iosfilepath;
		}

		var params = '{"strFilePath":"' + deletetPath
			 + '","EnvironmentPath":"' + this.EnvironmentPath + '"}';
		var jsonstr = '{"id":' + this._id + ',"div":"VirtualFile", "method":"remove", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pVirtualFile.getFileList = function (strPath, strSearchExpr, constOption) {
		this.strPath = strPath;
		this.strSearchExpr = strSearchExpr;
		this.constOption = constOption;

		if (typeof (this.constOption) == "undefined") {
			this.constOption = VirtualFile.findAll;
		}

		if (strPath == null || strSearchExpr == null || !this.pramck_asyncGetFileList(this.strPath, this.strSearchExpr, this.constOption)) {
			return false;
		}

		var fileListPath = "";
		if (nexacro.Device.curDevice == 0) {
			var rootPathCheck = this.strPath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				this.EnvironmentPath = 1;
				fileListPath = this.strPath.substring(9, this.strPath.length);
			}
			else if (rootPathCheck.toLowerCase() == "%sd_card%") {
				this.EnvironmentPath = 2;
				fileListPath = this.strPath.substring(9, this.strPath.length);
			}
			else {
				var _filecache = application._getFileCache(strPath);
				if (null != _filecache) {
					this.EnvironmentPath = 3;
					fileListPath = _filecache;
				}
				else {
					return false;
				}
			}
		}
		else {
			var iosfilepath = "";
			var rootPathCheck = this.strPath.substring(0, 9);

			if (rootPathCheck.toLowerCase() == "%userapp%") {
				iosfilepath = "_userapp_" + this.strPath.substring(9, this.strPath.length);
			}
			else {
				var _filecache = application._getFileCache(strPath);
				if (null != _filecache) {
					iosfilepath = "_userapp_" + _filecache;
				}
				else {
					return false;
				}
			}
			fileListPath = iosfilepath;
		}

		var params = '{"strPath":"' + fileListPath + '" ,"strSearchExpr":"' + this.strSearchExpr
			 + '","constOption":"' + this.constOption
			 + '","EnvironmentPath":"' + this.EnvironmentPath + '"}';

		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"getFileList", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pVirtualFile.getFileSize = function () {
		var params;


		if (nexacro.Device.curDevice == 0) {
			params = '{  "strPath":"' + this.fullpath;
			params += '","EnvironmentPath":"' + this.EnvironmentPath + '"}';
		}
		else {
			var iosfilepath = "";
			var rootPathCheck = this.fullpath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				iosfilepath = "_userapp_" + this.fullpath.substring(9, this.fullpath.length);
			}

			params = '{  "strPath":"' + iosfilepath;
			params += '","EnvironmentPath":"' + this.EnvironmentPath + '"}';
		}
		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"getFileSize", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pVirtualFile.isExist = function (strPath) {
		if (!this.pramck_asyncIsExist(strPath)) {
			return false;
		}
		var isExistPath = "";
		if (nexacro.Device.curDevice == 0) {
			var rootPathCheck = strPath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				this.EnvironmentPath = 1;
				isExistPath = strPath.substring(9, strPath.length);
			}
			else if (rootPathCheck.toLowerCase() == "%sd_card%") {
				this.EnvironmentPath = 2;
				isExistPath = strPath.substring(9, strPath.length);
			}
			else {
				var _filecache = application._getFileCache(strPath);
				if (null != _filecache) {
					this.EnvironmentPath = 3;
					isExistPath = _filecache;
				}
				else {
					return false;
				}
			}
		}
		else {
			var iosfilepath = "";
			var rootPathCheck = strPath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				isExistPath = "_userapp_" + strPath.substring(9, strPath.length);
			}
			else {
				var _filecache = application._getFileCache(strPath);
				if (null != _filecache) {
					isExistPath = "_userapp_" + _filecache;
				}
				else {
					return false;
				}
			}
		}
		var params = '{  "strPath":"' + isExistPath
			 + '","EnvironmentPath":"' + this.EnvironmentPath + '"}';
		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"isExist", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pVirtualFile.createDirectory = function (strPath, bAllCreate) {
		if (!this.pramck_asyncIsExist(strPath)) {
			return false;
		}

		if (bAllCreate == null) {
			this.strPath = strPath;
			this.bAllCreate = false;
		}
		else if (bAllCreate != null) {
			this.strPath = strPath;
			this.bAllCreate = bAllCreate;
		}
		else {
			return false;
		}

		var strInitialPath = "";

		if (nexacro.Device.curDevice == 0) {
			var rootPathCheck = strPath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				strInitialPath = strPath.substring(9, strPath.length);
				this.EnvironmentPath = 1;
			}
			else if (rootPathCheck.toLowerCase() == "%sd_card%") {
				strInitialPath = strPath.substring(9, strPath.length);
				this.EnvironmentPath = 2;
			}
			else {
				return false;
			}
		}
		else {
			var rootPathCheck = strPath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				strInitialPath = "_userapp_" + strPath.substring(9, strPath.length);
			}
			else {
				return false;
			}
		}

		var params = '{  "strPath":"' + strInitialPath
			 + '","EnvironmentPath":"' + this.EnvironmentPath + '","bAllCreate":"' + this.bAllCreate + '"}';
		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"createDirectory", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pVirtualFile.deleteDirectory = function (strPath, bAllChild) {
		if (!this.pramck_asyncIsExist(strPath)) {
			return false;
		}

		if (bAllChild == null) {
			this.strPath = strPath;
			this.bAllChild = false;
		}
		else if (bAllChild != null) {
			this.strPath = strPath;
			this.bAllChild = bAllChild;
		}
		else {
			return false;
		}

		var strInitialPath = "";

		if (nexacro.Device.curDevice == 0) {
			var rootPathCheck = strPath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				strInitialPath = strPath.substring(9, strPath.length);
				this.EnvironmentPath = 1;
			}
			else if (rootPathCheck.toLowerCase() == "%sd_card%") {
				strInitialPath = strPath.substring(9, strPath.length);
				this.EnvironmentPath = 2;
			}
			else {
				return false;
			}
		}
		else {
			var rootPathCheck = strPath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				strInitialPath = "_userapp_" + strPath.substring(9, strPath.length);
			}
			else {
				return false;
			}
		}

		var params = '{  "strPath":"' + strInitialPath
			 + '","EnvironmentPath":"' + this.EnvironmentPath + '","bAllChild":"' + this.bAllChild + '"}';
		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"deleteDirectory", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pVirtualFile.renameDirectory = function (strPath, strNewName) {
		if (!this.pramck_asyncIsExist(strPath)) {
			return false;
		}

		if (!this.paramck_folderName(strNewName)) {
			return false;
		}

		if (strNewName == null) {
			return false;
		}

		this.strPath = strPath;
		this.strNewName = strNewName;

		var strInitialPath = "";
		var strDestPath = "";
		if (nexacro.Device.curDevice == 0) {
			var rootPathCheck = strPath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				strInitialPath = strPath.substring(9, strPath.length);
				this.EnvironmentPath = 1;
			}
			else if (rootPathCheck.toLowerCase() == "%sd_card%") {
				strInitialPath = strPath.substring(9, strPath.length);
				this.EnvironmentPath = 2;
			}
			else {
				return false;
			}
		}
		else {
			var rootPathCheck = strPath.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				strInitialPath = "_userapp_" + strPath.substring(9, strPath.length);
			}
			else {
				return false;
			}
		}

		if (nexacro.Device.curDevice == 0) {
			var rootPathCheck = strNewName.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				strDestPath = strNewName.substring(9, strNewName.length);
				this.EnvironmentPath = 1;
			}
			else if (rootPathCheck.toLowerCase() == "%sd_card%") {
				strDestPath = strNewName.substring(9, strNewName.length);
				this.EnvironmentPath = 2;
			}
			else {
				strDestPath = strNewName;
			}
		}
		else {
			var rootPathCheck = strNewName.substring(0, 9);
			if (rootPathCheck.toLowerCase() == "%userapp%") {
				strDestPath = "_userapp_" + strNewName.substring(9, strNewName.length);
			}
			else {
				strDestPath = strNewName;
			}
		}

		var params = '{  "strPath":"' + strInitialPath
			 + '","strNewName":"' + strDestPath + '","EnvironmentPath":"' + this.EnvironmentPath + '"}';
		var jsonstr = '{"id":' + this._id + ', "div":"VirtualFile", "method":"renameDirectory", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pVirtualFile._onsuccess = function (objData) {
		var _textdata = "";
		var _bindata = "";
		var temptxtlen = 0;
		var tempbinlen = 0;

		if (objData.textdata) {
			temptxtlen = objData.textdata.length;
		}
		if (objData.binarydata) {
			tempbinlen = objData.binarydata.length;
		}

		if (temptxtlen > 0) {
			_textdata = objData.textdata.replace(/\&amp\;/g, "&");
			_textdata = _textdata.replace(/\&lt\;/g, "<");
			_textdata = _textdata.replace(/\&gt\;/g, ">");
			_textdata = _textdata.replace(/\&quot\;/g, "\"");
			_textdata = _textdata.replace(/\&apos\;/g, "'");
			_textdata = _textdata.replace(/\&\#32\;/g, " ");
			_textdata = _textdata.replace(/\&\#13\;/g, "\r");
			_textdata = _textdata.replace(/\&\#10\;/g, "\n");
			_textdata = _textdata.replace(/\&\#9\;/g, "\t");
		}
		else if (tempbinlen > 0) {
			_bindata = objData.binarydata.replace(/\&amp\;/g, "&");
			_bindata = _bindata.replace(/\&lt\;/g, "<");
			_bindata = _bindata.replace(/\&gt\;/g, ">");
			_bindata = _bindata.replace(/\&quot\;/g, "\"");
			_bindata = _bindata.replace(/\&apos\;/g, "'");
			_bindata = _bindata.replace(/\&\#32\;/g, " ");
			_bindata = _bindata.replace(/\&\#13\;/g, "\r");
			_bindata = _bindata.replace(/\&\#10\;/g, "\n");
			_bindata = _bindata.replace(/\&\#9\;/g, "\t");
		}
		var e = new nexacro.VirtualFileEventInfo("onsuccess", objData.reason, _textdata, _bindata, eval(objData.fileattributelist), objData.filesize, objData.fileisexist);
		this._fire_onsuccess(this, e);
	};

	_pVirtualFile._fire_onsuccess = function (objVirtualFile, eVirtualFileEventInfo) {
		if (this.onsuccess && this.onsuccess._has_handlers) {
			return this.onsuccess._fireEvent(this, eVirtualFileEventInfo);
		}
		return true;
	};

	_pVirtualFile._onerror = function (objData) {
		var e = new nexacro.VirtualFileErrorEventInfo("onerror", objData.errorcode, objData.errormsg);
		this._fire_onerror(this, e);
	};

	_pVirtualFile._fire_onerror = function (objVirtualFile, eVirtualFileErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, eVirtualFileErrorEventInfo);
		}
		return true;
	};

	_pVirtualFile.toJSON = function () {
		return eval('({"filename":"' + this.filename + '","fullpath":"' + this.fullpath + '","path":"' + this.path + '"})');
	};

	_pVirtualFile.paramck_folderName = function (strName) {
		if (strName == null) {
			return false;
		}

		if (strName.match(/[\"/:*?<>|]/)) {
			return false;
		}


		return true;
	};

	_pVirtualFile.pramck_virtualproperty = function (property) {
		if (typeof (property) == "undefined" || property == "" || property == null) {
			return false;
		}
		else {
			return true;
		}
	};

	_pVirtualFile.pramck_asyncOpen = function (strFileName, nOptions) {
		if (nOptions == null) {
			if (typeof (strFileName) == "undefined" || strFileName == "" || strFileName == null) {
				return false;
			}

			if (!nexacro.Device.publicNumCheck(strFileName)) {
				return false;
			}
			return true;
		}

		if (strFileName == null || typeof (strFileName) == "undefined") {
			return false;
		}

		if (nOptions == null || typeof (nOptions) == "undefined") {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(nOptions)) {
			return false;
		}
		return true;
	};

	_pVirtualFile.pramck_asyncRead = function (nLength) {
		if (nLength == null || typeof (nLength) == "undefined") {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(nLength)) {
			return false;
		}
		return true;
	};

	_pVirtualFile.pramck_asyncReadLine = function (strDelimeter) {
		if (strDelimeter == null || typeof (strDelimeter) == "undefined" || typeof (strDelimeter) != "string") {
			return false;
		}

		return true;
	};

	_pVirtualFile.paramck_asyncSeek = function (nOffset, nOption) {
		if (nOffset == null || typeof (nOffset) == "undefined") {
			return false;
		}

		if (nOption == null || typeof (nOption) == "undefined") {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(nOffset)) {
			return false;
		}
		return true;
	};

	_pVirtualFile.pramck_asyncDelete = function (strFilePath) {
		if (strFilePath == null || typeof (strFilePath) == "undefined" || strFilePath == "") {
			return false;
		}
		else {
			return true;
		}
	};

	_pVirtualFile.pramck_asyncIsExist = function (strPath) {
		if (strPath == null || typeof (strPath) == "undefined" || strPath == "" || typeof (strPath) != "string") {
			return false;
		}
		else {
			return true;
		}
	};

	_pVirtualFile.pramck_asyncGetFileList = function (strPath, strSearchExpr, constOption) {
		if (strPath == null || typeof (strPath) == "undefined" || strPath == "" || typeof (strPath) != "string") {
			return false;
		}

		if (strSearchExpr == null || typeof (strSearchExpr) == "undefined" || strSearchExpr == "" || typeof (strSearchExpr) != "string") {
			return false;
		}

		if (constOption == null || typeof (constOption) == "undefined" || constOption == "") {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(constOption)) {
			return false;
		}
		return true;
	};

	_pVirtualFile = null;
}

if (nexacro.OS == "iOS" && !nexacro.VirtualFileEventInfo) {
	nexacro.VirtualFileEventInfo = function (strEventId, strReason, strTextdata, strBinarydata, strFilelist, strFilesize, strExist) {
		this.eventid = strEventId;
		this.reason = strReason;
		this.textdata = strTextdata;
		this.binarydata = strBinarydata;

		if (typeof (strFilelist) != "undefined") {
			var tempArr = new Array(strFilelist.length);
			for (var i = 0; i < strFilelist.length; i++) {
				tempArr[i] = new nexacro.FileAttribute(strFilelist[i]);
			}
			this.fileattributelist = tempArr;
		}
		else {
			this.fileattributelist = "";
		}

		this.filesize = strFilesize;
		this.fileisexist = strExist;
	};
	var _pVirtualFileEventInfo = nexacro.VirtualFileEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.VirtualFileEventInfo);
	_pVirtualFileEventInfo._type_name = "VirtualFileEventInfo";

	_pVirtualFileEventInfo = null;
}

if (nexacro.OS == "iOS" && !nexacro.VirtualFileErrorEventInfo) {
	nexacro.VirtualFileErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg) {
		this.eventid = strEventId;
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
	};
	var _pVirtualFileErrorEventInfo = nexacro.VirtualFileErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.VirtualFileErrorEventInfo);
	_pVirtualFileErrorEventInfo._type_name = "VirtualFileErrorEventInfo";

	_pVirtualFileErrorEventInfo = null;
}

if (nexacro.OS == "iOS" && !nexacro.FileAttribute) {
	nexacro.FileAttribute = function (jsonObj) {
		this.accesstime = jsonObj.accesstime;
		this.createtime = jsonObj.createtime;
		this.filename = jsonObj.filename;
		this.groupid = jsonObj.groupid;
		this.modifytime = jsonObj.modifytime;
		this.size = jsonObj.size;
		this.userid = jsonObj.userid;
		this.isdirectory = jsonObj.isdirectory;
		this.isreadonly = jsonObj.isreadonly;
	};
	var _pFileAttribute = nexacro.FileAttribute.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.FileAttribute);
	_pFileAttribute._type_name = "FileAttribute";

	_pFileAttribute.on_created = function () {
	};

	_pFileAttribute.isDirectory = function () {
		return this.isdirectory;
	};

	_pFileAttribute.isReadOnly = function () {
		return this.isreadonly;
	};

	_pFileAttribute = null;
}


if (!nexacro.Camera) {
	nexacro.Camera = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";

		this.imagequality = "100";
		this.imagewidth = "0";
		this.imageheight = "0";
		this.encodingtype = "JPEG";
		this.gettype = "0";
		this.usegallery = true;
		this.enableevent = true;

		this._event_list = {
			"oncapture" : 1, 
			"onerror" : 1
		};

		this.oncapture = null;
		this.onerror = null;

		var params = '""';
		var jsonstr = "";

		jsonstr = '{"id":' + this._id + ', "div":"Camera", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pCamera = nexacro.Camera.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.Camera);
	_pCamera._type_name = "Camera";

	_pCamera.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];

		jsonstr = '{"id":' + this._id + ', "div":"Camera", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pCamera.on_created = function () {
	};

	_pCamera.set_imagequality = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.imagequality = 100;
		}
		else {
			if (v >= 0 && v <= 100) {
				this.imagequality = v;
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pCamera.set_imagewidth = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.imagewidth = 0;
		}
		else {
			if (v >= 0) {
				this.imagewidth = v;
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pCamera.set_imageheight = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.imageheight = 0;
		}
		else {
			if (v >= 0) {
				this.imageheight = v;
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pCamera.set_encodingtype = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.encodingtype = "JPEG";
		}
		else {
			if (v == "JPEG" || v.toUpperCase() == "JPEG") {
				this.encodingtype = "JPEG";
			}
			else if (v == "PNG" || v.toUpperCase() == "PNG") {
				this.encodingtype = "PNG";
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pCamera.set_gettype = function (v) {
		if (v === undefined || v === null) {
			return false;
		}

		var typevalue = -1;
		if (nexacro._isNumber(v)) {
			typevalue = nexacro._toInt(v);
		}
		else if (nexacro._isString(v)) {
			switch (nexacro._toString(v)) {
				case "0":
				case "url":
				case "imageurl":
					typevalue = 0;
					break;
				case "1":
				case "data":
				case "imagedata":
					typevalue = 1;
					break;
				default:
					break;
			}
		}

		if (typevalue != 0 && typevalue != 1) {
			return false;
		}

		this.gettype = typevalue;
		return true;
	};

	_pCamera.set_usegallery = function (v) {
		if (typeof (v) == "string") {
			if (v.toUpperCase() == "TRUE") {
				this.usegallery = true;
			}
			else {
				this.usegallery = false;
			}
		}
		else {
			this.usegallery = v ? true : false;
		}
	};

	_pCamera.takePicture = function () {
		if (this.paramck_takePicture(this.imagequality, this.imagewidth, this.imageheight, this.encodingtype, this.gettype)) {
			var params = '{  "quality":"' + this.imagequality.toString();
			params += '", "width":"' + this.imagewidth.toString();
			params += '", "height":"' + this.imageheight.toString();
			params += '", "encodingType":"' + this.encodingtype.toString();
			params += '", "gettype":"' + this.gettype.toString();
			params += '", "usegallery":' + this.usegallery;
			params += '}';

			var jsonstr = "";
			jsonstr = '{"id":' + this._id + ', "div":"Camera", "method":"takePicture", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}
		else {
		}
	};

	_pCamera._oncapture = function (objData) {
		var e = new nexacro.CameraEventInfo("oncapture", objData.reason, objData.url, objData.imagedata, objData.imagewidth, objData.imageheight, objData.imagemetadata);
		this._fire_oncapture(this, e);
	};

	_pCamera._fire_oncapture = function (objCamera, eCameraEventInfo) {
		if (this.oncapture && this.oncapture._has_handlers) {
			return this.oncapture._fireEvent(this, eCameraEventInfo);
		}
		return true;
	};

	_pCamera._onerror = function (objData) {
		var e = new nexacro.CameraErrorEventInfo("onerror", objData.errorcode, objData.errormsg);
		this._fire_onerror(this, e);
	};

	_pCamera._fire_onerror = function (objCamera, eCameraErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, eCameraErrorEventInfo);
		}
		return true;
	};

	_pCamera.paramck_takePicture = function (nQuality, nWidth, nHeight, strEncodingType, strGetType) {
		if (nQuality != null) {
			if (!nexacro.Device.publicNumCheck(nQuality)) {
				return false;
			}
		}

		if (nWidth != null) {
			if (!nexacro.Device.publicNumCheck(nWidth)) {
				return false;
			}
		}

		if (nHeight != null) {
			if (!nexacro.Device.publicNumCheck(nHeight)) {
				return false;
			}
		}

		if (strGetType != null) {
			if (!nexacro.Device.publicNumCheck(strGetType)) {
				return false;
			}
		}

		if (strEncodingType != null) {
			if (typeof (strEncodingType) != "string") {
				return false;
			}
		}

		return true;
	};

	_pCamera = null;
}

if (!nexacro.CameraEventInfo) {
	nexacro.CameraEventInfo = function (strEventId, strReason, strUrl, strImagedata, strImagewidth, strImageheight, objImagemetadata) {
		this.eventid = strEventId;
		this.reason = strReason;
		this.url = strUrl;
		this.imagedata = strImagedata;
		this.imagewidth = strImagewidth;
		this.imageheight = strImageheight;
		this.imagemetadata = objImagemetadata;
	};
	var _pCameraEventInfo = nexacro.CameraEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.CameraEventInfo);

	_pCameraEventInfo._type_name = "CameraEventInfo";

	_pCameraEventInfo = null;
}

if (!nexacro.CameraErrorEventInfo) {
	nexacro.CameraErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg) {
		this.eventid = strEventId;
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
	};
	var _pCameraErrorEventInfo = nexacro.CameraErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.CameraErrorEventInfo);

	_pCameraErrorEventInfo._type_name = "CameraErrorEventInfo";

	_pCameraErrorEventInfo = null;
}


if (!nexacro.ImagePicker) {
	nexacro.ImagePicker = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";

		this.imagequality = "100";
		this.imagewidth = "0";
		this.imageheight = "0";
		this.encodingtype = "JPEG";
		this.gettype = "0";

		this.enableevent = true;

		this._event_list = {
			"onsuccess" : 1, 
			"onerror" : 1
		};
		this.onsuccess = null;
		this.onerror = null;

		var params = '""';
		var jsonstr = "";
		if (nexacro.Device.curDevice == 0) {
			jsonstr = '{"id":' + this._id + ', "div":"ImagePicker", "method":"constructor", "params":' + params + '}';
		}
		else {
			jsonstr = '{"id":' + this._id + ', "div":"Camera", "method":"constructor", "params":' + params + '}';
		}
		nexacro.Device.exec(jsonstr);
	};
	var _pImagePicker = nexacro.ImagePicker.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.ImagePicker);

	_pImagePicker._type_name = "ImagePicker";

	_pImagePicker.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];
		if (nexacro.Device.curDevice == 0) {
			jsonstr = '{"id":' + this._id + ', "div":"ImagePicker", "method":"destroy", "params":' + params + '}';
		}
		else {
			jsonstr = '{"id":' + this._id + ', "div":"Camera", "method":"destroy", "params":' + params + '}';
		}
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pImagePicker.on_created = function () {
	};

	_pImagePicker.set_imagequality = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.imagequality = 100;
		}
		else {
			if (v >= 0 && v <= 100) {
				this.imagequality = v;
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pImagePicker.set_imagewidth = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.imagewidth = 0;
		}
		else {
			if (v >= 0) {
				this.imagewidth = v;
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pImagePicker.set_imageheight = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.imageheight = 0;
		}
		else {
			if (v >= 0) {
				this.imageheight = v;
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pImagePicker.set_encodingtype = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.encodingtype = "JPEG";
		}
		else {
			if (v == "JPEG" || v.toUpperCase() == "JPEG") {
				this.encodingtype = "JPEG";
			}
			else if (v == "PNG" || v.toUpperCase() == "PNG") {
				this.encodingtype = "PNG";
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pImagePicker.set_gettype = function (v) {
		if (v === undefined || v === null) {
			return false;
		}

		var typevalue = -1;
		if (nexacro._isNumber(v)) {
			typevalue = nexacro._toInt(v);
		}
		else if (nexacro._isString(v)) {
			switch (nexacro._toString(v)) {
				case "0":
				case "url":
				case "imageurl":
					typevalue = 0;
					break;
				case "1":
				case "data":
				case "imagedata":
					typevalue = 1;
					break;
				default:
					break;
			}
		}

		if (typevalue != 0 && typevalue != 1) {
			return false;
		}

		this.gettype = typevalue;
		return true;
	};

	_pImagePicker.open = function (strGetType, strGetImageType) {
		if (!this.set_gettype(strGetType)) {
			return false;
		}

		if ((strGetImageType != null && typeof (strGetImageType) != "undefined") && ((strGetImageType == 0) || (strGetImageType == 1) || (strGetImageType == "0") || (strGetImageType == "1"))) {
			this.encodingtype = strGetImageType;
		}

		if (this.paramck_ImagePicker_asyncOpen(this.imagequality, this.imagewidth, this.imageheight, this.encodingtype, this.gettype)) {
			var params = '{  "quality":"' + this.imagequality.toString();
			params += '", "width":"' + this.imagewidth.toString();
			params += '", "height":"' + this.imageheight.toString();
			params += '", "encodingType":"' + this.encodingtype.toString();
			params += '", "gettype":"' + this.gettype.toString();
			params += '"}';
			var jsonstr = "";
			if (nexacro.Device.curDevice == 0) {
				jsonstr = '{"id":' + this._id + ', "div":"ImagePicker", "method":"open", "params":' + params + '}';
			}
			else {
				jsonstr = '{"id":' + this._id + ', "div":"Camera", "method":"open", "params":' + params + '}';
			}
			nexacro.Device.exec(jsonstr);
			return true;
		}
		else {
			return false;
		}
	};

	_pImagePicker._onsuccess = function (objData) {
		var e = new nexacro.ImagePickerEventInfo("onsuccess", objData.url, objData.imagedata, objData.imagefile, objData.imagemetadata);
		this._fire_onsuccess(this, e);
	};

	_pImagePicker._fire_onsuccess = function (objImagePicker, eImagePickerEventInfo) {
		if (this.onsuccess && this.onsuccess._has_handlers) {
			return this.onsuccess._fireEvent(this, eImagePickerEventInfo);
		}
		return true;
	};

	_pImagePicker._onerror = function (objData) {
		var e = new nexacro.ImagePickerErrorEventInfo("onerror", objData.errorcode, objData.errormsg);
		this._fire_onerror(this, e);
	};

	_pImagePicker._fire_onerror = function (objImagePicker, eImagePickerErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, eImagePickerErrorEventInfo);
		}
		return true;
	};



	_pImagePicker.paramck_ImagePicker_asyncOpen = function (nQuality, nWidth, nHeight, strEncodingType, strGetType) {
		if (nQuality != null) {
			if (!nexacro.Device.publicNumCheck(nQuality)) {
				return false;
			}
		}

		if (nWidth != null) {
			if (!nexacro.Device.publicNumCheck(nWidth)) {
				return false;
			}
		}

		if (nHeight != null) {
			if (!nexacro.Device.publicNumCheck(nHeight)) {
				return false;
			}
		}

		if (strGetType != null) {
			if (!nexacro.Device.publicNumCheck(strGetType)) {
				return false;
			}
		}

		if (strEncodingType != null) {
			if (typeof (strEncodingType) != "string") {
				return false;
			}
		}
		return true;
	};

	_pImagePicker = null;
}

if (!nexacro.ImagePickerEventInfo) {
	nexacro.ImagePickerEventInfo = function (strEventId, strUrl, strImagedata, strImagefile, objImagemetadata) {
		this.eventid = strEventId;
		this.imageurl = strUrl;
		this.imagedata = strImagedata;
		this.imagefile = strImagefile;
		this.imagemetadata = objImagemetadata;
	};
	var _pImagePickerEventInfo = nexacro.ImagePickerEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.ImagePickerEventInfo);

	_pImagePickerEventInfo._type_name = "ImagePickerEventInfo";

	_pImagePickerEventInfo = null;
}

if (!nexacro.ImagePickerErrorEventInfo) {
	nexacro.ImagePickerErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg) {
		this.eventid = strEventId;
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
	};
	var _pImagePickerErrorEventInfo = nexacro.ImagePickerErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.ImagePickerErrorEventInfo);

	_pImagePickerErrorEventInfo._type_name = "ImagePickerErrorEventInfo";

	_pImagePickerErrorEventInfo = null;
}


if (!nexacro.AudioRecorder) {
	nexacro.AudioRecorder = function (name, obj) {
		this._obj = obj;
		this._refform = obj;
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";

		this.brecording = false;
		this.bpaused = false;
		this.reccurtime = "";

		this.audiofile = "";
		this.samplerate = 8000;
		this.channelconfig = 1;

		if (nexacro.Device.curDevice == 0) {
			this.audioformat = "mp3";
		}
		else {
			this.audioformat = "wav";
		}

		this.enableevent = true;
		this._is_alive = true;

		this._event_list = 
			{
			"onrecord" : 1, 
			"onrecording" : 1, 
			"onstop" : 1, 
			"onerror" : 1
		};

		this.onrecord = null;
		this.onrecording = null;
		this.onstop = null;
		this.onerror = null;

		var params = '""';
		var jsonstr = "";

		jsonstr = '{"id":' + this._id + ', "div":"AudioRecorder", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pAudioRecorder = nexacro.AudioRecorder.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.AudioRecorder);

	_pAudioRecorder._type_name = "AudioRecorder";

	_pAudioRecorder.destroy = function () {
		var params = '""';
		var jsonstr;
		this._is_alive = false;

		delete nexacro.Device._userCreatedObj[this._id];

		jsonstr = '{"id":' + this._id + ', "div":"AudioRecorder", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pAudioRecorder.on_created = function () {
	};

	_pAudioRecorder._getReferenceContext = function () {
		return this._refform;
	};

	_pAudioRecorder.set_audiofile = function (v) {
		if (typeof (v) == "undefind" || v == null || v == "") {
			return false;
		}
		else {
			this.audiofile = v;
		}
		return true;
	};

	_pAudioRecorder.set_samplerate = function (v) {
		if (typeof (v) == "undefind" || v == null) {
			return false;
		}
		else {
			if (nexacro.Device.publicNumCheck(v)) {
				if (v >= 8000 && v <= 96000) {
					this.samplerate = v;
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pAudioRecorder.set_channelconfig = function (v) {
		if (typeof (v) == "undefind" || v == null) {
			return false;
		}
		else {
			if (v == 1 || v == 2) {
				this.channelconfig = v;
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pAudioRecorder.set_audioformat = function (v) {
		if (typeof (v) == "undefind" || v == null) {
			return false;
		}
		else {
			var dotIndex = v.lastIndexOf(".");
			var extentionStr = v.substring(dotIndex, v.length).toUpperCase();

			if ((nexacro.Device.curDevice == 0)) {
				if (extentionStr == "OGG" || extentionStr == "AMR_NB" || extentionStr == "AMR_WB" || extentionStr == "MP3") {
					this.audioformat = v.toUpperCase();
				}
				else {
					return false;
				}
			}

			if (nexacro.Device.curDevice == 1) {
				if (extentionStr == "WAV") {
					this.audioformat = "WAV";
				}
				else {
					return false;
				}
			}
		}
		return true;
	};

	_pAudioRecorder.recordingStart = function (nIntervalTime) {
		var IntervalTimeState;
		if (typeof (nIntervalTime) == "undefined" || nIntervalTime == null || nIntervalTime == "") {
			return false;
		}
		else {
			if (nexacro.Device.publicNumCheck(nIntervalTime) && nIntervalTime <= 86400000 && nIntervalTime >= 0) {
				if (nIntervalTime < 200) {
					return false;
				}
				else {
					IntervalTimeState = 0;
				}
			}
			else {
				return false;
			}
		}

		if (this.brecording == true) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", this.audiofile, this.reccurtime, "1301", "Already recording");
				this._fire_onerror(this, e);
			}, 20);
			return false;
		}

		if (this.audiofile == "" || typeof (this.audiofile) == "undefined") {
			var arobj = this;
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", this.audiofile, this.reccurtime, "1304", "Recording Setting Error");
				this._fire_onerror(this, e);
			}, 20);

			return false;
		}

		if (nexacro.Device.curDevice == 0) {
			var EnvironmentPath = "";
			var androidFilePath = "";
			var rootPathCheck = this.audiofile.substring(0, 9);

			if (rootPathCheck.toLowerCase() == "%userapp%") {
				EnvironmentPath = 1;
				androidFilePath = this.audiofile.substring(9, this.audiofile.length);
			}
			else if (rootPathCheck.toLowerCase() == "%sd_card%") {
				EnvironmentPath = 2;
				androidFilePath = this.audiofile.substring(9, this.audiofile.length);
			}
			else {
				nexacro.OnceCallbackTimer.callonce(this, function () {
					var e = new nexacro.AudioErrorEventInfo("onerror", this.audiofile, this.reccurtime, "1304", "Recording Setting Error");
					this._fire_onerror(this, e);
				}, 20);

				return false;
			}

			var params = '{  "audiofile":"' + androidFilePath;
			params += '", "samplerate":"' + this.samplerate;
			params += '", "channelconfig":"' + this.channelconfig;
			params += '", "audioFormat":"' + this.audioformat;
			params += '", "EnvironmentPath":"' + EnvironmentPath;
			params += '", playingeventtime:"' + nIntervalTime;
			params += '", intervaltimestate:"' + IntervalTimeState;
			params += '"}';

			var jsonstr = "";
			jsonstr = '{"id":' + this._id + ', "div":"AudioRecorder", "method":"recordingStart", "params":' + params + '}';
		}
		else {
			var iPhoneFilePath = "";
			var rootPathCheck = this.audiofile.substring(0, 9);

			if (rootPathCheck.toLowerCase() == "%userapp%") {
				iPhoneFilePath = "_userapp_" + this.audiofile.substring(9, this.audiofile.length);
			}
			else {
				nexacro.OnceCallbackTimer.callonce(this, function () {
					var e = new nexacro.AudioErrorEventInfo("onerror", this.audiofile, this.reccurtime, "1304", "Recording Setting Error");
					this._fire_onerror(this, e);
				}, 20);
				return false;
			}

			var params = '{ "audiofile":"' + iPhoneFilePath;
			params += '", "samplerate":"' + this.samplerate;
			params += '", "channelconfig":"' + this.channelconfig;
			params += '", "audioFormat":"' + this.audioformat;
			params += '", "playingeventtime":"' + nIntervalTime;
			params += '", "intervaltimestate":"' + IntervalTimeState;
			params += '"}';

			var jsonstr = "";
			jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"recordingStart", "params":' + params + '}';
		}

		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pAudioRecorder.recordingStop = function () {
		if (this.brecording == false) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", "0", "1302", "Not recording");
				this._fire_onerror(this, e);
			}, 20);
			return;
		}
		var params = '""';
		var jsonstr = "";

		if (nexacro.Device.curDevice == 0) {
			jsonstr = '{"id":' + this._id + ', "div":"AudioRecorder", "method":"recordingStop", "params":' + params + '}';
		}
		else {
			jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"recordingStop", "params":' + params + '}';
		}

		nexacro.Device.exec(jsonstr);
	};

	_pAudioRecorder.pause = function () {
		if (nexacro.Device.curDevice == 0) {
			return;
		}
		if (this.brecording == false) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", "0", "1302", "Not recording");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}
		if (this.bpaused == true) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", this.audiofile, this.reccurtime, "1303", "Already paused");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}
		var params = '""';
		var jsonstr = "";

		jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"recpause", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pAudioRecorder.resume = function () {
		if (nexacro.Device.curDevice == 0) {
			return;
		}
		if (this.brecording == false) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", "", "0", "1302", "Not recording");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}
		if (this.bpaused == false) {
			nexacro.OnceCallbackTimer.callonce(this, function () {
				var e = new nexacro.AudioErrorEventInfo("onerror", this.audiofile, this.reccurtime, "1011", "Not paused");
				this._fire_onerror(this, e);
			}, 20);

			return;
		}

		var params = '""';
		var jsonstr = "";

		jsonstr = '{"id":' + this._id + ', "div":"Sound", "method":"recresume", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pAudioRecorder._onrecord = function (objData) {
		this.brecording = true;
		this.bpaused = false;
	};

	_pAudioRecorder._fire_onrecord = function (objAudioPlayer, eAudioEventInfo) {
		if (this.onrecord && this.onrecord._has_handlers) {
			return this.onrecord._fireEvent(this, eAudioEventInfo);
		}
		return true;
	};

	_pAudioRecorder._onrecording = function (objData) {
		this.brecording = true;
		this.bpaused = false;
		this.reccurtime = objData.curtime;
		var e = new nexacro.AudioEventInfo("onrecording", objData.reason, objData.url, objData.playtime, objData.curtime, null, null, null);
		this._fire_onrecording(this, e);
	};

	_pAudioRecorder._fire_onrecording = function (objAudioPlayer, eAudioEventInfo) {
		if (this.onrecording && this.onrecording._has_handlers) {
			return this.onrecording._fireEvent(this, eAudioEventInfo);
		}
		return true;
	};

	_pAudioRecorder._onstop = function (objData) {
		if (objData.reason == "5") {
			this.brecording = false;
			this.bpaused = false;
		}
		else if (objData.reason == "6") {
			this.brecording = true;
			this.bpaused = true;
		}
		var e = new nexacro.AudioEventInfo("onstop", objData.reason, objData.url, objData.playtime, objData.curtime, null, null, null);
		this._fire_onstop(this, e);
	};

	_pAudioRecorder._fire_onstop = function (objAudioPlayer, eAudioEventInfo) {
		if (this.onstop && this.onstop._has_handlers) {
			return this.onstop._fireEvent(this, eAudioEventInfo);
		}
		return true;
	};

	_pAudioRecorder._onerror = function (objData) {
		var e = new nexacro.AudioErrorEventInfo("onerror", objData.url, objData.curtime, objData.errorcode, objData.errormsg);
		this._fire_onerror(this, e);
	};

	_pAudioRecorder._fire_onerror = function (objAudioRecoder, AudioErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, AudioErrorEventInfo);
		}
		return true;
	};

	_pAudioRecorder = null;
}


if (!nexacro.ContactSet) {
	nexacro.ContactSet = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";

		this.isRunning = false;
		this.enableevent = true;

		this._event_list = 
			{
			"onsuccess" : 1, 
			"onerror" : 1
		};

		this.onsuccess = null;
		this.onerror = null;

		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"ContactSet", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pContactSet = nexacro.ContactSet.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.ContactSet);

	_pContactSet._type_name = "ContactSet";

	_pContactSet.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];
		jsonstr = '{"id":' + this._id + ', "div":"ContactSet", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pContactSet.on_created = function () {
	};



	_pContactSet.query = function (strQueryInfo, nResultCnt) {
		if (typeof (strQueryInfo) == "undefined" || strQueryInfo == "") {
			return false;
		}

		if (!(nexacro.Device.pramck_contactString(strQueryInfo))) {
			return false;
		}

		if (nResultCnt == null || typeof (nResultCnt) == "undefined") {
			nResultCnt = -1;
		}
		else {
			try {
				var numberss = Number(nResultCnt.toString());
			}
			catch (e) {
				return false;
			}

			if ((+numberss) != (+numberss)) {
				return false;
			}

			if (nResultCnt == 0 || nResultCnt < -1) {
				return false;
			}
		}

		var arr = strQueryInfo.split(";");

		if (arr.length < 1) {
			return false;
		}

		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split(":");
			if (arr2.length < 2) {
				return false;
			}
			else {
				var strKeyword = arr2[0].toLowerCase();
				if (arr.length == 1) {
					if (!(strKeyword == "all" || strKeyword == "uniqueid" || strKeyword == "categories" || strKeyword == "birthday" || strKeyword == "contactname" || strKeyword == "nickname" || strKeyword == "note" || strKeyword == "phonenumbers" || strKeyword == "emails" || strKeyword == "ims" || strKeyword == "urls" || strKeyword == "addresses" || strKeyword == "organizations")) {
						return false;
					}
				}
				else {
					if (!(strKeyword == "uniqueid" || strKeyword == "categories" || strKeyword == "birthday" || strKeyword == "contactname" || strKeyword == "nickname" || strKeyword == "note" || strKeyword == "phonenumbers" || strKeyword == "emails" || strKeyword == "ims" || strKeyword == "urls" || strKeyword == "addresses" || strKeyword == "organizations")) {
						return false;
					}
				}
			}

			if (arr2[1].split(" ").join("").length == 0) {
				return false;
			}
		}

		if (nexacro.Device.curDevice == 1) {
			strQueryInfo = strQueryInfo.replace(/\?/g, "_QUESTION_");
		}


		var params = '{ "strQueryInfo":"' + strQueryInfo;
		params += '", "nResultCnt":"' + nResultCnt;
		params += '"}';

		var jsonstr = '{"id":' + this._id + ', "div":"ContactSet", "method":"query", "params":' + params + '}';

		if (this.isRunning) {
			return false;
		}

		this.isRunning = true;

		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pContactSet.append = function (objContact) {
		if (!(objContact instanceof nexacro.Contact)) {
			return false;
		}

		if (this.typeCheck(objContact) == false) {
			return false;
		}

		var params = objContact.toJson();
		var jsonstr = '{"id":' + this._id + ', "div":"ContactSet", "method":"append", "params":' + params + '}';

		if (this.isRunning) {
			return false;
		}

		this.isRunning = true;
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pContactSet.update = function (objContact) {
		if (!(objContact instanceof nexacro.Contact)) {
			return false;
		}

		if (this.typeCheck(objContact) == false) {
			return false;
		}

		var params = objContact.toJson();
		var jsonstr = '{"id":' + this._id + ', "div":"ContactSet", "method":"update", "params":' + params + '}';

		if (this.isRunning) {
			return false;
		}

		this.isRunning = true;
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pContactSet.remove = function (strUniqueID) {
		if (typeof (strUniqueID) == "undefined") {
			return false;
		}

		if (strUniqueID != null) {
			if (((+strUniqueID) != (+strUniqueID)) || strUniqueID < 0) {
				return false;
			}
		}

		var params = '{ "strUniqueID":"' + strUniqueID;
		params += '"}';
		var jsonstr = '{"id":' + this._id + ', "div":"ContactSet", "method":"remove", "params":' + params + '}';

		if (this.isRunning) {
			return false;
		}

		this.isRunning = true;
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pContactSet._onsuccess = function (objData) {
		this.isRunning = false;
		if (nexacro.Device.curDevice == 0) {
			var reason = "";
			var uniqueid = "";
			var displayname = "";
			var familyname = "";
			var givenname = "";
			var middlename = "";
			var prefix = "";
			var suffix = "";
			var nickname = "";
			var birthday = "";
			var note = "";
			var phones = "";
			var emails = "";
			var ims = "";
			var categories = "";
			var urls = "";
			var address = "";
			var organ = "";
			var photo = "";
			var arr = new Array();

			for (var i = 0; i < objData.length; i++) {
				if (typeof (objData[i].contacts) != "undefined") {
					if (typeof (objData[i].contacts.uniqueid) != "undefined") {
						uniqueid = objData[i].contacts.uniqueid;
					}

					if (typeof (objData[i].contacts.contactname) != "undefined") {
						if (typeof (objData[i].contacts.contactname.displayname) != "undefined") {
							displayname = objData[i].contacts.contactname.displayname;
						}

						if (typeof (objData[i].contacts.contactname.familyname) != "undefined") {
							familyname = objData[i].contacts.contactname.familyname;
						}

						if (typeof (objData[i].contacts.contactname.givenname) != "undefined") {
							givenname = objData[i].contacts.contactname.givenname;
						}

						if (typeof (objData[i].contacts.contactname.middlename) != "undefined") {
							middlename = objData[i].contacts.contactname.middlename;
						}

						if (typeof (objData[i].contacts.contactname.prefix) != "undefined") {
							prefix = objData[i].contacts.contactname.prefix;
						}

						if (typeof (objData[i].contacts.contactname.suffix) != "undefined") {
							suffix = objData[i].contacts.contactname.suffix;
						}
					}

					if (typeof (objData[i].contacts.nickname) != "undefined") {
						nickname = objData[i].contacts.nickname;
					}

					if (typeof (objData[i].contacts.birthday) != "undefined") {
						birthday = new Date(objData[i].contacts.birthday);
					}

					if (typeof (objData[i].contacts.note) != "undefined") {
						note = objData[i].contacts.note;
					}

					if (typeof (objData[i].contacts.phonenumbers) != "undefined") {
						phones = new Array(objData[i].contacts.phonenumbers.length);
						for (var j = 0; j < objData[i].contacts.phonenumbers.length; j++) {
							var tmpPhone = new nexacro.ContactField("", objData[i].contacts.phonenumbers[j].type, objData[i].contacts.phonenumbers[j].value, objData[i].contacts.phonenumbers[j].label, "");
							phones[j] = tmpPhone;
						}
					}
					else {
						phones = new nexacro.ContactField("", "", "", "", "");
					}

					if (typeof (objData[i].contacts.emails) != "undefined") {
						emails = new Array(objData[i].contacts.emails.length);
						for (var j = 0; j < objData[i].contacts.emails.length; j++) {
							var tmpEmails = new nexacro.ContactField("", objData[i].contacts.emails[j].type, objData[i].contacts.emails[j].value, objData[i].contacts.emails[j].label, "");
							emails[j] = tmpEmails;
						}
					}
					else {
						emails = new nexacro.ContactField("", "", "", "", "");
					}

					if (typeof (objData[i].contacts.ims) != "undefined") {
						ims = new Array(objData[i].contacts.ims.length);
						for (var j = 0; j < objData[i].contacts.ims.length; j++) {
							var tempIms = new nexacro.ContactIM("", objData[i].contacts.ims[j].type, objData[i].contacts.ims[j].value, objData[i].contacts.ims[j].label, objData[i].contacts.ims[j].protocoltype, objData[i].contacts.ims[j].protocollabel, "");
							ims[j] = tempIms;
						}
					}
					else {
						ims = new nexacro.ContactIM("", "", "", "", "", "", "");
					}

					if (typeof (objData[i].contacts.categories) != "undefined") {
						categories = new Array(objData[i].contacts.categories.length);
						for (var j = 0; j < objData[i].contacts.categories.length; j++) {
							var tmpCategories = new nexacro.ContactField("", objData[i].contacts.categories[j].type, objData[i].contacts.categories[j].value, objData[i].contacts.categories[j].label, "");
							categories[j] = tmpCategories;
						}
					}
					else {
						categories = new nexacro.ContactField("", "", "", "", "");
					}

					if (typeof (objData[i].contacts.urls) != "undefined") {
						urls = new Array(objData[i].contacts.urls.length);
						for (var j = 0; j < objData[i].contacts.urls.length; j++) {
							var tmpUrls = new nexacro.ContactField("", objData[i].contacts.urls[j].type, objData[i].contacts.urls[j].value, objData[i].contacts.urls[j].label, "");
							urls[j] = tmpUrls;
						}
					}
					else {
						urls = new nexacro.ContactField("", "", "", "", "");
					}

					if (typeof (objData[i].contacts.addresses) != "undefined") {
						address = new Array(objData[i].contacts.addresses.length);
						for (var j = 0; j < objData[i].contacts.addresses.length; j++) {
							var tmpAddress = new nexacro.ContactAddress("", objData[i].contacts.addresses[j].type, objData[i].contacts.addresses[j].country, objData[i].contacts.addresses[j].postcode, objData[i].contacts.addresses[j].city, objData[i].contacts.addresses[j].region, objData[i].contacts.addresses[j].street, objData[i].contacts.addresses[j].label, "");
							address[j] = tmpAddress;
						}
					}
					else {
						address = new nexacro.ContactAddress("", "", "", "", "", "", "", "", "");
					}

					if (typeof (objData[i].contacts.organizations) != "undefined") {
						organ = new Array(objData[i].contacts.organizations.length);
						for (var j = 0; j < objData[i].contacts.organizations.length; j++) {
							var tmpOrgan = new nexacro.ContactOrganization("", objData[i].contacts.organizations[j].type, objData[i].contacts.organizations[j].company, objData[i].contacts.organizations[j].department, objData[i].contacts.organizations[j].title, objData[i].contacts.organizations[j].label, "");
							organ[j] = tmpOrgan;
						}
					}
					else {
						organ = new nexacro.ContactOrganization("", "", "", "", "", "", "");
					}

					if (typeof (objData[i].contacts.photos) != "undefined") {
						photo = new Array(objData[i].contacts.photos.length);
						for (var j = 0; j < objData[i].contacts.photos.length; j++) {
							var tmpPhoto = new nexacro.ContactPhoto("", objData[i].contacts.photos[j].imagedata, objData[i].contacts.photos[j].label, "");
							photo[j] = tmpPhoto;
						}
					}
					else {
						photo = new nexacro.ContactPhoto("", "", "", "");
					}

					var temp = new nexacro.Contact("", uniqueid, displayname, familyname, givenname, middlename, prefix, suffix, nickname, birthday, note, phones, emails, ims, categories, urls, address, organ, photo, "");

					arr[i] = temp;
				}

				if (nexacro.Device.curDevice == 0) {
					reason = objData[i].reason;
				}
				else {
					reason = objData.reason;
				}
			}

			var e = new nexacro.ContactSetEventInfo("onsuccess", reason, arr);
		}
		else {
			objData.contacts = this.makeContacts(objData.contacts);
			var e = new nexacro.ContactSetEventInfo("onsuccess", objData.reason, objData.contacts);
		}

		this._fire_onsuccess(this, e);
	};

	_pContactSet._fire_onsuccess = function (objContactSet, eContactSetEventInfo) {
		if (this.onsuccess && this.onsuccess._has_handlers) {
			return this.onsuccess._fireEvent(this, eContactSetEventInfo);
		}
		return true;
	};

	_pContactSet._onerror = function (objData) {
		this.isRunning = false;
		var e = new nexacro.ContactSetErrorEventInfo("onerror", objData.errorcode, objData.errormsg);
		this._fire_onerror(this, e);
	};

	_pContactSet._fire_onerror = function (objContactSet, eContactSetErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, eContactSetErrorEventInfo);
		}
		return true;
	};

	_pContactSet.makeContacts = function (objData) {
		var str = objData;

		var str2 = eval("(" + str + ")");
		var persons = new Array();
		persons = str2.contact;

		var contactObjList = new Array();
		for (var k = 0; k < persons.length; k++) {
			var person = persons[k];
			var phoneObjList = new Array();
			var phonenumList = person.phonenumbers;
			for (var i = 0; i < phonenumList.length; i++) {
				var phonenum = new nexacro.ContactField("", phonenumList[i].type, phonenumList[i].value.replace(new RegExp("_NEWLINE_", "gi"), "\n"), phonenumList[i].label, "");
				phoneObjList[i] = phonenum;
			}

			var categoriObjList = new Array();
			var categoriList = person.categories;
			for (var i = 0; i < categoriList.length; i++) {
				var tempVal = new nexacro.ContactField("", categoriList[i].type, categoriList[i].value.replace(new RegExp("_NEWLINE_", "gi"), "\n"), categoriList[i].label, "");
				categoriObjList[i] = tempVal;
			}

			var photoObjList = new Array();
			var photoList = person.photos;
			for (var i = 0; i < photoList.length; i++) {
				var tempVal = new nexacro.ContactPhoto("", photoList[i].imagedata, photoList[i].label, "");
				photoObjList[i] = tempVal;
			}

			var organizationObjList = new Array();
			var organizationList = person.organizations;
			for (var i = 0; i < organizationList.length; i++) {
				var tempVal = new nexacro.ContactOrganization("", organizationList[i].type, organizationList[i].company, organizationList[i].department, organizationList[i].title, organizationList[i].label, "");
				organizationObjList[i] = tempVal;
			}

			var addressObjList = new Array();
			var addressList = person.addresses;
			for (var i = 0; i < addressList.length; i++) {
				var tempVal = new nexacro.ContactAddress("", addressList[i].type, addressList[i].country.replace(new RegExp("_NEWLINE_", "gi"), "\n"), addressList[i].postcode.replace(new RegExp("_NEWLINE_", "gi"), "\n"), addressList[i].city.replace(new RegExp("_NEWLINE_", "gi"), "\n"), addressList[i].region.replace(new RegExp("_NEWLINE_", "gi"), "\n"), addressList[i].street.replace(new RegExp("_NEWLINE_", "gi"), "\n"), addressList[i].label, "");
				addressObjList[i] = tempVal;
			}

			var urlsObjList = new Array();
			var urlsList = person.urls;
			for (var i = 0; i < urlsList.length; i++) {
				var tempVal = new nexacro.ContactField("", urlsList[i].type, urlsList[i].value.replace(new RegExp("_NEWLINE_", "gi"), "\n"), urlsList[i].label, "");
				urlsObjList[i] = tempVal;
			}

			var imsObjList = new Array();
			var imsList = person.ims;
			for (var i = 0; i < imsList.length; i++) {
				var tempVal = new nexacro.ContactIM("", imsList[i].type, imsList[i].value.replace(new RegExp("_NEWLINE_", "gi"), "\n"), imsList[i].label, imsList[i].ptype, imsList[i].plabel, "");
				imsObjList[i] = tempVal;
			}

			var emailsObjList = new Array();
			var emailsList = person.emails;
			for (var i = 0; i < emailsList.length; i++) {
				var tempVal = new nexacro.ContactField("", emailsList[i].type, emailsList[i].value.replace(new RegExp("_NEWLINE_", "gi"), "\n"), emailsList[i].label, "");
				emailsObjList[i] = tempVal;
			}

			if (typeof (person.note) != "undefined") {
				person.note = person.note.replace(new RegExp("&#32;", "gi"), " ");
				person.note = person.note.replace(new RegExp("_NEWLINE_", "gi"), "\n");
			}
			contactObjList[k] = new nexacro.Contact("", person.uniqueid, person.contactname.displayname, person.contactname.familyname, person.contactname.givenname, person.contactname.middlename, person.contactname.prefix, person.contactname.suffix, person.nickname, nexacro.Device.isConvertDateToString(person.birthday), person.note, phoneObjList, emailsObjList, imsObjList, categoriObjList, urlsObjList, addressObjList, organizationObjList, photoObjList, "");
		}
		return contactObjList;
	};

	_pContactSet.typeCheck = function (obj) {
		if (typeof (obj) == "undefined") {
			return false;
		}

		if (typeof (obj.phonenumbers) != "undefined") {
			if ((obj.phonenumbers.length) > 0) {
				for (var i = 0; i < obj.phonenumbers.length; i++) {
					var num = obj.phonenumbers[i].type * 1;
					if (num < 0 && num > 12) {
						return false;
					}

					var str = obj.phonenumbers[i].type + "";
					if (nexacro.Device.curDevice == 0) {
						if (!(str == "0" || str == "1" || str == "2" || str == "3" || str == "4" || str == "6" || str == "7" || str == "9" || str == "10")) {
							return false;
						}
					}
					else {
						if (str == "1") {
							return false;
						}
					}
				}
			}
		}

		if (typeof (obj.emails) != "undefined") {
			if ((obj.emails.length) > 0) {
				for (var i = 0; i < obj.emails.length; i++) {
					var num = obj.emails[i].type * 1;
					if (num < 0 && num > 12) {
						return false;
					}

					var str = obj.emails[i].type + "";
					if (nexacro.Device.curDevice == 0) {
						if (!(str == "0" || str == "4" || str == "6" || str == "7" || str == "10")) {
							return false;
						}
					}
					else {
						if (str == "1") {
							return false;
						}
					}
				}
			}
		}

		if (typeof (obj.categories) != "undefined") {
			if ((obj.categories.length) > 0) {
				for (var i = 0; i < obj.categories.length; i++) {
					var num = obj.categories[i].type * 1;
					if (num < 0 && num > 12) {
						return false;
					}
					var str = obj.categories[i].type + "";
					if (str != "0") {
						return false;
					}
				}
			}
		}

		if (typeof (obj.urls) != "undefined") {
			if ((obj.urls.length) > 0) {
				for (var i = 0; i < obj.urls.length; i++) {
					var num = obj.urls[i].type * 1;
					if (num < 0 && num > 12) {
						return false;
					}

					var str = obj.urls[i].type + "";
					if (nexacro.Device.curDevice == 0) {
						if (str != "12") {
							return false;
						}
					}
					else {
						if (str == "1") {
							return false;
						}
					}
				}
			}
		}

		if (typeof (obj.ims) != "undefined") {
			if ((obj.ims.length) > 0) {
				for (var i = 0; i < obj.ims.length; i++) {
					var num = obj.ims[i].type * 1;
					if (num < 0 && num > 12) {
						return false;
					}
					var str = obj.ims[i].type + "";
					if (nexacro.Device.curDevice == 0) {
						if (str != "7") {
							return false;
						}

						var str2 = obj.ims[i].protocoltype + "";
						if (!(str2 == "0" || str2 == "1" || str2 == "2" || str2 == "3" || str2 == "4" || str2 == "5" || str2 == "6" || str2 == "7" || str2 == "8")) {
							return false;
						}
					}
					else {
						if (str == "1") {
							return false;
						}
					}
				}
			}
		}

		if (typeof (obj.addresses) != "undefined") {
			if ((obj.addresses.length) > 0) {
				for (var i = 0; i < obj.addresses.length; i++) {
					var num = obj.addresses[i].type * 1;
					if (num < 0 && num > 12) {
						return false;
					}
					var str = obj.addresses[i].type + "";
					if (nexacro.Device.curDevice == 0) {
						if (!(str == "0" || str == "4" || str == "7" || str == "10")) {
							return false;
						}
					}
					else {
						if (str == "1") {
							return false;
						}
					}
				}
			}
		}

		if (typeof (obj.organizations) != "undefined") {
			if ((obj.organizations.length) > 0) {
				for (var i = 0; i < obj.organizations.length; i++) {
					var num = obj.organizations[i].type * 1;
					if (num < 0 && num > 12) {
						return false;
					}

					var str = obj.organizations[i].type + "";
					if (nexacro.Device.curDevice == 0) {
						if (!(str == "0" || str == "7" || str == "10")) {
							return false;
						}
					}
					else {
						if (str != "10") {
							return false;
						}
					}
				}
			}
		}

		return true;
	};

	_pContactSet = null;
}

if (!nexacro.ContactSetEventInfo) {
	nexacro.ContactSetEventInfo = function (strEventId, strReason, arrContacts) {
		this.eventid = strEventId;
		this.reason = strReason;
		this.contacts = arrContacts;
	};
	var _pContactSetEventInfo = nexacro.ContactSetEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.ContactSetEventInfo);

	_pContactSetEventInfo._type_name = "ContactSetEventInfo";

	_pContactSetEventInfo = null;
}

if (!nexacro.ContactSetErrorEventInfo) {
	nexacro.ContactSetErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg) {
		this.eventid = strEventId;
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
	};
	var _pContactSetErrorEventInfo = nexacro.ContactSetErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.ContactSetErrorEventInfo);

	_pContactSetErrorEventInfo._type_name = "ContactSetErrorEventInfo";

	_pContactSetErrorEventInfo = null;
}

if (!nexacro.Contact) {
	nexacro.Contact = function (name, strUniqueid, strDisplayname, strFamilyname, strGivenname, strMiddlename, strPrefix, strSuffix, strNickname, dtBirthday, strNote, arrPhonenumbers, arrEmails, arrIms, arrCategories, arrUrls, arrAddresses, arrOrganizations, arrPhotos, obj) {
		this.enableevent = true;
		if (arguments.length == 2) {
			this._id = nexacro.Device.makeID();
			nexacro.Device._userCreatedObj[this._id] = this;
			this.name = name || "";

			this.uniqueid = "";
			this.contactname = {
				displayname : "", 
				familyname : "", 
				givenname : "", 
				middlename : "", 
				prefix : "", 
				suffix : "", 
				set_displayname : function () {
				}, 
				set_familyname : function (val) {
					this["familyname"] = val;
				}, 
				set_givenname : function (val) {
					this["givenname"] = val;
				}, 
				set_middlename : function (val) {
					this["middlename"] = val;
				}, 
				set_prefix : function (val) {
					this["prefix"] = val;
				}, 
				set_suffix : function (val) {
					this["suffix"] = val;
				}
			};
			this.nickname = "";
			this.birthday = "";
			this.note = "";
			this.phonenumbers = "";
			this.emails = "";
			this.ims = "";
			this.categories = "";
			this.urls = "";
			this.addresses = "";
			this.organizations = "";
			this.photos = "";
		}
		else {
			this.uniqueid = strUniqueid || "";
			this.contactname = {
				displayname : (strDisplayname || ""), 
				familyname : (strFamilyname || ""), 
				givenname : (strGivenname || ""), 
				middlename : (strMiddlename || ""), 
				prefix : (strPrefix || ""), 
				suffix : (strSuffix || ""), 
				set_displayname : function () {
				}, 
				set_familyname : function (val) {
					this["familyname"] = val;
				}, 
				set_givenname : function (val) {
					this["givenname"] = val;
				}, 
				set_middlename : function (val) {
					this["middlename"] = val;
				}, 
				set_prefix : function (val) {
					this["prefix"] = val;
				}, 
				set_suffix : function (val) {
					this["suffix"] = val;
				}
			};
			this.nickname = (strNickname || "");
			this.birthday = (dtBirthday || "");
			if (typeof (strNote) != "undefined" && strNote != "") {
				strNote = strNote.replace(/&#10;/g, "\n");
			}
			this.note = (strNote || "");
			this.phonenumbers = (arrPhonenumbers || "");
			this.emails = (arrEmails || "");
			this.ims = (arrIms || "");
			this.categories = (arrCategories || "");
			this.urls = (arrUrls || "");
			this.addresses = (arrAddresses || "");
			this.organizations = (arrOrganizations || "");
			this.photos = (arrPhotos || "");
		}
	};

	nexacro.Contact.TYPE_CUSTOM = 0;
	nexacro.Contact.TYPE_CALLBACK = 1;
	nexacro.Contact.TYPE_FAX_HOME = 2;
	nexacro.Contact.TYPE_FAX_WORK = 3;
	nexacro.Contact.TYPE_HOME = 4;
	nexacro.Contact.TYPE_MAIN = 5;
	nexacro.Contact.TYPE_MOBILE = 6;
	nexacro.Contact.TYPE_OTHER = 7;
	nexacro.Contact.TYPE_OTHER_FAX = 8;
	nexacro.Contact.TYPE_PAGER = 9;
	nexacro.Contact.TYPE_WORK = 10;
	nexacro.Contact.TYPE_IPHONE = 11;
	nexacro.Contact.TYPE_HOMEPAGE = 12;

	nexacro.Contact.PTYPE_CUSTOM = 0;
	nexacro.Contact.PTYPE_AIM = 1;
	nexacro.Contact.PTYPE_MSN = 2;
	nexacro.Contact.PTYPE_YAHOO = 3;
	nexacro.Contact.PTYPE_SKYPE = 4;
	nexacro.Contact.PTYPE_QQ = 5;
	nexacro.Contact.PTYPE_GOOGLE_TALK = 6;
	nexacro.Contact.PTYPE_ICQ = 7;
	nexacro.Contact.PTYPE_JABBER = 8;
	nexacro.Contact.PTYPE_NETMEETING = 9;
	nexacro.Contact.PTYPE_FACEBOOK = 10;
	nexacro.Contact.PTYPE_GADUGADU = 11;

	var _pContact = nexacro.Contact.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.Contact);

	_pContact._type_name = "Contact";

	_pContact.on_created = function () {
	};

	_pContact.set_uniqueid = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.uniqueid = v;
			return true;
		}
		return false;
	};

	_pContact.set_displayname = function (v) {
	};

	_pContact.set_familyname = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.contactname.familyname = v;
			return true;
		}
		return false;
	};

	_pContact.set_givenname = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.contactname.givenname = v;
			return true;
		}
		return false;
	};

	_pContact.set_middlename = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.contactname.middlename = v;
			return true;
		}
		return false;
	};

	_pContact.set_prefix = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.contactname.prefix = v;
			return true;
		}
		return false;
	};

	_pContact.set_suffix = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.contactname.suffix = v;
			return true;
		}
		return false;
	};

	_pContact.set_nickname = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.nickname = v;
			return true;
		}
		return false;
	};

	_pContact.set_note = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.note = v;
			return true;
		}
		return false;
	};

	_pContact.set_birthday = function (v) {
		if (this.isValidDate(v) == true) {
			this.birthday = v;
			return true;
		}
		return false;
	};

	_pContact.set_phonenumbers = function (v) {
		if (this.pramk_ContactFieldArray(v) == true) {
			this.phonenumbers = v;
			return true;
		}
		return false;
	};

	_pContact.set_emails = function (v) {
		if (this.pramk_ContactFieldArray(v) == true) {
			this.emails = v;
			return true;
		}
		return false;
	};

	_pContact.set_ims = function (v) {
		if (this.pramk_ContactIMArray(v) == true) {
			this.ims = v;
			return true;
		}
		return false;
	};

	_pContact.set_categories = function (v) {
		if (this.pramk_ContactFieldArray(v) == true) {
			this.categories = v;
			return true;
		}
		return false;
	};

	_pContact.set_urls = function (v) {
		if (this.pramk_ContactFieldArray(v) == true) {
			this.urls = v;
			return true;
		}
		return false;
	};

	_pContact.set_addresses = function (v) {
		if (this.pramk_ContactAddressArray(v) == true) {
			this.addresses = v;
			return true;
		}
		return false;
	};

	_pContact.set_organizations = function (v) {
		if (this.pramk_ContactOrganizationArray(v) == true) {
			this.organizations = v;
			return true;
		}
		return false;
	};

	_pContact.set_photos = function (v) {
		if (this.pramk_ContactPhotoArray(v) == true) {
			this.photos = v;
			return true;
		}
		return false;
	};

	_pContact.pramk_ContactFieldArray = function (argContactFieldArr) {
		if (Object.prototype.toString.call(argContactFieldArr) === "[object Array]" || argContactFieldArr == "") {
			for (var i = 0; i < argContactFieldArr.length; i++) {
				if (!(nexacro.Device.pramck_contactString(argContactFieldArr[i].type) && 
					nexacro.Device.pramck_contactString(argContactFieldArr[i].value) && 
					nexacro.Device.pramck_contactString(argContactFieldArr[i].label))) {
					return false;
				}
			}
			return true;
		}
		return false;
	};

	_pContact.pramk_ContactIMArray = function (argContactIMArr) {
		if (Object.prototype.toString.call(argContactIMArr) === "[object Array]" || argContactIMArr == "") {
			for (var i = 0; i < argContactIMArr.length; i++) {
				if (!(nexacro.Device.pramck_contactString(argContactIMArr[i].type) && 
					nexacro.Device.pramck_contactString(argContactIMArr[i].label) && 
					nexacro.Device.pramck_contactString(argContactIMArr[i].value) && 
					nexacro.Device.pramck_contactString(argContactIMArr[i].protocoltype) && 
					nexacro.Device.pramck_contactString(argContactIMArr[i].protocollabel))) {
					return false;
				}
			}
			return true;
		}
		return false;
	};

	_pContact.pramk_ContactAddressArray = function (argContactAddressArr) {
		if (Object.prototype.toString.call(argContactAddressArr) === "[object Array]" || argContactAddressArr == "") {
			for (var i = 0; i < argContactAddressArr.length; i++) {
				if (!(nexacro.Device.pramck_contactString(argContactAddressArr[i].type) && 
					nexacro.Device.pramck_contactString(argContactAddressArr[i].country) && 
					nexacro.Device.pramck_contactString(argContactAddressArr[i].postcode) && 
					nexacro.Device.pramck_contactString(argContactAddressArr[i].city) && 
					nexacro.Device.pramck_contactString(argContactAddressArr[i].region) && 
					nexacro.Device.pramck_contactString(argContactAddressArr[i].street) && 
					nexacro.Device.pramck_contactString(argContactAddressArr[i].label))) {
					return false;
				}
			}
			return true;
		}
		return false;
	};

	_pContact.pramk_ContactOrganizationArray = function (argContactOrganizationArr) {
		if (Object.prototype.toString.call(argContactOrganizationArr) === "[object Array]" || argContactOrganizationArr == "") {
			for (var i = 0; i < argContactOrganizationArr.length; i++) {
				if (!(nexacro.Device.pramck_contactString(argContactOrganizationArr[i].type) && 
					nexacro.Device.pramck_contactString(argContactOrganizationArr[i].company) && 
					nexacro.Device.pramck_contactString(argContactOrganizationArr[i].department) && 
					nexacro.Device.pramck_contactString(argContactOrganizationArr[i].title) && 
					nexacro.Device.pramck_contactString(argContactOrganizationArr[i].label))) {
					return false;
				}
			}
			return true;
		}
		return false;
	};

	_pContact.pramk_ContactPhotoArray = function (argContactPhotoArr) {
		if (Object.prototype.toString.call(argContactPhotoArr) === "[object Array]" || argContactPhotoArr == "") {
			for (var i = 0; i < argContactPhotoArr.length; i++) {
				if (!(nexacro.Device.pramck_contactString(argContactPhotoArr[i].imagedata) && 
					nexacro.Device.pramck_contactString(argContactPhotoArr[i].label))) {
					return false;
				}
			}
			return true;
		}
		return false;
	};

	_pContact.toJson = function () {
		if (this.contactname.familyname == null) {
			this.contactname.familyname = "";
		}
		if (this.contactname.displayname == null) {
			this.contactname.displayname = "";
		}
		if (this.contactname.givenname == null) {
			this.contactname.givenname = "";
		}
		if (this.contactname.middlename == null) {
			this.contactname.middlename = "";
		}
		if (this.contactname.prefix == null) {
			this.contactname.prefix = "";
		}
		if (this.contactname.suffix == null) {
			this.contactname.suffix = "";
		}

		if (typeof (this.uniqueid) == "undefined") {
			this.uniqueid = "";
		}

		var strJson = '{ "uniqueid":"' + this.uniqueid;

		if (nexacro.Device.curDevice == 0) {
			strJson += '", "contactname":{';
			strJson += ' "familyname":"' + this.contactname.familyname;
			strJson += '", "displayname":"' + this.contactname.displayname;
			strJson += '", "givenname":"' + this.contactname.givenname;
			strJson += '", "middlename":"' + this.contactname.middlename;
			strJson += '", "prefix":"' + this.contactname.prefix;
			strJson += '", "suffix":"' + this.contactname.suffix;
			strJson += '"}';
		}
		else {
			strJson += '", "contactname":[{';
			strJson += ' "familyname":"' + this.contactname.familyname;
			strJson += '", "displayname":"' + this.contactname.displayname;
			strJson += '", "givenname":"' + this.contactname.givenname;
			strJson += '", "middlename":"' + this.contactname.middlename;
			strJson += '", "prefix":"' + this.contactname.prefix;
			strJson += '", "suffix":"' + this.contactname.suffix;
			strJson += '"}]';
		}

		if (typeof (this.nickname) == "undefined") {
			this.nickname = "";
		}

		strJson += ', "nickname":"' + this.nickname;

		if (nexacro.Device.curDevice == 0) {
			if (this.birthday != "") {
				var year;
				var month;
				var date;
				year = this.birthday.getFullYear();
				month = this.birthday.getMonth() + 1;
				date = this.birthday.getDate();

				strJson += '", "birthday":"' + year + '-' + month + '-' + date;
			}
			else {
				strJson += '", "birthday":"' + this.birthday;
			}
		}
		else {
			if (this.birthday != "") {
				strJson += '", "birthday":"' + this.birthday.getFullYear() + '/' + (this.birthday.getMonth() + 1) + '/' + this.birthday.getDate();
			}
			else {
				strJson += '", "birthday":"';
			}
		}

		if (typeof (this.note) == "undefined") {
			this.note = "";
		}

		if (nexacro.Device.curDevice == 1) {
			this.note = this.note.replace(/\r/g, "");
			this.note = this.note.replace(/\n/g, "_NEWLINE_");
			this.note = this.note.replace(/&#10;/g, "_NEWLINE_");
		}

		strJson += '", "note":"' + this.note;
		strJson += '", "phonenumbers":';

		if (typeof (this.phonenumbers) != "undefined") {
			if ((this.phonenumbers.length) > 0) {
				strJson += '[';
				for (var i = 0; i < this.phonenumbers.length; i++) {
					strJson += this.phonenumbers[i].toJson();
					if (((this.phonenumbers.length) - 1) == i) {
					}
					else {
						strJson += ',';
					}
				}
				strJson += ']';
			}
			else {
				strJson += '""';
			}
		}
		else {
			strJson += '""';
		}

		strJson += ', "emails":';
		if (typeof (this.emails) != "undefined") {
			if ((this.emails.length) > 0) {
				strJson += '[';
				for (var i = 0; i < this.emails.length; i++) {
					strJson += this.emails[i].toJson();
					if (((this.emails.length) - 1) == i) {
					}
					else {
						strJson += ',';
					}
				}
				strJson += ']';
			}
			else {
				strJson += '""';
			}
		}
		else {
			strJson += '""';
		}

		strJson += ', "ims":';
		if (typeof (this.ims) != "undefined") {
			if ((this.ims.length) > 0) {
				strJson += '[';
				for (var i = 0; i < this.ims.length; i++) {
					strJson += this.ims[i].toJson();
					if (((this.ims.length) - 1) == i) {
					}
					else {
						strJson += ',';
					}
				}
				strJson += ']';
			}
			else {
				strJson += '""';
			}
		}
		else {
			strJson += '""';
		}

		strJson += ', "categories":';
		if (typeof (this.categories) != "undefined") {
			if ((this.categories.length) > 0) {
				strJson += '[';
				for (var i = 0; i < this.categories.length; i++) {
					strJson += this.categories[i].toJson();
					if (((this.categories.length) - 1) == i) {
					}
					else {
						strJson += ',';
					}
				}
				strJson += ']';
			}
			else {
				strJson += '""';
			}
		}
		else {
			strJson += '""';
		}

		strJson += ', "urls":';
		if (typeof (this.urls) != "undefined") {
			if ((this.urls.length) > 0) {
				strJson += '[';
				for (var i = 0; i < this.urls.length; i++) {
					strJson += this.urls[i].toJson();
					if (((this.urls.length) - 1) == i) {
					}
					else {
						strJson += ',';
					}
				}
				strJson += ']';
			}
			else {
				strJson += '""';
			}
		}
		else {
			strJson += '""';
		}

		strJson += ', "addresses":';
		if (typeof (this.addresses) != "undefined") {
			if ((this.addresses.length) > 0) {
				strJson += '[';
				for (var i = 0; i < this.addresses.length; i++) {
					strJson += this.addresses[i].toJson();
					if (((this.addresses.length) - 1) == i) {
					}
					else {
						strJson += ',';
					}
				}
				strJson += ']';
			}
			else {
				strJson += '""';
			}
		}
		else {
			strJson += '""';
		}

		strJson += ', "organizations":';
		if (typeof (this.organizations) != "undefined") {
			if ((this.organizations.length) > 0) {
				strJson += '[';
				for (var i = 0; i < this.organizations.length; i++) {
					strJson += this.organizations[i].toJson();
					if (((this.organizations.length) - 1) == i) {
					}
					else {
						strJson += ',';
					}
				}
				strJson += ']';
			}
			else {
				strJson += '""';
			}
		}
		else {
			strJson += '""';
		}

		strJson += ', "photos":';
		if (typeof (this.photos) != "undefined") {
			if ((this.photos.length) > 0) {
				strJson += '[';
				for (var i = 0; i < this.photos.length; i++) {
					strJson += this.photos[i].toJson();
					if (((this.photos.length) - 1) == i) {
					}
					else {
						strJson += ',';
					}
				}
				strJson += ']';
			}
			else {
				strJson += '""';
			}
		}
		else {
			strJson += '""';
		}

		strJson += '}';

		return strJson;
	};

	_pContact.isValidDate = function (argDate) {
		if (Object.prototype.toString.call(argDate) === "[object Date]" || argDate == "") {
			return true;
		}
		return false;
	};

	_pContact = null;
}

if (!nexacro.ContactField) {
	nexacro.ContactField = function (name, strType, strValue, strLabel, obj) {
		if (arguments.length == 2) {
			this._id = nexacro.Device.makeID();
			nexacro.Device._userCreatedObj[this._id] = this;
			this.name = name || "";

			this.type = "";
			this.value = "";
			this.label = "";
		}
		else {
			this.type = strType || "";
			this.value = strValue || "";
			this.label = strLabel || "";
		}
		this.enableevent = true;
	};
	var _pContactField = nexacro.ContactField.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.ContactField);

	_pContactField._type_name = "ContactField";

	_pContactField.on_created = function () {
	};

	_pContactField.set_type = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.type = v;
			return true;
		}
		this.type = "";
		return false;
	};

	_pContactField.set_value = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.value = v;
			return true;
		}
		this.value = "";
		return false;
	};

	_pContactField.set_label = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.label = v;
			return true;
		}
		this.label = "";
		return false;
	};

	_pContactField.toJson = function () {
		if (typeof (this.label) == "undefined" || this.label == null) {
			this.label = "";
		}
		if (typeof (this.value) == "undefined" || this.value == null) {
			this.value = "";
		}
		if (typeof (this.type) == "undefined" || this.type == null) {
			this.type = "";
		}

		var strJson = '{ "label":"' + this.label;
		strJson += '", "value":"' + this.value;
		strJson += '", "type":"' + this.type;
		strJson += '"}';

		return strJson;
	};

	_pContactField = null;
}

if (!nexacro.ContactIM) {
	nexacro.ContactIM = function (name, strType, strValue, strLabel, strPtype, strPlabel, obj) {
		if (arguments.length == 2) {
			this._id = nexacro.Device.makeID();
			nexacro.Device._userCreatedObj[this._id] = this;
			this.name = name || "";

			this.type = "";
			this.value = "";
			this.label = "";
			this.protocoltype = "";
			this.protocollabel = "";
		}
		else {
			this.type = strType || "";
			this.value = strValue || "";
			this.label = strLabel || "";
			this.protocoltype = strPtype || "";
			this.protocollabel = strPlabel || "";
		}
		this.enableevent = true;
	};
	var _pContactIM = nexacro.ContactIM.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.ContactIM);

	_pContactIM._type_name = "ContactIM";

	_pContactIM.on_created = function () {
	};

	_pContactIM.set_type = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.type = v;
			return true;
		}
		this.type = "";
		return false;
	};

	_pContactIM.set_value = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.value = v;
			return true;
		}
		this.value = "";
		return false;
	};

	_pContactIM.set_label = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.label = v;
			return true;
		}
		this.label = "";
		return false;
	};

	_pContactIM.set_protocoltype = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.protocoltype = v;
			return true;
		}
		this.protocoltype = "";
		return false;
	};

	_pContactIM.set_protocollabel = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.protocollabel = v;
			return true;
		}
		this.protocollabel = "";
		return false;
	};

	_pContactIM.toJson = function () {
		if (typeof (this.label) == "undefined" || this.label == null) {
			this.label = "";
		}
		if (typeof (this.value) == "undefined" || this.value == null) {
			this.value = "";
		}
		if (typeof (this.type) == "undefined" || this.type == null) {
			this.type = "";
		}
		if (typeof (this.protocoltype) == "undefined" || this.protocoltype == null) {
			this.protocoltype = "";
		}
		if (typeof (this.protocollabel) == "undefined" || this.protocollabel == null) {
			this.protocollabel = "";
		}

		var strJson = '{ "label":"' + this.label;
		strJson += '", "value":"' + this.value;
		strJson += '", "type":"' + this.type;
		strJson += '", "ptype":"' + this.protocoltype;
		strJson += '", "plabel":"' + this.protocollabel;
		strJson += '"}';
		return strJson;
	};

	_pContactIM = null;
}

if (!nexacro.ContactAddress) {
	nexacro.ContactAddress = function (name, strType, strCountry, strPostcode, strCity, strRegion, strStreet, strLabel, obj) {
		if (arguments.length == 2) {
			this._id = nexacro.Device.makeID();
			nexacro.Device._userCreatedObj[this._id] = this;
			this.name = name || "";

			this.type = "";
			this.country = "";
			this.postcode = "";
			this.city = "";
			this.region = "";
			this.street = "";
			this.label = "";
		}
		else {
			this.type = strType || "";
			this.country = strCountry || "";
			this.postcode = strPostcode || "";
			this.city = strCity || "";
			this.region = strRegion || "";
			this.street = strStreet || "";
			this.label = strLabel || "";
		}
		this.enableevent = true;
	};

	var _pContactAddress = nexacro.ContactAddress.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.ContactAddress);

	_pContactAddress._type_name = "ContactAddress";

	_pContactAddress.on_created = function () {
	};

	_pContactAddress.set_type = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.type = v;
			return true;
		}
		return false;
	};

	_pContactAddress.set_country = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.country = v;
			return true;
		}
		return false;
	};

	_pContactAddress.set_postcode = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.postcode = v;
			return true;
		}
		return false;
	};

	_pContactAddress.set_city = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.city = v;
			return true;
		}
		return false;
	};

	_pContactAddress.set_region = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.region = v;
			return true;
		}
		return false;
	};

	_pContactAddress.set_street = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.street = v;
			return true;
		}
		return false;
	};

	_pContactAddress.set_label = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.label = v;
			return true;
		}
		return false;
	};

	_pContactAddress.toJson = function () {
		if (nexacro.Device.curDevice == 0) {
			if (typeof (this.label) == "undefined" || this.label == null) {
				this.label = "";
			}
			if (typeof (this.country) == "undefined" || this.country == null) {
				this.country = "";
			}
			if (typeof (this.postcode) == "undefined" || this.postcode == null) {
				this.postcode = "";
			}
			if (typeof (this.city) == "undefined" || this.city == null) {
				this.city = "";
			}
			if (typeof (this.region) == "undefined" || this.region == null) {
				this.region = "";
			}
			if (typeof (this.street) == "undefined" || this.street == null) {
				this.street = "";
			}
			if (typeof (this.type) == "undefined" || this.type == null) {
				this.type = "";
			}

			var strJson = '{ "label":"' + this.label;
			strJson += '", "country":"' + this.country;
			strJson += '", "postcode":"' + this.postcode;
			strJson += '", "city":"' + this.city;
			strJson += '", "region":"' + this.region;
			strJson += '", "street":"' + this.street;
			strJson += '", "type":"' + this.type;
			strJson += '"}';
		}
		else {
			if (typeof (this.label) == "undefined" || this.label == null) {
				this.label = "";
			}
			if (typeof (this.type) == "undefined" || this.type == null) {
				this.type = "";
			}
			if (typeof (this.country) == "undefined" || this.country == null) {
				this.country = "";
			}
			if (typeof (this.postcode) == "undefined" || this.postcode == null) {
				this.postcode = "";
			}
			if (typeof (this.city) == "undefined" || this.city == null) {
				this.city = "";
			}
			if (typeof (this.region) == "undefined" || this.region == null) {
				this.region = "";
			}
			if (typeof (this.street) == "undefined" || this.street == null) {
				this.street = "";
			}

			var strJson = '{ "label":"' + this.label;
			strJson += '", "type":"' + this.type;
			strJson += '", "value":{';
			strJson += '"Country":"' + this.country;
			strJson += '", "ZIP":"' + this.postcode;
			strJson += '", "City":"' + this.city;
			strJson += '", "State":"' + this.region;
			strJson += '", "Street":"' + this.street;
			strJson += '"}}';
		}
		return strJson;
	};

	_pContactAddress = null;
}

if (!nexacro.ContactOrganization) {
	nexacro.ContactOrganization = function (name, strType, strCompany, strDepartment, strTitle, strLabel, obj) {
		if (arguments.length == 2) {
			this._id = nexacro.Device.makeID();
			nexacro.Device._userCreatedObj[this._id] = this;
			this.name = name || "";

			this.type = "";
			this.company = "";
			this.department = "";
			this.title = "";
			this.label = "";
		}
		else {
			this.type = strType || "";
			this.company = strCompany || "";
			this.department = strDepartment || "";
			this.title = strTitle || "";
			this.label = strLabel || "";
		}
		this.enableevent = true;
	};

	var _pContactOrganization = nexacro.ContactOrganization.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.ContactOrganization);

	_pContactOrganization._type_name = "ContactOrganization";

	_pContactOrganization.on_created = function () {
	};

	_pContactOrganization.set_type = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.type = v;
			return true;
		}
		return false;
	};

	_pContactOrganization.set_company = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.company = v;
			return true;
		}
		return false;
	};

	_pContactOrganization.set_department = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.department = v;
			return true;
		}
		return false;
	};

	_pContactOrganization.set_title = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.title = v;
			return true;
		}
		return false;
	};

	_pContactOrganization.set_label = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.label = v;
			return true;
		}
		return false;
	};

	_pContactOrganization.toJson = function () {
		if (typeof (this.label) == "undefined" || this.label == null) {
			this.label = "";
		}
		if (typeof (this.title) == "undefined" || this.title == null) {
			this.title = "";
		}
		if (typeof (this.company) == "undefined" || this.company == null) {
			this.company = "";
		}
		if (typeof (this.department) == "undefined" || this.department == null) {
			this.department = "";
		}
		if (typeof (this.type) == "undefined" || this.type == null) {
			this.type = "";
		}

		var strJson = '{ "label":"' + this.label;
		strJson += '", "title":"' + this.title;
		strJson += '", "company":"' + this.company;
		strJson += '", "department":"' + this.department;
		strJson += '", "type":"' + this.type;
		strJson += '"}';

		return strJson;
	};

	_pContactOrganization = null;
}

if (!nexacro.ContactPhoto) {
	nexacro.ContactPhoto = function (name, strImagedata, strLabel, obj) {
		if (arguments.length == 2) {
			this._id = nexacro.Device.makeID();
			nexacro.Device._userCreatedObj[this._id] = this;
			this.name = name || "";

			this.imagedata = "";
			this.label = "";
		}
		else {
			this.imagedata = strImagedata || "";
			this.label = strLabel || "";
		}
		this.enableevent = true;
	};

	var _pContactPhoto = nexacro.ContactPhoto.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.ContactPhoto);

	_pContactPhoto._type_name = "ContactPhoto";

	_pContactPhoto.on_created = function () {
	};

	_pContactPhoto.set_imagedata = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.imagedata = v;
			return true;
		}
		return false;
	};

	_pContactPhoto.set_label = function (v) {
		if (nexacro.Device.pramck_contactString(v) == true) {
			this.label = v;
			return true;
		}
		return false;
	};

	_pContactPhoto.toJson = function () {
		var strJson = '{ "imagedata":"' + this.imagedata;
		strJson += '", "label":"' + this.label;
		strJson += '"}';

		return strJson;
	};

	_pContactPhoto = null;
}

if (!nexacro.ExternalAPI) {
	nexacro.ExternalAPI = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";

		this.enableevent = true;

		this._event_list = {
			"onsuccess" : 1, 
			"onerror" : 1, 
			"onrecvdata" : 1
		};

		this.onsuccess = null;
		this.onerror = null;
		this.onrecvdata = null;

		var params = '""';
		var jsonstr = "";
		jsonstr = '{"id":' + this._id + ', "div":"ExternalAPI", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pExternalAPI = nexacro.ExternalAPI.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.ExternalAPI);

	_pExternalAPI._type_name = "ExternalAPI";

	_pExternalAPI.destroy = function () {
		var params = '""';
		var jsonstr;
		delete nexacro.Device._userCreatedObj[this._id];
		jsonstr = '{"id":' + this._id + ', "div":"ExternalAPI", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};
	_pExternalAPI.on_created = function () {
	};

	_pExternalAPI.isAccessible = function (strApplicationID) {
		if (typeof (strApplicationID) == "undefined" || strApplicationID.length == 0 || typeof (strApplicationID) != "string") {
			return false;
		}
		else {
			var params = '{"appID":"' + strApplicationID + '"}';
			var jsonstr = "";
			jsonstr = '{"id":' + this._id + ', "div":"ExternalAPI", "method":"isAccessible", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
			return true;
		}
	};

	_pExternalAPI.execExtAPI = function (strRecvID, strApplicationID, strAPI, strParams) {
		if (typeof (strApplicationID) == "undefined" || strApplicationID.length == 0 || typeof (strApplicationID) != "string") {
			return false;
		}

		if (typeof (strAPI) == "undefined" || strAPI.length == 0) {
			return false;
		}

		var params = '{"recvID":"' + strRecvID + '"';
		params += ', "appID":"' + strApplicationID + '"';
		params += ', "apiname":"' + strAPI + '"';
		params += ', "params":"' + strParams + '"}';
		var jsonstr = "";
		jsonstr = '{"id":' + this._id + ', "div":"ExternalAPI", "method":"execExtAPI", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pExternalAPI._onsuccess = function (objData) {
		var e = new nexacro.ExternalAPIEventinfo("onsuccess", objData.reason, objData.recvid, objData.recvdata);
		this._fire_onsuccess(this, e);
	};

	_pExternalAPI._fire_onsuccess = function (objExternalAPI, eExternalAPIEventInfo) {
		if (this.onsuccess && this.onsuccess._has_handlers) {
			return this.onsuccess._fireEvent(this, eExternalAPIEventInfo);
		}
		return true;
	};

	_pExternalAPI._onrecvdata = function (objData) {
		var e = new nexacro.ExternalAPIEventinfo("onrecvdata", objData.reason, objData.recvid, objData.recvdata);
		this._fire_onrecvdata(this, e);
	};

	_pExternalAPI._fire_onrecvdata = function (objExternalAPI, eExternalAPIEventInfo) {
		if (this.onrecvdata && this.onrecvdata._has_handlers) {
			return this.onrecvdata._fireEvent(this, eExternalAPIEventInfo);
		}
		return true;
	};

	_pExternalAPI._onerror = function (objData) {
		var e = new nexacro.ExternalAPIErrorEventInfo("onerror", objData.errorcode, objData.errormsg);
		this._fire_onerror(this, e);
	};

	_pExternalAPI._fire_onerror = function (objExternalAPI, eExternalAPIErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, eExternalAPIErrorEventInfo);
		}
		return true;
	};

	_pExternalAPI = null;
}

if (!nexacro.ExternalAPIEventinfo) {
	nexacro.ExternalAPIEventinfo = function (strEventId, strReason, strRecvid, strRecvdata) {
		this.eventid = strEventId;
		this.reason = strReason;
		this.recvid = strRecvid;
		this.recvdata = strRecvdata;
	};
	var _pExternalAPIEventinfo = nexacro.ExternalAPIEventinfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.ExternalAPIEventinfo);

	_pExternalAPIEventinfo._type_name = "ExternalAPIEventinfo";

	_pExternalAPIEventinfo = null;
}

if (!nexacro.ExternalAPIErrorEventInfo) {
	nexacro.ExternalAPIErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg) {
		this.eventid = strEventId;
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
	};
	var _pExternalAPIErrorEventInfo = nexacro.ExternalAPIErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.ExternalAPIErrorEventInfo);

	_pExternalAPIErrorEventInfo._type_name = "ExternalAPIErrorEventinfo";

	_pExternalAPIErrorEventInfo = null;
}



if (nexacro.OS == "iOS" && !nexacro.LiteDBEventInfo) {
	nexacro.LiteDBEventInfo = function (strEventId, strReason, strReturnValue) {
		this.eventid = strEventId;
		this.reason = strReason;
		this.returnvalue = strReturnValue;
	};
	var _pLiteDBEventInfo = nexacro.LiteDBEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.LiteDBEventInfo);

	_pLiteDBEventInfo._type_name = "LiteDBEventInfo";

	_pLiteDBEventInfo = null;
}

if (nexacro.OS == "iOS" && !nexacro.LiteDBErrorEventInfo) {
	nexacro.LiteDBErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg, strldbErrorCode, strldbErrorMsg) {
		this.eventid = strEventId;
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
		this.ldberrorcode = strldbErrorCode;
		this.ldberrormsg = strldbErrorMsg;
	};
	var _pLiteDBErrorEventInfo = nexacro.LiteDBErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.LiteDBErrorEventInfo);

	_pLiteDBErrorEventInfo._type_name = "LiteDBErrorEventInfo";

	_pLiteDBErrorEventInfo = null;
}

if (nexacro.OS == "iOS" && !nexacro.LiteDBConnection) {
	nexacro.LiteDBConnection = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";
		this.bbegin = false;
		this.enableevent = true;
		this.sqlstatement = "";
		this.busytimeout = 60000;
		this.openflag = 1;
		this.datasource = "";
		this.preconnect = "false";
		this.async = true;

		this._event_list = {
			"onsuccess" : 1, 
			"onerror" : 1
		};

		this.onsuccess = null;
		this.onerror = null;

		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"SQLConnection", "method":"constructor", "params":' + params + '}';

		nexacro.Device.exec(jsonstr);
	};

	nexacro.LiteDBConnection.openReadWrite = 0;
	nexacro.LiteDBConnection.openReadWriteCreate = 1;

	var _pLiteDBConnection = nexacro.LiteDBConnection.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.LiteDBConnection);

	_pLiteDBConnection._type_name = "LiteDBConnection";

	_pLiteDBConnection.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];

		jsonstr = '{"id":' + this._id + ', "div":"SQLConnection", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pLiteDBConnection.on_created = function () {
	};

	_pLiteDBConnection.set_busytimeout = function (v) {
		if (this.paramck_busytimeout(v)) {
			this.busytimeout = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pLiteDBConnection.set_datasource = function (v) {
		if (this.paramck_datasource(v)) {
			this.datasource = v;
			if (this.preconnect == "true" || this.preconnect == true) {
				this.open();
			}
			return true;
		}
		else {
			return false;
		}
	};

	_pLiteDBConnection.set_openflag = function (v) {
		if (v == LiteDBConnection.openReadWrite || v == LiteDBConnection.openReadWriteCreate) {
			this.openflag = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pLiteDBConnection.set_preconnect = function (v) {
		if (v == "true" || v == "false" || v == true || v == false) {
			this.preconnect = v;
			if (this.preconnect == "true" || this.preconnect == true) {
				if (this.datasource != "") {
					this.open();
				}
			}
			return true;
		}
		else {
			return false;
		}
	};

	_pLiteDBConnection.set_async = function (v) {
	};

	_pLiteDBConnection.begin = function () {
		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"SQLConnection", "method":"begin", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pLiteDBConnection.close = function () {
		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"SQLConnection", "method":"closeDB", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pLiteDBConnection.commit = function () {
		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"SQLConnection", "method":"commit", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pLiteDBConnection.isConnected = function () {
		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"SQLConnection", "method":"isConnected", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pLiteDBConnection.open = function (strDataSource, constOpenFlag) {
		if (typeof (constOpenFlag) != "undefined" || constOpenFlag != null) {
			this.openflag = constOpenFlag;
		}

		if (typeof (strDataSource) != "undefined" || strDataSource != null) {
			this.datasource = strDataSource;
		}

		if (this.paramck_asyncOpen(this.datasource, this.openflag)) {
			if (this.datasource.substring(0, 9).toLowerCase() == "%userapp%") {
				var params = '{"datasource":"' + this.datasource.substring(9, this.datasource.length) + '", "openflag":"' + this.openflag + '", "busytimeout":"' + this.busytimeout + '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"SQLConnection", "method":"openDB", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
			else {
				var params = '{"datasource":"' + this.datasource + '", "openflag":"' + this.openflag + '", "busytimeout":"' + this.busytimeout + '"}';
				var jsonstr = '{"id":' + this._id + ', "div":"SQLConnection", "method":"openDB", "params":' + params + '}';
				nexacro.Device.exec(jsonstr);
			}
		}
		else {
			return false;
		}
		return true;
	};

	_pLiteDBConnection.rollback = function () {
		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"SQLConnection", "method":"rollback", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pLiteDBConnection._onsuccess = function (objData) {
		var e = new nexacro.LiteDBEventInfo("onsuccess", objData.reason, objData.returnvalue);
		this._fire_onsuccess(this, e);
	};

	_pLiteDBConnection._fire_onsuccess = function (objLiteDBConnection, eLiteDBEventInfo) {
		if (this.onsuccess && this.onsuccess._has_handlers) {
			return this.onsuccess._fireEvent(this, eLiteDBEventInfo);
		}
		return true;
	};

	_pLiteDBConnection._onerror = function (objData) {
		var e = new nexacro.LiteDBErrorEventInfo("onerror", objData.errorcode, objData.errormsg, objData.ldberrorcode, nexacro.Device.decodeString(objData.ldberrormsg));
		this._fire_onerror(this, e);
	};

	_pLiteDBConnection._fire_onerror = function (objLiteDBConnection, eLiteDBErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, eLiteDBErrorEventInfo);
		}
		return true;
	};

	_pLiteDBConnection.paramck_busytimeout = function (timout) {
		if (timout == null || typeof (timout) == "undefined") {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(timout)) {
			return false;
		}

		if (timout < 200 || timout > 86400000) {
			return false;
		}

		return true;
	};

	_pLiteDBConnection.paramck_datasource = function (datasrc) {
		if (datasrc == null || typeof (datasrc) == "undefined") {
			return false;
		}
		return true;
	};



	_pLiteDBConnection.paramck_asyncOpen = function (strDataSource, constOpenFlag) {
		if (strDataSource == null || typeof (strDataSource) == "undefined" || typeof (strDataSource) != "string") {
			return false;
		}

		if (!nexacro.Device.publicNumCheck(constOpenFlag)) {
			return false;
		}
		return true;
	};

	_pLiteDBConnection.paramck_query = function (db_query) {
		if (db_query == null || typeof (db_query) == "undefined" || typeof (db_query) != "string") {
			return false;
		}
		return true;
	};

	_pLiteDBConnection.paramck_paramck_ldbconnection = function (objconnection) {
		if (objconnection == null || typeof (objconnection) == "undefined" || !(objconnection instanceof nexacro.LiteDBConnection)) {
			if (typeof (objconnection) != "string") {
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pLiteDBConnection.paramck_asyncExecuteQuery = function (db_query) {
		if (db_query == null || typeof (db_query) == "undefined" || typeof (db_query) != "string") {
			return false;
		}
		return true;
	};

	_pLiteDBConnection = null;
}

if (nexacro.OS == "iOS" && !nexacro.LiteDBParameter) {
	nexacro.LiteDBParameter = function (name, type, value) {
		this.name = name || "";
		this.type = type || "string";
		this.value = value;
	};
	var _pLiteDBParameter = nexacro.LiteDBParameter.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.LiteDBParameter);

	_pLiteDBParameter._type_name = "LiteDBParameter";

	_pLiteDBParameter.set_name = function (v) {
		if (this.paramck_datasource(v)) {
			this.name = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pLiteDBParameter.set_value = function (v) {
		if (this.paramck_datasource(v)) {
			this.value = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pLiteDBParameter.set_type = function (v) {
		if (this.paramck_datasource(v)) {
			this.type = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pLiteDBParameter.toJSON = function () {
		var valueString;
		if (this.value == null) {
			valueString = 'null';
		}
		else if (this.value == undefined) {
			valueString = 'undefined';
		}
		else {
			switch (nexacro.DataUtils.toTypeCode(this.type)) {
				case 2:
				case 3:
					valueString = nexacro.DataUtils.toTextFromDecimal(this.value);
					break;
				case 4:
					valueString = '"' + nexacro.DataUtils.toTextFromDecimal(this.value) + '"';
					break;
				case 5:
					valueString = '"' + nexacro.DataUtils.toTextFromDate(this.value) + '"';
					break;
				case 6:
					valueString = '"' + nexacro.DataUtils.toTextFromTime(this.value) + '"';
					break;
				case 7:
					if (this.value.dateObj == undefined) {
						valueString = '"' + nexacro.DataUtils.toTextFromDateTime(this.value) + '"';
					}
					else {
						valueString = '"' + nexacro.DataUtils.toTextFromDateTime(this.value.dateObj) + '"';
					}
					break;
				case 0:
				case 1:
				case 8:
				case 9:
				default:
					valueString = '"' + nexacro.Device.encodeString(this.value) + '"';
					break;
			}
		}
		return eval('({"name":"' + this.name + '","type":' + nexacro.DataUtils.toTypeCode(this.type) + ',"value":' + valueString + '})');
	};

	_pLiteDBParameter.paramck_datasource = function (datasrc) {
		if (datasrc == null || typeof (datasrc) == "undefined") {
			return false;
		}
		return true;
	};

	_pLiteDBParameter = null;
}

if (nexacro.OS == "iOS" && !nexacro.LiteDBStatement) {
	nexacro.LiteDBStatement = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";
		this._obj = obj;

		this.query = "";
		this.ldbconnection = "";
		this.parameters = {
		};
		this.paramdataset;
		this.applyrowpos = -1;
		this.enableevent = true;
		this.async = true;

		this._event_list = {
			"onsuccess" : 1, 
			"onerror" : 1
		};

		this.onsuccess = null;
		this.onerror = null;

		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"SQLStatement", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pLiteDBStatement = nexacro.LiteDBStatement.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.LiteDBStatement);

	_pLiteDBStatement._type_name = "LiteDBStatement";

	_pLiteDBStatement.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];

		jsonstr = '{"id":' + this._id + ', "div":"SQLStatement", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};
	_pLiteDBStatement.on_created = function () {
	};


	_pLiteDBStatement.set_query = function (v) {
		if (this.paramck_query(v)) {
			this.query = v;
			return true;
		}
		else {
			return false;
		}
	};

	_pLiteDBStatement.set_ldbconnection = function (v) {
		var ret = false;

		if (v instanceof nexacro.LiteDBConnection) {
			this.ldbconnection = v;
			ret = true;
		}
		else if (typeof (v) == "string") {
			var at = "@";
			if (v.indexOf(at) == 0) {
				v = v.substring(at.length);
			}
			else if (v.match(/@/) == null) {
				v = at + v;
			}

			if (null != this._obj[v] && this._obj[v] instanceof nexacro.LiteDBConnection) {
				this.ldbconnection = this._obj[v];
				ret = true;
			}
		}

		if (ret) {
			var params = '{"connectionID":"' + this.ldbconnection._id + '"}';
			var jsonstr = '{"id":' + this._id + ', "div":"SQLStatement", "method":"set_SQLConnection", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}

		return ret;
	};

	_pLiteDBStatement.set_parameters = function (v) {
		if (v instanceof Object) {
			this.parameters = v;
			return true;
		}
		return false;
	};

	_pLiteDBStatement.set_async = function (v) {
	};

	_pLiteDBStatement.close = function () {
		var params;

		if (nexacro.Device.curDevice == 0) {
			params = '{"id":"' + this._id + '"}';
		}
		else {
			params = '""';
		}
		var jsonstr = '{"id":' + this._id + ',"div":"SQLStatement", "method":"close", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pLiteDBStatement.executeQuery = function (strQuery) {
		if (strQuery == null) {
			if (this.query.length == 0) {
				return false;
			}
		}
		else {
			if (typeof (strQuery) == "string" && strQuery.length > 0) {
				this.query = strQuery;
			}
			else {
				return false;
			}
		}



		var retQuery = nexacro.Device.encodeString(this.query);
		var param_dataset = new nexacro.Dataset();
		var param_parameters = {
		};
		var param_applyrowpos = -1;

		if (this.parameters instanceof nexacro.Dataset) {
			param_dataset = this.parameters;
		}
		else {
			param_parameters = this.parameters;
		}




		{

			var params = '{"query":"' + retQuery + '","parameters":' + JSON.stringify(param_parameters) + ',"paramdataset":' + nexacro.Device.DatasetToJSONString2(param_dataset) + ',"applyrowpos":' + param_applyrowpos + '}';
			var jsonstr = '{"id":' + this._id + ',"div":"SQLStatement", "method":"executeQuery", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}


		return true;
	};

	_pLiteDBStatement.executeUpdate = function (strQuery) {
		if (strQuery == null) {
			if (this.query.length == 0) {
				return false;
			}
		}
		else {
			if (typeof (strQuery) == "string" && strQuery.length > 0) {
				this.query = strQuery;
			}
			else {
				return false;
			}
		}



		var retQuery = nexacro.Device.encodeString(this.query);

		var param_dataset = new nexacro.Dataset();
		var param_parameters = {
		};
		var param_applyrowpos = -1;

		if (this.parameters instanceof nexacro.Dataset) {
			param_dataset = this.parameters;
		}
		else {
			param_parameters = this.parameters;
		}




		{

			var params = '{"query":"' + retQuery + '","parameters":' + JSON.stringify(param_parameters) + ',"paramdataset":' + nexacro.Device.DatasetToJSONString2(param_dataset) + ',"applyrowpos":' + param_applyrowpos + '}';
			var jsonstr = '{"id":' + this._id + ', "div":"SQLStatement", "method":"executeUpdate", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}

		return true;
	};

	_pLiteDBStatement._onsuccess = function (objData) {
		var e;
		if (objData.reason != "7") {
			e = new nexacro.LiteDBEventInfo("onsuccess", objData.reason, objData.returnvalue);
		}
		else {
			var tempDS = new nexacro.Dataset("__tempDS", this._obj);

			tempDS = nexacro.Device.JSONObjectToDataset2(objData.returnvalue, tempDS);
			e = new nexacro.LiteDBEventInfo("onsuccess", objData.reason, tempDS);
		}
		this._fire_onsuccess(this, e);
	};

	_pLiteDBStatement._fire_onsuccess = function (objLiteDBStatement, eLiteDBEventInfo) {
		if (this.onsuccess && this.onsuccess._has_handlers) {
			return this.onsuccess._fireEvent(this, eLiteDBEventInfo);
		}
		return true;
	};

	_pLiteDBStatement._onerror = function (objData) {
		var e = new nexacro.LiteDBErrorEventInfo("onerror", objData.errorcode, objData.errormsg, objData.ldberrorcode, nexacro.Device.decodeString(objData.ldberrormsg));
		this._fire_onerror(this, e);
	};

	_pLiteDBStatement._fire_onerror = function (objLiteDBStatement, eLiteDBErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, eLiteDBErrorEventInfo);
		}
		return true;
	};

	_pLiteDBStatement.caheckTypeKeyword = function (strQuery) {
		if (typeof (strQuery) == "undefined" || strQuery.length == 0) {
			return;
		}

		var qry = strQuery.toLowerCase();
		var arr = qry.split(" ");
		for (var i = 0; i < arr.length; i++) {
			if (strQuery.match(/select/) != null) {
				return 1;
			}
			else if (strQuery.match(/insert/) != null) {
				return 2;
			}
			else if (strQuery.match(/update/) != null) {
				return 3;
			}
			else if (strQuery.match(/delete/) != null) {
				return 4;
			}
		}

		return 0;
	};

	_pLiteDBStatement.paramck_query = function (db_query) {
		if (db_query == null || typeof (db_query) == "undefined" || typeof (db_query) != "string") {
			return false;
		}
		return true;
	};

	_pLiteDBStatement = null;
}


if (nexacro.OS == "iOS" && !nexacro.XPushEventInfo) {
	nexacro.XPushEventInfo = function (eventid, reason, serverip, serverport, command, action, pushmessageobject) {
		this.eventid = eventid;
		this.reason = reason;
		this.serverip = serverip;
		this.serverport = serverport;
		this.command = command;
		this.action = action;
		this.message = pushmessageobject;
		this.returnvalue = pushmessageobject.returnvalue;
		if (this.command == undefined) {
			this.command = null;
		}
	};

	var _pXPushEventInfo = nexacro.XPushEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.XPushEventInfo);
	_pXPushEventInfo._type_name = "XPushEventInfo";

	_pXPushEventInfo = null;
}

if (nexacro.OS == "iOS" && !nexacro.XPushErrorEventInfo) {
	nexacro.XPushErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg, strServerip, strServerport, strCommand, action, pushmessageobject) {
		this.eventid = strEventId;
		this.errortype = "ObjectError";
		this.statuscode = intErrorCode;
		this.errormsg = strErrorMsg;
		this.serverip = strServerip;
		this.serverport = strServerport;
		this.command = strCommand;
		this.action = action;
		this.pushmessageobject = pushmessageobject;
		if (this.command == undefined) {
			this.command = null;
		}
		this.reply = null;
	};
	var _pXPushErrorEventInfo = nexacro.XPushErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.XPushErrorEventInfo);
	_pXPushErrorEventInfo._type_name = "XPushErrorEventInfo";

	_pXPushErrorEventInfo = null;
}

if (nexacro.OS == "iOS" && !nexacro.XPushKeepAliveEventInfo) {
	nexacro.XPushKeepAliveEventInfo = function (eventid, type) {
		this.eventid = eventid;
		this.type = type;
	};

	var _pXPushKeepAliveEventInfo = nexacro.XPushKeepAliveEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.XPushKeepAliveEventInfo);
	_pXPushKeepAliveEventInfo._type_name = "XPushKeepAliveEventInfo";

	_pXPushKeepAliveEventInfo = null;
}

if (nexacro.OS == "iOS" && !nexacro.XPushRequestMessageCountEventInfo) {
	nexacro.XPushRequestMessageCountEventInfo = function (eventid, userid, sendtype, sendid, receivetype, receiveid) {
		this.eventid = eventid;
		this.userid = userid;
		this.sendtype = sendtype;
		this.sendid = sendid;
		this.receivetype = receivetype;
		this.receiveid = receiveid;
	};

	var _pXPushRequestMessageCountEventInfo = nexacro.XPushRequestMessageCountEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.XPushRequestMessageCountEventInfo);
	_pXPushRequestMessageCountEventInfo._type_name = "XPushRequestMessageCountEventInfo";

	_pXPushErrorEventInfo = null;
}
if (nexacro.OS == "iOS" && !nexacro.CommandControl) {
	nexacro.CommandControl = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.actiontype;
		this.callback;
		this.check = "0";
		this.messagekey;
		this.messagetype;
		this.userid;
		this.projectid;
		this.objdataset;
		this.objform;
		this.row = -1;
		this.type = "update";
		this.useactiveformcallback = false;
	};

	var _pCommandControl = nexacro.CommandControl.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.CommandControl);

	_pCommandControl._type_name = "CommandControl";

	_pCommandControl.destroy = function () {
		var params = '""';
		var jsonstr;
		return true;
	};

	_pCommandControl.on_created = function () {
	};

	_pCommandControl.equal = function (other) {
		if (this.callback != other.callback) {
			return false;
		}
		if (this.check != other.check) {
			return false;
		}
		if (this.messagekey != other.messagekey) {
			return false;
		}
		if (this.messagetype != other.messagetype) {
			return false;
		}

		if (this.objdataset !== other.objdataset) {
			return false;
		}
		if (this.objform !== other.objform) {
			return false;
		}

		if (this.row != other.row) {
			return false;
		}
		if (this.type != other.type) {
			return false;
		}
		if (this.useactiveformcallback != other.useactiveformcallback) {
			return false;
		}

		return true;
	};

	_pCommandControl.toJSON = function () {
		var param0 = (this.messagetype ? ('"' + this.messagetype + '"') : 'null');
		var param1 = (this.messagekey ? ('"' + this.messagekey + '"') : 'null');
		var param2 = (this.userid ? ('"' + this.userid + '"') : 'null');
		var param3 = (this.projectid ? ('"' + this.projectid + '"') : 'null');

		return eval('({"_id":"' + this._id + '","messagetype":' + param0 + ',"messagekey":' + param1 + ',"userid":' + param2 + ',"projectid":' + param3 + '})');
	};

	_pCommandControl.remove = function (idx) {
		return (idx < 0 || idx > this.length) ? this : this.slice(0, idx).concat(this.slice(idx + 1, this.length));
	};

	_pCommandControl = null;
}

if (nexacro.OS == "iOS" && !nexacro.XPush) {
	nexacro.XPush = function (name, obj) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this.name = name || "";
		this.enableevent = true;

		this.commandlist = new Array;
		this.extracommandlist = new Array;
		this.controlretry = "5";
		this.debug = false;
		this.iplist = new Array;
		this.keepalivetime = "30";
		this.keeptimeout = "60";
		this.layouturl = "";
		this.retry = 1;
		this.sessionid = "";
		this.timeout = "30";
		this.protocolversion = 2;
		this.userid = "";
		this.projectid = "";
		this._parent_elem = obj;
		this.errorcode;
		this.errormsg;
		this.async = true;
		this.connectip = "";
		this.connectport = "-1";
		this.connectSuccess = false;
		this.action;

		this._event_list = {
			"onsuccess" : 1, 
			"onerror" : 1, 
			"onkeepalive" : 1
		};

		this.onsuccess = null;
		this.onerror = null;

		var params = '""';
		var jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"constructor", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	var _pXPush = nexacro.XPush.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.XPush);
	_pXPush._type_name = "XPush";
	_pXPush._handle = null;
	_pXPush._currentipinfo = null;

	_pXPush.on_created = function () {
	};

	_pXPush.destroy = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];

		jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
		return true;
	};

	_pXPush._findForm = function (comp) {
		var form = comp;
		while (form && form._is_form == false) {
			form = form.parent;
		}
		return form;
	};

	_pXPush.set_channeltype = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.channeltype = "single";
		}
		else {
			this.channeltype = v;
		}
		return true;
	};

	_pXPush.set_commandlist = function () {
	};
	_pXPush.set_connectip = function (v) {
	};
	_pXPush.set_connectport = function (v) {
	};

	_pXPush.set_controlretry = function (v) {
		if (typeof (v) == "undefined" || v == null) {
			this.controlretry = 5;
		}
		else {
			if (nexacro.Device.publicNumCheck(v)) {
				if (v >= 0) {
					this.controlretry = v;
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pXPush.set_debug = function (v) {
		if (typeof (v) == "undefined" || v == null) {
			this.debug = false;
		}
		else {
			this.debug = v;
		}
		return true;
	};

	_pXPush.set_iplist = function (v) {
		var len = this.iplist.length;
		if (len > 0) {
			this.iplist.splice(0, len);
		}

		if (typeof (v) == "undefined" || v == null || v == "") {
		}
		else {
			if (v.indexOf(",") >= 0) {
				var ipinfolist = v.split(",");
				if (ipinfolist.length > 0) {
					for (var i = 0; i < ipinfolist.length; i++) {
						var trim_ipinfolist = ipinfolist[i];
						trim_ipinfolist = trim_ipinfolist.replace(/(^\s*)|(\s*$)/gi, "");
						var temp = trim_ipinfolist.split(":");
						var ipinfo = new Object;

						if (temp[0] == "tcp" || temp[0] == "TCP" || temp[0] == "tcps" || temp[0] == "TCPS") {
							ipinfo.type = temp[0];
							var ip = temp[1];
							ipinfo.ip = ip.split("//")[1];
							ipinfo.port = temp[2].valueOf();
						}
						else {
							if (this._isWebPush()) {
								continue;
							}

							ipinfo.type = "tcp";
							ipinfo.ip = temp[0];
							ipinfo.port = temp[1].valueOf();
						}

						ipinfo.retry = false;
						this.iplist.push(ipinfo);
					}
				}
			}
			else {
				var temp = v.replace(/(^\s*)|(\s*$)/gi, "");
				temp = temp.split(":");
				var ipinfo = new Object;

				if (temp[0] == "tcp" || temp[0] == "TCP" || temp[0] == "tcps" || temp[0] == "TCPS") {
					ipinfo.type = temp[0];
					var ip = temp[1];
					ipinfo.ip = ip.split("//")[1];

					ipinfo.port = 0;
					if (temp[2]) {
						var temp_port = temp[2].split("/");
						if (temp_port && temp_port.length > 0) {
							ipinfo.port = temp_port[0].valueOf();

							for (var n = 1; n < temp_port.length; n++) {
								if (temp_port[n]) {
									ipinfo.ip += "/" + temp_port[n];
								}
							}
						}
						else {
							ipinfo.port = temp[2].valueOf();
						}
					}
				}
				else {
					ipinfo.type = "tcp";
					ipinfo.ip = temp[0];
					ipinfo.port = temp[1].valueOf();
				}

				ipinfo.retry = false;
				this.iplist.push(ipinfo);
			}
		}
		return true;
	};

	_pXPush.set_keepalivetime = function (v) {
		if (typeof (v) == "undefined" || v == null) {
			this.keepalivetime = 30;
		}
		else {
			if (nexacro.Device.publicNumCheck(v)) {
				if (v >= 0) {
					this.keepalivetime = v;
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pXPush.set_keeptimeout = function (v) {
		if (typeof (v) == "undefined" || v == null) {
			this.keeptimeout = 60;
		}
		else {
			if (nexacro.Device.publicNumCheck(v)) {
				if (v >= 0) {
					this.keeptimeout = v;
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pXPush.set_layouturl = function (v) {
		if (typeof (v) == "undefined" || v == null) {
			this.layouturl = "";
		}
		else {
			this.layouturl = v;
		}
		return true;
	};

	_pXPush.set_retry = function (v) {
		if (typeof (v) == "undefined" || v == null) {
			this.retry = 1;
		}
		else {
			if (nexacro.Device.publicNumCheck(v)) {
				if (v >= 0) {
					this.retry = Number(v);
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pXPush.set_sessionid = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.sessionid = "";
		}
		else {
			this.sessionid = v;
		}
		return true;
	};

	_pXPush.set_timeout = function (v) {
		if (typeof (v) == "undefined" || v == null) {
			this.timeout = 30;
		}
		else {
			if (nexacro.Device.publicNumCheck(v)) {
				if (v >= 0) {
					this.timeout = v;
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pXPush.set_protocolversion = function (v) {
		if (typeof (v) == "undefined" || v == null) {
			this.protocolversion = 2;
		}
		else {
			if (nexacro.Device.publicNumCheck(v)) {
				if (v >= 1 && v <= 3) {
					this.protocolversion = v;
				}
				else {
					return false;
				}
			}
			else {
				return false;
			}
		}
		return true;
	};

	_pXPush.set_userid = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.userid = "";
		}
		else {
			this.userid = v;
		}
		return true;
	};

	_pXPush.set_projectid = function (v) {
		if (typeof (v) == "undefined" || v == null || v == "") {
			this.projectid = "";
		}
		else {
			this.projectid = v;
		}
		return true;
	};


	_pXPush.set_async = function (v) {
		if (v === undefined || v === null) {
			return;
		}
		v = nexacro._toBoolean(v);

		this.async = v;

		return true;
	};



	_pXPush.subscribe = function (strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "ADDF";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack);
	};
	_pXPush.unsubscribe = function (strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "DELF";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack);
	};
	_pXPush.registerDevice = function (strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "RGST";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack);
	};
	_pXPush.unregisterDevice = function (strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "UNRG";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack);
	};
	_pXPush.registerTopic = function (strMessageType, strMessageKey, strUserID, strProjectID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "ADUI";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID, strProjectID);
	};
	_pXPush.unregisterTopic = function (strMessageType, strMessageKey, strUserID, strProjectID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "UNUI";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID, strProjectID);
	};
	_pXPush.requestMessageCount = function (strMessageType, strMessageKey, strUserID, strProjectID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "MSGC";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID, strProjectID);
	};
	_pXPush.registerTopicWithUserID = function (strMessageType, strMessageKey, strUserID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "ADUI";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID);
	};
	_pXPush.unregisterTopicWithUserID = function (strMessageType, strMessageKey, strUserID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "UNUI";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID);
	};
	_pXPush.requestMessageCountWithUserID = function (strMessageType, strMessageKey, strUserID, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack) {
		strCommand = "MSGC";
		this.command(strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID);
	};
	_pXPush.command = function (strCommand, strMessageType, strMessageKey, objForm, objDataset, strType, strCallBack, nRow, strCheck, bUseActiveFormCallBack, strUserID, strProjectID) {
		var cc = new nexacro.CommandControl();
		var jsonstr;

		this.action = strCommand;
		cc.actiontype = strCommand;
		cc.type = strType;
		cc.callback = strCallBack;
		cc.messagekey = strMessageKey;
		cc.messagetype = strMessageType;
		cc.objdataset = objDataset;
		cc.objform = objForm;

		if (nRow != undefined) {
			if ((+nRow) != (+nRow)) {
				return false;
			}
			else {
				cc.row = nRow;
			}
		}
		else {
			cc.row = -1;
		}

		if (strCheck != undefined) {
			cc.check = strCheck;
		}
		else {
			cc.check = "0";
		}

		if (bUseActiveFormCallBack != undefined) {
			if (typeof (bUseActiveFormCallBack) != "boolean") {
				if ((bUseActiveFormCallBack.toLowerCase() != "false") && (bUseActiveFormCallBack.toLowerCase() != "true")) {
					cc.useactiveformcallback = false;
				}
				else {
					cc.useactiveformcallback = bUseActiveFormCallBack;
				}
			}
			else {
				cc.useactiveformcallback = bUseActiveFormCallBack;
			}
		}
		else {
			cc.useactiveformcallback = false;
		}

		this.strCommand = strCommand;
		this.strMessageType = strMessageType;
		this.strMessageKey = strMessageKey;
		this.objDataset = objDataset;
		this.strCallBack = strCallBack;

		if (strUserID != undefined) {
			cc.userid = strUserID;
		}
		else {
			cc.userid = this.userid;
		}

		if (strProjectID != undefined) {
			cc.projectid = strProjectID;
		}
		else {
			cc.projectid = this.projectid;
		}

		if (this.strCommand === undefined || this.strCommand === null || this.strCommand == "") {
			this._onerror({
				errorcode : "-701"
			});
		}
		else {
			this.strCommand = this.strCommand.toString();

			if (strCommand == "ADDF" || strCommand == "DELF") {
				if (objForm === undefined || objForm === null || 
					this.strMessageType === undefined || this.strMessageType === null || this.strMessageType == "" || 
					this.strMessageKey === undefined || this.strMessageKey === null || this.strMessageKey == "" || 
					this.objDataset === undefined || this.objDataset === null || 
					strType === undefined || strType === null || strType == "" || 
					this.strCallBack === undefined || this.strCallBack === null || this.strCallBack == "") {
					this._onerror({
						errorcode : "-701"
					});
				}
				else {
					this.strMessageType = this.strMessageType.toString();
					this.strMessageKey = this.strMessageKey.toString();

					if ((strType.toLowerCase() != "append") && (strType.toLowerCase() != "update") && (strType.toLowerCase() != "insert") && (strType.toLowerCase() != "replace") && (strType != "allUpdate")) {
						this._onerror({
							errorcode : "-701"
						});
					}
					else {
						this.strCallBack = this.strCallBack.toString();
						if (objForm[this.strCallBack] === undefined) {
							this._onerror({
								errorcode : "-701"
							});
						}
						else {
							if (strCommand == "ADDF") {
								var params = '{"type":"' + strType.toLowerCase() + '","parameters":' + JSON.stringify(cc) + '}';
								jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"ADDF", "params":' + params + '}';
								var i, duplicated = false;
								for (var i = 0; i < this.commandlist.length; i++) {
									var item = this.commandlist[i];
									if (item.equal(cc)) {
										duplicated = true;
										break;
									}
								}
								if (!duplicated) {
									this.commandlist.push(cc);
								}
							}
							else if (strCommand == "DELF") {
								jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"DELF", "params":' + JSON.stringify(cc) + '}';
								var i;
								for (var i = 0; i < this.commandlist.length; i++) {
									var item = this.commandlist[i];
									if (item.equal(cc)) {
										break;
									}
								}
							}
						}
					}
				}
			}
			else if (strCommand == "ADUI") {
				if (this.connectSuccess == false) {
					this._onerror({
						errorcode : "-1002"
					});
					return;
				}
				jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"ADUI", "params":' + JSON.stringify(cc) + '}';
				this.extracommandlist.push(cc);
			}
			else if (strCommand == "UNUI") {
				if (this.connectSuccess == false) {
					this._onerror({
						errorcode : "-1003"
					});
					return;
				}
				jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"UNUI", "params":' + JSON.stringify(cc) + '}';
				this.extracommandlist.push(cc);
			}
			else if (strCommand == "MSGC") {
				if (this.connectSuccess == false) {
					this._onerror({
						errorcode : "-1004"
					});
					return;
				}
				jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"MSGC", "params":' + JSON.stringify(cc) + '}';
				this.extracommandlist.push(cc);
			}
			else if (strCommand == "RGST") {
				if (this.connectSuccess == false) {
					this._onerror({
						errorcode : "-1001"
					});
					return;
				}
				jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"RGST", "params":' + JSON.stringify(cc) + '}';
				this.extracommandlist.push(cc);
			}
			else if (strCommand == "UNRG") {
				if (this.connectSuccess == false) {
					this._onerror({
						errorcode : "-1001"
					});
					return;
				}
				jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"UNRG", "params":' + JSON.stringify(cc) + '}';
				this.extracommandlist.push(cc);
			}
			else {
				this._onerror({
					errorcode : "-701"
				});
			}
		}

		if (!(jsonstr === undefined || jsonstr === null || jsonstr == "")) {
			nexacro.Device.exec(jsonstr);
		}
	};

	_pXPush.connect = function (userid, sessionid) {
		var retry_Cnt;
		var bSuccessed;

		if (userid == null) {
			userid = this.userid;
		}
		this.userid = userid;

		if (sessionid == null) {
			sessionid = this.sessionid;
		}
		this.sessionid = sessionid;

		if (nexacro.Device.publicNumCheck(this.retry)) {
			if (this.retry >= 0) {
				retry_Cnt = Number(this.retry);
			}
		}

		var layouturl = this.layouturl;
		var form = this._findForm(this._parent_elem);
		if (form) {
			if (layouturl.indexOf("%") < 0) {
				layouturl = nexacro._getServiceLocation(layouturl, form._getRefFormBaseUrl());
			}
		}

		var params;
		params = '{ "strUserID":"' + userid;
		params += '", "strSessionID":"' + sessionid;
		params += '", "protocolversion":"' + this.protocolversion;
		if (this.protocolversion >= 3) {
			params += '", "projectid":"' + this.projectid;
		}
		params += '", "iplist":' + JSON.stringify(this.iplist);
		params += ', "retry":"' + retry_Cnt;
		params += '", "controlretry":"' + this.controlretry;
		params += '", "layouturl":"' + layouturl;
		params += '", "keepalivetime":"' + this.keepalivetime;
		params += '", "keeptimeout":"' + this.keeptimeout;
		params += '", "timeout":"' + this.timeout;
		params += '", "commandlist":' + JSON.stringify(this.commandlist);
		params += '}';
		var jsonstr;

		jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"connect", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);
	};

	_pXPush.disconnect = function () {
		if (this.connectSuccess) {
			var params = '""';
			var jsonstr;
			jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"disconnect", "params":' + params + '}';
			this.connectSuccess = false;
			this.commandlist.length = 0;
			this.extracommandlist.length = 0;
			nexacro.Device.exec(jsonstr);
		}
		else {
			this.action = "BYEC";
			this._onerror({
				errorcode : "-401"
			});
		}
	};

	_pXPush.resume = function () {
		if (this.connectSuccess) {
			var params = '""';
			var jsonstr;
			jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"resume", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}
		else {
			this._onerror({
				errorcode : "-601"
			});
		}
	};

	_pXPush.suspend = function () {
		if (this.connectSuccess) {
			var params = '""';
			var jsonstr;
			jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"suspend", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}
		else {
			this._onerror({
				errorcode : "-501"
			});
		}
	};


	_pXPush.getCurrentIP = function () {
		if (this.connectip) {
			return this.connectip;
		}
		return null;
	};

	_pXPush.getCurrentPort = function () {
		if (this.connectport) {
			return this.connectport;
		}
		return null;
	};

	_pXPush.sendResponse = function (msgid) {
		if (this.connectSuccess) {
			var params;
			var jsonstr;

			if (this.protocolversion >= 3) {
				params = '{"msgid":"' + msgid + '", "projectid":"' + this.projectid + '"}';
			}
			else {
				params = '{"msgid":"' + msgid + '"}';
			}

			var jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"sendResponse", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}
		else {
			this.action = "RECT";
			this._onerror({
				errorcode : "-901"
			});
		}
	};

	_pXPush.requestMessage = function () {
		if (this.connectSuccess) {
			if (arguments.length < 2) {
				return;
			}

			var messagetype = arguments[0];
			var messagekeys = "";
			for (var i = 1; i < arguments.length; i++) {
				if (i > 1) {
					messagekeys += ",\"" + (arguments[i]) + "\"";
				}
				else {
					messagekeys += "\"" + (arguments[i]) + "\"";
				}
			}
			if (messagekeys.length > 0) {
				var params;
				var jsonstr;

				if (this.protocolversion >= 3) {
					params = '{"messagetype":"' + messagetype + '", "messagekeys":[' + messagekeys + '], "projectid":"' + this.projectid + '"}';
				}
				else {
					params = '{"messagetype":"' + messagetype + '", "messagekeys":[' + messagekeys + ']}';
				}

				var jsonstr = '{"id":' + this._id + ', "div":"XPush", "method":"requestMessage", "params":' + params + '}';

				nexacro.Device.exec(jsonstr);
			}
		}
		else {
			this.action = "REQD";
			this._onerror({
				errorcode : "-902"
			});
		}
	};


	_pXPush._resetIPList = function () {
		var length = this.iplist.length;
		for (var i = 0; i < length; i++) {
			if (this.iplist[i].retry) {
				this.iplist[i].retry = false;
			}
		}
	};

	_pXPush._getrandomipinfo = function () {
		var length = this.iplist.length;
		if (length > 0) {
			for (var i = 0; i < length; i++) {
				if (this.iplist[i].retry == false) {
					break;
				}
			}
			if (i == length) {
				return null;
			}

			var randidx;
			do {
				randidx = Math.floor((Math.random() * ((length - 1) - 0 + 1))) + 0;
			} while (this.iplist[randidx].retry);

			this.iplist[randidx].retry = true;
			this._currentipinfo = this.iplist[randidx];
			return this._currentipinfo;
		}
		return null;
	};




	_pXPush._onxpush = function (ret) {
		var retData, colid;

		if (nexacro.Device.curDevice == 0) {
			retData = ret;
		}
		else {
			retData = eval("(" + ret + ")");
		}

		this.RecvData = retData.recvdata;

		var paramRow;
		var paramChangeColumns = new Array();
		var paramAllColumns = new Array();
		var paramChangeRows = new Array();
		var paramobjChangeList = new Array();

		var rows = this.RecvData.rows;
		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			var messageType = this.RecvData.type;
			var messageKey = row[this.RecvData.key];
			var layoutKey = this.RecvData.key;
			var checkFieldname = this.RecvData.check;

			for (var j = 0; j < this.commandlist.length; j++) {
				var cc = this.commandlist[j];

				if (cc.messagetype == messageType && cc.messagekey == messageKey) {
					if (cc.type == "append") {
						var cr = cc.objdataset.addRow();
						for (colId in row) {
							if (!row.hasOwnProperty(colId)) {
								continue;
							}
							paramAllColumns.push(colId);

							cc.objdataset.setColumn(cr, colId, nexacro.Device.decodeString(row[colId]));
							paramChangeColumns.push(colId);
						}
						paramRow = cr;
					}
					else if (cc.type == "insert") {
						var cr = cc.objdataset.insertRow(cc.row);

						for (colId in row) {
							if (!row.hasOwnProperty(colId)) {
								continue;
							}
							cc.objdataset.setColumn(cr, colId, nexacro.Device.decodeString(row[colId]));
							paramAllColumns.push(colId);
							paramChangeColumns.push(colId);
						}
						paramRow = cr;
					}
					else if (cc.type == "replace") {
						for (colId in row) {
							if (!row.hasOwnProperty(colId)) {
								continue;
							}
							var value = cc.objdataset.getColumn(cc.row, colId);
							if (value != nexacro.Device.decodeString(row[colId])) {
								cc.objdataset.setColumn(cc.row, colId, nexacro.Device.decodeString(row[colId]));
								paramChangeColumns.push(colId);
								paramRow = cc.row;
							}
						}
						paramAllColumns.push(colId);
					}
					else if (cc.type == "update") {
						var cr = cc.objdataset.findRow(layoutKey, messageKey);

						for (colId in row) {
							if (!row.hasOwnProperty(colId)) {
								continue;
							}
							paramAllColumns.push(colId);

							var value = cc.objdataset.getColumn(cr, colId);

							if (value != row[colId]) {
								if ((cc.check == "0") || ((checkFieldname == colId) && (row[colId] == cc.check))) {
									cc.objdataset.setColumn(cr, colId, nexacro.Device.decodeString(row[colId]));
									paramChangeColumns.push(colId);
								}
							}
						}
						paramRow = cr;
					}
					else if (cc.type == "allUpdate") {
						for (var cr = 0; cr < cc.objdataset.getRowCount(); cr++) {
							if (messageKey == cc.objdataset.getColumn(cr, layoutKey)) {
								paramChangeRows.push(cr);

								var temp = new Array();
								temp.push(cr);

								for (colId in row) {
									if (!row.hasOwnProperty(colId)) {
										continue;
									}

									var value = cc.objdataset.getColumn(cr, colId);

									if (value != row[colId]) {
										if ((cc.check == "0") || (row[colId] == cc.check)) {
											cc.objdataset.setColumn(cr, colId, nexacro.Device.decodeString(row[colId]));
											temp.push(colId);
										}
									}
								}
								paramobjChangeList.push(temp.join());
							}
						}
					}

					if ((!cc.useactiveformcallback) || (cc.useactiveformcallback && (cc.objform === application.getActiveForm()))) {
						if (cc.type != "allUpdate") {
							var callbackFn = cc.objform[cc.callback];
							if (callbackFn instanceof Function) {
								callbackFn.call(cc.objform, paramRow, paramChangeColumns.join(), paramAllColumns.join(), "DATA", retData.action, retData.messageid);
								paramChangeRows.splice(0, paramChangeRows.length);
								paramAllColumns.splice(0, paramAllColumns.length);
							}
						}
						else if (cc.type == "allUpdate") {
							var callbackFn = cc.objform[cc.callback];
							if (callbackFn instanceof Function) {
								callbackFn.call(cc.objform, paramChangeRows.join(), null, paramobjChangeList, "DATA", retData.action, retData.messageid);
								paramChangeRows.splice(0, paramChangeRows.length);
								paramobjChangeList.splice(0, paramobjChangeList.length);
							}
						}
					}
				}
			}
		}
	};


	_pXPush._onsuccess = function (objData) {
		var pushmessageobject = new Object();
		pushmessageobject.messagetype = "";
		pushmessageobject.messagekey = "";
		pushmessageobject.messageid = "";
		pushmessageobject.returnvalue = "";

		if (objData.classtype == "AUTH") {
			this.connectSuccess = true;
		}

		if (objData.classtype == "RECT") {
			pushmessageobject.messagetype = "";
			pushmessageobject.messagekey = "";
			pushmessageobject.messageid = objData.messagetype;
		}
		else if (objData.classtype == "RGST" || objData.classtype == "UNRG") {
			if (nexacro.OS == "Android") {
				pushmessageobject.messagetype = "";
				pushmessageobject.messagekey = "";
				pushmessageobject.messageid = "";
			}
		}
		else if (objData.classtype == "MSGC") {
			pushmessageobject.messageid = "";
			pushmessageobject.messagetype = objData.messagetype;
			pushmessageobject.messagekey = objData.messagekey;
			pushmessageobject.returnvalue = objData.returnvalue;
		}
		else {
			pushmessageobject.messageid = "";
			pushmessageobject.messagetype = objData.messagetype;
			pushmessageobject.messagekey = objData.messagekey;
		}

		if (objData.classtype == "ADDF" || objData.classtype == "DELF") {
			var commandIndex;
			var command;
			for (var i = 0; i < this.commandlist.length; i++) {
				if (this.commandlist[i].messagetype == objData.messagetype && this.commandlist[i].messagekey == objData.messagekey) {
					commandIndex = i;
					command = this.commandlist[i];
					break;
				}
			}

			if (command) {
				command.actiontype = objData.classtype;
			}

			var e = new nexacro.XPushEventInfo("onsuccess", objData.reason, objData.serverip, objData.serverport, command, objData.action, pushmessageobject);
			this._fire_onsuccess(this, e);

			if (command && objData.classtype == "DELF") {
				this.commandlist.splice(commandIndex, 1);
			}
		}
		else {
			var commandIndex;
			var command;
			for (var i = 0; i < this.extracommandlist.length; i++) {
				if (this.extracommandlist[i].actiontype == objData.classtype) {
					if (this.extracommandlist[i].messagetype == objData.messagetype && this.extracommandlist[i].messagekey == objData.messagekey) {
						commandIndex = i;
						command = this.extracommandlist[i];
						break;
					}
				}
			}

			var e = new nexacro.XPushEventInfo("onsuccess", objData.reason, objData.serverip, objData.serverport, command, objData.action, pushmessageobject);
			this._fire_onsuccess(this, e);

			if (objData.classtype == "AUTH") {
				this.connectip = objData.serverip;
				this.connectport = objData.serverport;
			}

			if (command) {
				this.extracommandlist.splice(commandIndex, 1);
			}
		}
	};

	_pXPush._fire_onsuccess = function (objXPush, eXPushEventInfo) {
		if (this.onsuccess && this.onsuccess._has_handlers) {
			return this.onsuccess._fireEvent(this, eXPushEventInfo);
		}
		return true;
	};

	_pXPush._onerror = function (objData) {
		var pushmessageobject = new Object();

		pushmessageobject.messagetype = "";
		pushmessageobject.messagekey = "";
		pushmessageobject.messageid = "";
		pushmessageobject.returnvalue = "";

		if (objData.classtype == "RECT") {
			pushmessageobject.messageid = objData.messagetype;
			pushmessageobject.messagekey = "";
			pushmessageobject.messagetype = "";
		}
		else {
			pushmessageobject.messagetype = objData.messagetype;
			pushmessageobject.messagekey = objData.messagekey;
			pushmessageobject.messageid = "";
		}

		if (objData.classtype == "ADDF" || objData.classtype == "DELF") {
			var commandIndex;
			var command;
			for (var i = 0; i < this.commandlist.length; i++) {
				if (this.commandlist[i].messagetype == objData.messagetype && this.commandlist[i].messagekey == objData.messagekey) {
					commandIndex = i;
					command = this.commandlist[i];
					break;
				}
			}

			var errormsg = this._geterrormsg(objData.errorcode);
			this.errorcode = objData.errorcode;
			this.errormsg = errormsg;

			var e = new nexacro.XPushErrorEventInfo("onerror", this.errorcode, errormsg, objData.serverip, objData.serverport, command, objData.action, pushmessageobject);
			e.reply = objData.reply;

			this._fire_onerror(this, e);
		}
		else {
			var commandIndex;
			var command;
			for (var i = 0; i < this.extracommandlist.length; i++) {
				if (this.extracommandlist[i].actiontype == objData.classtype) {
					if (this.extracommandlist[i].messagetype == objData.messagetype && this.extracommandlist[i].messagekey == objData.messagekey) {
						commandIndex = i;
						command = this.extracommandlist[i];
						break;
					}
				}
			}

			var errormsg = this._geterrormsg(objData.errorcode);
			this.errorcode = objData.errorcode;
			this.errormsg = errormsg;

			var e = new nexacro.XPushErrorEventInfo("onerror", this.errorcode, errormsg, objData.serverip, objData.serverport, command, objData.action, pushmessageobject);
			e.reply = objData.reply;

			this._fire_onerror(this, e);

			if (command) {
				this.extracommandlist.splice(commandIndex, 1);
			}
		}
	};

	_pXPush._fire_onerror = function (objXPush, eXPushErrorEventInfo) {
		if (this.onerror && this.onerror._has_handlers) {
			return this.onerror._fireEvent(this, eXPushErrorEventInfo);
		}
		return true;
	};

	_pXPush._onkeepalive = function (objData) {
		var e = new nexacro.XPushKeepAliveEventInfo("onkeepalive", objData.type);
		this._fire_onkeepalive(this, e);
	};

	_pXPush._fire_onkeepalive = function (objXPush, eXPushKeepAliveEventInfo) {
		if (this.onkeepalive && this.onkeepalive._has_handlers) {
			return this.onkeepalive._fireEvent(this, eXPushKeepAliveEventInfo);
		}
	};

	_pXPush._seterror = function (errorcode, errormsg) {
		this.errorcode = errorcode;
		this.errormsg = errormsg;
	};

	_pXPush._onrequestmessagecount = function (userid, sendtype, sendid, receivetype, receiveid) {
		var e = new nexacro.XPushRequestMessageCountEventInfo(userid, sendtype, sendid, receivetype, receiveid);
		this._fire_onrequestmessagecount(this, e);
	};

	_pXPush._fire_onrequestmessagecount = function (objXPush, eXPushRequestMessageCountEventInfo) {
		if (this.onrequestmessagecount && this.requestmessagecount._has_handlers) {
			return this.onrequestmessagecount._fireEvent(this, eXPushRequestMessageCountEventInfo);
		}
	};

	_pXPush._getaction = function (action) {
		var pushaction;

		switch (action) {
			case "ERROR":
				pushaction = -1;
				break;
			case "AUTH":
				pushaction = nexacro.XPushAction.AUTH;
				break;
			case "BYEC":
				pushaction = nexacro.XPushAction.BYEC;
				break;
			case "ADDF":
				pushaction = nexacro.XPushAction.ADDF;
				break;
			case "DELF":
				pushaction = nexacro.XPushAction.DELF;
				break;
			case "REQD":
				pushaction = nexacro.XPushAction.REQD;
				break;
			case "RECT":
				pushaction = nexacro.XPushAction.RECT;
				break;
			case "RGST":
				pushaction = nexacro.XPushAction.RGST;
				break;
			case "UNRG":
				pushaction = nexacro.XPushAction.UNRG;
				break;
			case "ADUI":
				pushaction = nexacro.XPushAction.ADUI;
				break;
			case "UNUI":
				pushaction = nexacro.XPushAction.UNUI;
				break;
			case "MSGC":
				pushaction = nexacro.XPushAction.MSGC;
				break;
		}

		return pushaction;
	};

	_pXPush._geterrormsg = function (errorcode) {
		var codename;
		if (errorcode == -100) {
			codename = "object_push_send_byec";
		}
		else if (errorcode == -101) {
			codename = "object_push_socket_timeout";
		}
		else if (errorcode == -200) {
			codename = "object_push_fail_command_auth";
		}
		else if (errorcode == -201) {
			codename = "object_push_fail_all_command_auth";
		}
		else if (errorcode == -202) {
			codename = "object_push_fail_data_auth";
		}
		else if (errorcode == -300) {
			codename = "object_push_fail_connect";
		}
		else if (errorcode == -301) {
			codename = "object_push_fail_send_receive";
		}
		else if (errorcode == -302) {
			codename = "object_push_connected_already";
		}
		else if (errorcode == -401) {
			codename = "object_push_fail_disconnect";
		}
		else if (errorcode == -501) {
			codename = "object_push_fail_suspend";
		}
		else if (errorcode == -601) {
			codename = "object_push_fail_resume";
		}
		else if (errorcode == -701) {
			codename = "object_push_fail_command";
		}
		else if (errorcode == -702) {
			codename = "object_push_notfound_layouturl";
		}
		else if (errorcode == -703) {
			codename = "object_push_invalid_layouturl";
		}
		else if (errorcode == -801) {
			codename = "object_push_fail_protocol_version";
		}
		else if (errorcode == -901) {
			codename = "object_push_fail_rect";
		}
		else if (errorcode == -902) {
			codename = "object_push_fail_reqd";
		}
		else if (errorcode == -1001) {
			codename = "object_push_fail_rgst_unrg";
		}
		else if (errorcode == -1002) {
			codename = "object_push_fail_adui";
		}
		else if (errorcode == -1003) {
			codename = "object_push_fail_unui";
		}
		else if (errorcode == -1004) {
			codename = "object_push_fail_msgc";
		}
		else if (errorcode == -1072) {
			codename = "object_push_fail_rgst_unrg";
		}
		else if (errorcode == -1092) {
			codename = "object_push_fail_adui";
		}
		return application._getErrorMessge(codename);
	};

	_pXPush.getObject = function (sid) {
		if (sid == undefined) {
			willrunfunc = null;
		}
		else {
			sid = sid * 1;
			var willrunfunc = nexacro.Device._userCreatedObj[sid];

			if (typeof willrunfunc == "undefined" || willrunfunc == null) {
				willrunfunc = null;
			}
		}
		return willrunfunc;
	};

	_pXPush = null;
}
;


if (!nexacro.FakeXMLHttpRequest) {
	nexacro.FakeXMLHttpRequest = function (name, obj, ndatatype, compress, async) {
		this._id = nexacro.Device.makeID();
		nexacro.Device._userCreatedObj[this._id] = this;
		this._obj = obj;
		this.name = name || "";
		this.strURL = "";
		this.strDataType = ndatatype || "";
		this.strCompress = compress;

		this.responseHeaders = {
		};
		this.responseAllHeaders = {
		};
		this.requestHeaders = {
		};


		this.UNSENT = 0;
		this.OPENED = 1;
		this.HEADERS_RECEIVED = 2;
		this.LOADING = 3;
		this.DONE = 4;


		this.method = "";
		this.async = async;


		this.timeout = 0;
		this.withCredentials = false;
		this.upload = {
		};


		this.readyState = 0;
		this.status = 0;
		this.statusText = "";
		this.response = "";
		this.responseType = "";
		this.responseText = "";
		this.responseXML = "";
		this.onreadystatechange = function () {
		};

		if (async) {
			var params = '""';
			var jsonstr = '{"id":' + this._id + ', "div":"FakeXMLHttpRequest", "method":"constructor", "params":' + params + '}';
			nexacro.Device.exec(jsonstr);
		}
	};

	var _pFakeXMLHttpRequest = nexacro.FakeXMLHttpRequest.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.FakeXMLHttpRequest);
	_pFakeXMLHttpRequest._type_name = "FakeXMLHttpRequest";

	_pFakeXMLHttpRequest.destory = function () {
		var params = '""';
		var jsonstr;

		delete nexacro.Device._userCreatedObj[this._id];

		jsonstr = '{"id":' + this._id + ', "div":"FakeXMLHttpRequest", "method":"destroy", "params":' + params + '}';
		nexacro.Device.exec(jsonstr);

		return true;
	};

	_pFakeXMLHttpRequest.on_created = function () {
	};

	_pFakeXMLHttpRequest.open = function (method, path, async) {
		this.method = method;
		this.strURL = path;
		this.async = async;
	};

	_pFakeXMLHttpRequest.setRequestHeader = function (header, value) {
		this.requestHeaders[header] = value;
	};

	_pFakeXMLHttpRequest.send = function (data) {
		var attrs = '{"method":"' + this.method + '","async":' + this.async + '}';

		var params = '{"attrs":' + attrs + ',"sendData":"' + nexacro.Device.encodeString(data) + '","strURL":"' + this.strURL + '","protocolparameters":' + JSON.stringify(nexacro.Device._protocolparameters) + ',"strDataType":"' + this.strDataType + '","bCompress":"' + this.strCompress + '","requestHeaders":' + JSON.stringify(this.requestHeaders) + '}';
		var jsonstr = '{"id":' + this._id + ', "div":"FakeXMLHttpRequest", "method":"sendData", "params":' + params + '}';

		var response = nexacro.Device.exec(jsonstr, !this.async);
		if (!this.async) {
			var jsonData = JSON.parse(response);
			if (jsonData) {
				var responseHeaders;

				if (jsonData.readyState) {
					this.readyState = jsonData.readyState;
				}
				if (jsonData.status) {
					this.status = jsonData.status;
				}
				if (jsonData.statusText) {
					this.statusText = jsonData.statusText;
				}
				if (jsonData.responseText) {
					this.responseText = nexacro.Device.decodeString(jsonData.responseText);
				}
				if (jsonData.responseAllHeaders) {
					responseHeaders = JSON.parse(jsonData.responseAllHeaders);
				}
				if (responseHeaders) {
					this.responseAllHeaders = JSON.stringify(responseHeaders);
				}
			}
		}
	};

	_pFakeXMLHttpRequest.fileupload = function (file) {
		var params = '{"strURL":"' + this.strURL + '"' + 
			',"strDataType":"' + this.strDataType + '"' + 
			',"filelist":"' + file + '"' + 
			'}';
		var jsonstr = '{"id":"' + this._id + 
			'", "div":"FakeXMLHttpRequest", "method":"' + 'fileUpload' + 
			'", "params":' + params + 
			'}';

		nexacro.Device.exec(jsonstr, !this.async);
	};

	_pFakeXMLHttpRequest.abort = function () {
		var params = '{}';
		var jsonstr = '{"id":' + this._id + ', "div":"FakeXMLHttpRequest", "method":"abort", "params":' + params + '}';

		nexacro.Device.exec(jsonstr);
	};

	_pFakeXMLHttpRequest.getResponseHeader = function (header) {
		return this.responseHeaders[header];
	};

	_pFakeXMLHttpRequest.getAllResponseHeaders = function () {
		return this.responseAllHeaders;
	};

	_pFakeXMLHttpRequest.overrideMimeType = function (mime) {
	};


	_pFakeXMLHttpRequest._fire_onreadystatechange = function (ret) {
		var retData = eval("(" + ret + ")");
		this.readyState = retData.readyState;
		this.status = retData.status;
		if (retData.responseText) {
			this.responseText = nexacro.Device.decodeString(retData.responseText);
		}
		if (retData.responseAllHeaders) {
			this.responseHeaders = JSON.parse(nexacro.Device.decodeString(retData.responseAllHeaders));
		}
		if (this.responseHeaders) {
			this.responseAllHeaders = JSON.stringify(this.responseHeaders);
		}
		this.onreadystatechange.call();
	};

	_pFakeXMLHttpRequest._fire_ontargetevent = function (ret) {
		var retData = eval("(" + ret + ")");
		var eventname = retData.eventname;
		this.readyState = retData.readyState;
		this.status = retData.status;

		if (this.upload[eventname] != undefined) {
			this.upload[eventname].call();
		}
	};

	_pFakeXMLHttpRequest._fire_onfileupload = function (ret) {
		var retData = eval("(" + ret + ")");
		this.readyState = retData.readyState;
		this.status = retData.httpcode;
		if (retData.responseText) {
			this.responseText = nexacro.Device.decodeString(retData.responseText);
		}

		this.onreadystatechange.call(this);
	};

	_pFakeXMLHttpRequest = null;
}

