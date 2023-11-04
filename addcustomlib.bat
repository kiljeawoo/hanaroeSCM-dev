cls
@echo off
echo.
echo    Copyright (c) 1999-2015.  ESUMTech Corp.  All rights reserved.
echo.
echo ===============================================================================
echo   Adding custom Libraries 
echo ===============================================================================

call mvn install:install-file -Dfile=./src/main/webapp/WEB-INF/lib/bcmail-jdk16-1.45.jar -DgroupId=bcmail-jdk16 -DartifactId=bcmail-jdk16 -Dversion=1.45 -Dpackaging=jar -DgeneratePom=true
call mvn install:install-file -Dfile=./src/main/webapp/WEB-INF/lib/bcprov-jdk16-1.45.jar -DgroupId=bcprov-jdk16 -DartifactId=bcprov-jdk16 -Dversion=1.45 -Dpackaging=jar -DgeneratePom=true
call mvn install:install-file -Dfile=./src/main/webapp/WEB-INF/lib/i4runtime-5.1.3.jar -DgroupId=i4runtime -DartifactId=i4runtime -Dversion=5.1.3 -Dpackaging=jar -DgeneratePom=true
call mvn install:install-file -Dfile=./src/main/webapp/WEB-INF/lib/oss-4.1.jar -DgroupId=oss -DartifactId=oss -Dversion=4.1 -Dpackaging=jar -DgeneratePom=true
call mvn install:install-file -Dfile=./src/main/webapp/WEB-INF/lib/TaxInvoiceSchema-3.1.jar -DgroupId=TaxInvoiceSchema -DartifactId=TaxInvoiceSchema -Dversion=3.1 -Dpackaging=jar -DgeneratePom=true
call mvn install:install-file -Dfile=./src/main/webapp/WEB-INF/lib/tradesign-3.5.16.jar -DgroupId=tradesign -DartifactId=tradesign -Dversion=3.5.16 -Dpackaging=jar -DgeneratePom=true
call mvn install:install-file -Dfile=./src/main/webapp/WEB-INF/lib/secutils-1.0.10.jar -DgroupId=secutils -DartifactId=secutils -Dversion=1.0.10 -Dpackaging=jar -DgeneratePom=true
call mvn install:install-file -Dfile=./src/main/webapp/WEB-INF/lib/xmlsec-ktnet-1.4.3.jar -DgroupId=xmlsec-ktnet -DartifactId=xmlsec-ktnet -Dversion=1.4.3 -Dpackaging=jar -DgeneratePom=true
call mvn install:install-file -Dfile=./src/main/webapp/WEB-INF/lib/SyncMessenger.jar -DgroupId=co.ultari -DartifactId=SyncMessenger -Dversion=1.0 -Dpackaging=jar -DgeneratePom=true

echo.
echo ===============================================================================
echo   completed
echo ===============================================================================