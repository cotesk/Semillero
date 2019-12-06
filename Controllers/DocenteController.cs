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
public class DocenteController : ControllerBase
{
private readonly SemilleroContext _context;
public DocenteController(SemilleroContext context)
{
_context = context;
if (_context.Docente.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
// _context.Docente.Add(new DocenteItem { Nombre="Jorge",Apellido="Cantillo",Telefono="hola",Sexo="hola",FechaNacimiento="hola",EmailInstitucional="jose@",EmailPersonal="hola",Programa="hola",CvLAC="hola"});





//    id: number;
//     nombre: string;
//     apellido: string;
//     telefono: number;
//     sexo: boolean;
//     fechaNacimiento: string;
//     emailInstitucional: string;
//     emailPersonal: string;
//     programa: string;
//     CvLAC: string;


_context.SaveChanges();
}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<DocenteItem>>> GetPacienteItems()
{
return await _context.Docente.ToListAsync();
}


public void calcularEstudiante(DocenteItem item){
    if(item.Id==0){

          item.Id=1;
   
    }else if (item.Id==1){

       item.Id=2;

    }else if (item.Id==2){

       item.Id=3;

    }else if (item.Id==3){

       item.Id=4;

    }else if (item.Id==4){

       item.Id=5;

    }else if (item.Id==5){

       item.Id=5;

    }


}


[HttpGet("{id}")]
public async Task<ActionResult<DocenteItem>> GetPacienteItem(int id)
{
var Docente = await _context.Docente.FindAsync(id);
if (Docente == null)
{
return NotFound();
}
return Docente;
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
public async Task<ActionResult<DocenteItem>> PostPacienteItem(DocenteItem item)
{
   
         // calcularEstudiante(item);
_context.Docente.Add(item);
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