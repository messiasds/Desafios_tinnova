package com.desafio.tinnova.Veiculo.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desafio.tinnova.Veiculo.model.Veiculo;
import com.desafio.tinnova.Veiculo.repository.VeiculoRepository;

@Service	
public class VeiculoServiceImp implements VeiculoService{
	
	@Autowired
	private VeiculoRepository veiculoRepo;

	@Override
	public Veiculo update(Veiculo veiculo) {
		
		long id = veiculo.getId();
		Veiculo veiculo_aux = veiculoRepo.findById(id).get();
		
		veiculo_aux.setVeiculo(veiculo.getVeiculo());
		veiculo_aux.setMarca(veiculo.getMarca());
		veiculo_aux.setAno(veiculo.getAno());
		veiculo_aux.setDescricao(veiculo.getDescricao());
		veiculo_aux.setVendido(veiculo.isVendido()); 
		veiculo_aux.setUpdated(LocalDate.now()); 
		
		return veiculoRepo.save(veiculo_aux);
	}

	@Override
	public Veiculo getById(long id) {
		return veiculoRepo.findById(id).get();
	}

	@Override
	public List<Veiculo> getAll() {
		return veiculoRepo.findAll();
	}

	@Override
	public void delete(long id) {
		
		Veiculo veiculo;
		veiculo = veiculoRepo.findById(id).get();
		veiculoRepo.delete(veiculo);
		
	}

	@Override
	public Veiculo save(Veiculo veiculo) {
		veiculo.setCreated(LocalDate.now());
		return veiculoRepo.save(veiculo);
	}

	@Override
	public List<Veiculo> findVendidos() {
		return veiculoRepo.findByVendidoIsTrue();
	}

	@Override
	public List<Veiculo> findNaoVendidos() {
		return veiculoRepo.findByVendidoIsFalse();
	}

	@Override
	public List<?> findQuantidadePorDecada() {
		return veiculoRepo.findQtdPorDecada();
	}

	@Override
	public List<?> findQuantidadePorFabricante() {
		return veiculoRepo.findQtdPorMarca();
	}

	@Override
	public List<Veiculo> findRegistradosUltimaSemana() {
		
		int dia_semana_hoje = LocalDate.now().getDayOfWeek().ordinal();
		LocalDate data_inicio_semana = LocalDate.now().minusDays(dia_semana_hoje);
		
		return veiculoRepo.findByCreatedGreaterThanEqual(data_inicio_semana);
	}

}
