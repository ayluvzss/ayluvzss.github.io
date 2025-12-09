@echo off
echo =================================
echo 正在启动本地服务器...
echo =================================
echo.
echo 服务器地址: http://localhost:8000
echo 请在浏览器中打开上述地址
echo.
echo 按 Ctrl+C 可以停止服务器
echo =================================
echo.

cd /d "%~dp0"

rem 尝试使用 Python 3
python -m http.server 8000 2>nul
if errorlevel 1 (
    rem 如果 Python 3 失败，尝试 Python 2
    python -m SimpleHTTPServer 8000 2>nul
    if errorlevel 1 (
        echo.
        echo [错误] 未检测到 Python 环境
        echo 请安装 Python 或使用其他方法启动服务器
        echo.
        pause
    )
)
