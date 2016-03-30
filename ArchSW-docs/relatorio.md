<h1 align="center">
	<img width="284" src="http://i.imgur.com/XP21pjm.jpg" alt="Cash Logo">
</h1>

O Cash é uma implementação multi-plataforma de comandos *shell* em **Unix** escrito em **ECMAScript 6**.
Tem como objetivo proporcionar a impressão de trabalhar em **Linux** enquanto dentro do sistema operativo **Windows** e ainda incentivar o desenvolvimento de *bash scripting* num ambiente **JavaScript**.

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
	
		```
		npm install cash -g
		```
	
	- Para correr a aplicação é necessário que estejam instalados certos módulos ( Array-Shuffle, Chaik, Filesize, fkill, fs-extra, glob, lodash, minimist, user-home, username, vorpal, node.js). 
	- Executar ```nodejs cash.js``` (no directório bin) 

- **Windows**
	- Instalação
	
		Abrir terminal do Node.js
		```npm install cash -g```
	- Executar ```cash```
