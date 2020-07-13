package com.desafio.tinnova.Veiculo.service;

import java.util.List;
import java.util.Map;

import com.desafio.tinnova.Veiculo.model.Veiculo;

public interface VeiculoService {
	
	Veiculo update(Veiculo veiculo);
	Veiculo getById(long id);
	List<Veiculo> getAll();
	void delete(long id);
	Veiculo save(Veiculo veiculo);
	List<Veiculo> findVendidos();
	List<Veiculo> findNaoVendidos();
	List<?> findQuantidadePorDecada();
	List<?> findQuantidadePorFabricante();
	List<Veiculo> findRegistradosUltimaSemana();
	

	
	
	
	
	
	
	

}
