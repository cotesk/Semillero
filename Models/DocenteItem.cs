
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;


namespace ProeyectoSemillero.Models
{
public class DocenteItem
{


[JsonProperty("id")] [DatabaseGenerated(DatabaseGeneratedOption.None)] public int Id { get; set; }

[JsonProperty("nombre")]
public string Nombre { get; set; }
[JsonProperty("segundonombre")]
public string Segundonombre { get; set; }
[JsonProperty("apellido")]
public string Apellido { get; set; }
[JsonProperty("segundoapellido")]
public string Segundoapellido { get; set; }
[JsonProperty("telefono")]
public string Telefono { get; set; }

[JsonProperty("sexo")]
public string Sexo { get; set; }

[JsonProperty("fechaNacimiento")]
public string FechaNacimiento { get; set; }

[JsonProperty("emailInstitucional")]
public string EmailInstitucional { get; set; }

[JsonProperty("emailPersonal")]
public string EmailPersonal { get; set; }

[JsonProperty("programa")]
public string Programa { get; set; }

[JsonProperty("CvLAC")]
public string CvLAC { get; set; }
[JsonProperty("estado")]
public bool Estado { get; set; }
[JsonProperty("direccion")]
public string Direccion { get; set; }



}
}