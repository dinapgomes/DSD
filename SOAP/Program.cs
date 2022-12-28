using Models;
using SoapCore;
var builder = WebApplication.CreateBuilder(args);
//builder.services.TryAddSingleton<ISampleService, SampleService>();
var app = builder.Build();
//builder.app.UseSoapEndpoint<ISampleService>("/Service.asmx", new BasicHttpBinding(), SoapSerializer.XmlSerializer);

app.MapGet("/", () => "Isso aqui é um WebService criado por alunos de TADS!");

app.Run();

