package com.desafio.tinnova.Veiculo.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.desafio.tinnova.Veiculo.model.StatsDecada;
import com.desafio.tinnova.Veiculo.model.StatsMarca;
import com.desafio.tinnova.Veiculo.model.Veiculo;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
	
	// Pesquisa pela data de criacao maior ou iqual ao paramero data
	
	List<Veiculo> findByCreatedGreaterThanEqual(LocalDate data);
	
	// Lista veiculos vendidos e nao vendidos
	
	List<Veiculo> findByVendidoIsFalse();
	
	List<Veiculo> findByVendidoIsTrue();
	
	
	// Devolve a quantidade de veiculo ordenado por marca
	@Query("SELECT v.marca AS marca, COUNT(v) AS qtd FROM Veiculo as v GROUP BY v.marca")
	List<StatsMarca> findQtdPorMarca();
	
	// Query nativa, devolve a quantidade de cadastros por decada
	@Query(value = " SELECT decada, count(*) AS qtd FROM " +
	               "(SELECT FLOOR(ano/10)*10 AS decada FROM VEICULO) AS aux GROUP BY decada;",
		   nativeQuery = true)
	List<StatsDecada> findQtdPorDecada();
}
		
