using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System;
using ProeyectoSemillero.Models;

namespace ProeyectoSemillero.Models
{

public class SemilleroItem

{

[JsonProperty("id")] [DatabaseGenerated(DatabaseGeneratedOption.None)] public int Id { get; set; }

[JsonProperty("nombrefacultad")] public string Nombrefacultad { get; set; }
[JsonProperty("nombreestudiante")] public string Nombreestudiante { get; set; }
[JsonProperty("nombredocente")] public string Nombredocente { get; set; }
[JsonProperty("apellidoestudiante")] public string Apellidoestudiante { get; set; }
[JsonProperty("apellidodocente")] public string Apellidodocente { get; set; }
[JsonProperty("CvLAC")] public string CvLAC { get; set; }
[JsonProperty("firmarector")] public string Firmarector { get; set; }


[JsonProperty("programa")] public virtual ProgramaItem  Programa { get; set; }
[JsonProperty("estudiante")] public virtual EstudianteItem  Estudiantes { get; set; }

[JsonProperty("cronograma")] public virtual PlantrabajoItem  Trabajo { get; set; }


public int docente_id  { get; set; } [ForeignKey("docente_id")] public DocenteItem Docente { get; set; }




}

}