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
public class ProgramaController : ControllerBase
{
private readonly SemilleroContext _context;
public ProgramaController(SemilleroContext context)
{
_context = context;
if (_context.Programa.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
// _context.Docente.Add(new DocenteItem { Nombre="Jorge",Apellido="Cantillo",Telefono="hola",Sexo="hola",FechaNacimiento="hola",EmailInstitucional="jose@",EmailPersonal="hola",Programa="hola",CvLAC="hola"});


 _context.Programa.Add(new ProgramaItem { Nombreprograma="Ingeneria de Sistemas "});
 _context.Programa.Add(new ProgramaItem { Nombreprograma="Ingeneria  Electronica "});
 _context.Programa.Add(new ProgramaItem { Nombreprograma="Ingeneria Agroindustrial "});
_context.Programa.Add(new ProgramaItem { Nombreprograma="Ingeneria Ambiental y sanitaria "});




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
public async Task<ActionResult<IEnumerable<ProgramaItem>>> GetPacienteItems()
{
return await _context.Programa.ToListAsync();
}




[HttpGet("{id}")]
public async Task<ActionResult<ProgramaItem>> GetPacienteItem(int id)
{
var Programa = await _context.Programa.FindAsync(id);
if (Programa == null)
{
return NotFound();
}
return Programa;
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
public async Task<ActionResult<ProgramaItem>> PostPacienteItem(ProgramaItem item)
{
   
         // calcularEstudiante(item);
_context.Programa.Add(item);
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