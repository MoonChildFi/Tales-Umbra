::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCyDJGqB+kM5FChVSESgOXmoH/U76eX+/Nazo0EYR6IKdY3J24i6IewW+QXReJQ/1/i+WotBTC9XehO4Lg4n6XhHpHcm4sKPjzvgRk2apn49GXd1BYcSzB1rLoA4psITwx+3/0Lx0awT3hg=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+JeA==
::cxY6rQJ7JhzQF1fEqQJQ
::ZQ05rAF9IBncCkqN+0xwdVs0
::ZQ05rAF9IAHYFVzEqQJQ
::eg0/rx1wNQPfEVWB+kM9LVsJDGQ=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWDk=
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATElA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdCyDJGqB+kM5FChVSESgOXmoH/U76eX+/Nazo0EYR6IKdY3J24i6IewW+QXReJQ/1/i+WotBTC9XehO4Lg4n6XhHpHcm4sKPjzvgRk2apn49GXd1BYcSzB1rLoA4pvcC3yWtvHjynbcRU5w9EKwWEAM=
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
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
