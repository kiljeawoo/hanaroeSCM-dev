cls
@echo off
echo.
echo    Copyright (c) 1999-2015.  ESUMTech Corp.  All rights reserved.
echo.
echo    Build the Appetizer
echo.

echo.
echo ===============================================================================
echo   Building Project
echo ===============================================================================
call mvn clean package

echo.
echo ===============================================================================
echo   Build completed...
echo ===============================================================================