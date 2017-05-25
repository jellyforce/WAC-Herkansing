package nl.hu.v1wac.firstapp.servlets;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet(urlPatterns = "/DynamicServlet.do") 
public class DynamicServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String naam = req.getParameter("naam");

		
		
		PrintWriter out = resp.getWriter();
		resp.setContentType("text/html");

		out.println("<!DOCTYPE html>");
		out.println("<html>");
		out.println("  <title>Dynamic Example</title>");
		out.println("  <body>");
		out.println("    <h2>Dynamic webapplication example</h2>");
		out.println("    <h2>Hello " + naam + "!</h2>");
		out.println("   <a link='/index.html'>Probeer nog een keer</a>");
		out.println("  </body>");
		out.println("</html>");
	}
}