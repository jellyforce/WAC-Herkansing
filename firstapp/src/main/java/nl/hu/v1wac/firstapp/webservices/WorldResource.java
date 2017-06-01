package nl.hu.v1wac.firstapp.webservices;

import java.io.InputStream;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/countries")
public class WorldResource {
	@GET
	@Produces("application/json")
	public String getCountry() {
		WorldService service = ServiceProvider.getWorldService();
		JsonArrayBuilder jab = Json.createArrayBuilder();

		for (Country country : service.getAllCountries()) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("Land", country.getName());
			job.add("code", country.getCode());
			job.add("name", country.getName());
			job.add("capital", country.getCapital());
			job.add("continent", country.getContinent());
			job.add("region", country.getRegion());
			job.add("surface", country.getSurface());
			job.add("population", country.getPopulation());
			job.add("government", country.getGovernment());
			job.add("latitude", country.getLatitude());
			job.add("longitude", country.getLongitude());

			jab.add(job);
		}

		JsonArray array = jab.build();
		return array.toString();
	}

	@GET
	@Path("{code}")
	@Produces("application/json")
	public String getCountryInfo(@PathParam("code") String code) {
		WorldService service = ServiceProvider.getWorldService();
		Country country = service.getCountryByCode(code);

		JsonObjectBuilder job = Json.createObjectBuilder();
		job.add("Land", country.getName());
		job.add("code", country.getCode());
		job.add("name", country.getName());
		job.add("capital", country.getCapital());
		job.add("continent", country.getContinent());
		job.add("region", country.getRegion());
		job.add("surface", country.getSurface());
		job.add("population", country.getPopulation());
		job.add("government", country.getGovernment());
		job.add("latitude", country.getLatitude());
		job.add("longitude", country.getLongitude());

		return job.build().toString();
	}

	
/*=======================================
			Land Toevoegen 				===> POST
=========================================
*/	
	
	@POST
	@Path("{code}")
	  @Produces("application/json")
	  public String  countryInput(InputStream is) {
		// data opvangen
		JsonObject object = Json.createReader(is).readObject();
	    
		//uitlezen
		String code2 = object.getString("kort");
		String code3 = object.getString("lang");
		String land = object.getString("land");
		String capital = object.getString("capital");
		String continent = object.getString("continent");
		String regio = object.getString("regio");
		double oppervlakte = object.getInt("oppervlakte");
		int populatie = object.getInt("populatie");
		String regering = object.getString("regering");
		double lat = object.getInt("latitude");
		double lon = object.getInt("longitude");
		
		
		JsonObjectBuilder job = Json.createObjectBuilder();
		String response = "";
		
		try{

			//land-object maken
			Country newCountry = new Country(code2, code3, land, capital, continent, regio, oppervlakte, populatie, regering, lat, lon);

		    //Service aanroepen
			WorldService service = ServiceProvider.getWorldService();
		    service.createCountry(newCountry);    
	    
		    response = "Server heeft een land object gemaakt!";
		    job.add("response", response );	
		    job.add("naam",newCountry.getName());
			
		}catch(Error e){	
			
			response = "Fout met opslaan: " + e.toString();
			job.add("response", response );	
			
		}
		

	    

	    return job.build().toString();
	  }

	
	
	
	

	@GET
	@Path("/largestsurfaces")
	@Produces("application/json")
	public String getBiggestSurface() {
		WorldService service = ServiceProvider.getWorldService();
		JsonArrayBuilder jab = Json.createArrayBuilder();

		for (Country country : service.get10LargestSurfaces()) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("Land", country.getName());
			job.add("code", country.getCode());
			job.add("name", country.getName());
			job.add("capital", country.getCapital());
			job.add("continent", country.getContinent());
			job.add("region", country.getRegion());
			job.add("surface", country.getSurface());
			job.add("population", country.getPopulation());
			job.add("government", country.getGovernment());
			job.add("latitude", country.getLatitude());
			job.add("longitude", country.getLongitude());

			jab.add(job);
		}
		JsonArray array = jab.build();
		return array.toString();
	}

	@GET
	@Path("/largestpopulations")
	@Produces("application/json")
	public String getBiggestPopulation() {
		WorldService service = ServiceProvider.getWorldService();
		JsonArrayBuilder jab = Json.createArrayBuilder();

		for (Country country : service.get10LargestPopulations()) {
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("Land", country.getName());
			job.add("code", country.getCode());
			job.add("name", country.getName());
			job.add("capital", country.getCapital());
			job.add("continent", country.getContinent());
			job.add("region", country.getRegion());
			job.add("surface", country.getSurface());
			job.add("population", country.getPopulation());
			job.add("government", country.getGovernment());
			job.add("latitude", country.getLatitude());
			job.add("longitude", country.getLongitude());

			jab.add(job);
		}
		JsonArray array = jab.build();
		return array.toString();
	}
	
	
	@GET
	@Path("/random/{code}")
	@Produces("application/json")
	public String getRandomSearch(@PathParam("code") String code) {
		WorldService service = ServiceProvider.getWorldService();
		
		JsonArrayBuilder jab = Json.createArrayBuilder();
		for(Country country : service.findBySearch(code)){
			JsonObjectBuilder job = Json.createObjectBuilder();
			job.add("Land", country.getName());
			job.add("code", country.getCode());
			job.add("name", country.getName());
			job.add("capital", country.getCapital());
			job.add("continent", country.getContinent());
			job.add("region", country.getRegion());
			job.add("surface", country.getSurface());
			job.add("population", country.getPopulation());
			job.add("government", country.getGovernment());
			job.add("latitude", country.getLatitude());
			job.add("longitude", country.getLongitude());
			
			jab.add(job);
		}
		JsonArray array = jab.build();
		return array.toString();
	}
	

}
