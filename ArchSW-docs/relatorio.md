![Cash Logo](http://i.imgur.com/XP21pjm.jpg =280x)

O Cash é uma implementação multi-plataforma de comandos *shell* em **Unix** escrito em **ECMAScript 6**.
Tem como objetivo proporcionar a impressão de trabalhar em **Linux** enquanto dentro do sistema operativo **Windows** e ainda incentivar o desenvolvimento de *bash scripting* num ambiente **Javascript**.

De momento, estão implementados os seguintes comandos *shell*:

* alias
* cat
* clear
* cd
* cp
* echo
* export
* false
* grep
* head
* kill
* less
* ls
* mkdir
* mv
* pwd
* rm
* sort
* source
* tail
* touch
* true
* unalias

Como instalamos e executamos a aplicação em **Linux** e **Windows**:

- **Linux**
	- Instalação
		1. npm install cash -g
		2. Para correr a aplicação é necessário que estejam instalados certos módulos ( Array-Shufffle, Chaik, Filesize, fkill, fs-extra, glob, lodash, minimist, user-home, username, vorpal,nodejs). 
	- Executar nodejs cash.js (directório bin) 

- **Windows**
	- Instalação
		1. npm install cash -g
		2. Existe um terminal de nodejs 
	- Executar após abertura do terminal executar o comando cash
