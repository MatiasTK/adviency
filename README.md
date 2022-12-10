# Adviency 2022

_Adviency_ es un challenge propuesto por [Goncy](https://twitter.com/goncy) el cual consiste en hacer una misma aplicación 24 veces desde 0, con una funcionalidad nueva cada dia.

[Thread de twitter](https://twitter.com/goncy/status/1597581740746637314)

## Meta

La idea es como esta propuesto hacer cada dia nuevamente la app y usar como base solo este readme, el cual ire actualizando en cada branch explicando que funciones le agregue ese dia y porque tome ciertas decisiones.

## Dia 8 y 9

Decidí hacer estos dos días juntos ya que son mínimos los cambios del dia 8 y 9 por separado pero juntos es un cambio mayor. Respecto al dia 8 lo que se debía hacer es implementar que un regalo especifico pueda tener una cantidad esto lo solucione usando objetos con la propiedad nombre y cantidad, ademas implemente la propiedad id para asi poder darles una key prop adecuada para react, en cuanto a las cantidad es simple si un regalo ya existe se le sumara la cantidad que el usuario puso y si no existe se creara con la cantidad del usuario. Respecto al dia 9 lo único que había que hacer es implementar el uso del localStorage para guardar la información y no perderla al refrescar la pagina, esto lo logre usando el hook useEffect para guardar los datos cada vez que cambia la lista de regalos y obtenerlos al cargar la pagina.

![Preview dia 8&9](https://i.imgur.com/H7CJxYX.gif)
Nota: Cuando se pone en blanco es que refresque la pagina para probar el localStorage
