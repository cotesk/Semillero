using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProeyectoSemillero.Migrations
{
    public partial class TaskDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Convocatoria",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nombreconvocatoria = table.Column<string>(nullable: true),
                    Fechainicio = table.Column<string>(nullable: true),
                    Fechacierre = table.Column<string>(nullable: true),
                    Estado = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Convocatoria", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Docente",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Segundonombre = table.Column<string>(nullable: true),
                    Apellido = table.Column<string>(nullable: true),
                    Segundoapellido = table.Column<string>(nullable: true),
                    Telefono = table.Column<string>(nullable: true),
                    Sexo = table.Column<string>(nullable: true),
                    FechaNacimiento = table.Column<string>(nullable: true),
                    EmailInstitucional = table.Column<string>(nullable: true),
                    EmailPersonal = table.Column<string>(nullable: true),
                    Programa = table.Column<string>(nullable: true),
                    CvLAC = table.Column<string>(nullable: true),
                    Estado = table.Column<bool>(nullable: false),
                    Direccion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docente", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Estudiantes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Segundonombre = table.Column<string>(nullable: true),
                    Apellido = table.Column<string>(nullable: true),
                    Segundoapellido = table.Column<string>(nullable: true),
                    Telefono = table.Column<string>(nullable: true),
                    Sexo = table.Column<string>(nullable: true),
                    FechaNacimiento = table.Column<string>(nullable: true),
                    Semestre = table.Column<string>(nullable: true),
                    Proyecto = table.Column<string>(nullable: true),
                    Ingreso = table.Column<string>(nullable: true),
                    CvLAC = table.Column<string>(nullable: true),
                    Estado = table.Column<bool>(nullable: false),
                    Direccion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estudiantes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Facultad",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Nombrefacultad = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Facultad", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Aval",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Nombresemillero = table.Column<string>(nullable: true),
                    docente_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aval", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Aval_Docente_docente_id",
                        column: x => x.docente_id,
                        principalTable: "Docente",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Programa",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Nombreprograma = table.Column<string>(nullable: true),
                    facultad_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Programa", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Programa_Facultad_facultad_id",
                        column: x => x.facultad_id,
                        principalTable: "Facultad",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Semillero",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Nombrefacultad = table.Column<string>(nullable: true),
                    Nombreestudiante = table.Column<string>(nullable: true),
                    Nombredocente = table.Column<string>(nullable: true),
                    Apellidoestudiante = table.Column<string>(nullable: true),
                    Apellidodocente = table.Column<string>(nullable: true),
                    CvLAC = table.Column<string>(nullable: true),
                    Firmarector = table.Column<string>(nullable: true),
                    ProgramaId = table.Column<int>(nullable: true),
                    EstudiantesId = table.Column<int>(nullable: true),
                    docente_id = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Semillero", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Semillero_Estudiantes_EstudiantesId",
                        column: x => x.EstudiantesId,
                        principalTable: "Estudiantes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Semillero_Programa_ProgramaId",
                        column: x => x.ProgramaId,
                        principalTable: "Programa",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Semillero_Docente_docente_id",
                        column: x => x.docente_id,
                        principalTable: "Docente",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Trabajo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Nombresemillero = table.Column<string>(nullable: true),
                    Nombregruposemillero = table.Column<string>(nullable: true),
                    Nombredocente = table.Column<string>(nullable: true),
                    Apellidodocente = table.Column<string>(nullable: true),
                    programaid = table.Column<int>(nullable: false),
                    programa = table.Column<int>(nullable: true),
                    facultadid = table.Column<int>(nullable: false),
                    facultad = table.Column<int>(nullable: true),
                    semilleroid = table.Column<int>(nullable: false),
                    semillero = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trabajo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Trabajo_Facultad_facultad",
                        column: x => x.facultad,
                        principalTable: "Facultad",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Trabajo_Programa_programa",
                        column: x => x.programa,
                        principalTable: "Programa",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Trabajo_Semillero_semillero",
                        column: x => x.semillero,
                        principalTable: "Semillero",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Aval_docente_id",
                table: "Aval",
                column: "docente_id");

            migrationBuilder.CreateIndex(
                name: "IX_Programa_facultad_id",
                table: "Programa",
                column: "facultad_id");

            migrationBuilder.CreateIndex(
                name: "IX_Semillero_EstudiantesId",
                table: "Semillero",
                column: "EstudiantesId");

            migrationBuilder.CreateIndex(
                name: "IX_Semillero_ProgramaId",
                table: "Semillero",
                column: "ProgramaId");

            migrationBuilder.CreateIndex(
                name: "IX_Semillero_docente_id",
                table: "Semillero",
                column: "docente_id");

            migrationBuilder.CreateIndex(
                name: "IX_Trabajo_facultad",
                table: "Trabajo",
                column: "facultad");

            migrationBuilder.CreateIndex(
                name: "IX_Trabajo_programa",
                table: "Trabajo",
                column: "programa");

            migrationBuilder.CreateIndex(
                name: "IX_Trabajo_semillero",
                table: "Trabajo",
                column: "semillero",
                unique: true,
                filter: "[semillero] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Aval");

            migrationBuilder.DropTable(
                name: "Convocatoria");

            migrationBuilder.DropTable(
                name: "Trabajo");

            migrationBuilder.DropTable(
                name: "Semillero");

            migrationBuilder.DropTable(
                name: "Estudiantes");

            migrationBuilder.DropTable(
                name: "Programa");

            migrationBuilder.DropTable(
                name: "Docente");

            migrationBuilder.DropTable(
                name: "Facultad");
        }
    }
}
