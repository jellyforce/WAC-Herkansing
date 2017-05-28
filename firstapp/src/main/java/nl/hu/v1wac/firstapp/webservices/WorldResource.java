package nl.hu.v1wac.firstapp.webservices;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.GET;
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
		job.add("code", country.getCode());
		job.add("name", country.getName());
		job.add("continent", country.getContinent());
		job.add("region", country.getRegion());
		job.add("surface", country.getSurface());
		job.add("population", country.getPopulation());
		job.add("government", country.getGovernment());

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
			job.add("continent", country.getContinent());
			job.add("region", country.getRegion());
			job.add("surface", country.getSurface());
			job.add("population", country.getPopulation());
			job.add("government", country.getGovernment());

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
			job.add("continent", country.getContinent());
			job.add("region", country.getRegion());
			job.add("surface", country.getSurface());
			job.add("population", country.getPopulation());
			job.add("government", country.getGovernment());

			jab.add(job);
		}
		JsonArray array = jab.build();
		return array.toString();
	}

}
