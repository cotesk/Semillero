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
public class ConvocatoriaController : ControllerBase
{
private readonly SemilleroContext _context;
public ConvocatoriaController(SemilleroContext context)
{
_context = context;
if (_context.Convocatoria.Count() == 0)
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
public async Task<ActionResult<IEnumerable<ConvocatoriaItem>>> GetPacienteItems()
{
return await _context.Convocatoria.ToListAsync();
}


public void calcular(ConvocatoriaItem item){

}



[HttpGet("{id}")]
public async Task<ActionResult<ConvocatoriaItem>> GetPacienteItem(int id)
{
var Convocatoria = await _context.Convocatoria.FindAsync(id);
if (Convocatoria == null)
{
return NotFound();
}
return Convocatoria;
}

[HttpGet("current")]
public async Task<ActionResult<ConvocatoriaItem>> GetCurrentConvocatoria()
{
var Convocatoria = await _context.Convocatoria.FirstOrDefaultAsync(t=>t.Estado==false);
if (Convocatoria == null)
{
return NotFound();
}
return Convocatoria;
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
public async Task<ActionResult<DocenteItem>> PostPacienteItem(ConvocatoriaItem item)
{
   
        //   calcular(item);
_context.Convocatoria.Add(item);
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