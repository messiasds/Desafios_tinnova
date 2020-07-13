package com.desafio.tinnova.Veiculo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.tinnova.Veiculo.model.StatsMarca;
import com.desafio.tinnova.Veiculo.model.Veiculo;
import com.desafio.tinnova.Veiculo.repository.VeiculoRepository;
import com.desafio.tinnova.Veiculo.service.VeiculoServiceImp;

@RestController
public class VeiculoController {
	
	@Autowired
	private VeiculoServiceImp veiculoServ;
	
	@GetMapping("veiculos/stats")
	public List<?> getEstatiscasDosVeiculos(@RequestParam(value="by") String termo){
		
		if (termo.equals("marca"))
			//return veiculoServ.findQuantidadePorFabricante();
			return veiculoServ.findQuantidadePorFabricante();
		
		
		if (termo.equals("decada"))
			return veiculoServ.findQuantidadePorDecada();
		
		return null;
		 
	};
					
	@GetMapping("/veiculos/find")
	public List<Veiculo> filtrarVeiculos(@RequestParam(value="by") String filtro){
		
		if (filtro.equals("naoVendido"))
			return veiculoServ.findNaoVendidos();

		if (filtro.equals("Vendido"))
		    return veiculoServ.findVendidos();
			
		if (filtro.equals("ultimaSemana"))
		    return veiculoServ.findRegistradosUltimaSemana();
		
		return null;
		
	}
	
	@GetMapping("/veiculos")
	public ResponseEntity<List<Veiculo>> mostrarTodosVeiculo() {
		return new ResponseEntity<List<Veiculo>>(
				veiculoServ.getAll(), HttpStatus.OK);
	}
	
	@GetMapping("/veiculos/{id}")
	public ResponseEntity<Veiculo> obterVeiculo(@PathVariable long id) {
		return new ResponseEntity<Veiculo>(
				veiculoServ.getById(id), HttpStatus.OK);
				
	}
		
	@PostMapping("/veiculos")
	public ResponseEntity<Veiculo> salvarVeiculo(@RequestBody Veiculo veiculo) {
			return new ResponseEntity<Veiculo>(
					veiculoServ.save(veiculo), HttpStatus.CREATED);
		}
	
	@PutMapping("/veiculos/{id}")
	public ResponseEntity<Veiculo> atualizarVeiculo(@RequestBody Veiculo veiculo) {
		
		return new ResponseEntity<Veiculo>(
				veiculoServ.update(veiculo), HttpStatus.CREATED);
	
	}
	
	@DeleteMapping("/veiculos/{id}")
	public ResponseEntity deletarVeiculo(@PathVariable long id) {
		veiculoServ.delete(id);
		return new ResponseEntity(HttpStatus.OK);
	}
	
}
