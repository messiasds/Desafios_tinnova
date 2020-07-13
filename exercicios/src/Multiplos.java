
public class Multiplos {

	 private int n;
	 
	 public static int calcularMultiplos(int n) {
		 
		 int soma = 0 ;
		 for(int x=1; x < n ; x++) {
			 if (x % 3 == 0  ||  x % 5 == 0 ) {
				 soma += x;
			 }
		 }
		 
		 return soma;
	 }
	
}
