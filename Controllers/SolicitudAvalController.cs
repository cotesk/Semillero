using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProeyectoSemillero.Models;

namespace ProeyectoSemillero.Controllers
{
[Route("api/[Controller]")]
[ApiController]
public class SolicitudAvalController : ControllerBase
{
private readonly SemilleroContext _context;
public SolicitudAvalController(SemilleroContext context)
{


// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
// _context.Docente.Add(new DocenteItem { Nombre="Jorge",Apellido="Cantillo",Telefono="hola",Sexo="hola",FechaNacimiento="hola",EmailInstitucional="jose@",EmailPersonal="hola",Programa="hola",CvLAC="hola"});





//  Docente producto1 = new Docente { Nombre="Jorge",Segundonombre="jose",Apellido="Cantillo",Segundoapellido="pedro",Telefono="hola",Sexo="hola",FechaNacimiento="hola",EmailInstitucional="jose@",EmailPersonal="hola",Programa="hola",CvLAC="hola",Estado=false,Direccion="calle2b"};

     if (_context.Aval.Count() == 0)
            {
                _context.Aval.Add(new SolicitudAvalItem { Id = 1, Nombresemillero = "porque",  Docente = null});
             _context.SaveChanges();
       }





}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<SolicitudAvalItem>>> GetPacienteItems()
{
return await _context.Aval.Include(t=>t.Docente).ToListAsync();
}


public void calcular(SolicitudAvalItem item){

}



[HttpGet("{id}")]
public async Task<ActionResult<SolicitudAvalItem>> GetPacienteItem(int id)
{
var Aval = await _context.Aval.FindAsync(id);
if (Aval == null)
{
return NotFound();
}
return Aval;
}

// public void calcularPaciente(EstudianteItem item){
//     if(item.Salario>2500000){
//         item.Tarifa=0.2;
//         item.ValorCopago=(item.Tarifa*item.ValorServivcio);
//     }else{
//         item.Tarifa=0.1;

//          item.ValorCopago=(item.Tarifa*item.ValorServivcio);
//     }
// }
[HttpPost]
public async Task<ActionResult<SolicitudAvalItem>> PostPacienteItem(SolicitudAvalItem item)
{
   
        //   calcular(item);
        item.Docente=null;

_context.Aval.Add(item);
await _context.SaveChangesAsync();

  
    return CreatedAtAction(nameof(GetPacienteItem), new { id = item.Id }, item);

}
// PUT: api/Task/5
/*[HttpPut("{id}")]
public async Task<IActionResult> PutTaskItem(int id, TaskItem
item)
{
if (id != item.Id)
{
return BadRequest();
}
_context.Entry(item).State = EntityState.Modified;
await _context.SaveChangesAsync();
return NoContent();
}
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteTaskItem(int id)
{
var TaskItem = await
_context.TaskItems.FindAsync(id);
if (TaskItem == null)
{
return NotFound();
}

_context.TaskItems.Remove(TaskItem);
await _context.SaveChangesAsync();
return NoContent();
}*/

}
}