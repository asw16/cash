# Arquitetura de Software

<a name="index"/>
## Índice
1. [Introdução](#introduction)
2. [Vista Lógica](#logicalview)
3. [Vista de Processo](#processview)
4. [Vista de Distribuição](#deploymentview)
5. [Vista de Implementação](#implementationview)
6. [Vista de Cenário](#scenarioview)

<a name="introduction"/>
## Introdução

Neste relatório iremos utilizar o modelo de vistas [**4+1**](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model) de Arquitectura de Software para descrever o projeto que selecionámos. Este modelo é útil porque representa o mesmo software através de diferentes pontos de vista, simultaneamente. As 5 componentes deste modelo são as seguintes:
 - vista lógica
 - vista de processo
 - vista de implementação
 - vista de distribuição
 - cenários de utilização


Iremos utilizar diagramas UML para representar cada uma das vistas.



<a name="logicalview"/>
## Vista Lógica

A vista lógica apresenta o projeto na sua organização e relação entre pastas, assim como importação de módulos necessários ao funcionamento do programa.

Assim, optámos por utilizar um diagrama de [pacotes](https://en.wikipedia.org/wiki/Package_diagram) para representar esta vista.
<img src="views/Logicalview.png" />

<a name="processview"/>
## Vista de Processo
A vista de processo é responsável por mostrar o aspecto dinâmico do sistema e foca-se em 3 aspectos:
- os processos do sistema
- o modo como comunicam
- o comportamento geral do sistema durante a sua utilização. 

Assim, optámos por utilizar um diagrama de [actividade](https://en.wikipedia.org/wiki/Activity_diagram) para representar esta vista.
<img src="views/ProcessView.png" />

<a name="deploymentview"/>
## Vista de Distribuição
<img src="views/deploymentview.png" />

<a name="implementationview"/>
## Vista de Implementação

<a name="scenarioview"/>
## Cenários
<img src ="views/ScenarioView.png" />
