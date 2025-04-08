import { ItemCollectionMock } from "../../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { ProcessMock } from "../../../src/xrm-mock/processflow/process/process.mock";
import { StageMock } from "../../../src/xrm-mock/processflow/stage/stage.mock";
import { StepMock } from "../../../src/xrm-mock/processflow/step/step.mock";

describe("Xrm.ProcessFlow.Process Mock", () => {
    let process: ProcessMock;

    beforeEach(() => {
        const firstNameStep = new StepMock("First Name", "firstname", false);
        const lastNameStep = new StepMock("Last Name", "lastname", false);
        const stage1 = new StageMock("6001", "Start", "active", undefined, [firstNameStep]);
        const stage2 = new StageMock("6002", "Finish", "active", undefined, [lastNameStep]);

        process = new ProcessMock({
            id: "4444",
            name: "Sales Process",
            rendered: true,
            stages: new ItemCollectionMock<Xrm.ProcessFlow.Stage>([stage1, stage2]),
            status: "active",
        });
    });

    it("should instantiate", () => {
        expect(process).toBeDefined();
    });

    it("should have an id of 4444", () => {
        expect(process.getId()).toBe("4444");
    });

    it("should be called Sales Process", () => {
        expect(process.getName()).toBe("Sales Process");
    });

    it("should be rendered", () => {
        expect(process.isRendered()).toBe(true);
    });

    it("should be toggled to not rendered", () => {
        expect(process.isRendered()).toBe(true);
    });

    it("should have 2 stages", () => {
        const stages = process.getStages();
        expect(stages).toBeDefined();
        expect(stages.getLength()).toBe(2);
    });

    it("should return status", () => {
        expect(process.getStatus()).toBe("active");
    });
});
