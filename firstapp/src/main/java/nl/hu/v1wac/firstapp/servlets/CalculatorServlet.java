package nl.hu.v1wac.firstapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/CalculatorServlet.do") 
public class CalculatorServlet extends HttpServlet{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String num1 = req.getParameter("num1");
		String num2 = req.getParameter("num2");
		String operator = req.getParameter("operator");
		
		
		//zet invoer om van string naar integer		
		int num_1 = Integer.parseInt(num1);
		int num_2 = Integer.parseInt(num2);
		
		
		//het antwoord dat straks naar de pagina gestuurd wordt
		int antwoord = 0;
		
		//mogelijke opties qua button-input
		//alle buttons hebben de naam: "value" maar hun eigen waarde (+, -, /, *)
		switch (operator){
		case "+" : antwoord = num_1 + num_2;
			break;
		case "-" : antwoord = num_1 - num_2;
			break;
		case "/" : antwoord = num_1 / num_2;
			break;
		case "*" : antwoord = num_1 * num_2;
			break;
		}
		
			
		
		
		
	
	
		PrintWriter out = resp.getWriter();
		resp.setContentType("text/html");
	
		out.println("<!DOCTYPE html>");
		out.println("<html>");
		out.println("  <title>Calculator</title>");
		out.println("  <body>");
		out.println("    <h2>Prachtige calculator</h2>");
		out.println("    <h1>Het antwoord van: "+num_1 +" "+ operator + " "+ num_2 +  " = " + antwoord + "!</h1>");
		out.println("      <a href='2_5_calculator.html'>Ga terug naar de rekenmachine</a><br/><br/>   ");
		out.println("      <a href='5_5_index.html'>Ga terug naar het overzicht</a>   ");
		out.println("  </body>");
		out.println("</html>");

	}
}
