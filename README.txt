
< 사용전 주의사항 >

	appetizer 로 프로젝트 생성 시, 아래 내용을 수정해야 합니다.

	1. pom.xml 수정
		- <groupId>, <artifactId>, <version>, <name>, <finalName> 값을 해당 프로젝트에 맞게 수정

	2. 이클립스에 Import
		(1) "Existing Maven Project"로 Import
		(2) UTF-8 인코딩 설정
			Project > Properties > Resource 메뉴의 Text file encoding
		(3) JavaScript Validation 해제
			Project > Properties > Builders 메뉴의 JavaScript Validator

	3. "__sample" 문자열을 해당 프로젝트명으로 수정
		(1) 자바 패키지명 수정
			src/main/java/com.esum.__sample
				이클립스의 Package Explorer 에서 __sample 패키지 선택 후 "F2"(Rename)
				-> Rename Package 창의 "Update references" 옵션 체크, "Rename subpackages" 옵션 체크
				-> OK 클릭
		(2) 파일명 수정
			src/main/resource/config/properties/__sample.properties
			src/main/resource/config/__sample.xml
		(3) 문자열 수정
			모든 파일(*)에서 "__sample" 문자열을 찾아서 수정

	4. DB 설정 (오라클 기준)
		(1) 테이블스페이스, 계정 생성
			work/db/createTableSpace.sql
			work/db/createOracleUser.sql 참고
		(2) 테이블 생성, 초기데이터 추가
			work/db/oracle/createTable.sql
			work/db/oracle/initData.sql
		(3) DB 연결 설정
			src/main/resources/config/jdbc.properties
