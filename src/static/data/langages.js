import React from "react";

// Supposons que vous ayez un objet Langage qui mappe chaque langage à son image
const LangageImages = {
  python: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
      alt="python"
      width="40"
      height="40"
    />
  ),
  reactJS: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
      alt="react"
      width="40"
      height="40"
    />
  ),
  git: (
    <img
      src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
      alt="git"
      width="40"
      height="40"
    />
  ),
  android: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
      alt="android"
      width="40"
      height="40"
    />
  ),
  c: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
      alt="c"
      width="40"
      height="40"
    />
  ),
  cPP: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
      alt="cplusplus"
      width="40"
      height="40"
    />
  ),
  cSharp: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
      alt="csharp"
      width="40"
      height="40"
    />
  ),
  css: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
      alt="css3"
      width="40"
      height="40"
    />
  ),
  firebase: (
    <img
      src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
      alt="firebase"
      width="40"
      height="40"
    />
  ),
  flutter: (
    <img
      src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
      alt="flutter"
      width="40"
      height="40"
    />
  ),
  html: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
      alt="html5"
      width="40"
      height="40"
    />
  ),
  java: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
      alt="java"
      width="40"
      height="40"
    />
  ),
  js: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      alt="javascript"
      width="40"
      height="40"
    />
  ),
  mongoDB: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
      alt="mongodb"
      width="40"
      height="40"
    />
  ),
  mssql: (
    <img
      src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
      alt="mssql"
      width="40"
      height="40"
    />
  ),
  mysql: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
      alt="mssql"
      width="40"
      height="40"
    />
  ),
  nodejs: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
      alt="nodejs"
      width="40"
      height="40"
    />
  ),
  oracle: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
      alt="oracle"
      width="40"
      height="40"
    />
  ),
  php: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
      alt="php"
      width="40"
      height="40"
    />
  ),
  postgresql: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
      alt="postgresql"
      width="40"
      height="40"
    />
  ),
  symfony: (
    <img
      src="https://symfony.com/logos/symfony_black_03.svg"
      alt="symfony"
      width="40"
      height="40"
    />
  ),
  vuejs: (
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
      alt="vuejs"
      width="40"
      height="40"
    />
  ),
  boostrap: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="32"
      class="d-block my-1"
      viewBox="0 0 118 94"
      role="img"
    >
      <title>Bootstrap</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
        fill="#702cf6"
      ></path>
    </svg>
  ),
  axentix: (
    <img
      src="https://useaxentix.com/img/axentix.svg"
      alt="vuejs"
      width="40"
      height="40"
    />
  ),
  plsql: (
    <img
      src="https://cdn.educba.com/academy/wp-content/uploads/2019/01/PL-SQL-Commands1.jpg"
      alt="vuejs"
      width="80"
      height="40"
    />
  ),
};

export default LangageImages;
