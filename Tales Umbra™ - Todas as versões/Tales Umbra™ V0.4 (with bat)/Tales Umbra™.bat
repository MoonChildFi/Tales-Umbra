@echo off
title Tales Umbra
mode con: cols=85 lines=45
color 0c
where node >nul
if errorlevel 1 (
  echo Node.js nao encontrado. Instale para continuar.
pause
  exit
)
cd assets
node menu.js
pause
