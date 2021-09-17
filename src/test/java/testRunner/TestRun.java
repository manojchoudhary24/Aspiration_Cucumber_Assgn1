package testRunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features=".//Features/Homepage.feature",
		glue="stepDefinitions",
		dryRun=false,
		monochrome=true,
		plugin={"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml_output/cucumber.xml"}
		
		)

public class TestRun {


}
