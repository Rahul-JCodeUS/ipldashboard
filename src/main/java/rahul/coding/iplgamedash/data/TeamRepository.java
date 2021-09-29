package rahul.coding.iplgamedash.data;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import rahul.coding.iplgamedash.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);

    Iterable<Team> findAll();
}
