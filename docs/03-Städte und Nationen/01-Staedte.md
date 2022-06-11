---
title: Städte
---
#### Städte sind das Herzstück des TBU-SMP. In ihnen versammeln sich Spieler um ein gemeinsames Interesse zu verfolgen.

## Vorteile von Städten
- Grief-Schutz. Ein Plot, welchen du dir bei einer Stadt mietest, ist geschützt, heißt nur du und die, welchen du die Berechtigungen dafür gegeben hast, können auf deinen Plot zugreifen.
- Viele Städte haben öffentliche Plots wie zum Beispiel Kürbisfarmen, auf denen sich jeder Einwohner bedienen darf.
- Städte können Bank Plots festlegen, auf welchen du auf dein Konto zugreifen kannst.
- Ein weiterer Vorteil ist, dass man mit seiner Stadt Ressourcen abbauen kann, dies wird unter [Ressourcenabbau](02-Ressourcenabbau.md) erklärt.

## Wie funktioniert eine Stadt
- Wie man eine Stadt erstellt, erfährst du unter dem Command `/tgui town`. Eine Stadt kostet **3500 Gold bzw. ungefähr 6 Stacks Ingots**.

:::tip

Du kannst alle Preise mit dem Befehl `/towny prices` einsehen

:::

- Nachdem man eine Stadt erstellt hat, muss sie täglich Instandhaltungskosten bezahlen (diese sind abhängig vom Stadtlevel, siehe [unten](#stadtlevel)). Man bezahlt jeden Tag um 12 Uhr. **Das Geld wird automatisch von der Stadtkasse abgezogen**
- Nun sollte man Geld in seine Stadtkasse einzahlen. Dies geht mit dem Command `/t deposit <Anzahl an Gold>`
- Wenn man eine Stadt erstellt, erhält man den Chunk auf dem man steht. Wenn man nun genug Geld in der Stadtkasse hat, kann man sich weitere Plots (ein Plot ist ein Chunk) angrenzend an Plots, welche die Stadt schon besitz, für die Stadt beanspruchen. Dies macht man, in dem man in dem Plot steh,t den man beanspruchen will, und `/t claim` eingibt. Dies kostet **72 Gold bzw. 8 Ingots**.
- Man kann auch sogenannte Außenposten für sich beanspruchen, dies sind Plots die nicht an die eigene Stadt angrenzen. Dazu muss man in dem Plot stehen und den Command `/t claim outpost` eingeben. Dies kostet **432 Gold bzw. 48 Ingots**
- Jeder Plot kann einen speziellen Plottyp haben. Der wichtigste wird am Anfang der Bank Plot sein, da dieser es einem erlaubt, [Geld](/docs/04-Geld.md) auf sein Konto einzuzahlen. Um den Plottyp zu ändern, muss man auf dem Plot stehen und den Command `/plot set <PLOTTYP>` eingeben. Weitere Plottypen findest du unter `/tgui plot`
- Auch ein wichtiger Aspekt der Stadt ist es, dass sie Steuern von ihren Bürgern einbeziehen kann. Dies machst man mit dem Command `/t set taxes <Anzahl an Gold>`. Die Anzahl die man festgelegt hat, müssen die Bürger der Stadt nun jeden Tag um 12 Uhr bezahlen. **Das abziehen des Goldes passiert automatisch**
- Es wäre vorteilhaft Steuern einzubeziehen, da die Stadt ansonsten die Stadterhaltungskosten schwer decken kann. Man sollte sie aber nicht zu hoch ansetzen, da ansonsten die Bürger unzufrieden werden könnten.
- **Das Geld für die Stadterhaltungskosten muss auf der Stadtbank sein. Kann deine Stadt die Stadterhaltungskosten um 12 Uhr nicht bezahlen, geht sie bankrott**
  - Ist eine Stadt bankrott, kann sie keine neuen Bürger aufnehmen, außerdem kann man keine Plots mehr beanspruchen und man kann nichts mehr auf seinem Land bauen. Um den Status zu entfernen, muss man einfach wieder Gold in die Stadtkasse einzahlen. Dies geht mit folgendem Befehl: `/t deposit <Anzahl von Geld>`.
## Stadtlevel
Deine Stadt kann verschiedene Level erreichen, diese beruhen auf der Anzahl deiner Anwohner.

| Level | Anzahl der Einwohner | Name des Stadterstellers und der Stadt | Anzahl der Plots die man beanspruchen kann | Die Anzahl an Stadterhaltungskosten die man jeden Tag zahlen muss |
|-------|----------------------|----------------------------------------|--------------------------------------------|-----------------------------------------------------|
| 1     | 1                    | Oberpfadfinder einer Siedlung          | 30                                         | 144 (16 Ingots)                                     |
| 2     | 3                    | Landesherr eines Dorfes                | 60                                         | 576 (1 Stack Ingots)                                |
| 3     | 6                    | Bürgermeister einer Stadt              | 180                                        | 1152 (2 Stacks Ingots)                              |
| 4     | 8                    | Oberbürgermeister einer Metropole      | 300                                        | 1728 (3 Stacks Ingots)                              |
