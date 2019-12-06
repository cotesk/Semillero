using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System;
using ProeyectoSemillero.Models;

namespace ProeyectoSemillero.Models
{

public class PlantrabajoItem

{




[JsonProperty("id")] [DatabaseGenerated(DatabaseGeneratedOption.None)] public int Id { get; set; }

[JsonProperty("nombresemillero")] public string Nombresemillero { get; set; }
[JsonProperty("nombregruposemillero")] public string Nombregruposemillero { get; set; }
[JsonProperty("nombredocente")] public string Nombredocente { get; set; }
[JsonProperty("apellidodocente")] public string Apellidodocente { get; set; }


// [JsonProperty("programa")] public virtual ProgramaItem  Programa { get; set; }
// [JsonProperty("facultad")] public virtual FacultadItem  Facultad { get; set; }
// [JsonProperty("semillero")] public virtual SemilleroItem  Semillero { get; set; }

public int programaid { get; set; } [ForeignKey("programa")] public ProgramaItem Programa { get; set; }
public int facultadid { get; set; } [ForeignKey("facultad")] public FacultadItem Facultad { get; set; }
public int semilleroid { get; set; } [ForeignKey("semillero")] public SemilleroItem Semillero { get; set; }


}

}