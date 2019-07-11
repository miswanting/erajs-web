@echo off
cd /d %~dp0
cd ..
mklink /d erajs-web\node_modules\span-charm ..\..\span-charm 
pause