import { ItemCollectionMock } from "../../../src/xrm-mock/collection/itemcollection/itemcollection.mock";
import { ProcessMock } from "../../../src/xrm-mock/processflow/process/process.mock";
import { ProcessManagerMock } from "../../../src/xrm-mock/processflow/processmanager/processmanager.mock";
import { StageMock } from "../../../src/xrm-mock/processflow/stage/stage.mock";
import { StepMock } from "../../../src/xrm-mock/processflow/step/step.mock";

describe("Xrm.ProcessFlow.ProcessManager Mock", () => {
    let stage1: StageMock;
    let stage2: StageMock;
    let process1: ProcessMock;
    let process2: ProcessMock;
    let processManager: ProcessManagerMock;

    beforeEach(() => {
        const firstNameStep = new StepMock("First Name", "firstname", false);
        const lastNameStep = new StepMock("Last Name", "lastname", false);
        stage1 = new StageMock("6001", "Start", "active", undefined, [firstNameStep]);
        stage2 = new StageMock("6002", "Finish", "inactive", undefined, [lastNameStep]);

        process1 = new ProcessMock({
            id: "4444",
            name: "Sales Process",
            rendered: true,
            stages: new ItemCollectionMock<StageMock>([stage1, stage2]),
            status: "active",
        });
        process2 = new ProcessMock({
            id: "5555",
            name: "Service Process",
            rendered: false,
            stages: new ItemCollectionMock<StageMock>([stage1, stage2]),
            status: "finished",
        });
        processManager = new ProcessManagerMock([process1, process2]);
    });

    it("should initialise", () => {
        expect(processManager).toBeDefined();
    });

    it("should have Sales Process active", () => {
        expect(processManager.getActiveProcess()).toBe(process1);
        expect(processManager.getActiveProcess()).not.toBe(process2);
    });

    it("should set Service Process active", () => {
        expect(processManager.getActiveProcess()).toBe(process1);
        expect(processManager.getActiveProcess()).not.toBe(process2);

        processManager.setActiveProcess("5555");
        expect(processManager.getActiveProcess()).toBe(process2);
        expect(processManager.getActiveProcess()).not.toBe(process1);
    });

    it("should get instance id of the active process", () => {
        expect(processManager.getInstanceId()).toBe("4444");
    });

    it("should get instance name of the active process", () => {
        expect(processManager.getInstanceName()).toBe("Sales Process");
    });

    it("should get the active stage", () => {
        const activeStage = processManager.getActiveStage();
        expect(activeStage).toBe(stage1);
    });

});
