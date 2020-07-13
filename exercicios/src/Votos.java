
public class Votos {
	
	private int validos;
	private int brancos;
	private int nulos;
	
	
	public float calcularValidos() {
		return (this.validos / getTotalEleitores())*100 ; 
	};
	
	public float calcularBrancos() {
		return (this.brancos / getTotalEleitores())*100 ; 
	};
	
	public float calcularNulos() {
		return (this.nulos / getTotalEleitores())*100 ; 
	};
	
	
	// getters e setters
	
	public float getTotalEleitores() {
		
		return validos + brancos + nulos;
	}

	public int getValidos() {
		return validos;
	}

	public void setValidos(int validos) {
		this.validos = validos;
	}

	public int getBrancos() {
		return brancos;
	}

	public void setBrancos(int brancos) {
		this.brancos = brancos;
	}

	public int getNulos() {
		return nulos;
	}

	public void setNulos(int nulos) {
		this.nulos = nulos;
	}

	

	
	
	

}
