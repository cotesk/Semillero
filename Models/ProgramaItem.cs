
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;


namespace ProeyectoSemillero.Models
{
public class ProgramaItem
{


// facultad:Facultad;
// facultad_id:number;



[JsonProperty("id")] [DatabaseGenerated(DatabaseGeneratedOption.None)] public int Id { get; set; }

[JsonProperty("nombreprograma")]
public string Nombreprograma { get; set; }

//  [JsonProperty("facultadid")] public int Facultad { get; set; }



public int facultad_id  { get; set; } [ForeignKey("facultad_id")] public FacultadItem Facultad { get; set; }





}
}