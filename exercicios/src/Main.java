
public class Main {
	
	public static void main(String[] args) {
		
		Votos v = new Votos();
		
		v.setBrancos(150);
		v.setValidos(800);
		v.setNulos(50);
		
		System.out.printf("Porcentagem dos votos \n");
		System.out.printf("valido: %.1f \n", v.calcularValidos() );
		System.out.printf("brancos: %.1f \n", v.calcularBrancos());
		System.out.printf("nulos: %.1f \n", v.calcularNulos());
		
		System.out.println("\nMutilplos \n");
		
		Multiplos m = new Multiplos();
		
		int r1 = m.calcularMultiplos(10);
		System.out.println("N = 9: " + r1);
		int r2 = m.calcularMultiplos(30);
		System.out.println("N = 30: " + r2);
		
		
		
		
		
	}

}
