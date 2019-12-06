using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System;
using ProeyectoSemillero.Models;

namespace ProeyectoSemillero.Models
{

public class FacultadItem

{

[JsonProperty("id")] [DatabaseGenerated(DatabaseGeneratedOption.None)] public int Id { get; set; }

[JsonProperty("nombrefacultad")] public string Nombrefacultad { get; set; }

// [JsonProperty("programa")] public virtual ProgramaItem  Programa { get; set; }







}

}