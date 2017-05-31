package nl.hu.v1wac.firstapp.persistence;


import java.sql.*;
import java.util.*;

import nl.hu.v1wac.firstapp.webservices.Country;

public class CountryDAO extends BaseDAO {

  private List<Country> selectCountry(String query) {
    List<Country> results = new ArrayList<Country>();
    
    try (Connection con = super.getConnection()) {
      Statement stmt = con.createStatement();
      ResultSet dbResultSet = stmt.executeQuery(query);

      while (dbResultSet.next()) {
        String code2 = dbResultSet.getString("code2");
        String code3 = dbResultSet.getString("code");
        String name = dbResultSet.getString("name");
        String capital = dbResultSet.getString("capital");
        String continent = dbResultSet.getString("continent");
        String region = dbResultSet.getString("region");
        double surface = dbResultSet.getDouble("surfacearea");
        int population = dbResultSet.getInt("population");
        String government = dbResultSet.getString("governmentform");
        double latitude = dbResultSet.getDouble("latitude");
        double longitude = dbResultSet.getDouble("longitude");
        // code2, code, 
        Country newCountry = new Country(code2, code3, name, capital, continent, region, surface, population, government, latitude, longitude);
        results.add(newCountry);

      }
    } catch (SQLException sqle) {
      sqle.printStackTrace();
    }
    return results;
  }
  
  public List<Country> findAll() {
    return selectCountry("SELECT * FROM country");
  }
  
  public Country findByCode(String incode){
    return selectCountry("SELECT * FROM country WHERE code2 = '"+ incode + "'").get(0);
  }
  
  public List<Country> find10LargestPopulations() {
    return selectCountry("SELECT * FROM country ORDER BY population desc limit 10");
  }
  
  public List<Country> find10LargestSurfaces() {
    return selectCountry("SELECT * FROM country ORDER BY surfacearea desc limit 10");
  }
  
  public List<Country> findBySearch(String search){
	    return selectCountry("SELECT * FROM country WHERE code2 = '"+ search + "' OR name = '"+ search + "' OR code = '"+ search + "' OR region = '"+ search + "' OR localname = '"+ search + "' OR headofstate = '"+ search + "' OR capital = '"+ search + "'");
	  }
  
//  public Country update(Country country){
//	  return (Country) selectCountry("update country set name = " + country.getName() + ", continent = " + country.getContinent() + ", region = " + country.getRegion() + ", surface = " + country.getSurface() + ", population = " + country.getPopulation() + ", government = " + country.getGovernment() + " where code =" + country.getCode());
//  }
//  
  public boolean delete(String code){
	  boolean result = false;
	  boolean countryExists = findByCode(code) != null;
	  
	  if(countryExists){
		  String query = "DELETE FROM country WHERE code =" + code;
		  
		  try (Connection con = getConnection()) {
			  
			  Statement stmt = con.createStatement();
			  if(stmt.executeUpdate(query) == 1) {
				  result = true;
			  }
		  } catch (SQLException sqle) {
			  sqle.printStackTrace();
		  }
	  }
	  return result;
  }
}