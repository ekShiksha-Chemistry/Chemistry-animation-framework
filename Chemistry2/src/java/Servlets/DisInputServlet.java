/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import DAO.DisReactionDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author aishwarya
 */
public class DisInputServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
      String message="NULL";
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            try{
            String reactant_1 = request.getParameter("reactant_1");
            String reactant_2 = request.getParameter("reactant_2");
            String product_1 = request.getParameter("product_1");
            String product_2 = request.getParameter("product_2");
            String reaction = request.getParameter("reaction");
            int n1 = Integer.parseInt(request.getParameter("n1"));
            int n2= Integer.parseInt(request.getParameter("n2"));
            int p1 = Integer.parseInt(request.getParameter("p1"));
            int p2 = Integer.parseInt(request.getParameter("p2"));
            DisReactionDAO disreactionDAO=new DisReactionDAO();
            
            int status=disreactionDAO.addSReaction(reactant_1,n1,reactant_2,n2,product_1,p1,product_2,p2,reaction);
            
            if(status!=0)
            message="Data is successfully inserted!";
            else{
            message="Failed to insert the data";
            }
            request.setAttribute("message",message);
        request.getRequestDispatcher("index.jsp?option=7").forward(request, response);
                }
            catch (Exception e){
                response.sendRedirect("index.jsp?option=7");
            System.out.println(e);
            }
        }   
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
