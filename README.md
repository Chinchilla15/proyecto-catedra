# Instrucciones para Colaborar en el Proyecto

## Requisitos Previos

**Git**: Asegúrate de tener Git instalado en tu máquina. Puedes descargarlo desde [aquí](https://git-scm.com/).

## Pasos para Contribuir

Para contribuir, puedes seguir los pasos desde la línea de comandos o desde Visual Studio Code:

-   [Contribuir desde Visual Studio Code](#hacer-commits-desde-visual-studio-code)

1. **Fork del Repositorio**

    - Ve al repositorio principal en GitHub.
    - Haz clic en el botón "Fork" en la esquina superior derecha de la página.

2. **Clonar el Repositorio**

    - Clona tu fork a tu máquina local usando el siguiente comando:
        ```bash
        git clone git@github.com:Chinchilla15/proyecto-catedra.git
        ```

3. **Agregar el Upstream**

-   Agregar el upstream te permite mantener tu fork sincronizado con el repositorio principal. Esto es útil para obtener las últimas actualizaciones y cambios realizados por otros colaboradores.

    -   Navega al directorio del proyecto:
        ```bash
        cd proyecto-catedra
        ```
    -   Añade el repositorio principal como un remoto:
        ```bash
        git remote add upstream git@github.com:Chinchilla15/proyecto-catedra.git
        ```

4. **Crear una Rama**

    - Crea una nueva rama para tu característica o corrección de errores:
        ```bash
        git checkout -b nombre-de-tu-rama
        ```

5. **Realizar Cambios**

    - Realiza los cambios necesarios en el código.
    - Asegúrate de seguir las guías de estilo y de agregar comentarios donde sea necesario.

6. **Commit de los Cambios**

    - Añade los cambios al área de preparación:
        ```bash
        git add .
        ```
    - Realiza un commit de tus cambios:
        ```bash
        git commit -m "Descripción de los cambios"
        ```

7. **Enviar los Cambios a GitHub**

    - Envía tus cambios a tu fork en GitHub:
        ```bash
        git push origin nombre-de-tu-rama
        ```

8. **Crear un Pull Request**

    - Ve a tu fork en GitHub.
    - Haz clic en el botón "New Pull Request".
    - Completa el formulario y envía el Pull Request.

9. **Actualizar tu Fork con Cambios del Repositorio Principal**

    - Obtén los cambios más recientes del repositorio principal:
        ```bash
        git fetch upstream
        ```
    - Fusiona los cambios en tu rama:
        ```bash
        git merge upstream/main
        ```

## Hacer Commits desde Visual Studio Code

1. **Abrir el Proyecto en VSCode**

    - Abre Visual Studio Code.
    - Navega a `File` > `Open Folder` y selecciona el directorio del proyecto.

2. **Realizar Cambios en el Código**

    - Realiza los cambios necesarios en el código desde el editor.

3. **Crear una Rama**

    - Ve a la vista de control de código fuente haciendo clic en el icono de la barra lateral izquierda.
    - Haz clic en el nombre de la rama actual en la parte inferior de la barra lateral.
    - Selecciona `Create new branch` e ingresa el nombre de tu nueva rama.

4. **Preparar Cambios para Commit**

    - Ve a la vista de control de código fuente haciendo clic en el icono de la barra lateral izquierda.
    - Selecciona los archivos que deseas añadir al área de preparación y haz clic en el icono de `+`.

5. **Hacer Commit de los Cambios**

    - Escribe un mensaje de commit en el campo de texto de la vista de control de código fuente.
    - Haz clic en el icono de `✔` para realizar el commit.

6. **Enviar Cambios a GitHub**

    - Ve a la vista de control de código fuente.
    - Haz clic en los tres puntos `...` y selecciona `Push` para enviar tus cambios a GitHub.

7. **Hacer Pull de los Cambios**

    - Ve a la vista de control de código fuente.
    - Haz clic en los tres puntos `...` y selecciona `Pull` para obtener los cambios más recientes del repositorio remoto.
