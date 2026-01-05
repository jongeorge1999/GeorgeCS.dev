@echo off
echo Installing dependencies...
call npm install
call npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader html-webpack-plugin @webgpu/types
call npm install gl-matrix
echo Done.
pause
