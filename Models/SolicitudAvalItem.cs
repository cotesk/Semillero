
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;


namespace ProeyectoSemillero.Models
{
public class SolicitudAvalItem
{


[JsonProperty("id")] [DatabaseGenerated(DatabaseGeneratedOption.None)] public int Id { get; set; }

[JsonProperty("nombresemillero")]
public string Nombresemillero { get; set; }


public int docente_id  { get; set; } [ForeignKey("docente_id")] public DocenteItem Docente { get; set; }







}
}