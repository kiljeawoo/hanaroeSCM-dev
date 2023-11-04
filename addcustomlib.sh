#!/bin/sh
#
echo ""
echo "    Copyright (c) 1999-2015.  ESUMTech.  All rights reserved."
echo ""
echo " ==============================================================================="
echo "   Adding custom Libraries"
echo " ==============================================================================="
echo ""
sh mvn install:install-file -Dfile=./customlib/xplatform-xapi-1.0.jar -DgroupId=com.tobesoft.xup -DartifactId=xapi -Dversion=1.0 -Dpackaging=jar -DgeneratePom=true

echo ""
echo " ==============================================================================="
echo "   completed"
echo " ==============================================================================="
echo ""
