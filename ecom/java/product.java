package java;
public class product{

    String name;
    int price;

    // Constructor
    public product(String name, int price) {
        this.name = name;
        this.price = price;
    }

    // Display method
    public void display() {
        System.out.println(name + " - ₹" + price);
    }
}