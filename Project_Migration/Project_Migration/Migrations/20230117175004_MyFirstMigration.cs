using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_Migration.Migrations
{
    public partial class MyFirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ConfirmPassword",
                table: "tbluser");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ConfirmPassword",
                table: "tbluser",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
