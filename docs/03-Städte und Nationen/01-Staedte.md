---
title: Städte
---
#### Städte sind das Herzstück des TBU-SMP. In ihnen versammeln sich Spieler um ein gemeinsames Interesse zu verfolgen.
## Wie funktioniert eine Stadt
- Wie man eine Stadt erstellt, erfährst du unter dem Command `/tgui town`
- Nachdem man eine Stadt erstellt hat, muss man täglich für sie bezahlen (dies ist abhängig vom Stadtlevel, siehe unten). Man bezahlt jeden Tag um 12 Uhr. **Das Geld wird automatisch von der Stadtkasse abgezogen**
- Man kann nun Geld in seine Stadtkasse einzahlen mit dem Command `/t deposit *Anzahl an Gold*`
- Wenn man eine Stadt erstellt, erhält man den Chunk auf dem man steht. Wenn man nun genug Geld in der Stadtkasse hat, kann man sich neue Plots (=Chunks) angrenzend an andere Plots für sich beanspruchen. Dies macht man, in dem man in dem Plot steht den man beanspruchen will und `/t claim` eingibt. Dies kostet **72 Gold bzw. 8 Ingots**.
- Man kann auch sogenannte Außenposten für sich beanspruchen, dies sind Plots die nicht an deine eigene Stadt angrenzen. Dazu muss man in dem Plot stehen und den Command `/t claim outpost` eingeben. Dies kostet **432 Gold bzw. 48 Ingots**
- Es gibt verschiedene Arten von Plots die man festlegen kann, der wichtigste wird am Anfang der Bank Plot sein, da dieser es dir erlaubt, Geld auf dein Konto einzuzahlen. Um die Plot Art zu ändern, muss man auf einem Plot stehen und den Command `/plot set bank` eingeben. Weitere Arten von Plots findest du unter `/tgui plot`
- Auch ein wichtiger Aspekt deiner Stadt ist, dass du Steuern von deinen Bürgern einbeziehst. Dies machst du mit dem Command `/t set taxes *Anzahl an Gold*`. Die Anzahl die man festgelegt hat, müssen die Bürger deiner Stadt nun jeden Tag um 12 Uhr bezahlen. **Das abziehen des Goldes passiert automatisch**
- Es wäre vorteilhaft Steuern einzubeziehen, da du natürlich die Stadterhaltungskosten decken willst. Mach sie aber nicht zu hoch, damit deine Bürger zufrieden bleiben.
- **Das Geld für die Stadterhaltungskosten muss auf der Stadtbank sein, kann deine Stadt die Steuern um 12 Uhr nicht bezahlen, geht sie bankrott**
  - Ist eine Stadt bankrott kann sie keine neuen Bürger aufnehmen, außerdem kann man keine Plots mehr beanspruchen und man kann nichts mehr auf seinem Land bauen. Um den Status zu entfernen, muss man einfach wieder mit `/t deposit *Anzahl von Geld*` genug Geld in die Stadtkasse zahlen.
## Stadtlevel
Deine Stadt kann verschiedene Level erreichen, diese beruhen auf der Anzahl deiner Anwohner.

| Level | Anzahl der Einwohner | Name des Stadterstellers und der Stadt | Anzahl der Plots die man beanspruchen kann | Die Anzahl an Steuern die man jeden Tag zahlen muss |
|-------|----------------------|----------------------------------------|--------------------------------------------|-----------------------------------------------------|
| 1     | 1                    | Oberpfadfinder einer Siedlung          | 30                                         | 144 (16 Ingots)                                     |
| 2     | 3                    | Landesherr eines Dorfes                | 60                                         | 576 (1 Stack Ingots)                                |
| 3     | 6                    | Bürgermeister einer Stadt              | 180                                        | 1152 (2 Stacks Ingots)                              |
| 4     | 8                    | Oberbürgermeister einer Metropole      | 300                                        | 1728 (3 Stacks Ingots)                              |


## Vorteile von Städten
- Grief-Schutz. Ein Plot, welchen du dir bei einer Stadt mietest ist geschützt, heißt nur du und die, welchen du die Berechtigungen dafür gegeben hast, können auf deinen Plot zugreifen.
- Viele Städte haben öffentliche Plots wie zum Beispiel Kürbisfarmen, auf denen sich jeder Einwohner bedienen darf.
- Städte können Bank Plots festlegen, auf welchen du auf dein Konto zugreifen kannst.
- Ein weiterer Vorteil ist, dass man mit seiner Stadt Ressourcen abbauen kann, dies wird unter [Ressourcenabbau](02-Ressourcenabbau.md) erklärt.
