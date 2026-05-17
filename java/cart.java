package java;

import java.util.ArrayList;
public class cart {

    ArrayList<product> items = new ArrayList<>();

    // Add product
    public void addProduct(product p) {
        items.add(p);
    }

    // Remove product
    public void removeProduct(int index) {
        items.remove(index);
    }

    // Display cart
    public void showCart() {
        int total = 0;

        for (product p : items) {
            p.display();
            total += p.price;
        }

        System.out.println("Total: ₹" + total);
    }
}