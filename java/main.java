package java;

public class main {
     public static void main(String[] args) {

        cart cart = new cart();

        product p1 = new product("Shoes", 1000);
        product p2 = new product("T-shirt", 500);

        cart.addProduct(p1);
        cart.addProduct(p2);

        cart.showCart();

        cart.removeProduct(0);

        System.out.println("After removing:");
        cart.showCart();
    }
}