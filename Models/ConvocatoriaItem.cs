
using Newtonsoft.Json;

namespace ProeyectoSemillero.Models
{
public class ConvocatoriaItem
{




 [JsonProperty("id")]
public int Id { get; set; }

[JsonProperty("nombreconvocatoria")]
public string Nombreconvocatoria { get; set; }

[JsonProperty("fechainicio")]
public string Fechainicio { get; set; }

[JsonProperty("fechacierre")]
public string Fechacierre { get; set; }
[JsonProperty("estado")]
public bool Estado { get; set; }



}
}