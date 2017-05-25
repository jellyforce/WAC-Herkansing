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
		String value = req.getParameter("value");
		
		
		//zet invoer om van string naar integer		
		int num_1 = Integer.parseInt(num1);
		int num_2 = Integer.parseInt(num2);
		
		
		//het antwoord dat straks naar de pagina gestuurd wordt
		int antwoord = 0;
		
		//mogelijke opties qua button-input
		//alle buttons hebben de naam: "value" maar hun eigen waarde (+, -, /, *)
		switch (value){
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
		out.println("  <title>Dynamic Example</title>");
		out.println("  <body>");
		out.println("    <h2>Dynamic webapplication example</h2>");
		out.println("    <h2>Het antwoord van: "+num_1 +" "+ value + " "+ num_2 +  " = " + antwoord + "!</h2>");
		out.println("  </body>");
		out.println("</html>");

	}
}
