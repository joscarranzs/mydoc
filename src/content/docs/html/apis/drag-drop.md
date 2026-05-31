---
title: ARRASTRAR Y SOLTAR
module: html
submodule: apis/drag-drop
---

La API de Drag and Drop permite a los usuarios arrastrar elementos HTML y soltarlos en zonas específicas. Es útil para interfaces de organización, carga de archivos, listas reordenables y paneles personalizables.

## Hacer un elemento arrastrable

El atributo `draggable="true"` habilita un elemento para ser arrastrado:

```html
<div class="lista-tareas">
  <div draggable="true" class="tarea" id="tarea-1">Diseñar interfaz</div>
  <div draggable="true" class="tarea" id="tarea-2">Escribir tests</div>
  <div draggable="true" class="tarea" id="tarea-3">Desplegar a producción</div>
</div>
```

## Eventos del Drag and Drop

### Eventos en el elemento arrastrado

| Evento | Disparo |
|--------|---------|
| `dragstart` | El usuario comienza a arrastrar |
| `drag` | Mientras se arrastra (continuo) |
| `dragend` | El usuario suelta el elemento |

### Eventos en la zona de destino

| Evento | Disparo |
|--------|---------|
| `dragenter` | El elemento entra en la zona de destino |
| `dragover` | El elemento se mueve sobre la zona (continuo) |
| `dragleave` | El elemento sale de la zona |
| `drop` | El elemento se suelta en la zona |

El método `preventDefault()` en `dragover` es necesario para habilitar la zona como destino de soltado.

## Transferencia de datos con `dataTransfer`

El objeto `dataTransfer` transporta información entre el origen y el destino:

```javascript
const tareas = document.querySelectorAll('.tarea');
const zonas = document.querySelectorAll('.zona');

// Elemento arrastrable
tareas.forEach(tarea => {
  tarea.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', tarea.id);
    tarea.classList.add('arrastrando');
  });

  tarea.addEventListener('dragend', e => {
    tarea.classList.remove('arrastrando');
  });
});

// Zona de destino
zonas.forEach(zona => {
  zona.addEventListener('dragover', e => {
    e.preventDefault();
    zona.classList.add('zona-activa');
  });

  zona.addEventListener('dragleave', e => {
    zona.classList.remove('zona-activa');
  });

  zona.addEventListener('drop', e => {
    e.preventDefault();
    zona.classList.remove('zona-activa');

    const id = e.dataTransfer.getData('text/plain');
    const tarea = document.getElementById(id);
    zona.appendChild(tarea);
  });
});
```

## Carga de archivos por arrastrar y soltar

Una de las aplicaciones más comunes es la carga de archivos:

```html
<div id="zona-carga" class="zona-carga">
  <p>Arrastra tus archivos aquí</p>
</div>
<div id="archivos-cargados"></div>

<script>
  const zona = document.getElementById('zona-carga');

  zona.addEventListener('dragover', e => {
    e.preventDefault();
    zona.style.borderColor = '#0066cc';
  });

  zona.addEventListener('dragleave', e => {
    zona.style.borderColor = '#ccc';
  });

  zona.addEventListener('drop', e => {
    e.preventDefault();
    zona.style.borderColor = '#ccc';

    const archivos = e.dataTransfer.files;
    const contenedor = document.getElementById('archivos-cargados');
    contenedor.innerHTML = '';

    for (const archivo of archivos) {
      const p = document.createElement('p');
      p.textContent = `${archivo.name} (${(archivo.size / 1024).toFixed(1)} KB)`;
      contenedor.appendChild(p);
    }
  });
</script>
```

## Estilo visual durante el arrastre

CSS puede mejorar la experiencia visual:

```css
.tarea {
  cursor: grab;
  padding: 0.5rem;
  margin: 0.25rem 0;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.tarea.arrastrando {
  opacity: 0.5;
}

.zona-activa {
  border: 2px dashed #0066cc;
  background: #f0f7ff;
}
```

---

## Ejercicio: zona de carga de archivos

Crea un área de soltado que:

1. Cambie el estilo visual cuando un archivo se arrastra sobre ella
2. Muestre el nombre y tamaño de los archivos soltados
3. Maneje el evento `dragover` correctamente para permitir el soltado

<details>
<summary><strong>Ver solución</strong></summary>

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Carga por arrastre</title>
  <style>
    #drop-zone {
      width: 400px;
      height: 200px;
      border: 2px dashed #999;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }
    #drop-zone.drag-over {
      border-color: #0066cc;
      background: #e6f0ff;
    }
    #files { margin-top: 1rem; }
  </style>
</head>
<body>
  <div id="drop-zone">
    <p>Arrastra archivos aquí</p>
  </div>
  <div id="files"></div>

  <script>
    const dropZone = document.getElementById('drop-zone');
    const filesContainer = document.getElementById('files');

    dropZone.addEventListener('dragover', e => {
      e.preventDefault();
      dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', e => {
      e.preventDefault();
      dropZone.classList.remove('drag-over');

      filesContainer.innerHTML = '';
      for (const file of e.dataTransfer.files) {
        const p = document.createElement('p');
        p.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
        filesContainer.appendChild(p);
      }
    });
  </script>
</body>
</html>
```

</details>
